import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faMessage, faEnvelope } from '@fortawesome/free-solid-svg-icons';


const variants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  hidden: { opacity: 0, scale: 0.5 },
};

const renderDetailWithIcons = (title, detail) => {
    // eslint-disable-next-line default-case
    switch (title) {
      case 'Direccion':
        const [address,location] = detail.split('\n');
        return (
          <>
            <FontAwesomeIcon icon={faMapMarkerAlt} /> <span>{address}</span><br />
             <span>{location}</span>

          </>
        );
      case 'Telefono - Email':
        const [phone, email] = detail.split('\n');
        return (
          <>
            <FontAwesomeIcon icon={faMessage} /> <span>{phone}</span><br />
            <FontAwesomeIcon icon={faEnvelope} /> <span>{email}</span>
          </>
        );
    }
};
const formatDetailWithBreaks = (detail) => {
  return detail.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));
};

const priceInfos = [
  {
    title: 'Direccion',
    detail: 'C. Anatolio de Fuentes García, 2\nSanta Cruz de Tenerife',
  },
  {
    title: 'Telefono - Email',
    detail: '615034942 \n Mundolandiapark2@gmail.com',
  }
  /*
  {
    title: 'HORARIO CUMPLEAÑOS INVIERNO: (Hasta desde Noviembre a Abril)',
    detail: 'Horarios de cumpleaños Party Jump: Lunes a Viernes de 16:30 a 18:00 - Sábado, Domingo y festivos de 12:30 a 18:00 Horarios de cumpleaños Party Plus: Lunes a Viernes de 16:30 a 17:30 - Sábado, Domingo y festivos de 12:30 a 17:30',
  },
  {
    title: 'HORARIO CUMPLEAÑOS VERANO: (Hasta desde MAYO a OCTUBRE)',
    detail: 'Horarios de cumpleaños Party Jump: Lunes a Viernes de 17:30 a 19:00  - Sábado, Domingo y festivos de 12:30 a 19:00 Horarios de cumpleaños Party Plus: Lunes a Viernes de 17:30 a 18:30  - Sábado, Domingo y festivos de 12:30 a 18:30',
  },*/ 

];


const PriceCard = ({ priceInfo }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false });

  const renderDetail = () => {
     if (priceInfo.title === 'Direccion' || priceInfo.title === 'Telefono - Email') {
      return renderDetailWithIcons(priceInfo.title, priceInfo.detail);
      
    }
    if (priceInfo.title.includes('Telefono - Email')) {
      // Formatear el detalle para mostrar saltos de línea
      return formatDetailWithBreaks(priceInfo.detail);
    }
    if (priceInfo.title.includes('Direccion')) {
      // Formatear el detalle para mostrar saltos de línea
      return formatDetailWithBreaks(priceInfo.detail);
    }
    if (priceInfo.title.includes('HORARIO CUMPLEAÑOS INVIERNO')) {
      return (
        <>
          <p className="font-bold">Party Jump:</p>
          <ul className="list-disc list-inside mb-2">
            <li>Lunes a Viernes: 16:30 - 18:00</li>
            <li>Sábado, Domingo y festivos: 12:30 - 18:00</li>
          </ul>
          <p className="font-bold">Party Plus:</p>
          <ul className="list-disc list-inside">
            <li>Lunes a Viernes: 16:30 - 17:30</li>
            <li>Sábado, Domingo y festivos: 12:30 - 17:30</li>
          </ul>
        </>
      );
    } else if (priceInfo.title.includes('HORARIO CUMPLEAÑOS VERANO')) {
        return (
          <>
            <p className="font-bold">Party Jump:</p>
            <ul className="list-disc list-inside mb-2">
              <li>Lunes a Viernes: 17:30 a 19:00</li>
              <li>Sábado, Domingo y festivos: 12:30 - 19:00</li>
            </ul>
            <p className="font-bold">Party Plus:</p>
            <ul className="list-disc list-inside">
              <li>Lunes a Viernes: 16:30 - 18:30</li>
              <li>Sábado, Domingo y festivos: 12:30 - 18:30</li>
            </ul>
          </>
        );
      } else {
        return <p>{priceInfo.detail}</p>;
      }
  };
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);
  
  

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="min-w-[250px] max-w-md p-4 bg-white rounded-lg shadow-md m-4" 
     >
      <h2 className="text-xl font-bold mb-2">{priceInfo.title}</h2>
      <div className="text-base whitespace-normal break-words">
        {renderDetail()}
      </div>
    </motion.div>
  );
  
};



const PricingContainer = () => {
  return (
    <div id='contacto'>
        <div>
      {/* Título del Contenedor */}
      <h1 className="text-2xl md:text-4xl lg:text-4xl text-black text-center uppercase font-bold tracking-wider mb-4 shadow-md">
        CONTACTO Y HORARIOS
      </h1>

      {/* Tarjetas de Precios */}
      <div className="flex justify-center flex-wrap gap-8 m-4 md:justify-around">
        {priceInfos.map((info, index) => (
          <PriceCard key={index} priceInfo={info} />
        ))}
      </div>
    </div>

    </div>

  );
};

export default PricingContainer;