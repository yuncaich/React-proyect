import React, { useState, useRef, useEffect } from 'react';
import backgroundImage from '../images/homeBack.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faHome, faInfoCircle, faTag, faEnvelope } from '@fortawesome/free-solid-svg-icons';




const Menubar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarRef]);

  return (
    <>
      {/* Botón de menú para dispositivos móviles */}
      <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="md:hidden text-white z-25 p-3">
        <FontAwesomeIcon icon={faBars} size="2x" color='black' />
      </button>


      {/* Sidebar */}
      <div ref={sidebarRef} className={`fixed top-0 left-0 w-64 bg-black text-white transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform h-full z-10 md:hidden`}>
        <a href="#home" className="flex items-center px-4 py-2">
          <FontAwesomeIcon icon={faHome} className="mr-2" /> Home
        </a>
        <a href="#informacion" className="flex items-center px-4 py-2">
          <FontAwesomeIcon icon={faInfoCircle} className="mr-2" /> Información
        </a>
        <a href="#precio" className="flex items-center px-4 py-2">
          <FontAwesomeIcon icon={faTag} className="mr-2" /> Precio
        </a>
        <a href="#contacto" className="flex items-center px-4 py-2">
          <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> Contacto
        </a>
      </div>  


      {/* Barra de navegación principal */}
      <nav className="flex items-center justify-center py-4 px-8 bg-black bg-opacity-70 text-white fixed top-0 w-full z-10 hidden md:flex">
        <a href="#home" className="mx-12 py-4 text-lg hover:text-gray-300">Home</a>
        <a href="#informacion" className="mx-12 py-4 text-lg hover:text-gray-300">Información</a>
        <img src='logo.png' alt="Logo" className="h-12 mr-5 md:h-8" />
        <a href="#precio" className="mx-12 py-4 text-lg hover:text-gray-300">Precio</a>
        <a href="#contacto" className="mx-12 py-4 text-lg hover:text-gray-300">Contacto</a>
      </nav>

    </>
  );
};

const HeroBackground = () => {
  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="bg-cover bg-center bg-no-repeat relative min-h-[50vh] md:min-h-[70vh]"
      id='home'
    >   
     <Menubar />
     <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-white text-center z-10">
      <img src='logo.png' alt="Mundolandia Park Logo" className="w-40 md:w-80 h-auto pr-10" />
    </div>


      <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-10">
      <h1 className="text-2xl md:text-6xl font-serif text-white text-shadow-lg mt-36 md:mt-40 leading-none">Mundolandia Park</h1>
      </div>
    </div>
  );
};

export default HeroBackground;
