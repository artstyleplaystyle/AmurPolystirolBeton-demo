import React from 'react';
import { motion } from 'framer-motion';

const Contacts: React.FC = () => {
  const daysOfWeek = [
    { name: 'Пн', isWorkDay: true, hours: '9:00–18:00' },
    { name: 'Вт', isWorkDay: true, hours: '9:00–18:00' },
    { name: 'Ср', isWorkDay: true, hours: '9:00–18:00' },
    { name: 'Чт', isWorkDay: true, hours: '9:00–18:00' },
    { name: 'Пт', isWorkDay: true, hours: '9:00–18:00' },
    { name: 'Сб', isWorkDay: false, hours: 'Выходной' },
    { name: 'Вс', isWorkDay: false, hours: 'Выходной' },
  ];

  // Текущий день (0 = воскресенье, 6 = суббота)
  const today = new Date('2025-02-23').getDay(); // 23 февраля 2025 — воскресенье (0)
  const currentDayIndex = today === 0 ? 6 : today - 1; // Корректировка под массив (0 = Пн, 6 = Вс)

  return (
    <section className="container mx-auto py-8 px-6">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
        Контакты
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Свяжитесь с нами</h2>
          <div className="text-gray-600 space-y-4">
            <p>
              <span className="font-medium">Телефон:</span>{' '}
              <a href="tel:+79622855151" className="text-black-600 hover:underline">
                +7 (962) 285-51-51 ||
              </a>
              <a href="tel:+74162555151" className="text-black-600 hover:underline">
                +7 (416) 255-51-51
              </a>
            </p>
            <p>
              <span className="font-medium">Email:</span>{' '}
              <a href="mailto:amurpsbeton@mail.ru" className="text-blue-600 hover:underline">
                amurpsbeton@mail.ru
              </a>
            </p>
            <p>
              <span className="font-medium">Адрес:</span> г. Благовещенск, Пограничная ул., 128
            </p>
          </div>
        </div>
        <div>
          <iframe
            src="https://yandex.ru/map-widget/v1/?ll=127.592823%2C50.340111&z=16&pt=127.592823%2C50.340111%2Cpm2rdm"
            className="w-full h-96 rounded-md border-0 shadow-md"
            title="Наше местоположение на Яндекс.Картах"
          />
        </div>
      </div>
      <motion.div
          className="flex justify-between gap-2 bg-gray-100 p-4 rounded-xl shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          >
      {/* Виджет дней недели */}
      <div className="mt-8 text-xl max-w-md mx-auto">
        <h3 className="text-3xl font-semibold text-gray-800 mb-4 text-center">
          Режим работы
        </h3>
        <div className="flex justify-between gap-2 bg-gray-100 p-4 rounded-xl shadow-md">
          {daysOfWeek.map((day, index) => (
            <div
              key={day.name}
              className={`flex-1 p-2 text-center rounded-md transition-all duration-300 ${
                day.isWorkDay
                  ? 'bg-white-100 text-black-800 hover:bg-blue-300'
                  : 'bg-gray-200 text-red-800 hover:bg-red-300'
              } ${index === currentDayIndex ? 'ring-2 ring-black-500 scale-110' : ''}`}
            >
              <span className="font-medium">{day.name}</span>
              <p className="text-xs">{day.hours}</p>
            </div>
          ))}
        </div>
        <p className="mt-2 text-center text-gray-600">
          Рабочие дни: Пн-Пт, 9:00–18:00 | Выходные: Сб-Вс
        </p>
      </div>
      </motion.div>
    </section>
  );
};

export default Contacts;