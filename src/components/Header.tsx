import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header: React.FC = () => (
  <header className="bg-gray-800 text-white p-4 shadow-md">
    <div className="container mx-auto flex justify-between items-center">
      <motion.h1
        className="text-2xl md:text-3xl font-semibold tracking-tight"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link to="/" className="hover:text-blue-300 transition-colors">
          Амур Полистирол Бетон
        </Link>
      </motion.h1>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:text-blue-300 transition-colors">
              Главная
            </Link>
          </li>
          <li>
            <Link to="/products" className="hover:text-blue-300 transition-colors">
              Продукция
            </Link>
          </li>          
          <li>
            <Link to="/calculator" className="hover:text-blue-300 transition-colors">
              Калькулятор
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-300 transition-colors">
              О нас
            </Link>
          </li>
          <li>
            <Link to="/contacts" className="hover:text-blue-300 transition-colors">
              Контакты
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;