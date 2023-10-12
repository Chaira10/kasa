import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Crée une racine ReactDOM associée à l'élément HTML ayant l'ID "root"
const root = ReactDOM.createRoot(document.getElementById('root'));
// Rend l'application React dans l'élément HTML avec l'ID "root"
root.render(
  
  <React.StrictMode>{/* Utilisation de React.StrictMode pour le développement */}
    <App /> {/* Rend le composant principal de l'application, App */}
  </React.StrictMode>
);


