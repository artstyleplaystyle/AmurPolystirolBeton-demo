import React from 'react';

interface Product {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
  <div className="border border-gray-200 rounded-lg p-4 shadow-md w-full sm:w-64">
    <img src={product.imageUrl} alt={product.name} className="w-full h-40 object-cover rounded-md mb-4" />
    <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
    <p className="text-gray-600">{product.description}</p>
  </div>
);

export default ProductCard;
