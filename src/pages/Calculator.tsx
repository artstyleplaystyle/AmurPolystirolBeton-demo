import React from 'react';
import CostCalculator from '../components/CostCalculator';

const Calculator: React.FC = () => {
  return (
    <section id="calculator" className="py-12 bg-white">
      <div className="container mx-auto px-20">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
          Калькулятор стоимости
        </h1>
        <div className="max-w-prose mx-auto">
          <CostCalculator />
        </div>
      </div>
    </section>
  );
};

export default Calculator;