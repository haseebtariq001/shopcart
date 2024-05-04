// src/components/Header.js
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon, ShoppingCartIcon } from '@heroicons/react/outline';
import { CartContext } from '../context/CartContext';

function Header() {
  const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu toggle
  const { cartItems } = useContext(CartContext); // Access cart context for cart item data
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0); // Compute total item count in cart

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            {/* Website logo and title */}
            <div>
              <Link to="/" className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
                <img src="logo.png" alt="Logo" className="h-8 w-8 mr-2" />
                <span className="font-bold">My Website</span>
              </Link>
            </div>
          </div>
          {/* Desktop navigation links */}
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/" className="py-5 px-3 text-gray-700 hover:text-gray-900">Home</Link>
            <a href="#products" className="py-5 px-3 text-gray-700 hover:text-gray-900">Products</a>
            <a href="#footer" className="py-5 px-3 text-gray-700 hover:text-gray-900">Contact</a>
            <Link to="/cart" className="py-5 px-3 text-gray-700 hover:text-gray-900 flex items-center">
              <ShoppingCartIcon className="h-6 w-6 mr-1" />
              ({cartItemCount})
            </Link>
          </div>
          {/* Mobile menu toggle button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {/* Mobile menu content */}
        {isOpen && (
          <div className="md:hidden block" onClick={() => setIsOpen(false)}>
            <Link to="/" className="block py-2 px-4 text-sm hover:bg-gray-200">Home</Link>
            <a href="#products" className="block py-2 px-4 text-sm hover:bg-gray-200">Products</a>
            <a href="#footer" className="block py-2 px-4 text-sm hover:bg-gray-200">Contact</a>
            <Link to="/cart" className="block py-2 px-4 text-sm hover:bg-gray-200 flex items-center">
              <ShoppingCartIcon className="h-6 w-6 mr-1" />
              ({cartItemCount})
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Header;
