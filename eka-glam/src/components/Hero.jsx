import React from 'react';

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center h-screen bg-pink-300">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}></div>
      <div className="relative text-center text-white p-4">
        <h2 className="text-4xl font-bold">Make Artist</h2>
        <p className="mt-4">Make your face the center of attention.</p>
      </div>
    </section>
  );
};

export default Hero;