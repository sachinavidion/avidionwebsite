import React from 'react';
import { ArrowRight } from 'lucide-react';

const ServicesCTA = () => {
  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 hero-gradient opacity-50"></div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
          Let's Build Smart Software Together
        </h2>
        <p className="text-xl text-gray-300 mb-12">
          Whether you're a startup or an enterprise, we can bring your vision to life 
          with intelligent and scalable tech.
        </p>
        <button className="group inline-flex items-center gap-2 px-8 py-4 text-lg font-medium text-white bg-accent hover:bg-accent-glow rounded-full transition-all duration-300 shadow-glow-md hover:shadow-glow-lg">
          Discuss a Project
          <ArrowRight className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default ServicesCTA;