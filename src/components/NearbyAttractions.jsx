import { useState, useEffect } from "react";
import "./NearbyAttractions.css";

import attractions from "../data/attractions";
import calculateDistance from "../utils/distance";

function NearbyAttractions() {

    const [location, setLocation] = useState(null);
    const [locationName, setLocationName] = useState("");
    const [nearbyAttractions, setNearbyAttractions] = useState([]);
    const [radius, setRadius] = useState(10);
    const [error, setError] = useState("");

   const getLocation = () => {

    if (!navigator.geolocation) {
        setError("Geolocation is not supported by your browser.");
        return;
    }

    navigator.geolocation.getCurrentPosition(

        async (position) => {

            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            // Save user's coordinates
            setLocation({
                latitude,
                longitude
            });

            setError("");

            // Get location name from latitude and longitude
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

        const nearby = attractions
            .map((attraction) => {

                const distance = calculateDistance(
                    location.latitude,
                    location.longitude,
                    attraction.latitude,
                    attraction.longitude
                );

                return {
                    ...attraction,
                    distance
                };
            })

            .filter((attraction) => attraction.distance <= radius)

            .sort((a, b) => a.distance - b.distance);

        setNearbyAttractions(nearby);

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
                            Nearby Attractions
                        </h2>

                        <p>
                            Explore beautiful places and discover
                            attractions close to your current location.
                        </p>
                    </div>

                </div>


                {/* CONTROLS */}
                <div className="nearby-controls">

                    <button
                        className="location-button"
                        onClick={getLocation}
                    >
                        📍 Find Attractions Near Me
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


                {/* RESULTS */}
                {nearbyAttractions.length > 0 && (

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
                                    key={attraction.id}
                                >

                                    {/* IMAGE */}
                                    <div className="attraction-image">

                                        {attraction.image ? (
                                            <img
                                                src={attraction.image}
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