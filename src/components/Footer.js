import React, { useState } from 'react';

/**
 * Footer component for the website.
 * Includes social media links, a newsletter subscription form, and copyright information.
 */
function Footer() {
  // State for managing the input email and any validation errors
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  /**
   * Validates the given email using a regular expression to ensure it follows
   * a standard email format.
   * @param {string} email - Email to validate
   * @returns {boolean} - True if the email is valid, otherwise false
   */
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  /**
   * Handles the click event on the Subscribe button.
   * Validates the email and either shows an error or clears the form
   * and shows a success message.
   */
  const handleSubscribe = () => {
    if (validateEmail(email)) {
      setError(''); // Clear any previous error
      // Simulate a subscription action, normally here you would make an API call
      alert('Thank you for subscribing!');
      setEmail(''); // Reset the email input after successful subscription
    } else {
      setError('Please enter a valid email address.');
    }
  };

  return (
    <footer id="footer" className="bg-gray-800 text-white text-center p-5 w-full">
      <div className="mb-2">
        {/* Social media links */}
        <a href="https://www.instagram.com" className="mx-2 hover:text-blue-400">Instagram</a>|
        <a href="https://www.facebook.com" className="mx-2 hover:text-blue-400">Facebook</a>|
        <a href="https://www.twitter.com" className="mx-2 hover:text-blue-400">Twitter</a>
      </div>
      <div className="mt-2">
        {/* Subscription form */}
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email for newsletter"
          className="p-2 text-gray-800 border-0 rounded focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSubscribe}
          className="ml-2 p-2 bg-blue-500 rounded hover:bg-blue-600 transition duration-300 ease-in-out"
        >
          Subscribe
        </button>
        {error && <p className="text-red-400 text-xs mt-2">{error}</p>}
      </div>
      {/* Copyright information */}
      <p className="mt-5 text-gray-400">
        © 2024 My Website. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
