import React from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const PriceCardContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2rem;
  padding: 2rem;
  background: #fff; // Cambia esto por el color de fondo que prefieras
  border-radius: 10px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  max-width: 300px;
  min-width: 250px;
`;

const PriceDetail = styled.div`
  margin: 0.5rem 0;
`;

const StyledTitle = styled.h1`
  font-size: 2.5rem; // Tamaño grande para destacar
  color: black; // Color blanco para contraste
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

const variants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  hidden: { opacity: 0, scale: 0.5 },
};

const PriceCard = ({ priceInfo }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: false }); // Cambiado para activar cada vez
  
    React.useEffect(() => {
      if (inView) {
        controls.start('visible');
      } else {
        controls.start('hidden');
      }
    }, [controls, inView]);

  return (
    <PriceCardContainer
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      <h2>{priceInfo.title}</h2>
      <PriceDetail>{priceInfo.detail}</PriceDetail>
      <h3>${priceInfo.price}</h3>
      <p>per month</p>
      {/* Puedes añadir más detalles o un botón para comprar/comenzar */}
    </PriceCardContainer>
  );
};
const PricingContainer = styled.section`
  display: flex;
  justify-content: center; // Centra los elementos en el contenedor
  flex-wrap: wrap; // Permite que los elementos se ajusten en filas adicionales si no hay suficiente espacio
  gap: 2rem; // Espaciado entre elementos

  @media (max-width: 768px) {
    justify-content: space-around; // Otra opción de alineamiento para pantallas más pequeñas
  }
`;

// Uso de PriceCard en otro componente
const PricingSection = () => {
  const priceInfo = {
    title: 'Basic Plan',
    detail: 'Great for starting out',
    price: '19.99',
  };

  return (
    <div id='precio'>
        <StyledTitle>Our Prices</StyledTitle>
        <PricingContainer>
        <PriceCard priceInfo={priceInfo} />
        <PriceCard priceInfo={priceInfo} />
        <PriceCard priceInfo={priceInfo} />
        <PriceCard priceInfo={priceInfo} />

        </PricingContainer>
    </div>

  );
};

export default PricingSection;
