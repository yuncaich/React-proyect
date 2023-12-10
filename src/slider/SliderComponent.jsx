import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import slider1 from '../images/slider1.jpg';
import slider2 from '../images/slider2.jpg';
import slider3 from '../images/slider3.jpg';



// Estilos para el contenedor general
const ExperienceContainer = styled.div`
  max-width: 100%;
  padding: 20px;
  background: #000; // Fondo oscuro para el contraste
  color: #fff;
`;

// Estilos para cada tarjeta del slider
const Card = styled.div`
  background: #fff;
  border-radius: 10px; // Mantiene los bordes redondeados
  height: auto; // Ajusta la altura automáticamente
  position: relative;
  overflow: hidden;
  margin: 0 10px; // Añade espacio entre los Card

  img {
    width: 100%;
    height: auto; // Mantiene la relación de aspecto de la imagen
    border-radius: 10px; // Mantiene los bordes redondeados de la imagen
  }

  h3 {
    position: absolute;
    bottom: 70px;
    left: 20px;
  }

  p {
    position: absolute;
    bottom: 40px;
    left: 20px;
  }

  a {
    position: absolute;
    bottom: 10px;
    left: 20px;
    text-decoration: none;
    color: #fff;
    background: #333;
    padding: 10px;
    border-radius: 5px;
  }
`;

// Componente de slider
const MySlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  // Sobrescribiendo los estilos por defecto de las flechas de react-slick
const CustomSlider = styled(Slider)`
.slick-prev,
.slick-next {
  z-index: 1;
  width: auto;
  height: auto;
  background: transparent;
  color: transparent;
  font-size: 0;
}

// Usando ::before para estilizar las flechas con un icono o color deseado
.slick-prev::before,
.slick-next::before {
  font-size: 20px; // Ajusta el tamaño del ícono de la flecha
  color: white; // El color de la flecha
}

// Posicionando las flechas sobre las imágenes
.slick-prev {
  left: 10px;
}

.slick-next {
  right: 10px;
}

// Ajustes adicionales para asegurar que las flechas no tengan fondo y estén alineadas correctamente
.slick-prev,
.slick-next {
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  opacity: 0.75; // Hace las flechas ligeramente transparentes

  &:hover,
  &:focus {
    opacity: 1; // Hace las flechas completamente opacas al pasar el mouse
  }
}

// Ajustando el espaciado entre los slides
.slick-list {
  margin: 0 -10px;
}

.slick-slide > div {
  margin: 0 10px;
  outline: none; // Remueve el outline en foco
}

// ...otros estilos...
`;


  return (
    <Slider {...settings}>
      <Card>
        <img src= {slider1} alt="Activities" />
        <h3>Activities</h3>
        <p>Tolerably behavior may admit daughters offending...</p>
      </Card>
      <Card>
        <img src= {slider2} alt="prueba" />
        <h3>Activities</h3>
        <p>Tolerably behavior may admit daughters offending...</p>
      </Card>
      <Card>
        <img src= {slider3} alt="prueba" />
        <h3>Activities</h3>
        <p>Tolerably behavior may admit daughters offending...</p>
      </Card>
      <Card>
        <img src= {slider3} alt="prueba" />
        <h3>Activities</h3>
        <p>Tolerably behavior may admit daughters offending...</p>
      </Card>
      <Card>
        <img src= {slider3} alt="prueba" />
        <h3>Activities</h3>
        <p>Tolerably behavior may admit daughters offending...</p>
      </Card>
    </Slider>
  );
};

const OurExcitingExperience = () => {
  return (
    <ExperienceContainer>
      <h2>Our Exciting Experience</h2>
      <MySlider />
    </ExperienceContainer>
  );
};

export default OurExcitingExperience;
