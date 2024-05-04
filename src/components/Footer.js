import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSubscribe = () => {
    if (validateEmail(email)) {
      setError('');
      alert('Thank you for subscribing!');
      setEmail('');
    } else {
      setError('Please enter a valid email address.');
    }
  };

  return (
    <footer id="footer" className="bg-gray-800 text-white text-center p-5 w-full">
      <div className="mb-2">
        {/* Social media icons */}
        <a href="https://www.instagram.com" className="mx-2 hover:text-blue-400">
          <FontAwesomeIcon icon={faInstagram} size="lg" />
        </a>|
        <a href="https://www.facebook.com" className="mx-2 hover:text-blue-400">
          <FontAwesomeIcon icon={faFacebook} size="lg" />
        </a>|
        <a href="https://www.twitter.com" className="mx-2 hover:text-blue-400">
          <FontAwesomeIcon icon={faTwitter} size="lg" />
        </a>
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
      <p className="mt-5 text-gray-400">
        © 2024 My Website. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
