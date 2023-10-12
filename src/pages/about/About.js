import React from 'react';
import Navbar from '../../components/navbar';
import Banner from '../../components/banner';
import Footer from '../../components/Footer';
import Collapse from '../../components/Collapse';
import './About.css';

function About() {
  return (
    <div>
    <Navbar /> {/* Rend le composant Navbar, qui affiche la barre de navigation */}
      <Banner  showText={false} imageUrl="./images/image2.png"/> {/* Rend le composant Banner avec des propriétés showText et imageUrl */}
      {/* Div pour afficher les sections de texte en collapse */}
      <div className="collapse">
          <Collapse title="Fiabilité" content=<p className="description">Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes</p> />
          <Collapse title="Respect" content=<p className="description">La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera un exclusion de notre plateforme.</p> />
          <Collapse title="Service" content=<p className="description">La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera un exclusion de notre plateforme.</p> />
          <Collapse title="Sécurité" content=<p className="description">La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p> />
      </div>
      {/* Rend le composant Footer, qui affiche le pied de page */}
    <Footer />
    </div>
  )
}

export default About
