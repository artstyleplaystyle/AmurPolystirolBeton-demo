import React, { useReducer } from 'react';
import { Product, products } from '../data/products';

type State = {
  selectedProduct: string;
  unit: 'blocks' | 'pallets';
  quantity: string;
  result: string | null;
};

type Action =
  | { type: 'SET_PRODUCT'; payload: string }
  | { type: 'SET_UNIT'; payload: 'blocks' | 'pallets' }
  | { type: 'SET_QUANTITY'; payload: string }
  | { type: 'CALCULATE' };

const initialState: State = {
  selectedProduct: products[0].title,
  unit: 'blocks',
  quantity: '',
  result: null,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_PRODUCT':
      return { ...state, selectedProduct: action.payload };
    case 'SET_UNIT':
      return { ...state, unit: action.payload };
    case 'SET_QUANTITY':
      return { ...state, quantity: action.payload };
    case 'CALCULATE': {
      const product = products.find(p => p.title === state.selectedProduct);
      if (!product || !state.quantity || isNaN(Number(state.quantity)) || Number(state.quantity) < 0) {
        return { ...state, result: Number(state.quantity) < 0 ? 'Количество не может быть отрицательным.' : 'Пожалуйста, введите корректное количество.' };
      }

      const numQuantity = Number(state.quantity);
      if (state.unit === 'blocks') {
        const totalBlocks = numQuantity;
        const totalCubicMeters = totalBlocks / product.blocksPerCubicMeter;
        const totalCostByBlocks = totalBlocks * product.pricePerBlock;
        const totalPallets = totalBlocks / product.blocksPerPallet;
        return {
          ...state,
          result: `Стоимость: ${totalCostByBlocks.toFixed(2)} руб | Объём: ${totalCubicMeters.toFixed(2)} м³ | Поддоны: ${totalPallets.toFixed(2)} шт`,
        };
      } else {
        const totalPallets = numQuantity;
        const totalBlocks = totalPallets * product.blocksPerPallet;
        const totalCubicMeters = totalPallets * product.palletVolume;
        const totalCostByPallets = totalPallets * product.palletPrice;
        return {
          ...state,
          result: `Стоимость: ${totalCostByPallets.toFixed(2)} руб | Объём: ${totalCubicMeters.toFixed(2)} м³ | Блоки: ${totalBlocks.toFixed(0)} шт`,
        };
      }
    }
    default:
      return state;
  }
};

const CostCalculator = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleCalculate = () => dispatch({ type: 'CALCULATE' });

  return (
    <div className="p-4 sm:p-6 bg-gray-50 rounded-lg shadow-md">
      <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 text-center">
        Калькулятор стоимости
      </h3>
      <div className="space-y-4">
        <div>
          <label className="block text-gray-700 text-sm sm:text-base mb-2">Тип блока:</label>
          <select
            value={state.selectedProduct}
            onChange={e => dispatch({ type: 'SET_PRODUCT', payload: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {products.map(product => (
              <option key={product.title} value={product.title}>
                {product.title}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-gray-700 text-sm sm:text-base mb-2">Единица:</label>
          <select
            value={state.unit}
            onChange={e => dispatch({ type: 'SET_UNIT', payload: e.target.value as 'blocks' | 'pallets' })}
            className="w-full p-3 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="blocks">Блоки (шт)</option>
            <option value="pallets">Поддоны (шт)</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700 text-sm sm:text-base mb-2">
            Количество ({state.unit === 'blocks' ? 'блоков' : 'поддонов'}):
          </label>
          <input
            type="number"
            value={state.quantity}
            onChange={e => dispatch({ type: 'SET_QUANTITY', payload: e.target.value })}
            placeholder={`Введите количество ${state.unit === 'blocks' ? 'блоков' : 'поддонов'}`}
            className="w-full p-3 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          onClick={handleCalculate}
          className="w-full bg-gray-800 text-white py-3 px-4 rounded-md text-base hover:bg-blue-900 transition-colors"
        >
          Рассчитать
        </button>
        {state.result && <p className="text-gray-600 mt-4 text-center text-sm sm:text-base">{state.result}</p>}
      </div>
    </div>
  );
};

export default CostCalculator;