import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Footer from '../components/Footer';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import GetQuote from '../components/GetQuote';
// import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Services/>
      <Gallery/>
      <GetQuote/>
      <Footer/>
    </div>
  );
};

export default Home;