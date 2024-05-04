import React from 'react';
import backgroundImage from '../image.jpg';

/**
 * Hero component that displays a prominent banner with a background image,
 * introduction text, and a call to action button.
 */
function Hero() {
  return (
    // Background image with text overlay, styled for full coverage and centering.
    <div id="home" className="bg-cover bg-center h-96 text-white py-24 px-10 object-fill" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="md:w-1/2">
        <p className="font-bold text-sm uppercase">Services</p>
        <p className="text-3xl font-bold">Hello there</p>
        <p className="text-2xl mb-10 leading-none">Welcome to our Website</p>
        <a href="#products" className="bg-blue-800 py-2 px-4 text-white font-bold uppercase text-xs rounded hover:bg-blue-600 transition duration-300">See our products</a>
      </div>
    </div>
  );
}

export default Hero;
