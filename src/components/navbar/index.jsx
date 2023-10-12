import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
        <div className="nav-logo">
        {/* Utilisation de NavLink pour créer un lien vers la page d'accueil */}
        <NavLink to="/" className="nav-logo-link">
        <span className="text-logo-k">K</span>
            <img src="/images/Group.png" alt="logo" className="img-logo" />
            <span className="text-logo">sa</span>
            </NavLink>
        </div>
        <div className="nav-link">
        {/* Utilisation de NavLink pour créer un lien vers la page d'accueil */}
        <NavLink to="/">
            <p className="link-accueil">Accueil</p>
        </NavLink>
        {/* Utilisation de NavLink pour créer un lien vers la page "À propos" */}
        <NavLink to="/about">
        <p className="link-about">A propos</p>
        </NavLink>
        </div>
        </nav>
    );
}

export default Navbar;
