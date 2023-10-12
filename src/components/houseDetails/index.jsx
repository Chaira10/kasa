import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getApartments } from "../../service/api";
import "./HouseDetails.css";
import Gallery from "../Gallery";
import RatingStars from "../rating";
import Collapse from "../Collapse";

function HouseDetails() {
  // Récupération de l'ID de la maison à partir des paramètres d'URL
  const { id } = useParams();
  // Déclaration d'un état local "house" initialisé à null
  const [house, setHouse] = useState(null);

  useEffect(() => {
    const fetchHouseData = async () => {
      try {
        // Appel à la fonction getApartments pour obtenir des données sur les appartements 
        const apartmentsData = getApartments();
        // Recherche de la maison spécifique en fonction de l'ID
        const selectedHouse = apartmentsData.find((apartment) => apartment.id === id);

        if (!selectedHouse) {
          // Si la maison n'est pas trouvée, redirige vers la page d'erreur
          redirectToErrorPage();
        } else {
          // Met à jour l'état "house" avec les données de la maison sélectionnée
          setHouse(selectedHouse);
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
      }
    };

    fetchHouseData();
  }, [id]);
// Redirige l'utilisateur vers la page d'erreur en modifiant l'URL
  const redirectToErrorPage = () => {
    window.location.href = "/error"; 
  };
// Si les données de la maison ne sont pas encore chargées, affiche un message de chargement
  if (!house) {
    return <p>Chargement en cours...</p>;
  }

  return (
    <div>
      <div className="house-gallery">
        <Gallery images={house.pictures} />
      </div>
      <div className="container">
        <div className="left-column">
          <div className="text-content">
            <div className="house-text">
              <h1 className="house-titl">{house.title}</h1>
              <p className="house-location">{house.location}</p>
            </div>
          </div>
          <div className="tag-container">
            <div className="house-tag">
              {house.tags.map((tag, index) => (
                <h2 className="tag" key={index}>
                  {tag}
                </h2>
              ))}
            </div>
          </div>
        </div>
        <div className="right-column">
          <div className="house-name">
            <div className="host">
              <p className="name">
                {house.host.name.split(" ")[0]} {}
                <br />
                {house.host.name.split(" ")[1]} {}
              </p>
              <img src={house.host.picture} alt="house" className="picture" />
            </div>
          </div>
          <div className="star">
            <div className="house-stars">
              <RatingStars rating={house.rating} />
            </div>
          </div>
        </div>
      </div>

      <div className="container-collapse">
        <div className="house-description">
          <Collapse
            title="Description"
            content={<p className="description">{house.description}</p>}
          />
        </div>
        <div className="house-equipement">
          <Collapse
            title="Équipements"
            content={
              <div>
                {house.equipments.map((equipment, index) => (
                  <p className="equipement" key={index}>
                    {equipment}
                  </p>
                ))}
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
}

export default HouseDetails;
