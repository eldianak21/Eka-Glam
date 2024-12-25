import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Footer from '../components/Footer';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
// import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Services/>
      <Gallery/>
      <Footer/>
    </div>
  );
};

export default Home;