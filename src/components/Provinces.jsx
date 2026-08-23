import "./Provinces.css";
import isbImage from "../assets/isb.jpeg";
import punjabImage from "../assets/punjab.jpg";
import sindhImage from "../assets/sindh.jpg";
import kpkImage from "../assets/kpk.jpg";
import balochistanImage from "../assets/balochistan.jpg";
import kashmirImage from "../assets/kashmir.jpg";
import gilgitImage from "../assets/gilgit-baltistan.jpg";


function ProvinceCard({
    name,
    description,
    image,
    url,
    className = ""
}) {
    return (
        <article
            className={`province-card ${className}`}
            style={{ backgroundImage: `url(${image})` }}
        >
            <div className="province-overlay"></div>

            <div className="province-content">
                <h2>{name}</h2>

                <p>{description}</p>

                <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="read-more"
                >
                    Read More &raquo;
                </a>
            </div>
        </article>
    );
}


function Provinces() {
    return (
        <section className="provinces-section">

            <div className="provinces-container">

                {/* Islamabad - 100% */}
                <ProvinceCard
                    name="Islamabad"
                    description="Islamabad is the beautiful capital city of Pakistan, surrounded by mountains and rich natural beauty."
                    image={isbImage}
                    url="https://salampakistan.gov.pk/where-to-go/locations/islamabad"
                    className="islamabad"
                />

                {/* Punjab 40% + Sindh 60% */}
                <div className="province-row">

                    <ProvinceCard
                        name="Punjab"
                        description="Punjab is Pakistan's most populous province and is famous for its rich culture, history and heritage."
                        image={punjabImage}
                        url="https://tdcp.gop.pk/"
                        className="punjab"
                    />

                    <ProvinceCard
                        name="Sindh"
                        description="Sindh is located in the southeast of Pakistan and is home to ancient civilizations, cultural heritage and beautiful landscapes."
                        image={sindhImage}
                        url="https://www.stdc.gos.pk/"
                        className="sindh"
                    />

                </div>

                {/* KP 60% + Balochistan 40% */}
                <div className="province-row">

                    <ProvinceCard
                        name="Khyber Pakhtunkhwa"
                        description="Khyber Pakhtunkhwa is known for its magnificent mountains, valleys, history and natural beauty."
                        image={kpkImage}
                        url="https://kptourism.com/"
                        className="kp"
                    />

                    <ProvinceCard
                        name="Balochistan"
                        description="Balochistan is Pakistan's largest province by area and is known for its dramatic landscapes, coastlines and cultural heritage."
                        image={balochistanImage}
                        url="https://balochistan.gov.pk/"
                        className="balochistan"
                    />

                </div>

                {/* Azad Kashmir 40% + Gilgit-Baltistan 60% */}
                <div className="province-row">

                    <ProvinceCard
                        name="Azad Kashmir"
                        description="Azad Kashmir is famous for its lush valleys, rivers, mountains and breathtaking natural scenery."
                        image={kashmirImage}
                        url="https://ajk.gov.pk/"
                        className="azad-kashmir"
                    />

                    <ProvinceCard
                        name="Gilgit-Baltistan"
                        description="Gilgit-Baltistan is home to some of the world's highest mountains, beautiful valleys and spectacular landscapes."
                        image={gilgitImage}
                        url="https://visitgilgitbaltistan.gov.pk/"
                        className="gilgit-baltistan"
                    />

                </div>

            </div>

        </section>
    );
}

export default Provinces;