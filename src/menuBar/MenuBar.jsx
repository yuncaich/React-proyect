import React from 'react';
import styled from 'styled-components';

const Logo = styled.img`
  height: 50px; // Ajusta según el tamaño de tu logo
  cursor: pointer;
  margin-right: 20px; // Añade un margen si es necesario
`;
// Estilos para la barra de navegación
const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  background: rgba(0, 0, 0, 0.7); // Fondo semitransparente oscuro
  color: white;
  font-family: 'Roboto', sans-serif; // Tipo de letra moderna y legible
  font-size: 1rem; // Tamaño adecuado para la legibilidad
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
`;

// Contenedor para la imagen de fondo y el contenido principal
const BackgroundImageContainer = styled.div`
  background-image: url('homeBack.jpeg'); // Asegúrate de reemplazar con la ruta correcta
  background-size: cover;
  background-position: center;
  position: relative; // Posición relativa para posicionar los elementos internos
  height: 100vh; // Ajusta la altura según tus necesidades
`;

// Estilos para el contenedor del contenido principal que se verá sobre la imagen de fondo
const ContentContainer = styled.div`
  position: absolute;
  top: 50%; // Centra verticalmente
  left: 50%; 
  transform: translate(-50%, -50%); // Ajusta la posición para centrar exactamente
  color: white;
  text-align: center;
  z-index: 5;
`;
const NavbarItem = styled.a`
  color: white;
  text-decoration: none;
  margin: 0 3rem;
  padding: 1rem 0;
  position: relative;
  font-size: 1rem;
  cursor: pointer;
  
  &:hover {
    color: #ddd; // Cambio de color al pasar el mouse
  }
`;

// Contenedor para los ítems de la barra de navegación
const NavbarItemsContainer = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center;
  flex-grow: 1; // Permite que el contenedor crezca
`;

const FancyTitle = styled.h1`
  font-size: 6rem; // Tamaño grande para impacto visual
  font-family: 'Playfair Display', serif; // Una tipografía con estilo si está disponible
  color: #fff; // Color blanco para contraste
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7); // Sombra para mejorar la legibilidad sobre fondos variados
  margin: 0;
`;


const Menubar = () => {
  return (
    <NavbarContainer>
      <NavbarItemsContainer>
        <NavbarItem href="#home">Home</NavbarItem>
        <NavbarItem href="#informacion">Información</NavbarItem>
        <Logo src='logo.png' alt="Logo" />
        <NavbarItem href="#precio">Precio</NavbarItem>
        <NavbarItem href="#contacto">Contacto</NavbarItem>
      </NavbarItemsContainer>
    </NavbarContainer>
  );
};

const HeroBackground = () => {
  return (
    <BackgroundImageContainer>
      <Menubar />
      <ContentContainer>
        <FancyTitle>Mundolandia Park</FancyTitle>
        {/* Puedes agregar más contenido aquí si es necesario */}
      </ContentContainer>
    </BackgroundImageContainer>
  );
};

export default HeroBackground;



