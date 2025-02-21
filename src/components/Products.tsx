import React from "react";
import { motion } from "framer-motion";

const Products: React.FC = () => {
  const cardVariants = {
    hover: { y: -10, boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)" },
  };

  return (
    <section id="products" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Продукция</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Карточка для блоков 200×300×600 мм */}
          <motion.div
            className="border border-gray-200 p-6 rounded-md bg-gray-50 flex flex-col"
            variants={cardVariants}
            whileHover="hover"
            transition={{ duration: 0.3 }}
          >
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Блоки 200×300×600 мм</h3>
              <p className="text-sm text-gray-600">
                Цена за кубометр: 8500 руб.<br />
                Цена за блок: 310 руб.<br />
                Количество в кубометре: 27,77 шт.<br />
                Количество на поддоне: 32 шт (1,152 м³)<br />
                Стоимость поддона: 9920 руб.
              </p>
            </div>
            <img
              src="/images/Блоки5.jpg"
              alt="Полистиролбетонные блоки 200×300×600 мм"
              className="mt-4 w-full h-48 object-cover rounded-md"
            />
          </motion.div>
          {/* Карточка для блоков 400×300×600 мм */}
          <motion.div
            className="border border-gray-200 p-6 rounded-md bg-gray-50 flex flex-col"
            variants={cardVariants}
            whileHover="hover"
            transition={{ duration: 0.3 }}
          >
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Блоки 400×300×600 мм</h3>
              <p className="text-sm text-gray-600">
                Цена за блок: 620 руб.<br />
                Количество в кубометре: 13,88 шт.<br />
                Количество на поддоне: 20 шт (1,44 м³)<br />
                Стоимость поддона: 12400 руб.
              </p>
            </div>
            <img
              src="/images/Блокт6.jpg"
              alt="Полистиролбетонные блоки 400×300×600 мм"
              className="mt-4 w-full h-48 object-cover rounded-md"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Products;