import { useState } from "react";
import "./Peaks.css";

import k2Image from "../assets/k2.jpg";
import nangaParbatImage from "../assets/nanga-parbat.jpg";
import broadPeakImage from "../assets/broad-peak.jpg";
import rakaposhiImage from "../assets/rakaposhi.jpg";
import tirichMirImage from "../assets/tirich-mir.jpg";

const peaks = [
    {
        id: 1,
        name: "K2",
        height: "8,611 m",
        image: k2Image,
        description:
            "K2 is the second-highest mountain in the world, standing at 8,611 metres above sea level. Located in Gilgit-Baltistan, it is known for its dramatic beauty and challenging climbing conditions."
    },

    {
        id: 2,
        name: "Nanga Parbat",
        height: "8,126 m",
        image: nangaParbatImage,
        description:
            "Nanga Parbat is the ninth-highest mountain in the world. Located in Gilgit-Baltistan, it is famous for its enormous mountain face and spectacular surrounding landscapes."
    },

    {
        id: 3,
        name: "Broad Peak",
        height: "8,051 m",
        image: broadPeakImage,
        description:
            "Broad Peak is one of the world's fourteen mountains higher than 8,000 metres. It lies in the Karakoram range near K2 and offers spectacular views of the surrounding mountains."
    },

    {
        id: 4,
        name: "Rakaposhi",
        height: "7,788 m",
        image: rakaposhiImage,
        description:
            "Rakaposhi is one of the most famous peaks of Pakistan. Rising dramatically above the Hunza Valley, the mountain is renowned for its impressive height and breathtaking scenery."
    },

    {
        id: 5,
        name: "Tirich Mir",
        height: "7,708 m",
        image: tirichMirImage,
        description:
            "Tirich Mir is the highest mountain in the Hindu Kush range. It rises above the Chitral region of Khyber Pakhtunkhwa and is known for its magnificent snow-covered summit."
    }
];


function Peaks() {

    const [openPeak, setOpenPeak] = useState(null);

    const handlePeakClick = (id) => {

        if (openPeak === id) {
            setOpenPeak(null);
        } else {
            setOpenPeak(id);
        }

    };


    return (
        <section className="peaks-section">

            <div className="peaks-container">

                <div className="peaks-heading">
                    <p className="peaks-subtitle">
                        Discover Pakistan
                    </p>

                    <h2>
                        Famous Peaks of Pakistan
                    </h2>

                    <p className="peaks-intro">
                        Explore some of the most spectacular mountains
                        and peaks found across Pakistan.
                    </p>
                </div>


                <div className="peaks-list">

                    {peaks.map((peak) => (

                        <div
                            className={`peak-item ${
                                openPeak === peak.id ? "open" : ""
                            }`}
                            key={peak.id}
                        >

                            {/* Peak button */}

                            <button
                                className="peak-button"
                                onClick={() =>
                                    handlePeakClick(peak.id)
                                }
                                aria-expanded={
                                    openPeak === peak.id
                                }
                            >

                                <span className="peak-name">
                                    {peak.name}
                                </span>

                                <span className="peak-height">
                                    {peak.height}
                                </span>

                                <span className="peak-arrow">
                                    {openPeak === peak.id
                                        ? "−"
                                        : "+"}
                                </span>

                            </button>


                            {/* Expanded content */}

                            {openPeak === peak.id && (

                                <div className="peak-content">

                                    <div className="peak-image-container">

                                        <img
                                            src={peak.image}
                                            alt={peak.name}
                                            className="peak-image"
                                        />

                                    </div>


                                    <div className="peak-description">

                                        <h3>
                                            {peak.name}
                                        </h3>

                                        <p>
                                            {peak.description}
                                        </p>

                                    </div>

                                </div>

                            )}

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default Peaks;