import React from "react";
import '../styles/Header.css';

export default function Header() {

    return(
        <header>
            <nav className="navbar navbar-light bg-custom">
                <a className="navbar-brand" href="/recipe">
                    <img src="/icon.png" className="d-inline-block align-top" alt="Recipe Builder icon" />
                    Recipe Builder
                </a>
            </nav>
        </header>
    );
}