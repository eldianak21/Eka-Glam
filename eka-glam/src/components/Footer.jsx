import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-pink-500 py-4 text-center">
      <p>&copy; {new Date().getFullYear()} Eka Glam. All rights reserved.</p>
    </footer>
  );
};

export default Footer;