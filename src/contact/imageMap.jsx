import React from 'react';
import map from '../images/map.png';  

const url = "https://www.google.com/maps/place/C.+Anatolio+de+Fuentes+Garc%C3%ADa,+2,+38009+Santa+Cruz+de+Tenerife/@28.4524398,-16.2747859,17z/data=!3m1!4b1!4m6!3m5!1s0xc41cc942a8fc5f5:0x97c1fda406975afc!8m2!3d28.4524399!4d-16.269915!16s%2Fg%2F11cnd8jxyv?entry=ttu";

const ResponsiveImage = ({ src, alt, additionalClasses }) => {
    return (
      <img 
        src={src} 
        alt={alt} 
        className={`w-full h-auto ${additionalClasses}`} // Cambiado a w-full
      />
    );
  };
  

  const ImageMap = () => {
    return (
      <div className="container mx-auto p-1" id='precio'>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <ResponsiveImage 
          src={map}
          alt="Map"
          additionalClasses="rounded-lg shadow-md"
        />
        </a>
      </div>
    );
  };
  
  export default ImageMap;
  