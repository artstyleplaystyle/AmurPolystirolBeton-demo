import React from 'react';
import { motion } from 'framer-motion';
import CostCalculator from '../components/CostCalculator';

const Calculator: React.FC = () => {
  return (
    <motion.section 
      id="calculator" 
      className="py-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 md:px-20">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-primary mb-12 text-center"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          Калькулятор стоимости
        </motion.h1>
        <motion.div 
          className="max-w-prose mx-auto bg-neutral-50 p-6 rounded-lg shadow-md border border-neutral-300"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <CostCalculator />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Calculator;