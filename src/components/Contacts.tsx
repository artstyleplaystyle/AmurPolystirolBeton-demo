import React from "react";
import { motion } from "framer-motion";

const Contacts: React.FC = () => {
  return (
    <section id="contacts" className="py-16 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Контакты</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Контактная информация слева */}
          <motion.div
            className="flex flex-col justify-center text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-base text-gray-600 mb-2">Амурская область, г. Благовещенск</p>
            <p className="text-base text-gray-600 mb-2">пос. Астрахановка, ул. Пограничная, 128</p>
            <p className="text-base text-gray-600 mb-2">График работы с 8:00 до 17:00. Пн-Пт</p>
            <p className="text-base text-gray-600 mb-2">Наш email:amurpsbeton@mail.ru</p>
            <p className="text-base text-gray-600 mb-2">Телефон: +7 (962) 285-51-51, +7 (4162) 55-51-51</p>
            <p className="text-base text-gray-600">Доставка по городу и области</p>
          </motion.div>
          {/* Карта справа */}
          <motion.div
            className="w-full"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=127.584189%2C50.329971&z=16&mode=search&text=Амурская%20область%2C%20Благовещенск%2C%20посёлок%20Астрахановка%2C%20Пограничная%20улица%2C%20128"
              width="100%"
              height="400"
              frameBorder="0"
              allowFullScreen
              className="rounded-md shadow-sm"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;