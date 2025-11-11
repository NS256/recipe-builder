import React from "react";
import { Link, useNavigate } from "react-router-dom";
import '../styles/Welcome.css';

export default function Welcome() {
    const navigate = useNavigate();
    const goToRecipe = () => {
        navigate("/recipe");

    }

    return (<div className="welcome-container">
        <img src="./icon.png" className="welcome-img"/>
        <h1>Welcome to Recipe Builder!</h1>
        <p>Ready to start building?</p>
        <button className="get-cooking" onClick={goToRecipe}>Let's get cooking!</button>
    </div>);
}