import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import HouseDetails from './pages/Details/HouseDetail';
import About from './pages/about/About';
import Error404 from './pages/error/Error404';

function App() {
  return (
    <div>
    {/* Utilisation de BrowserRouter pour définir le routage */}
        <BrowserRouter>
        {/* Bloc des routes */}
        <Routes>
         {/* Route pour la page d'accueil, affiche le composant Home */}
          <Route path="/" element={<Home />} />
          {/* Route pour les détails de la maison, affiche le composant HouseDetails */}
          <Route path="/house/:id" element={<HouseDetails />} />
          {/* Route pour la page "À propos", affiche le composant About */}
          <Route path="/about" element={<About />} />
          {/* Route générique pour toutes les autres URL, affiche le composant Error404 */}
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App