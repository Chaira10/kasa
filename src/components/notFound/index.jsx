import React from 'react';
import { Link } from "react-router-dom";
import './NotFound.css';

function NotFound() {
  return (
    <div className="error-container">
    <p className="not-found-404">404</p>
    <p className="error-msg">Oups! La page que 
vous demandez n'existe pas.</p>

<Link to="/" className="return-link">Retourner sur la page d’accueil</Link>
    </div>
  )
}

export default NotFound
