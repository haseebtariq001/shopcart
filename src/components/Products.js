import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';

/**
 * Product component displays individual product details and handles cart operations.
 * @param {object} product - Product data.
 */
function Product({ product }) {
  // Access addToCart function from the shared CartContext
  const { addToCart } = useContext(CartContext);
  // Local state to manage visibility of the add-to-cart notification
  const [showNotification, setShowNotification] = useState(false);

  /**
   * Handles adding the product to the cart and showing a notification.
   * @param {object} product - Product to be added to the cart.
   */
  const handleAddToCart = product => {
    addToCart(product);
    setShowNotification(true);
    // Set a timer to hide the notification after 2 seconds
    setTimeout(() => setShowNotification(false), 2000);
  };

  return (
    <div className="border p-4 flex flex-col items-center justify-between transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 rounded-lg bg-white shadow-lg hover:shadow-xl">
      {/* Responsive image container with aspect ratio maintained */}
      <div className="w-full mb-3 overflow-hidden rounded">
        <img src={product.image} alt={product.title} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" style={{ aspectRatio: '16/9' }} />
      </div>
      <div className="text-center flex flex-col items-center justify-center p-2">
        <h3 className="text-lg font-semibold mb-1">{product.title}</h3>
        <p className="text-sm text-gray-600 mb-3">{product.description}</p>
        <div className="flex justify-between items-center w-full">
          <span className="text-lg font-bold text-blue-600">${product.price}</span>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300" onClick={() => handleAddToCart(product)}>
            Add to Cart
          </button>
        </div>
        {/* Notification shown when a product is added to the cart */}
        {showNotification && <p className="text-green-500 mt-2">Added to cart!</p>}
      </div>
    </div>
  );
}

/**
 * Products component that displays a list of products.
 */
function Products() {
  // Static list of products
  const products = [
    { id: 1, title: "HP Laptop", description: "High-performance laptop suitable for all your needs.", price: 999, image: "link-to-image-1.jpg" },
    { id: 2, title: "DELL Laptop", description: "Reliable and affordable laptop with excellent battery life.", price: 850, image: "link-to-image-2.jpg" },
    { id: 3, title: "Apple MacBook", description: "Sleek design with top-notch performance.", price: 1300, image: "link-to-image-3.jpg" },
  ];

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold text-center mb-6">Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Render Product component for each product */}
        {products.map(product => <Product key={product.id} product={product} />)}
      </div>
    </div>
  );
}

export default Products;
