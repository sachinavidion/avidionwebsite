import React from 'react';
import Hero from '../components/Hero';
import FeaturedServices from '../components/FeaturedServices';
import WhyAvidion from '../components/WhyAvidion';

const Home = () => {
  return (
    <main>
      <Hero />
      <FeaturedServices />
      <WhyAvidion />
    </main>
  );
};

export default Home;