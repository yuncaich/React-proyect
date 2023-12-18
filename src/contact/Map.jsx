import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const Contact = () => {
  const handleGetDirections = () => {
    // Aquí podrías abrir una nueva pestaña con Google Maps, por ejemplo
    window.open('https://www.google.com/maps/place/C.+Anatolio+de+Fuentes+Garc%C3%ADa,+2,+38009+Santa+Cruz+de+Tenerife/@28.4524398,-16.2747859,17z/data=!3m1!4b1!4m6!3m5!1s0xc41cc942a8fc5f5:0x97c1fda406975afc!8m2!3d28.4524399!4d-16.269915!16s%2Fg%2F11cnd8jxyv?entry=ttu', '_blank');
  };


const Map = ({ center, zoom }) => {
  return (
    // Tamaño del contenedor del mapa
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'YOUR_GOOGLE_MAPS_API_KEY' }} // Reemplaza con tu clave API
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>

      
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 59.95,
    lng: 30.33
  },
  zoom: 11
};

export default Map;
