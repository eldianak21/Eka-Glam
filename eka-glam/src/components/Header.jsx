import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Eka Glam</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#home" className="text-gray-700 hover:text-pink-500">Home</a></li>
            <li><a href="#about" className="text-gray-700 hover:text-pink-500">About</a></li>
            <li><a href="#services" className="text-gray-700 hover:text-pink-500">Services</a></li>
            <li><a href="#gallery" className="text-gray-700 hover:text-pink-500">Gallery</a></li>
            <li><a href="#contact" className="text-gray-700 hover:text-pink-500">Get a Quote</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;