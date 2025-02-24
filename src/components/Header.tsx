import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex justify-between w-full md:hidden">
          <button
            className="text-2xl focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? '✕' : '☰'}
          </button>
          <motion.h1
            className="text-xl font-semibold tracking-tight text-right"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="hover:text-blue-300 transition-colors">
              Амур Полистирол Бетон
            </Link>
          </motion.h1>
        </div>
        <motion.h1
          className="hidden md:block text-xl md:text-2xl font-semibold tracking-tight"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/" className="hover:text-blue-300 transition-colors">
            Амур Полистирол Бетон
          </Link>
        </motion.h1>
        <nav
          className={`${isOpen ? 'block' : 'hidden'} md:block w-full md:w-auto mt-4 md:mt-0 bg-gray-800`}
        >
          <ul className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 p-4 md:p-0">
            <li>
              <Link
                to="/"
                className="block text-lg hover:text-blue-300 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Главная
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="block text-lg hover:text-blue-300 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Продукция
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block text-lg hover:text-blue-300 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                О нас
              </Link>
            </li>
            <li>
              <Link
                to="/contacts"
                className="block text-lg hover:text-blue-300 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Контакты
              </Link>
            </li>
            <li>
              <Link
                to="/calculator"
                className="block text-lg hover:text-blue-300 transition-colors py-2"
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