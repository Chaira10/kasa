import React from "react";
import './RatingStars.css';

// Définition du composant RatingStars qui prend une propriété : rating
function RatingStars({ rating }) {
   // Conversion de la valeur de notation en nombre entier
  const ratingValue = parseInt(rating);

   // Création d'un tableau de 5 étoiles
  const stars = Array.from({ length: 5 }, (_, index) => {
    // Vérifie si l'index actuel est inférieur à la valeur de notation
    // Déterminer si l'étoile doit être colorée en fonction du rating
    const isColored = index < ratingValue;
    // Détermine la classe CSS à appliquer en fonction de l'état de coloration
    const starClass = isColored ? "star-colored" : "star";
// Crée un élément étoile avec la classe appropriée
    return <span key={index} className={starClass}>&#9733;</span>;
  });
// Affiche les étoiles dans une div avec la classe "rating-stars"
  return <div className="rating-stars">{stars}</div>;
}

export default RatingStars;