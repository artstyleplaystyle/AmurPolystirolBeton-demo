import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Products: React.FC = () => {
  const cardVariants = {
    hover: { y: -10, boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)' },
  };

  // Данные продуктов
  const products = [
    {
      title: 'Блоки 200×300×600 мм',
      pricePerBlock: 310, // руб
      blocksPerCubicMeter: 27.77,
      pricePerCubicMeter: 8500, // руб
      blocksPerPallet: 32,
      palletVolume: 1.152, // м³
      palletPrice: 9920, // руб
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
      pricePerBlock: 620, // руб
      blocksPerCubicMeter: 13.88,
      pricePerCubicMeter: 8605.6, // рассчитано как 620 * 13.88
      blocksPerPallet: 20,
      palletVolume: 1.44, // м³
      palletPrice: 12400, // руб
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

  // Состояние для калькулятора
  const [selectedProduct, setSelectedProduct] = useState(products[0].title);
  const [unit, setUnit] = useState<'blocks' | 'pallets'>('blocks'); // Единица измерения
  const [quantity, setQuantity] = useState<string>('');
  const [result, setResult] = useState<string | null>(null);

  // Расчёт стоимости
  const calculateCost = () => {
    const product = products.find(p => p.title === selectedProduct);
    if (!product || !quantity || isNaN(Number(quantity))) {
      setResult('Пожалуйста, введите корректное количество.');
      return;
    }

    const numQuantity = Number(quantity);

    if (unit === 'blocks') {
      const totalBlocks = numQuantity;
      const totalCubicMeters = totalBlocks / product.blocksPerCubicMeter;
      const totalCostByBlocks = totalBlocks * product.pricePerBlock;
      const totalPallets = totalBlocks / product.blocksPerPallet;

      setResult(
        `Стоимость: ${totalCostByBlocks.toFixed(2)} руб | Объём: ${totalCubicMeters.toFixed(
          2
        )} м³ | Поддоны: ${totalPallets.toFixed(2)} шт`
      );
    } else if (unit === 'pallets') {
      const totalPallets = numQuantity;
      const totalBlocks = totalPallets * product.blocksPerPallet;
      const totalCubicMeters = totalPallets * product.palletVolume;
      const totalCostByPallets = totalPallets * product.palletPrice;

      setResult(
        `Стоимость: ${totalCostByPallets.toFixed(2)} руб | Объём: ${totalCubicMeters.toFixed(
          2
        )} м³ | Блоки: ${totalBlocks.toFixed(0)} шт`
      );
    }
  };

  return (
    <section id="products" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-12 text-center">
          Продукция
        </h2>

        {/* Калькулятор */}
        <div className="max-w-2xl mx-auto mb-12 p-6 bg-gray-50 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
            Калькулятор стоимости
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">Выберите тип блока:</label>
              <select
                value={selectedProduct}
                onChange={e => setSelectedProduct(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {products.map(product => (
                  <option key={product.title} value={product.title}>
                    {product.title}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Единица измерения:</label>
              <select
                value={unit}
                onChange={e => setUnit(e.target.value as 'blocks' | 'pallets')}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="blocks">Блоки (шт)</option>
                <option value="pallets">Поддоны (шт)</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 mb-2">
                Количество ({unit === 'blocks' ? 'блоков' : 'поддонов'}):
              </label>
              <input
                type="number"
                value={quantity}
                onChange={e => setQuantity(e.target.value)}
                placeholder={`Введите количество ${unit === 'blocks' ? 'блоков' : 'поддонов'}`}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              onClick={calculateCost}
              className="w-full bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-blue-900 transition-colors"
            >
              Рассчитать
            </button>
            {result && <p className="text-gray-600 mt-4 text-center">{result}</p>}
          </div>
        </div>

        {/* Карточки */}
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