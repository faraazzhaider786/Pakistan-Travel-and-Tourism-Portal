import React, { useEffect, useState } from 'react';
import './Publications.css';

const Publications = () => {

    const [publications, setPublications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        const fetchPublications = async () => {

            try {

                const response = await fetch(
                    "http://localhost:5000/api/publications"
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch publications");
                }

                const data = await response.json();

                setPublications(data);

            } catch (error) {

                console.error("Error fetching publications:", error);

                setError("Unable to load publications.");

            } finally {

                setLoading(false);

            }
        };

        fetchPublications();

    }, []);


    return (
        <div className="publications-section">

            <h2 className="publications-header">
                Publications
            </h2>


            {/* LOADING */}

            {loading && (
                <p>Loading publications...</p>
            )}


            {/* ERROR */}

            {error && (
                <p>{error}</p>
            )}


            {/* PUBLICATIONS */}

            {!loading && !error && (

                <div className="publications-grid">

                    {publications.map((pub) => (

                        <div
                            key={pub._id}
                            className="publication-card"
                            style={{
                                backgroundImage: `url(${pub.image})`,
                                backgroundColor: pub.fallbackColor
                            }}
                        >

                            {/* Overlay */}

                            <div className="card-overlay"></div>


                            {/* Content */}

                            <div className="card-content">

                                <h3 className="card-title">
                                    {pub.title}
                                </h3>


                                <a
                                    href={pub.pdfLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="read-me-btn"
                                >
                                    Read Me {'> >'}
                                </a>

                            </div>

                        </div>

                    ))}

                </div>

            )}

        </div>
    );
};

export default Publications;