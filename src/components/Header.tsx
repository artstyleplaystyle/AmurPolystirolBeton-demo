import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Кнопка гамбургера для мобильных */}
        <div className="flex justify-between w-full md:hidden">
          <button
            className="text-2xl focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? '✕' : '☰'}
          </button>
          <motion.h1
            className="text-xl font-semibold tracking-tight"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="hover:text-blue-300 transition-colors">
              Амур Полистирол Бетон
            </Link>
          </motion.h1>
        </div>
        {/* Заголовок для десктопов */}
        <motion.h1
          className="hidden md:block  md:text-2xl font-semibold tracking-tight"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/" className="hover:text-blue-300 transition-colors text-5xl">
            Амур Полистирол Бетон
          </Link>
        </motion.h1>
        {/* Навигация */}
        <nav
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:block w-full md:w-auto mt-4 md:mt-0`}
        >
          <ul className="flex flex-end md:flex-row space-y-6 md:space-y-0 md:space-x-6 p-1 md:p-0 bg-gray-800 md:bg-transparent">
            <li>
              <Link
                to="/"
                className="block text-base md:text-lg hover:text-blue-300 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Главная
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="block text-base md:text-lg hover:text-blue-300 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Продукция
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block text-base md:text-lg hover:text-blue-300 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                О нас
              </Link>
            </li>
            <li>
              <Link
                to="/contacts"
                className="block text-base md:text-lg hover:text-blue-300 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Контакты
              </Link>
            </li>
            <li>
              <Link
                to="/calculator"
                className="block text-base md:text-lg hover:text-blue-300 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Калькулятор
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;