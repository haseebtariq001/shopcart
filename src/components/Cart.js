import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

/**
 * Cart component displays the cart items and provides options to remove items and checkout.
 * Uses the CartContext for managing cart state and actions.
 */
function Cart() {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext); // Access cart context
  const navigate = useNavigate(); // Hook for programmatically navigating

  /**
   * Calculate the total cost of the items in the cart.
   * @returns {number} The total price of all items in the cart.
   */
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  /**
   * handleCheckout handles the checkout process by clearing the cart and redirecting to the checkout page.
   */
  const handleCheckout = () => {
    clearCart(); // Clears all items from the cart
    navigate('/checkout'); // Navigates to the checkout confirmation page
  };

  // Display message if cart is empty
  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-6">
        <h2 className="text-2xl font-bold text-center mb-6">Your Cart is Empty</h2>
      </div>
    );
  }

  // Render cart items if not empty
  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold text-center mb-6 animate-pulse">Your Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id} className="flex justify-between items-center p-4 border-b border-gray-200 transform hover:scale-105 transition duration-300 ease-in-out">
            <div className="flex items-center">
              {/* Image made responsive with dynamic sizes and srcSet */}
              <img 
                src={item.imageSmall} // Ensure you use the smallest by default for better loading times
                alt={item.title} 
                className="w-16 h-16 object-cover mr-4 rounded shadow-lg hover:shadow-xl transition-shadow duration-300" // Smaller default size
                srcSet={`${item.imageSmall} 300w, ${item.imageMedium} 500w, ${item.imageLarge} 800w`}
                sizes="(max-width: 768px) 15vw, (max-width: 1024px) 12vw, 150px"
              />
              <span className="text-lg font-medium">{item.title} : ${item.price} (x{item.quantity})</span>
            </div>
            <button onClick={() => removeFromCart(item.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out">
              Remove
            </button>
          </li>
        ))}
      </ul>
      <div className="text-center mt-6">
        <span className="text-lg font-bold">Total: ${totalAmount.toFixed(2)}</span>
      </div>
      <button onClick={handleCheckout} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block mx-auto shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
        Checkout
      </button>
    </div>
  );
}

export default Cart;
