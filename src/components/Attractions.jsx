import { useState } from "react";
import { Link } from "react-router-dom";
import attractions from "../data/attractions";
import "./Attractions.css";

function Attractions() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedProvince, setSelectedProvince] = useState("All");
    const [selectedType, setSelectedType] = useState("All");
    const filteredAttractions = attractions.filter((attraction) => {

    const search = searchTerm.toLowerCase();

    const matchesSearch =
        attraction.name.toLowerCase().includes(search) ||
        attraction.region.toLowerCase().includes(search) ||
        attraction.type.toLowerCase().includes(search) ||
        attraction.description.toLowerCase().includes(search);

    const matchesProvince =
        selectedProvince === "All" ||
        attraction.region === selectedProvince;

    const matchesType =
        selectedType === "All" ||
        attraction.type === selectedType;

    return (
        matchesSearch &&
        matchesProvince &&
        matchesType
    );
});
    return (
        <section className="attractions-page">

            <div className="attractions-container">

                

                {/* PAGE HEADER */}

                <div className="attractions-header">

                    <span className="attractions-small-title">
                        DISCOVER PAKISTAN
                    </span>

                    <h1>
                        Explore Attractions
                    </h1>

                    <p>
                        Discover the beautiful landmarks, heritage sites,
                        mountains, lakes and other attractions of Pakistan.
                    </p>

                </div>

                <div className="attractions-search">

                    <span>🔍</span>

                     <input
                         type="text"
                        placeholder="Search attractions, places, heritage..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />

                </div>

                <div className="attractions-filters">

    {/* Province */}

    <div className="filter-group">

        <label htmlFor="province">
            Province
        </label>

        <select
            id="province"
            value={selectedProvince}
            onChange={(e) => setSelectedProvince(e.target.value)}
        >
            <option value="All">
                All Provinces
            </option>

            <option value="Islamabad">
                Islamabad
            </option>

            <option value="Punjab">
                Punjab
            </option>

            <option value="Sindh">
                Sindh
            </option>

            <option value="Khyber Pakhtunkhwa">
                Khyber Pakhtunkhwa
            </option>

            <option value="Balochistan">
                Balochistan
            </option>

            <option value="Gilgit-Baltistan">
                Gilgit-Baltistan
            </option>

            <option value="Azad Kashmir">
                Azad Kashmir
            </option>

        </select>

    </div>


    {/* Attraction Type */}

    <div className="filter-group">

        <label htmlFor="type">
            Attraction Type
        </label>

        <select
            id="type"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
        >

            <option value="All">
                All Types
            </option>

            <option value="Landmark">
                Landmark
            </option>

            <option value="Monument">
                Monument
            </option>

            <option value="Viewpoint">
                Viewpoint
            </option>

            <option value="Heritage">
                Heritage
            </option>

            <option value="Historical">
                Historical
            </option>

            <option value="Nature">
                Nature
            </option>

            <option value="Archaeological">
                Archaeological
            </option>

            <option value="Lake">
                Lake
            </option>

            <option value="National Park">
                National Park
            </option>

        </select>

    </div>

</div>

                {/* RESULTS */}

                <div className="attractions-results-header">

                    <h2>
                        All Attractions
                    </h2>

                    <span>
                        {filteredAttractions.length} attractions
                    </span>

                </div>


                {/* CARDS */}

                <div className="attractions-grid">

                    {filteredAttractions.map((attraction) => (

                        <article
                            className="explore-card"
                            key={attraction.id}
                        >

                            {/* IMAGE */}

                            <div className="explore-card-image">

                                {attraction.image ? (

                                    <img
                                        src={attraction.image}
                                        alt={attraction.name}
                                    />

                                ) : (

                                    <div className="explore-image-placeholder">
                                        🏔️
                                    </div>

                                )}

                            </div>


                            {/* CONTENT */}

                            <div className="explore-card-content">

                                <span className="explore-card-type">
                                    {attraction.type}
                                </span>

                                <h3>
                                    {attraction.name}
                                </h3>

                                <p className="explore-card-region">
                                    📍 {attraction.region}
                                </p>

                                <p className="explore-card-description">
                                    {attraction.description}
                                </p>

                                <Link
                                    to={`/attractions/${attraction.id}`}
                                    className="explore-card-button"
                                >
                                    View Details
                                    <span>→</span>
                                </Link>

                            </div>

                        </article>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default Attractions;