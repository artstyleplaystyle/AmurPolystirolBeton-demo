import { motion } from 'framer-motion';
import WorkSchedule from '../components/WorkSchedule';

const Contacts = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto py-8 px-6"
    >
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold text-primary mb-8 text-center"
      >
        Контакты
      </motion.h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="bg-neutral-50 p-6 rounded-lg shadow-md border border-neutral-300"
        >
          <h2 className="text-2xl font-semibold mb-6 text-primary">Свяжитесь с нами</h2>
          <div className="text-primary space-y-4">
            <p>
              <span className="font-medium">Телефон:</span>{' '}
              <a href="tel:+79622855151" className="text-primary hover:text-accent hover:underline">
                +7 (962) 285-51-51 ||
              </a>
              <a href="tel:+74162555151" className="text-primary hover:text-accent hover:underline">
                +7 (416) 255-51-51
              </a>
            </p>
            <p>
              <span className="font-medium">Email:</span>{' '}
              <a href="mailto:amurpsbeton@mail.ru" className="text-primary hover:text-accent hover:underline">
                amurpsbeton@mail.ru
              </a>
            </p>
            <p>
              <span className="font-medium">Адрес:</span> г. Благовещенск, Пограничная ул., 128
            </p>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <iframe
            src="https://yandex.ru/map-widget/v1/?ll=127.592823%2C50.340111&z=16&pt=127.592823%2C50.340111%2Cpm2rdm"
            className="w-full h-96 rounded-md border border-neutral-400 shadow-md"
            title="Наше местоположение на Яндекс.Картах"
          />
        </motion.div>
      </div>
      
      {/* Рабочее расписание */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="bg-neutral-50 p-6 rounded-lg shadow-md border border-neutral-300 h-full text-primary flex flex-col"
        >
          <h2 className="text-2xl font-semibold mb-6 text-primary">Информация о доставке</h2>
          <div className="space-y-4 flex-grow">
            <p>Мы осуществляем доставку по г. Благовещенск и Амурской области</p>
            <p>Стоимость доставки зависит от расстояния и объема заказа.</p>
            <p>Для получения точной информации о стоимости и сроках доставки обращайтесь к нашим менеджерам</p>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="h-full"
        >
          <WorkSchedule />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contacts;