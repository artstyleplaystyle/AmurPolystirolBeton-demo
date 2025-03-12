import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <motion.section 
      className="container mx-auto py-8 px-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 tracking-tight">О нас</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div 
          className="text-primary text-lg"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold mb-6 text-primary">Инновации в строительстве с 2010 года</h2>
          <p className="mb-5">
            «Амур Полистирол Бетон» — это современное производство полистиролбетонных блоков, 
            объединяющее многолетний опыт и инновационные технологии
          </p>
          <p className="mb-5">
            Мы предлагаем энергоэффективные и экологичные решения для строительства жилых, 
            коммерческих и промышленных объектов. Наша продукция соответствует всем 
            современным стандартам качества и безопасности
          </p>
          <p>
            Применение наших материалов позволяет сократить затраты на отопление до 30%, 
            а также значительно ускорить процесс строительства
          </p>
        </motion.div>
        
        <motion.div 
          className="order-first md:order-last"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <img 
            src="/images/factory.jpg" 
            alt="Производство полистиролбетона" 
            className="rounded-lg shadow-lg w-full h-auto object-cover border-2 border-neutral-400"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;