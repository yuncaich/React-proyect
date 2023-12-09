import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import MenuBar from './MenuBar';

// Aquí puedes definir estilos adicionales para el Slider si es necesario
const StyledSlider = styled(Slider)`
  .slick-slide {
    padding: 0 10px; // Agrega un espaciado entre los slides
  }
`;

const SliderComponent = () => {
  // Configuración del slider
  const settings = {
    dots: true, // Muestra puntos de navegación en la parte inferior
    infinite: true, // Infinito loop de slides
    speed: 500, // Velocidad de transición
    slidesToShow: 1, // Número de slides a mostrar
    slidesToScroll: 1, // Número de slides a desplazar
    autoplay: true, // Auto-reproducción del slider
    autoplaySpeed: 3000, // Velocidad de auto-reproducción
  };

  return (
    <>
      <MenuBar />
      <StyledSlider {...settings}>
        {/* Aquí van tus imágenes o contenido del slider */}
        <div><img src="/images/slide1.jpg" alt="Slide 1"/></div>
        <div><img src="/images/slide2.jpg" alt="Slide 2"/></div>
        <div><img src="/images/slide3.jpg" alt="Slide 3"/></div>
        {/* Agrega tantos <div> como slides necesites */}
      </StyledSlider>
    </>
  );
};

export default SliderComponent;
