import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import camaElastica from '../images/Cama elastica.jpg';
import puenteCombate from '../images/puente_combate.jpg';
import puente from '../images/puente.jpg';
import zonaBaloncesto from '../images/zona_baloncesto.jpg';
import zonaJumping from '../images/zona_jumping.jpg';
import nuestroInstaciones from '../images/nuestro_instalaciones.png';
import './slider.css';


const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", left: "10px", zIndex: 1, fontSize: "30px" }}
      onClick={onClick}
    />
  );
};

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: "10px", zIndex: 1, fontSize: "30px" }}
      onClick={onClick}
    />
  );
};



const StyledTitle = () => {
  return (
    <h1 className="text-2xl md:text-4xl lg:text-4xl text-white text-center uppercase font-bold tracking-wider mb-4 shadow-md">
      Atracciones de diversión
    </h1>
  );
};

const ExperienceContainer = ({ children }) => {
  return (
    <div className="relative max-w-full mx-auto py-5 bg-black">
      {children}
    </div>
  );
};

const Card = ({ image, title, description }) => {
  return (
    <div className="text-white relative rounded-lg overflow-hidden min-w-[300px] h-[300px]">
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="absolute bottom-5 left-5 right-5 bg-black bg-opacity-50 rounded-lg p-5">
        <h3 className="text-xl">{title}</h3> 
        <p className="text-base">{description}</p>
      </div>
    </div>
  );
};

const MySlider = () => {
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 500) {
        setSlidesToShow(1); // En dispositivos móviles, muestra solo 1 tarjeta
      } else {
        setSlidesToShow(3); // En otros dispositivos, muestra 3 tarjetas
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    centerMode: true,
    variableWidth: false,
    slidesToShow: slidesToShow, // Usamos el estado para controlar la cantidad de tarjetas mostradas
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Slider {...settings} className="custom-slick">
      <Card image={camaElastica} title="Cama Elástica"/>
      <Card image={puenteCombate} title="Puente Combate" />
      <Card image={puente} title="Puente"  />
      <Card image={zonaBaloncesto} title="Zona baloncesto" />
      <Card image={zonaJumping} title="Zona jump" />
      <Card image={nuestroInstaciones} title="Nuestro Instalaciones" />
    </Slider>
  );
};

const OurExcitingExperience = () => {
  return (
    <div id="informacion" >
    <ExperienceContainer>
      <StyledTitle />
      <MySlider />
    </ExperienceContainer>
    </div>
    );

};

export default OurExcitingExperience;
