import React, { createContext, useContext } from 'react';

// Creating a React context for managing cart data across the application.
const CartContext = createContext();

/**
 * Custom hook for consuming the CartContext with ease throughout the application.
 * This abstracts useContext to simplify imports and usage of context.
 */
export const useCart = () => useContext(CartContext);

/**
 * Context Provider for the CartContext which allows any child components
 * to consume context values like cart items and cart operations.
 * @param {object} props - The props object.
 * @param {React.ReactNode} props.children - The child components that can access the context.
 * @param {object} props.value - The value to be provided to the context.
 */
export const CartProvider = ({ children, value }) => (
    <CartContext.Provider value={value}>
        {children}
    </CartContext.Provider>
);

// Exporting the CartContext itself in case it is needed directly for context consumers
// or for additional context operations like using Context.Consumer in class components.
export { CartContext };
