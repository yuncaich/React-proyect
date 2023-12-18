import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

const variants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  hidden: { opacity: 0, scale: 0.5 },
};

const PricingContainer = ({ children }) => {
  return (
    <div className="flex justify-center flex-wrap gap-8 m-4 md:justify-around">
      {children}
    </div>
  );
};


const PriceCard = ({ priceInfo }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

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
      className="..."
    >
      {/* Contenido de la tarjeta */}
    </motion.div>
  );
};

const PricingSection = () => {
  const priceInfo = {
    title: 'Basic Plan',
    detail: 'Great for starting out',
    price: '19.99',
  };

  return (
  
    <div id='precio' className="text-center">
      <h1 className="text-4xl md:text-5xl lg:text-6xl text-white uppercase font-bold tracking-wider mb-4 shadow-md">
        Our Prices
      </h1>
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
