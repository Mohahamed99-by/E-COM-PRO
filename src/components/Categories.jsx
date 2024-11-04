import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Categories = ({ onSelectCategory }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const scrollContainerRef = useRef(null);

  const categories = [
    { id: 'all', name: 'All Products', icon: '🛍️' },
    { id: 'electronics', name: 'Electronics', icon: '📱' },
    { id: 'clothing', name: 'Clothing', icon: '👕' },
    { id: 'books', name: 'Books', icon: '📚' },
    { id: 'home', name: 'Home & Living', icon: '🏠' },
    { id: 'sports', name: 'Sports', icon: '⚽' },
    { id: 'beauty', name: 'Beauty', icon: '💄' },
    { id: 'toys', name: 'Toys', icon: '🎮' }
  ];

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
    onSelectCategory(categoryId);
  };

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* Desktop Categories */}
        <div className="hidden md:block">
          <div className="flex justify-between items-center space-x-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className={`flex flex-col items-center px-4 py-2 rounded-lg transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-black text-white'
                    : 'hover:bg-gray-100'
                }`}
              >
                <span className="text-2xl mb-1">{category.icon}</span>
                <span className="text-sm font-medium">{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Categories with Always Visible Scroll Buttons */}
        <div className="md:hidden relative">
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 p-1 rounded-full shadow-md"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 p-1 rounded-full shadow-md"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto no-scrollbar space-x-4 px-8"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className={`flex flex-col items-center flex-shrink-0 px-4 py-2 rounded-lg transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-black text-white'
                    : 'hover:bg-gray-100'
                }`}
              >
                <span className="text-2xl mb-1">{category.icon}</span>
                <span className="text-sm font-medium">
                  {category.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
