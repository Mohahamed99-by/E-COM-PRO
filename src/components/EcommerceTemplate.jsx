import React, { useState } from 'react';
import { ShoppingCart, Menu, X, Heart, Search } from 'lucide-react';
import Categories from './Categories';
// Sample product data
const products = [
  // Electronics
  {
    id: 1,
    name: "Smartphone X Pro",
    price: 999.99,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=500&auto=format&fit=crop",
    category: "electronics",
    description: "Latest smartphone with advanced features, 5G capability, and professional camera system"
  },
  {
    id: 2,
    name: "Laptop Ultra",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=500&auto=format&fit=crop",
    category: "electronics",
    description: "Powerful laptop with latest processor and dedicated graphics"
  },
  {
    id: 3,
    name: "Wireless Earbuds",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=500&auto=format&fit=crop",
    category: "electronics",
    description: "Premium wireless earbuds with noise cancellation"
  },

  // Clothing
  {
    id: 4,
    name: "Classic T-Shirt",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=500&auto=format&fit=crop",
    category: "clothing",
    description: "Comfortable cotton t-shirt in various colors"
  },
  {
    id: 5,
    name: "Denim Jeans",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?q=80&w=500&auto=format&fit=crop",
    category: "clothing",
    description: "Classic fit denim jeans with premium quality"
  },
  {
    id: 6,
    name: "Winter Jacket",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1544923246-77307dd654cb?q=80&w=500&auto=format&fit=crop",
    category: "clothing",
    description: "Warm winter jacket with water-resistant material"
  },

  // Books
  {
    id: 7,
    name: "The Art of Code",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=500&auto=format&fit=crop",
    category: "books",
    description: "Comprehensive guide to modern programming"
  },
  {
    id: 8,
    name: "Business Strategy",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=500&auto=format&fit=crop",
    category: "books",
    description: "Essential reading for business professionals"
  },
  {
    id: 9,
    name: "Cooking Masterclass",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=500&auto=format&fit=crop",
    category: "books",
    description: "Professional cooking techniques and recipes"
  },

  // Home & Living
  {
    id: 10,
    name: "Smart LED Lamp",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=500&auto=format&fit=crop",
    category: "home",
    description: "WiFi-enabled smart lamp with multiple colors"
  },
  {
    id: 11,
    name: "Cotton Bedsheet Set",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=500&auto=format&fit=crop",
    category: "home",
    description: "Premium cotton bedsheet set with 4 pillowcases"
  },
  {
    id: 12,
    name: "Modern Coffee Table",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=500&auto=format&fit=crop",
    category: "home",
    description: "Stylish coffee table with storage compartment"
  },

  // Sports
  {
    id: 13,
    name: "Yoga Mat",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=500&auto=format&fit=crop",
    category: "sports",
    description: "Non-slip yoga mat with carrying strap"
  },
  {
    id: 14,
    name: "Running Shoes",
    price: 119.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=500&auto=format&fit=crop",
    category: "sports",
    description: "Professional running shoes with cushioning"
  },
  {
    id: 15,
    name: "Fitness Tracker",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1557861537-76f5ac25052b?q=80&w=500&auto=format&fit=crop",
    category: "sports",
    description: "Advanced fitness tracking with heart rate monitor"
  },

  // Beauty
  {
    id: 16,
    name: "Skincare Set",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=500&auto=format&fit=crop",
    category: "beauty",
    description: "Complete skincare routine package"
  },
  {
    id: 17,
    name: "Makeup Palette",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=500&auto=format&fit=crop",
    category: "beauty",
    description: "Professional eyeshadow palette with 18 colors"
  },
  {
    id: 18,
    name: "Hair Care Bundle",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=500&auto=format&fit=crop",
    category: "beauty",
    description: "Premium shampoo and conditioner set"
  },

  // Toys
  {
    id: 19,
    name: "Building Blocks Set",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?q=80&w=500&auto=format&fit=crop",
    category: "toys",
    description: "Educational building blocks for kids"
  },
  {
    id: 20,
    name: "Remote Control Car",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?q=80&w=500&auto=format&fit=crop",
    category: "toys",
    description: "High-speed RC car with remote control"
  },
  {
    id: 21,
    name: "Gaming Console",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1486401899868-0e435ed85128?q=80&w=500&auto=format&fit=crop",
    category: "toys",
    description: "Latest gaming console with two controllers"
  }
];

