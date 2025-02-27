import React from 'react';
import precio_cumpleaños from '../images/precio_cumple.jpg';
import normativa_cumpleaños from '../images/normativa_cumpleaños.jpg';
import informacion_cumpleaños from '../images/informacion_cumpleaños.jpg';



const ResponsiveImage = ({ src, alt, additionalClasses }) => {
    return (
      <img 
        src={src} 
        alt={alt} 
        className={`w-full h-auto ${additionalClasses}`} // Cambiado a w-full
      />
    );
  };

  const Cumpleaños = () => {
    return (
        <div className="container mx-auto p-4" id='Cumpleaños'>
            <h1 className="text-4xl font-bold text-center mb-6">Información Cumpleaños</h1>
            <div className="flex flex-col gap-6 items-center">
                <div className="w-full max-w-3xl">
                    <ResponsiveImage 
                        src={normativa_cumpleaños}
                        alt="Normativa Cumpleaños"
                        additionalClasses="rounded-lg shadow-lg"
                    />
                    <h2 className="text-3xl font-bold text-center mt-4">Normativa Cumpleaños</h2>
                </div>
                <div className="w-full max-w-3xl">
                    <ResponsiveImage 
                        src={informacion_cumpleaños}
                        alt="Información Cumpleaños"
                        additionalClasses="rounded-lg shadow-lg"
                    />
                    <h2 className="text-3xl font-bold text-center mt-4">Información Cumpleaños</h2>
                </div>
                <div className="w-full max-w-3xl">
                    <ResponsiveImage 
                        src={precio_cumpleaños}
                        alt="Precio Cumpleaños"
                        additionalClasses="rounded-lg shadow-lg"
                    />
                    <h2 className="text-3xl font-bold text-center mt-4">Precio Cumpleaños</h2>
                </div>
            </div>
        </div>
     );
};

export default Cumpleaños;
