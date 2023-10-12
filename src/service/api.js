import apartmentsData from "../data/data.json";



// fonction pour récupérer la liste d'appartements
export const getApartments = () => {
  // Retourner la liste d'appartements directement depuis le fichier JSON
  return apartmentsData.data; 
};

