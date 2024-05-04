import React from 'react';

/**
 * Checkout component displays a confirmation message after a successful order placement.
 * It provides visual feedback via text and an animated icon, and a link to return to the shopping page.
 */
function Checkout() {
  return (
    <div className="container mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl transform transition duration-500 hover:scale-105">
      {/* Title for the checkout confirmation page with animation */}
      <h2 className="text-2xl font-bold text-center mb-6 animate-pulse">Checkout</h2>

      {/* Confirmation message for visual feedback */}
      <p className="text-center text-lg mb-3">Thank you for your order!</p>

      {/* Animated icon to visually signify successful order placement */}
      <div className="flex justify-center">
        <img src="https://cdn-icons-png.flaticon.com/512/190/190411.png" alt="Success" className="w-32 h-32 animate-bounce" />
      </div>

      {/* Optional area for additional checkout details or further instructions */}
      <p className="text-center text-gray-600 mt-6">
        Your order has been successfully processed and will be shipped shortly. You will receive an email confirmation soon.
      </p>

      {/* Link to continue shopping with a subtle animation */}
      <div className="mt-10 text-center">
        <a href="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow transition duration-300 ease-in-out animate-pulse">
          Continue Shopping
        </a>
      </div>
    </div>
  );
}

export default Checkout;
