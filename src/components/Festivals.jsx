import { useState } from "react";
import "./Festivals.css";

import desertSafariImage from "../assets/safari rally.jpg";
import mangoFestivalImage from "../assets/mangoes.jpg";
import sibiMelaImage from "../assets/sibi1.jpg";
import shandurPoloImage from "../assets/shindur1.jpg";

const festivals = [
    {
        id: 1,
        name: "Desert Safari Jeep Rally",
        description:
            "Experience the excitement of a thrilling desert jeep rally surrounded by the spectacular landscapes and cultural heritage of Pakistan.",
        image: desertSafariImage,
    },

    {
        id: 2,
        name: "Mango Festival",
        description:
            "Pakistan is famous for its delicious mangoes. The Mango Festival celebrates the country's rich mango culture, bringing together farmers, visitors and mango lovers.",
        image: mangoFestivalImage,
    },

    {
        id: 3,
        name: "Sibi Mela",
        description:
            "Sibi Mela is one of the traditional festivals of Balochistan. The event showcases livestock, traditional culture, local crafts and entertainment.",
        image: sibiMelaImage,
    },

    {
        id: 4,
        name: "Shandur Polo Festival",
        description:
            "Passion for Polo reaches its height at Shandur, home to one of the world's highest polo grounds. Every year, visitors gather at Shandur Pass to experience the traditional polo tournament along with folk music, dance and cultural activities.",
        image: shandurPoloImage,
    },
];


function Festivals() {

    // Stores the currently selected festival
    const [selectedFestival, setSelectedFestival] = useState(festivals[3]);


    return (
        <section className="festivals-section">

            {/* LEFT SIDE */}
            <div className="festivals-content">

                <h2 className="festivals-title">
                    Festivals
                </h2>


                {/* Festival navigation */}
                <div className="festival-tabs">

                    {festivals.map((festival) => (

                        <button
                            key={festival.id}
                            className={`festival-tab ${
                                selectedFestival.id === festival.id
                                    ? "active"
                                    : ""
                            }`}
                            onClick={() =>
                                setSelectedFestival(festival)
                            }
                        >
                            {festival.name}
                        </button>

                    ))}

                </div>


                {/* Selected festival information */}
                <div className="festival-info">

                    <h3>
                        {selectedFestival.id}.{" "}
                        {selectedFestival.name}
                    </h3>

                    <p>
                        {selectedFestival.description}
                    </p>

                </div>

            </div>


            {/* RIGHT SIDE IMAGE */}
            <div className="festival-image-container">

                <img
                    src={selectedFestival.image}
                    alt={selectedFestival.name}
                    className="festival-image"
                />

            </div>

        </section>
    );
}

export default Festivals;