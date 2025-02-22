import React from 'react';

const Footer: React.FC = () => (
  <footer className="bg-gray-800 text-white py-6 mt-auto">
    <div className="container mx-auto px-6 text-center">
      <p className="text-gray-300 mb-2">
        © {new Date().getFullYear()} Амур Полистирол Бетон. Все права защищены.
      </p>
      <p className="text-gray-400">
        Email:{' '}
        <a href="mailto:amurpsbeton@mail.ru" className="hover:text-blue-300">
          amurpsbeton@mail.ru
        </a>{' '}
        | Телефон:{' '}
        <a href="tel:+79622855151" className="hover:text-blue-300">
          +7 (962) 285-51-51
        </a>
      </p>
    </div>
  </footer>
);

export default Footer;