const EcommerceTemplate = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Combined cart state instead of separate cartItems
  const [cartItems, setCartItems] = useState([]);
  const [searchItem, setSearchItem] = useState('');
  const [filterProduct, setFilterProduct] = useState(products);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');


  
  // Fixed addToCart function
  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        console.log(existingItem);

        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  // New removeFromCart function
  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  // New updateQuantity function
  const updateQuantity = (productId, newQuantity) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId
          ? { ...item, quantity: parseInt(newQuantity) }
          : item
      )
    );
  };

  // Calculate total cart amount
  const totalCartAmount = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  /// search the product

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm);

    const resultSearch = products.filter(item =>
      item.id.toString().toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilterProduct(resultSearch);
  };

  const openProductDetail = (product) => {
    setSelectedProduct(product);
    setIsDetailModalOpen(true);
  };

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
    // Filter products based on category
    if (categoryId === 'all') {
      setFilterProduct(products);
    } else {
      const filtered = products.filter(product => product.category === categoryId);
      setFilterProduct(filtered);
    }
  };


  return (
  <>
   <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-gray-800">Shop</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Home</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Shop</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Categories</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">About</a>
            </div>

            {/* Search, Cart, and User Actions */}
            <div className="flex items-center space-x-4">
              <div className="relative hidden md:block">
                <input
                  type="text"
                  value={searchItem}
                  onChange={handleSearch}
                  className="w-64 px-4 py-2 text-gray-600 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  placeholder="Search products..."
                />
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <Search size={20} />
                </span>
              </div>
              
              <button className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                <Heart size={20} />
              </button>
              
              <button
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200 relative"
                onClick={() => setIsCartOpen(!isCartOpen)}
              >
                <ShoppingCart size={20} />
                {cartItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItems.length}
                  </span>
                )}
              </button>

              <button
                className="md:hidden text-gray-600 hover:text-gray-900 transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-3">
              <div className="relative mb-4">
                <input
                  type="text"
                  value={searchItem}
                  onChange={handleSearch}
                  className="w-full px-4 py-2 text-gray-600 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  placeholder="Search products..."
                />
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <Search size={20} />
                </span>
              </div>
              <div className="space-y-1">
                <a href="#" className="block px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200">Home</a>
                <a href="#" className="block px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200">Shop</a>
                <a href="#" className="block px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200">Categories</a>
                <a href="#" className="block px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200">About</a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Categories Section */}
      <Categories onSelectCategory={handleCategorySelect} />

      {/* Hero Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Summer Collection 2024</h1>
            <p className="text-lg text-gray-600 mb-8">Discover our latest arrivals and trending styles</p>
            <button className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors duration-200">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          {selectedCategory === 'all' ? 'Featured Products' : `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}`}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filterProduct.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <button 
                  className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200"
                >
                  <Heart size={20} className="text-gray-600" />
                </button>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900 mb-1">{product.name}</h3>
                <p className="text-sm text-gray-500 mb-2">{product.category}</p>
                <div className="flex flex-col space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-900">${product.price}</span>
                    <button 
                      className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors duration-200"
                      onClick={() => addToCart(product)}
                    >
                      Add to Cart
                    </button>
                  </div>
                  <button 
                    className="w-full bg-gray-100 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-200 transition-colors duration-200"
                    onClick={() => openProductDetail(product)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      
    

      {/* Product Detail Modal */}
      {isDetailModalOpen && selectedProduct && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75" onClick={() => setIsDetailModalOpen(false)}></div>
            </div>

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{selectedProduct.name}</h3>
                  <button 
                    onClick={() => setIsDetailModalOpen(false)}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <X size={24} />
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <img 
                      src={selectedProduct.image} 
                      alt={selectedProduct.name}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-500">{selectedProduct.category}</p>
                      <p className="text-2xl font-bold text-gray-900">${selectedProduct.price}</p>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-900">Description</h4>
                      <p className="text-gray-600 mt-2">
                        {selectedProduct.description || 
                         "This premium product offers excellent quality and style. Perfect for any occasion."}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-900">Features</h4>
                      <ul className="list-disc list-inside text-gray-600 mt-2">
                        <li>High-quality materials</li>
                        <li>Durable construction</li>
                        <li>Premium finish</li>
                        <li>Comfortable design</li>
                      </ul>
                    </div>

                    <div className="flex space-x-4">
                      <button 
                        className="flex-1 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
                        onClick={() => {
                          addToCart(selectedProduct);
                          setIsDetailModalOpen(false);
                        }}
                      >
                        Add to Cart
                      </button>
                      <button 
                        className="flex-1 bg-gray-100 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-200"
                        onClick={() => setIsDetailModalOpen(false)}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}



  {/* Shopping Cart Sidebar */}
  {isCartOpen && (
    <div className="fixed inset-0 overflow-hidden z-50">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          onClick={() => setIsCartOpen(false)} />
        <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
          <div className="w-screen max-w-md">
            <div className="h-full flex flex-col bg-white shadow-xl">
              <div className="flex-1 py-6 overflow-y-auto px-4">
                <div className="flex items-start justify-between">
                  <h2 className="text-lg font-medium text-gray-900">Shopping Cart</h2>
                  <button
                    className="text-gray-400 hover:text-gray-500"
                    onClick={() => setIsCartOpen(false)}
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="mt-8">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex py-6 border-b">
                      <div className="flex-shrink-0 w-24 h-24 border rounded-md overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="ml-4 flex-1 flex flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>{item.name}</h3>
                            <p className="ml-4">${item.price}</p>
                          </div>
                        </div>
                        <div className="flex-1 flex items-end justify-between text-sm">
                          <div className="flex items-center">
                            <label className="mr-2">Qty</label>
                            <select
                              className="border rounded-md p-1"
                              value={item.quantity}
                              onChange={(e) => updateQuantity(item.id, e.target.value)}
                            >
                              {[1, 2, 3, 4, 5].map((num) => (
                                <option key={num} value={num}>{num}</option>
                              ))}
                            </select>
                          </div>
                          <button
                            className="text-red-500 hover:text-red-600"
                            onClick={() => removeFromCart(item.id)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-gray-200 py-6 px-4">
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <p>Subtotal</p>
                  <p>${totalCartAmount.toFixed(2)}</p>
                </div>
                <p className="mt-1 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                <button className="mt-6 w-full bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800">
                  Checkout
                </button>
                <div className="mt-6 flex justify-center text-sm text-gray-500">
                  <button
                    className="text-black hover:text-gray-800"
                    onClick={() => setIsCartOpen(false)}
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )}

  {/* Footer */}
  
</div>
  </div>
    
  </>  
  );
};

export default EcommerceTemplate;