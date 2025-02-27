import React from 'react';
import precio from '../images/precio.png';  
import precioCumple from '../images/PrecioCumple.JPG';

const ResponsiveImage = ({ src, alt, additionalClasses }) => {
  return (
    <img 
      src={src} 
      alt={alt} 
      className={`max-w-full h-auto ${additionalClasses}`} 
    />
  );
}; 

const ImagePrice = () => {
    return (
      <>
      <div className="container mx-auto p-4" id='precio'>
            <h1 className="text-2xl md:text-4xl lg:text-4xl text-black text-center uppercase font-bold tracking-wider mb-4 shadow-md">
            Precios
            </h1>
        <ResponsiveImage 
          src={precio}
          alt="Descripción" 
          additionalClasses="rounded-lg shadow-md"
        />
      </div>
      <div className="container mx-auto p-4 bg-center" id='preprecioCumplecio'>
        <ResponsiveImage 
          src={precioCumple}
          alt="Descripción" 
          additionalClasses="rounded-lg shadow-md"
        />
      </div>
      </>
    );
  };
  
  export default ImagePrice;
  