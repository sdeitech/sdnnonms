import React from "react";
import { Link } from "react-router-dom";
import "../styles/NotFound.css";

function NotFound() {
    return (
        <div className="not-found-container">
            <div className="not-found-content">
                <h2>404</h2>
                <h3>Page Not Found!</h3>
                <p>Oops! The page you were looking for doesn`&apos;`t exist.</p>
                <Link to="/" className="btn">
                    Back to Home
                </Link>
            </div>
        </div>
    );
}

export default NotFound;
