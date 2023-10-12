import React from 'react';
import Navbar from '../../components/navbar';
import Banner from '../../components/banner';
import HouseGrid from '../../components/houseGrid';
import Footer from '../../components/Footer';

function Home() {
  return (
    <div>
     {/* Rend le composant Navbar, qui affiche la barre de navigation */}
    <Navbar />
    {/* Rend le composant Banner avec des propriétés showText et imageUrl */}
      <Banner showText={true} imageUrl="./images/Image1.png"/>
      {/* Rend le composant HouseGrid, qui affiche une grille de maisons ou d'appartements */}
      <HouseGrid />
      {/* Rend le composant Footer, qui affiche le pied de page */}
      <Footer />
    </div>
  )
}

export default Home