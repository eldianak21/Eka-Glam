import React from 'react';

const servicesList = [
  {
    title: 'Bridal Makeup',
    description: 'Beautiful bridal looks tailored to your special day.',
  },
  {
    title: 'Party Makeup',
    description: 'Glamorous makeup for any occasion or celebration.',
  },
  {
    title: 'Photoshoot Makeup',
    description: 'Professional makeup for photo sessions that makes you shine.',
  },
  {
    title: 'Makeup Classes',
    description: 'Learn the art of makeup with personalized classes.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white text-center">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-semibold text-pink-600">Our Services</h3>
        <p className="mt-4 text-gray-600 text-lg">Explore our range of makeup services designed for all occasions.</p>
        
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesList.map((service, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-pink-600">{service.title}</h4>
              <p className="mt-2 text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;