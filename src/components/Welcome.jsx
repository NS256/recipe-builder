import React from "react";
import { Link } from "react-router-dom";
import '../styles/Welcome.css';

export default function Welcome() {
    return (<div className="welcome-container">
        <img src="../../public/icon.png" className="welcome-img"/>
        <h1>Welcome to Recipe Builder!</h1>
        <p>Ready to start building?</p>
        <Link to="/recipe">
            <button className="get-cooking">Let's get cooking!</button>
        </Link>
    </div>);
}