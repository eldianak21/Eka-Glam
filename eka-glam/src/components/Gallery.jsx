import React from 'react';
import makeup1 from '../assets/makeup1.jpg';
import makeup2 from '../assets/makeup2.jpg';
import makeup3 from '../assets/makeup3.jpg';
import makeup4 from '../assets/makeup4.jpg';

// Sample image paths; replace these with actual paths to your images
const images = [
  makeup1,
  makeup2,
  makeup3,
  makeup4,
  '/path-to-image5.jpg',
  '/path-to-image6.jpg',
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-3xl font-semibold text-pink-600">Gallery</h3>
        <p className="mt-4 text-gray-600">Explore our stunning makeup looks.</p>
        
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
              <img src={image} alt={`Gallery image ${index + 1}`} className="w-full h-auto transform transition-transform duration-300 hover:scale-105" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;