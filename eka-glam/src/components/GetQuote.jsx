import React, { useState } from 'react';

const GetQuote = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., sending data to an API
    console.log({ name, email, message });
    // Reset form
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section id="contact" className="py-20 bg-pink-300">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-3xl font-semibold text-white">Get a Quote</h3>
        <p className="mt-4 text-white">Fill out the form below to receive a personalized quote!</p>

        <form onSubmit={handleSubmit} className="mt-10 max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="message">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
              rows="4"
              required
            ></textarea>
          </div>
          <button type="submit" className="w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-500 transition">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default GetQuote;