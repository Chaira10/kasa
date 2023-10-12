import React from 'react';
import './Banner.css';

// Définition du composant Banner qui prend deux propriétés : showText et imageUrl
function Banner({ showText, imageUrl  }) {
  return (
    <div className="banner">
      <div className="banner-img-container">
        <img src={imageUrl} alt="paysage" className="banner-img"/>
        {/* Une condition qui affiche du texte seulement si showText est vrai */}
        {showText && ( 
          <div className="banner-txt-container">
            <p className="banner-txt">Chez vous, partout et ailleurs</p>
          </div>
        )}
    </div>
    </div>
  )
}

export default Banner
