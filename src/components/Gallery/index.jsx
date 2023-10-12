import React, { useState } from 'react';
import './Gallery.css';

// Définition du composant Gallery qui prend une propriété : images (un tableau d'images)
function Gallery({ images }) {
  // Déclaration d'un état local "currentImageIndex" initialisé à 0 à l'aide de useState
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Définition d'une fonction "nextImage" pour passer à l'image suivante
  const nextImage = () => {
     // Incrémente l'index actuel tout en prenant en compte le défilement cyclique
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
// Définition d'une fonction "prevImage" pour passer à l'image précédente
  const prevImage = () => {
    // Décrémente l'index actuel tout en prenant en compte le défilement cyclique
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Condition pour masquer les boutons et la numérotation si le nombre d'images est inférieur ou égal à 1
  const shouldHideControls = images.length <= 1;

  return (
    <div className="gallery">
      {/* Condition pour afficher les contrôles seulement si "shouldHideControls" est faux */}
      {!shouldHideControls && (
        <button className="prev" onClick={prevImage}>&#8249;</button>
      )}
      <img src={images[currentImageIndex]} alt={` ${currentImageIndex + 1}`} />
      {/* Condition pour afficher les contrôles seulement si "shouldHideControls" est faux */}
      {!shouldHideControls && (
        <button className="next" onClick={nextImage}>&#8250;</button>
      )}
       {/* Condition pour afficher le compteur d'image seulement si "shouldHideControls" est faux */}
      {!shouldHideControls && (
        <div className="image-count">
         {/* Affichage du numéro de l'image actuelle et du nombre total d'images */}
          {currentImageIndex + 1}/{images.length}
        </div>
      )}
    </div>
  );
}

export default Gallery;
