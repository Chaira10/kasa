import React from 'react';

import Navbar from '../../components/navbar';
import Footer from '../../components/Footer';
import HouseDetailsComponent from '../../components/houseDetails';
import './details.css';

function HouseDetails() {




  return (
    <div>
    {/* Rend le composant Navbar, qui affiche la barre de navigation */}
    <Navbar /> 
     {/* Rend le composant HouseDetailsComponent en passant les données de la maison en tant que propriété */}
    <HouseDetailsComponent />
    {/* Rend le composant Footer, qui affiche le pied de page */}
    <Footer /> 
    </div>
  )
}

export default HouseDetails
