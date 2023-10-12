import React from "react";
import NotFound from "../../components/notFound";
import Navbar from "../../components/navbar";
import Footer from "../../components/Footer";

function Error404() {
  return (
    <div>
      <Navbar /> {/* Rend le composant Navbar, qui affiche la barre de navigation */}
      <NotFound />  {/* Rend le composant NotFound, qui affiche la page d'erreur 404 */}
      <Footer /> {/* Rend le composant Footer, qui affiche le pied de page */}
    </div>
  );
}

export default Error404;
