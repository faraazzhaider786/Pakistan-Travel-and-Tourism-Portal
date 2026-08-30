import "./Hero.css";
import heroImage from "../assets/pakistan-hero.jpg";
import { Link } from "react-router-dom";

function Hero() {
    return (
        <section className="hero">

            <img
                src={heroImage}
                alt="Beautiful landscape of Pakistan"
                className="hero-image"
            />

            <div className="hero-overlay"></div>

            <div className="hero-content">

                <h1>
                    Welcome to Pakistan
                </h1>

                <div className="hero-buttons">
                    <Link
                    to="/nearby-attractions"
                    className="hero-nearby-button"
                >
                    📍Nearby Tourist Spots
                </Link>
                <Link
                    to="/attractions"
                    className="hero-nearby-button"
                >
                    Explore Pakistan
                </Link>

            </div>    

            </div>

        </section>
    );
}

export default Hero;