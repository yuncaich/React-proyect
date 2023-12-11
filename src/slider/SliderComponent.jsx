import React,{ useEffect, useMemo } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import slider1 from '../images/slider1.jpg';
import slider2 from '../images/slider2.jpg';
import slider3 from '../images/slider3.jpg';



const StyledTitle = styled.h1`
  font-size: 2.5rem; // Tamaño grande para destacar
  color: #fff; // Color blanco para contraste
  text-align: center; // Centrado en la página o contenedor
  text-transform: uppercase; // Opción para tener todo el texto en mayúsculas
  font-weight: bold; // Fuente en negrita para darle más presencia
  letter-spacing: 1.5px; // Espaciado entre letras para un efecto estilizado
  margin-bottom: 1rem; // Margen inferior para separarlo de otros elementos
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); // Sombra de texto para dar profundidad
  line-height: 1.2; // Altura de línea para ajustar la legibilidad del texto

  @media (max-width: 768px) {
    font-size: 2rem; // Un tamaño de fuente más pequeño para dispositivos más pequeños
  }

  @media (max-width: 480px) {
    font-size: 1.5rem; // Aún más pequeño para pantallas de móviles
  }
`;

const ExperienceContainer = styled.div`
  position: relative;
  max-width: 100%;
  margin: auto;
  padding: 20px 0; // Ajusta el padding vertical según sea necesario
  background: #000; // o cualquier otro color de fondo que desees
`;

// Estilos para los Cards dentro del slider
const Card = styled.div`
  color: #fff;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  min-width: 300px; // Asegura un ancho mínimo para las tarjetas
  height: 300px; // Altura fija para las tarjetas

  
  
  // Ajusta el tamaño de la imagen de fondo para que llene la tarjeta
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  // Estilos para el contenido sobre la imagen de fondo
  .content {
    position: absolute;
    bottom: 20px;
    left: 20px;
    right: 20px;
    background: rgba(0, 0, 0, 0.5); // Fondo oscuro para mejorar la legibilidad del texto
    border-radius: 10px; // Bordes redondeados para el fondo del texto
    padding: 20px; // Espaciado interno para el contenido

    h3 {
      font-size: 1.25rem; // Ajusta el tamaño del título según sea necesario
    }

    p {
      font-size: 1rem; // Ajusta el tamaño del párrafo según sea necesario
    }
  }
`;

const CustomSlider = styled(Slider)`

  .slick-track {
      display: flex;
      align-items: center;
      gap: 20px; 
    }
  .slick-prev,
  .slick-next {
    z-index: 100; // Asegúrate de que el z-index sea suficientemente alto para estar sobre las imágenes
    top: 50%; // Centra verticalmente
    transform: translate(0, -50%);
    background-color: transparent; // Fondo transparente
    color: white; // Icono blanco
    &:before {
      font-size: 30px; // Tamaño del icono
      opacity: 1; // Las flechas deben ser totalmente visibles
    }
  }
  // Estilos para la flecha izquierda
  .slick-prev {
    left: 25px; // Espacio desde el lado izquierdo
    @media (max-width: 768px) {
      left: 10px;
    }
  }

  // Estilos para la flecha derecha
  .slick-next {
    right: 25px; // Espacio desde el lado derecho
    @media (max-width: 768px) {
      right: 10px;
    }
  }

  // Asegúrate de que las flechas estén siempre visibles
  .slick-prev.slick-arrow,
  .slick-next.slick-arrow {
    display: block !important;
  }
`;


const MySlider = () => {

  const baseSettings = useMemo(() => ({
    dots: true,
    infinite: true,
    speed: 500,
    centerMode: true,
    variableWidth: false,
  }), []);

  // useMemo for mobileSettings and desktopSettings without baseSettings in dependency array
  const mobileSettings = useMemo(() => ({
    ...baseSettings,
    slidesToShow: 1, 
    slidesToScroll: 1,
  }), [baseSettings]);

  const desktopSettings = useMemo(() => ({
    ...baseSettings,
    slidesToShow: 3, 
    slidesToScroll: 1,
  }), [baseSettings]);

  // Determinar qué configuración usar basado en el ancho de la ventana
  const [currentSettings, setCurrentSettings] = React.useState(
    window.innerWidth < 500 ? mobileSettings : desktopSettings
  );

  // Escuchar cambios en el tamaño de la ventana
  useEffect(() => {
    const handleResize = () => {
      setCurrentSettings(
        window.innerWidth < 480 ? mobileSettings : desktopSettings
      );
    };

    window.addEventListener('resize', handleResize);

    // Limpiar el evento al desmontar el componente
    return () => window.removeEventListener('resize', handleResize);
  }, [desktopSettings, mobileSettings]);

  // Estilos para el slider con las flechas personalizadas
  return (
    <CustomSlider {...currentSettings}>
    <Card>
        <img src= {slider1} alt="Activities" />
        <div className="content">
          <h3>Instalacion1</h3>
          <p>We focus a great deal on the understanding of behavioral psychology and influence.</p>
        </div>
      </Card>
      <Card>
        <img src= {slider2} alt="prueba" />
        <div className="content">
          <h3>Instalacion2</h3>
          <p>We focus a great deal on the understanding of behavioral psychology and influence.</p>
        </div>
      </Card>
      <Card>
        <img src= {slider3} alt="prueba" />
        <div className="content">
          <h3>Instalacion3</h3>
          <p>We focus a great deal on the understanding of behavioral psychology and influence.</p>
        </div>
      </Card>
      <Card>
        <img src= {slider3} alt="prueba" />
        <div className="content">
          <h3>Instalacion4</h3>
          <p>We focus a great deal on the understanding of behavioral psychology and influence.</p>
        </div>
      </Card>
      <Card>
        <img src= {slider3} alt="prueba" />
        <div className="content">
          <h3>Instalacion5</h3>
          <p>We focus a great deal on the understanding of behavioral psychology and influence.</p>
        </div>
      </Card>
    </CustomSlider>
  );
};

const OurExcitingExperience = () => {
  return (
    <ExperienceContainer id="information">
      <StyledTitle>Instalaciones</StyledTitle>
      <MySlider />
    </ExperienceContainer>
  );
};

export default OurExcitingExperience;
