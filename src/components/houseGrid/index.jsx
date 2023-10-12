import React, { useState, useEffect } from 'react';
import './HouseGrid.css';
import { Link } from 'react-router-dom';
import { getApartments } from '../../service/api';

function HouseGrid() {
  // Déclaration d'un état local "houseData" initialisé avec un tableau vide
  const [houseData, setHouseData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Appel à la fonction getApartments pour obtenir des données sur les maisons ou appartements
        const data = getApartments(); 
        // Met à jour l'état "houseData" avec les données obtenues
        setHouseData(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
      }
    };

    fetchData();
  }, []); // Utilisation de useEffect pour effectuer le chargement des données une seule fois lors du montage du composant

  return (
    <div className="grid-container">
      <div className="grid">
      {/* Utilisation de la méthode map pour parcourir les données de maison */}
        {houseData.map((house) => (
          
          <Link to={`/house/${house.id}`} key={house.id} className="house-card">
            <div key={house.id} className="house-card">
              <img src={house.cover} alt={house.title} className="house-img" />
              <h3 className="house-title">{house.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HouseGrid;
