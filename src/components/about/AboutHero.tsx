import React from 'react';

const AboutHero = () => {
  return (
    <section className="relative pt-40 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/abouthero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80 backdrop-blur-[1px]" />

      {/* Gradient & Content */}
      <div className="absolute inset-0 hero-gradient"></div>
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-8 animate-float text-transparent bg-clip-text bg-[length:200%_auto] bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 animate-[shimmerAbout_0.5s_linear_infinite] drop-shadow-[0_0_8px_rgba(96,165,250,0.5)] hover:drop-shadow-[0_0_12px_rgba(96,165,250,0.8)] transition-all duration-300">
          About Avidion
        </h1>
        <p className="text-xl sm:text-2xl text-gray-300 font-medium">
          Pioneering Smart Software for the AI-Driven Era
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
