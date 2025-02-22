import React from 'react';
import { motion } from 'framer-motion';

const Products: React.FC = () => {
  const cardVariants = {
    hover: { y: -10, boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)' },
  };

  const products = [
    {
      title: 'Блоки 200×300×600 мм',
      details: [
        'Цена за кубометр: 8500 руб.',
        'Цена за блок: 310 руб.',
        'Количество в кубометре: 27,77 шт.',
        'Количество на поддоне: 32 шт (1,152 м³)',
        'Стоимость поддона: 9920 руб.',
      ],
      image: '/images/Блоки5.jpg',
      alt: 'Полистиролбетонные блоки 200×300×600 мм',
    },
    {
      title: 'Блоки 400×300×600 мм',
      details: [
        'Цена за блок: 620 руб.',
        'Количество в кубометре: 13,88 шт.',
        'Количество на поддоне: 20 шт (1,44 м³)',
        'Стоимость поддона: 12400 руб.',
      ],
      image: '/images/Блокт6.jpg',
      alt: 'Полистиролбетонные блоки 400×300×600 мм',
    },
  ];

  return (
    <section id="products" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-12 text-center">
          Продукция
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="border border-gray-200 p-8 rounded-lg bg-gray-50 flex flex-col justify-between w-full"
              variants={cardVariants}
              whileHover="hover"
              transition={{ duration: 0.3 }}
            >
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{product.title}</h3>
                <ul className="text-base text-gray-600 space-y-2">
                  {product.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
              <img
                src={product.image}
                alt={product.alt}
                className="mt-6 w-full h-64 object-cover rounded-md"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;