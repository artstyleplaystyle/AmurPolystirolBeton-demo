import React from 'react';

const Contacts: React.FC = () => (
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
              +7 (962) 285-51-51
            </a>
            | |
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
            <span className="font-medium">Адрес:</span> г. Благовещенск, Пограничная улица, 128 лит А
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
    <div className="mt-8 text-center text-gray-600">
      <p>Часы работы: Пн-Пт с 9:00 до 18:00</p>
      <p>Мы всегда рады ответить на ваши вопросы!</p>
    </div>
  </section>
);

export default Contacts;