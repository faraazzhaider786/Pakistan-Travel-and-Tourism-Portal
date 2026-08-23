import { useState } from "react";
import "./Musics.css";

import folkMusicImage from "../assets/folk_m.jpg";
import regionalMusicImage from "../assets/regional_m.jpg";
import sufismImage from "../assets/sufi_m.jpg";
import popularMusicImage from "../assets/pop_m.jpg";
import { Link } from "react-router-dom";


const musicCategories = [
    {
        id: 1,
        name: "Folk Music",
        title: "Folk / Classical Music",
        description:
            "Pakistan has a rich tradition of folk and classical music. Different regions have developed their own distinctive musical styles, instruments and traditions that reflect the country's diverse cultural heritage.",
        image: folkMusicImage,
        
    },

    {
        id: 2,
        name: "Regional Music",
        title: "Regional Music",
        description:
            "The diverse regions of Pakistan have their own unique musical traditions. From Punjab and Sindh to Balochistan, Khyber Pakhtunkhwa and Gilgit-Baltistan, regional music reflects the history and culture of local communities.",
        image: regionalMusicImage,
        
    },

    {
        id: 3,
        name: "Sufism",
        title: "Sufi Music",
        description:
            "Sufi music is deeply connected with the spiritual traditions of Pakistan. Poets and musicians have used music to express devotion, love and spiritual awareness for centuries.",
        image: sufismImage,
       
    },

    {
        id: 4,
        name: "Popular Music",
        title: "Popular Music",
        description:
            "Pakistan's modern music scene combines traditional influences with contemporary sounds. Popular music continues to evolve through new artists, genres and creative expressions.",
        image: popularMusicImage,
       
    },
];


function Music() {

    const [selectedMusic, setSelectedMusic] = useState(
        musicCategories[0]
    );


    return (
        <section className="music-section">

            {/* LEFT IMAGE */}

            <div className="music-image-container">

                <img
                    src={selectedMusic.image}
                    alt={selectedMusic.title}
                    className="music-image"
                />

            </div>


            {/* RIGHT CONTENT */}

            <div className="music-content">

                <h2 className="music-title">
                    Music
                </h2>


                {/* MUSIC TABS */}

                <div className="music-tabs">

                    {musicCategories.map((music) => (

                        <button
                            key={music.id}
                            className={`music-tab ${
                                selectedMusic.id === music.id
                                    ? "active"
                                    : ""
                            }`}
                            onClick={() =>
                                setSelectedMusic(music)
                            }
                        >
                            {music.name}
                        </button>

                    ))}

                </div>


                {/* SELECTED MUSIC */}

                <div className="music-info">

                    <h3>
                        {selectedMusic.id}.{" "}
                        {selectedMusic.title}
                    </h3>

                    <p>
                        {selectedMusic.description}
                    </p>
                    
                     <Link to="/music-icons" className="music-read-more">
                       Read More &gt;&gt;
                    </Link>

                    {/* <a
                        href={selectedMusic.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="music-read-more"
                    >
                        Read More &gt;&gt;
                    </a> */}

                </div>

            </div>

        </section>
    );
}

export default Music;