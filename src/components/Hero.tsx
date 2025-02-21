import React from "react";

const Hero: React.FC = () => {
  return (
    <section id="home" className="bg-white py-16 border-b border-gray-200">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Производство полистиролбетона</h2>
        <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
          Надежные и экологичные строительные решения для вашего бизнеса и дома
        </p>
        <a
          href="#contacts"
          className="inline-block bg-gray-800 text-white py-2 px-6 text-sm font-semibold rounded-md hover:bg-blue-900 transition-colors"
        >
          Связаться с нами
        </a>
      </div>
    </section>
  );
};

export default Hero;