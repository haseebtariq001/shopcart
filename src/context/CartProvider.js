import React, { useState, useEffect } from 'react';
import { CartContext } from './CartContext';

/**
 * Provides cart context to children components, managing cart operations
 * such as adding, removing, and clearing items, and persisting the cart state
 * to local storage.
 */
const CartProvider = ({ children }) => {
    // Initialize cartItems state from local storage or empty if not available
    const [cartItems, setCartItems] = useState(() => {
        const localData = localStorage.getItem('cartItems');
        return localData ? JSON.parse(localData) : [];
    });

    // Effect to store cart items in local storage on state change
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    /**
     * Adds a product to the cart or increments its quantity if it already exists.
     * @param {Object} product - The product to add to the cart.
     */
    const addToCart = (product) => {
        const existing = cartItems.find(item => item.id === product.id);
        if (existing) {
            // Increment quantity if product already exists in cart
            setCartItems(cartItems.map(item =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            ));
        } else {
            // Add new product to cart
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
    };

    /**
     * Removes a product from the cart.
     * @param {number} productId - The ID of the product to remove.
     */
    const removeFromCart = (productId) => {
        setCartItems(cartItems.filter(item => item.id !== productId));
    };

    /**
     * Clears all products from the cart.
     */
    const clearCart = () => {
        setCartItems([]);
    };
  
    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
