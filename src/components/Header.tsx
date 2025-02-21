import React from "react";
import { motion } from "framer-motion";

const Header: React.FC = () => {
  const linkVariants = {
    hover: { scale: 1.1, color: "#D1D5DB" }, // Светло-серый при наведении
    tap: { scale: 0.95 }, // Легкое сжатие при клике
  };

  return (
    <header className="bg-gray-800 text-white py-4 px-6 shadow-md sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
      <motion.h1
            className="text-5xl font-semibold tracking-tight"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
        >
            Амур Полистирол Бетон
        </motion.h1>
        <nav className="space-x-6">
          <motion.a
            href="#home"
            className="text-sm text-white"
            variants={linkVariants}
            whileHover="hover"
            whileTap="tap"
            transition={{ duration: 0.2 }}
          >
            Главная
          </motion.a>
          <motion.a
            href="#about"
            className="text-sm text-white"
            variants={linkVariants}
            whileHover="hover"
            whileTap="tap"
            transition={{ duration: 0.2 }}
          >
            О компании
          </motion.a>
          <motion.a
            href="#products"
            className="text-sm text-white"
            variants={linkVariants}
            whileHover="hover"
            whileTap="tap"
            transition={{ duration: 0.2 }}
          >
            Продукция
          </motion.a>
          <motion.a
            href="#contacts"
            className="text-sm text-white"
            variants={linkVariants}
            whileHover="hover"
            whileTap="tap"
            transition={{ duration: 0.2 }}
          >
            Контакты
          </motion.a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
