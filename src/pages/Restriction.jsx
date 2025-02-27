import React from 'react';
import zona_infantil from '../images/zona_infantil.jpg';
import zona_juvenil from '../images/zona_juvenil.jpg';



const ResponsiveImage = ({ src, alt, additionalClasses }) => {
    return (
      <img 
        src={src} 
        alt={alt} 
        className={`w-full h-auto ${additionalClasses}`} // Cambiado a w-full
      />
    );
  };

  const Restriction = () => {
    return (
        <div className="container mx-auto p-4" id='restriction'>
            <h1 className="text-4xl font-bold text-center mb-6">Restricciones</h1>
            <div className="flex flex-col gap-6 items-center">
                <div className="w-full max-w-3xl">
                    <ResponsiveImage 
                        src={zona_infantil}
                        alt="Zona Infantil"
                        additionalClasses="rounded-lg shadow-lg"
                    />
                    <h2 className="text-3xl font-bold text-center mt-4">Zona Infantil</h2>
                </div>
                <div className="w-full max-w-3xl">
                    <ResponsiveImage 
                        src={zona_juvenil}
                        alt="Zona Juvenil"
                        additionalClasses="rounded-lg shadow-lg"
                    />
                    <h2 className="text-3xl font-bold text-center mt-4">Zona Juvenil</h2>
                </div>
            </div>
        </div>
     );
};

export default Restriction;
