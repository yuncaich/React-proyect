import styled from 'styled-components';

const ContactHeader = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start; // Alinea el contenido al inicio (izquierda)
  padding: 1rem 0;
`;

const Title = styled.h1`
  font-size: 3rem; // Ajusta el tamaño de la fuente según sea necesario
  margin-left: 10rem;
`;

const Line = styled.hr`
  width: 80%; // Controla el ancho de la línea horizontal
  align-self: center; // Alinea la línea horizontal al centro
  border: none;
  border-top: 2px solid black; // Ajusta el color y el tamaño según sea necesario
  margin: 1rem 0; // Espaciado arriba y abajo de la línea
`;


const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); // Esto crea 4 columnas de igual ancho
  gap: 1rem; // Espacio entre columnas
  padding: 1rem;
  max-width: 1200px; // O el ancho máximo que prefieras
  margin: auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; // Una sola columna para móviles
  }
`;

const ContactColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MapContainer = styled.div`
  width: 100%;
  height: 300px; // O la altura que prefieras para el mapa
`;

const Button = styled.button`
  background-color: #4CAF50; // O el color que prefieras
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 1rem;
`;

const Contact = () => {
  const handleGetDirections = () => {
    // Aquí podrías abrir una nueva pestaña con Google Maps, por ejemplo
    window.open('https://www.google.com/maps/place/C.+Anatolio+de+Fuentes+Garc%C3%ADa,+2,+38009+Santa+Cruz+de+Tenerife/@28.4524398,-16.2747859,17z/data=!3m1!4b1!4m6!3m5!1s0xc41cc942a8fc5f5:0x97c1fda406975afc!8m2!3d28.4524399!4d-16.269915!16s%2Fg%2F11cnd8jxyv?entry=ttu', '_blank');
  };

  return (
    <div id ='contacto'>
    <ContactHeader>
      <Title>Contacts</Title>
      <Line />
    </ContactHeader>
      <ContactContainer>
        <ContactColumn>
          <h3>Address</h3>
          <p>C. Anatolio de Fuentes García, 2, Santa Cruz de Tenerife</p>
          <Button onClick={handleGetDirections}>Get directions</Button>
        </ContactColumn>
        <ContactColumn>
          <h3>Phone</h3>
          {/* Agrega aquí más números si es necesario */}
          <p>+34 655332433</p>
        </ContactColumn>
        <ContactColumn>
          <h3>Schedule</h3>
          <p>Mon - Thu: 10:00 - 22:00</p>
          {/* Agrega más horarios si es necesario */}
        </ContactColumn>
        <ContactColumn>
          <h3>Email</h3>
          <p>email@example.com</p>
        </ContactColumn>
      </ContactContainer>
      <MapContainer>
        {/* Aquí integrarías el mapa, asegúrate de tener una clave API válida */}
        {/* Ejemplo con Google Maps React o simplemente un iframe si prefieres */}
      </MapContainer>
    </div>
  );
};

export default Contact;
