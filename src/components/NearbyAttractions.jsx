import { useState, useEffect } from "react";
import "./NearbyAttractions.css";
import attractionImages from "../utils/attractionImages";


function NearbyAttractions() {

    const [location, setLocation] = useState(null);
    const [locationName, setLocationName] = useState("");
    const [nearbyAttractions, setNearbyAttractions] = useState([]);
    const [radius, setRadius] = useState(10);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

  const getLocation = () => {

    setLoading(true);
    setError("");

    if (!navigator.geolocation) {
        setError("Geolocation is not supported by your browser.");
        setLoading(false);
        return;
    }

    navigator.geolocation.getCurrentPosition(

        async (position) => {

            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            setLocation({
                latitude,
                longitude
            });

            setError("");

            // Get location name
            try {

                const response = await fetch(
                    `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
                );

                const data = await response.json();

                if (data.address) {

                    const city =
                        data.address.city ||
                        data.address.town ||
                        data.address.village ||
                        data.address.municipality;

                    const country = data.address.country;

                    if (city && country) {
                        setLocationName(`${city}, ${country}`);
                    }
                    else if (city) {
                        setLocationName(city);
                    }
                    else {
                        setLocationName(data.display_name);
                    }
                }

            } catch (error) {

                console.error(
                    "Error getting location name:",
                    error
                );

                setLocationName("");
            }

        },

        (error) => {

            setLoading(false);

            if (error.code === error.PERMISSION_DENIED) {

                setError(
                    "Location permission was denied. Please allow location access."
                );

            }
            else if (error.code === error.POSITION_UNAVAILABLE) {

                setError(
                    "Your location is currently unavailable."
                );

            }
            else if (error.code === error.TIMEOUT) {

                setError(
                    "Getting your location took too long. Please try again."
                );

            }
            else {

                setError(
                    "Unable to access your location."
                );

            }
        }
    );
};


    useEffect(() => {

    if (!location) {
        return;
    }

    const fetchNearbyAttractions = async () => {

        
        setError("");

        try {

            const response = await fetch(
                `http://localhost:5000/api/attractions/nearby?lat=${location.latitude}&lng=${location.longitude}&radius=${radius}`
            );

            if (!response.ok) {
                throw new Error("Failed to fetch nearby attractions");
            }

            const data = await response.json();

            setNearbyAttractions(data);

        } catch (error) {

            console.error("Error fetching nearby attractions:", error);

            setError("Unable to load nearby attractions.");

        } finally {

            setLoading(false);

        }
    };

    fetchNearbyAttractions();

}, [location, radius]);

    const openDirections = (attraction) => {

    if (!location) {
        setError("Please detect your location first.");
        return;
    }

    const url =
        `https://www.google.com/maps/dir/?api=1` +
        `&origin=${location.latitude},${location.longitude}` +
        `&destination=${attraction.latitude},${attraction.longitude}` +
        `&travelmode=driving`;

    window.open(url, "_blank");
};

const getAttractionImage = (imageName) => {

    if (!imageName) {
        return null;
    }

    const imagePath = `../assets/${imageName}`;

    return attractionImages[imagePath];
};

    return (
        <section className="nearby-section">

            <div className="nearby-container">

                {/* HEADER */}
                <div className="nearby-header">

                    <div>
                        <span className="nearby-small-title">
                            DISCOVER NEAR YOU
                        </span>

                        <h2>
                            Nearby Tourist Spots
                        </h2>

                        <p>
                            Explore beautiful places and discover
                            spots close to your current location.
                        </p>
                    </div>

                </div>


                {/* CONTROLS */}
                <div className="nearby-controls">

                    <button
                        className="location-button"
                        onClick={getLocation}
                    >
                        📍 Find Beautiful Spots Near Me
                    </button>


                    <div className="radius-control">

                        <label htmlFor="radius">
                            Search within
                        </label>

                        <select
                            id="radius"
                            value={radius}
                            onChange={(e) =>
                                setRadius(Number(e.target.value))
                            }
                        >
                            <option value={5}>5 km</option>
                            <option value={10}>10 km</option>
                            <option value={25}>25 km</option>
                            <option value={50}>50 km</option>
                            <option value={100}>100 km</option>
                        </select>

                    </div>

                </div>


                {/* LOCATION */}
                {location && (
    <div className="location-info">

        <span>📍</span>

        <div>

            <strong>
                {locationName
                    ? `You are in ${locationName}`
                    : "Location detected"}
            </strong>

            <p>
                {location.latitude.toFixed(4)},
                {" "}
                {location.longitude.toFixed(4)}
            </p>

        </div>

    </div>
)}


                {/* ERROR */}
                {error && (
                    <div className="location-error">
                        {error}
                    </div>
                )}


                {loading && (
    <div className="nearby-loader">

        <div className="loader-spinner"></div>

        <h3>Finding nearby attractions...</h3>

        <p>
            Please wait while we find attractions near your location.
        </p>

    </div>
)}


                {/* RESULTS */}
                {!loading && nearbyAttractions.length > 0 && (

                    <div className="nearby-results">

                        <div className="results-heading">

                            <h3>
                                Attractions Near You
                            </h3>

                            <span>
                                {nearbyAttractions.length} places found
                            </span>

                        </div>


                        <div className="attractions-grid">

                            {nearbyAttractions.map((attraction) => (

                                <article
                                    className="attraction-card"
                                    key={attraction._id}
                                >

                                    {/* IMAGE */}
                                    <div className="attraction-image">

                                        {attraction.image ? (
                                            <img
                                            src={getAttractionImage(attraction.image)}
                                            alt={attraction.name}
                                            />
                                        ) : (
                                            <div className="image-placeholder">
                                                🏔️
                                            </div>
                                        )}

                                        <span className="distance-badge">
                                            {attraction.distance.toFixed(1)} km
                                        </span>

                                    </div>


                                    {/* CONTENT */}
                                    <div className="attraction-content">

                                        <span className="attraction-type">
                                            {attraction.type}
                                        </span>

                                        <h3>
                                            {attraction.name}
                                        </h3>

                                        <p className="attraction-region">
                                            📍 {attraction.region}
                                        </p>

                                        <p className="attraction-description">
                                            {attraction.description}
                                        </p>


                                       <button className="details-button" 
                                       onClick={() => openDirections(attraction)}
                                       > Get Directions <span>→</span>
                                       </button>

                                    </div>

                                </article>

                            ))}

                        </div>

                    </div>

                )}


                {/* NO RESULTS */}
                {location &&
                    !loading &&
                    nearbyAttractions.length === 0 && (
                        <div className="no-results">

                            <div className="no-results-icon">
                                🔎
                            </div>

                            <h3>
                                No attractions found
                            </h3>

                            <p>
                                No attractions were found within
                                {` ${radius} km`} of your location.
                            </p>

                            <button
                                onClick={() => setRadius(50)}
                            >
                                Search within 50 km
                            </button>

                        </div>
                    )}

            </div>

        </section>
    );
}

export default NearbyAttractions;