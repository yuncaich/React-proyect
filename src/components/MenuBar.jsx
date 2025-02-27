import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faInfoCircle, faTag, faEnvelope, faUserPlus } from '@fortawesome/free-solid-svg-icons';

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

  const handleAnchorClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth',
      });
    }
    setIsSidebarOpen(false); // Close the sidebar on click
  };

  return (
    <>
      <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="md:hidden text-white z-25 p-3">
        <FontAwesomeIcon icon={faBars} size="2x" color='black' />
      </button>

      <div ref={sidebarRef} className={`fixed top-0 left-0 w-64 bg-black text-white transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform h-full z-10 md:hidden`}>
        <Link to="/" className="flex items-center px-4 py-2" onClick={() => setIsSidebarOpen(false)}>
          <FontAwesomeIcon icon={faHome} className="mr-2" /> Home
        </Link>
        <a href="#informacion" className="flex items-center px-4 py-2" onClick={(e) => handleAnchorClick(e, 'informacion')}>
          <FontAwesomeIcon icon={faInfoCircle} className="mr-2" /> Información
        </a>
        <a href="#precio" className="flex items-center px-4 py-2" onClick={(e) => handleAnchorClick(e, 'precio')}>
          <FontAwesomeIcon icon={faTag} className="mr-2" /> Precio
        </a>
        <a href="#contacto" className="flex items-center px-4 py-2" onClick={(e) => handleAnchorClick(e, 'contacto')}>
          <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> Contacto
        </a>
        <a href="/cumpleaños" className="flex items-center px-4 py-2" onClick={() => setIsSidebarOpen(false)}>
          <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> Cumpleaños
        </a>
        <a href="/restriction" className="flex items-center px-4 py-2" onClick={() => setIsSidebarOpen(false)}>
          <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> Restrinciones
        </a>
        <Link to="/register" className="flex items-center px-4 py-2" onClick={() => setIsSidebarOpen(true)}>
          <FontAwesomeIcon icon={faUserPlus} className="mr-2" /> Register
        </Link>
      </div>  

      <nav className="flex items-center justify-between py-4 px-8 bg-black bg-opacity-70 text-white fixed top-0 w-full z-10 hidden md:flex">
        <div className="flex items-center">
          <Link to="/" className="mx-4 py-4 text-lg hover:text-gray-300">Home</Link>
          <a href="#informacion" className="mx-4 py-4 text-lg hover:text-gray-300" onClick={(e) => handleAnchorClick(e, 'informacion')}>Información</a>
          <a href="#precio" className="mx-4 py-4 text-lg hover:text-gray-300" onClick={(e) => handleAnchorClick(e, 'precio')}>Precio</a>
          <a href="#contacto" className="mx-4 py-4 text-lg hover:text-gray-300" onClick={(e) => handleAnchorClick(e, 'contacto')}>Contacto</a>
          <Link to="/restriction" className="mx-4 py-4 text-lg hover:text-gray-300">Restrinciones</Link>
          <Link to="/cumpleaños" className="mx-4 py-4 text-lg hover:text-gray-300">Cumpleaños</Link>

        </div>
        <img src='logo.png' alt="Logo" className="h-12 mr-5 md:h-8" />
        <div className="flex items-center">
          <Link to="/register" className="mx-4 py-4 text-lg hover:text-gray-300">Register</Link>
        </div>
      </nav>
    </>
  );
};

export default Menubar;
