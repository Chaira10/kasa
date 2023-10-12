import React, { useState } from "react";
import "./Collapse.css";

// Définition du composant Collapse qui prend deux propriétés : title et content
function Collapse({ title, content }) {
   // Déclaration d'un état local "isOpen" initialisé à false à l'aide de useState
    const [isOpen, setIsOpen] = useState(false);
  // Définition d'une fonction "toggleCollapse" pour basculer l'état "isOpen"
    const toggleCollapse = () => {
      // Inversion de la valeur actuelle de "isOpen" (true devient false et vice versa)
      setIsOpen(!isOpen);
    };
  
    return (
      /* Div principale avec des classes conditionnelles basées sur l'état "isOpen" */
      <div className={`collapse-container ${isOpen ? "open" : ""}`}>
      {/* Div pour le bouton de bascule, onClick appelle la fonction "toggleCollapse" lors du clic */}
        <div className="collapse-toggle" onClick={toggleCollapse}>
        {/* Affichage du titre passé en tant que propriété */}
          <span>{title}</span>
           {/* Affichage d'une flèche vers le haut ou vers le bas en fonction de l'état "isOpen" */}
          <span className={`chevron ${isOpen ? "up" : "down"}`}>&#8250;</span>
        </div>
        {/* Affichage du contenu passé en tant que propriété */}
        <div className="collapse-content">{content}</div>
      </div>
    );
  }
  
  export default Collapse;
