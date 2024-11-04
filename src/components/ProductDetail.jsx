import React, { useState } from 'react';
import { Heart, ShoppingCart, Star } from 'lucide-react';

const ProductDetail = ({ product, addToCart }) => {
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  const sizes = ['XS', 'S', 'M', 'L', 'XL'];
  const reviews = [
    { id: 1, rating: 5, author: "Jane Doe", comment: "Great quality and comfortable fit!" },
    { id: 2, rating: 4, author: "John Smith", comment: "Good product, slightly large sizing" }
  ];

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    addToCart({ ...product, size: selectedSize, quantity });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src={product.image}
                  alt={`${product.name} view ${index + 1}`}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            <p className="text-xl text-gray-900 mt-2">${product.price}</p>
          </div>

          {/* Reviews Summary */}
          <div className="flex items-center space-x-2">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, index) => (
                <Star key={index} size={20} fill="currentColor" />
              ))}
            </div>
            <span className="text-gray-600">(24 reviews)</span>
          </div>

          {/* Size Selection */}
          <div>
            <h3 className="text-sm font-medium text-gray-900">Size</h3>
            <div className="grid grid-cols-5 gap-2 mt-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  className={`px-4 py-2 text-sm font-medium rounded-md ${
                    selectedSize === size
                      ? 'bg-black text-white'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selection */}
          <div>
            <h3 className="text-sm font-medium text-gray-900">Quantity</h3>
            <select
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="mt-2 block w-24 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black"
            >
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4">
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 flex items-center justify-center space-x-2"
            >
              <ShoppingCart size={20} />
              <span>Add to Cart</span>
            </button>
            <button className="p-3 border border-gray-300 rounded-md hover:bg-gray-50">
              <Heart size={20} />
            </button>
          </div>

          {/* Product Description */}
          <div>
            <h3 className="text-sm font-medium text-gray-900">Description</h3>
            <div className="mt-2 text-gray-600 space-y-4">
              <p>{product.description || 'Product description goes here...'}</p>
            </div>
          </div>

          {/* Reviews */}
          <div>
            <h3 className="text-sm font-medium text-gray-900">Customer Reviews</h3>
            <div className="mt-2 space-y-4">
              {reviews.map((review) => (
                <div key={review.id} className="border-b pb-4">
                  <div className="flex items-center space-x-2">
                    <div className="flex text-yellow-400">
                      {[...Array(review.rating)].map((_, index) => (
                        <Star key={index} size={16} fill="currentColor" />
                      ))}
                    </div>
                    <span className="text-sm font-medium text-gray-900">
                      {review.author}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-gray-600">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;