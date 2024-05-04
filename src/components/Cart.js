import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

function Cart() {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleCheckout = () => {
    clearCart();
    navigate('/checkout');
  };

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-6">
        <h2 className="text-2xl font-bold text-center mb-6">Your Cart is Empty</h2>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold text-center mb-6 animate-pulse">Your Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id} className="flex justify-between items-center p-4 border-b border-gray-200 transform hover:scale-105 transition duration-300 ease-in-out">
            <div className="flex items-center">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-20 h-20 object-cover mr-4 rounded shadow-lg hover:shadow-xl transition-shadow duration-300"
                srcSet={`${item.image} 300w, ${item.image} 768w, ${item.image} 1280w`}
                sizes="(max-width: 768px) 50vw, (max-width: 1280px) 20vw, 300px"
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
