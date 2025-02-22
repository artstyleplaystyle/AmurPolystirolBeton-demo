import React from 'react';

const About: React.FC = () => (
  <section className="container mx-auto py-8 px-6">
    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">О нас</h1>
    <div className="max-w-3xl mx-auto text-gray-600">
      <p className="mb-4">
        Мы — компания "Амур Полистирол Бетон", специализирующаяся на производстве полистиролбетона и других строительных материалов с 2010 года.
      </p>
      <p className="mb-4">
        Наша миссия — предоставлять надёжные, экологичные и инновационные решения для строительства, которые удовлетворяют потребности как частных клиентов, так и бизнеса.
      </p>
      <p>
        Качество продукции и удовлетворённость клиентов — наши главные приоритеты.
      </p>
    </div>
  </section>
);

export default About;