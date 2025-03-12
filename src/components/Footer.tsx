import React from 'react';

const Footer: React.FC = () => (
  <footer className="bg-primary text-white py-6 mt-auto ml-0 md:ml-64 border-t border-neutral-400">
    <div className="container mx-auto px-6 text-center">
      <p className="text-neutral-200 mb-2">
        © {new Date().getFullYear()} Амур Полистирол Бетон. Все права защищены.
      </p>
      <p className="text-neutral-300">
        Email:{' '}
        <a href="mailto:amurpsbeton@mail.ru" className="text-accent hover:text-accent-hover underline">
          amurpsbeton@mail.ru
        </a>{' '}
        | Телефон:{' '}
        <a href="tel:+79622855151" className="text-accent hover:text-accent-hover underline">
          +7 (962) 285-51-51
        </a>
      </p>
    </div>
  </footer>
);

export default Footer;