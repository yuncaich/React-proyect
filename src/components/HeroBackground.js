import React from 'react';
import Menubar from './MenuBar';
import backgroundImage from '../images/homeBack.jpeg'; // Asegúrate de que la ruta es correcta
import { useLocation } from 'react-router-dom';

const HeroBackground = () => {
  const location = useLocation();
  const successMessage = location.state?.successMessage || '';

  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="bg-cover bg-center bg-no-repeat relative min-h-[50vh] md:min-h-[70vh]"
      id='home'
    >
      <Menubar />
      {successMessage && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-md shadow-md z-20">
          {successMessage}
        </div>
      )}
      <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-10">
        <h1 className="text-2xl md:text-6xl font-serif text-white text-shadow-lg mt-36 md:mt-40 leading-none">Mundolandia Park</h1>
      </div>
    </div>
  );
};

export default HeroBackground;
