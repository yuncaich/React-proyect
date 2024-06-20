import React from 'react';
import Menubar from './MenuBar';
import backgroundImage from '../images/homeBack.jpeg'; // Asegúrate de que la ruta es correcta

const HeroBackground = () => {
  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="bg-cover bg-center bg-no-repeat relative min-h-[50vh] md:min-h-[70vh]"
      id='home'
    >
      <Menubar />
      <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-10">
        <h1 className="text-2xl md:text-6xl font-serif text-white text-shadow-lg mt-36 md:mt-40 leading-none">Mundolandia Park</h1>
      </div>
    </div>
  );
};

export default HeroBackground;
