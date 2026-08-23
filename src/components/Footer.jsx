import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">

            {/* Main Footer */}
            <div className="footer-main">

                {/* About */}
                <div className="footer-column footer-about">

                    <h2>Pakistan Tourism</h2>

                    <p>
                        Discover the beauty, culture, heritage and
                        natural wonders of Pakistan.
                    </p>

                    <p>
                        Explore destinations, festivals, music,
                        heritage and unforgettable experiences
                        across the country.
                    </p>

                </div>


                {/* Quick Links */}
                <div className="footer-column">

                    <h3>Quick Links</h3>

                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/destinations">Destinations</a>
                    <a href="/heritage">Heritage</a>
                    <a href="/events">Events</a>

                </div>


                {/* Explore */}
                <div className="footer-column">

                    <h3>Explore</h3>

                    <a href="/provinces">Provinces</a>
                    <a href="/peaks">Famous Peaks</a>
                    <a href="/festivals">Festivals</a>
                    <a href="/music">Music</a>
                    <a href="/gallery">Media Gallery</a>

                </div>


                {/* Useful Links */}
                <div className="footer-column">

                    <h3>Useful Links</h3>

                    <a href="/notices">Public Notices</a>
                    <a href="/visa">Visa Information</a>
                    <a href="/publications">Publications</a>
                    <a href="/privacy">Privacy Policy</a>
                    <a href="/contact">Contact Us</a>

                </div>


                {/* Contact */}
                <div className="footer-column">

                    <h3>Contact Us</h3>

                    <p>
                        Islamabad, Pakistan
                    </p>

                    <p>
                        +92-51-0000000
                    </p>

                    <p>
                        info@tourism.gov.pk
                    </p>

                    <p>
                        Tourism Helpline: 1422
                    </p>

                </div>

            </div>


            {/* Bottom Footer */}
            <div className="footer-bottom">

                <p>
                    © 2026 Government of Pakistan. All Rights Reserved.
                </p>

                <div className="footer-bottom-links">

                    <a href="/privacy">
                        Privacy Policy
                    </a>

                    <span>|</span>

                    <a href="/terms">
                        Terms & Conditions
                    </a>

                </div>

            </div>

        </footer>
    );
}

export default Footer;