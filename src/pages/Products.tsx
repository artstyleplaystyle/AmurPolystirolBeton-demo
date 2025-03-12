import React from 'react';
import { motion } from 'framer-motion';
import { products } from '../data/products';

const Products: React.FC = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    }),
    hover: { y: -5, boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)' },
  };

  return (
    <motion.section 
      id="products" 
      className="py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-primary mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Продукция
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md border border-neutral-300 overflow-hidden"
              custom={index}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              variants={cardVariants}
            >
              <div className="p-4 bg-neutral-100">
                <img 
                  src={index === 0 ? 'images/Блокт6.jpg' : 'images/Блоки5.jpg'}
                  alt={product.title}
                  className="w-full h-64 object-contain"
                  loading="lazy"
                />
              </div>
              
              <div className="p-5">
                <div className="text-2xl text-primary-500 font-medium mb-5">
                  {product.pricePerBlock} руб/шт
                </div>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between border-b border-neutral-300 pb-2">
                    <span className="text-primary-500">Размер :</span>
                    <span>{product.size} (см)</span>
                  </div>
                  
                  <div className="flex items-center justify-between border-b border-neutral-300 pb-2">
                    <span className="text-primary-500">Плотность :</span>
                    <span>{product.density}</span>
                  </div>
                  
                  <div className="flex items-center justify-between border-b border-neutral-300 pb-2">
                    <span className="text-primary-500">На паллете :</span>
                    <span>{product.blocksPerPallet} шт</span>
                  </div>
                  
                  <div className="flex items-center justify-between border-b border-neutral-300 pb-2">
                    <span className="text-primary-500">В 1м³ :</span>
                    <span>{product.blocksPerCubicMeter.toFixed(1)} шт</span>
                  </div>
                </div>
                
                <div className="text-right text-neutral-500">
                  {product.type}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Products;