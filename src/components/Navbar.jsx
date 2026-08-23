import "./Navbar.css";
import logo from "../assets/ptdc_logo.png";
import { Link, NavLink } from "react-router-dom";


function Navbar() {
    return (
        <header className="navbar">

            {/* Top information bar */}
            <div className="top-bar">
                <div className="top-bar-content">

                    <div className="top-item">
                        <span className="top-icon">♟</span>
                        <span>
                            National Tourism E-portal{" "}
                            <strong>Salam Pakistan</strong>
                        </span>
                    </div>

                    <div className="divider"></div>

                    <div className="top-item">
                        <span className="top-icon">☎</span>
                        <span>+92-51-9204027</span>
                    </div>

                    <div className="divider"></div>

                    <div className="top-item">
                        <span className="top-icon">◉</span>
                        <span>24/7 Tourism Helpline: 1422</span>
                    </div>

                    <div className="divider"></div>

                    <div className="top-item">
                        <span className="top-icon">✉</span>
                        <span>info@tourism.gov.pk</span>
                    </div>

                </div>
            </div>


            {/* Main navigation */}
            <div className="main-nav">

                <div className="main-nav-content">

                    {/* Logo */}
                    <Link to="/" className="logo-container">
                        <img
                            src={logo}
                            alt="Pakistan Tourism Development Corporation"
                            className="ptdc-logo"
                        />
                    </Link>


                    {/* Navigation links */}
                    <nav className="nav-links">

                        <NavLink to="/" end>
                            Home
                        </NavLink>
                         <NavLink to="/nearby-attractions">
                            Nearby Attractions
                        </NavLink>

                        <NavLink to="/attractions">
                            All Attractions
                        </NavLink>

                        <NavLink to="/about">
                            About
                        </NavLink>

                        

                        <NavLink to="/publications">
                            Publications
                        </NavLink>


                        <NavLink to="/public-notices">
                            Public Notices
                        </NavLink>

                        <NavLink to="https://visa.nadra.gov.pk/tourist-visa/">
                            Visa
                        </NavLink>

                    </nav>

                </div>

            </div>

        </header>
    );
}

export default Navbar;