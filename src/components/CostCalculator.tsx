import React, { useState } from 'react';

interface Product {
  title: string;
  pricePerBlock: number;
  blocksPerCubicMeter: number;
  pricePerCubicMeter: number;
  blocksPerPallet: number;
  palletVolume: number;
  palletPrice: number;
}

const products: Product[] = [
  {
    title: 'Блоки 200×300×600 мм',
    pricePerBlock: 310,
    blocksPerCubicMeter: 27.77,
    pricePerCubicMeter: 8500,
    blocksPerPallet: 32,
    palletVolume: 1.152,
    palletPrice: 9920,
  },
  {
    title: 'Блоки 400×300×600 мм',
    pricePerBlock: 620,
    blocksPerCubicMeter: 13.88,
    pricePerCubicMeter: 8605.6,
    blocksPerPallet: 20,
    palletVolume: 1.44,
    palletPrice: 12400,
  },
];

const CostCalculator: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState(products[0].title);
  const [unit, setUnit] = useState<'blocks' | 'pallets'>('blocks');
  const [quantity, setQuantity] = useState<string>('');
  const [result, setResult] = useState<string | null>(null);

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
    <div className="p-6 bg-gray-50 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Калькулятор стоимости</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-2">Тип блока:</label>
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
          <label className="block text-gray-700 mb-2">Единица:</label>
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
  );
};

export default CostCalculator;