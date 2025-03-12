import React from 'react';
import { motion } from 'framer-motion';
import WorkSchedule from '../components/WorkSchedule';

const Home: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-8"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-12 text-left"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 tracking-tight">
            Производство полистиролбетона
          </h1>
          <p className="text-2xl font-semibold mb-8 text-primary">
            Надёжные и экологичные строительные решения для вашего бизнеса и дома
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-primary bg-neutral-50 p-6 rounded-lg shadow-md border border-neutral-300 h-full flex flex-col"
          >
            <h2 className="text-2xl font-semibold mb-5 text-primary">УВАЖАЕМЫЕ ПОКУПАТЕЛИ!</h2>
            
            <div className="space-y-4 flex-grow">
              <p>
                В 2025 году планируется увеличение стоимости всей нашей продукции
              </p>
              <p>
                Успейте приобрести блоки по текущим ценам, пока они не выросли!
              </p>
              <p>
                Мы понимаем, что это может доставить неудобства, поэтому предлагаем
                бесплатное хранение до старта сезона строительства
              </p>
              <p>
                Если у вас возникнут вопросы о причинах изменения цен или вы захотите
                уточнить детали, свяжитесь с нами — мы подробно проконсультируем вас и
                ответим на все вопросы!
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="h-full"
          >
            <WorkSchedule />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;