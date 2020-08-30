import React from 'react';
import { Link, useLocation } from "react-router-dom";

function Navbar() {
    const location = useLocation();
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    {/* <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                        Google Books
                    </Link> */}
                    <Link
                        to="/"
                        className={location.pathname === "/" ? "nav-link active" : "nav-link"}
                    >
                        Search
                    </Link>
                    <Link
                        to="/saved"
                        className={location.pathname === "/saved" ? "nav-link active" : "nav-link"}
                    >
                        Saved
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;