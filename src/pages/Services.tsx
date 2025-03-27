import React from 'react';
import ServicesHero from '../components/services/ServicesHero';
import CoreServices from '../components/services/CoreServices';
import AIServices from '../components/services/AIServices';
import EnterpriseServices from '../components/services/EnterpriseServices';

const Services = () => {
  return (
    <div className="min-h-screen bg-primary">
      <main>
        <ServicesHero />
        <CoreServices />
        <AIServices />
        <EnterpriseServices />
      </main>
    </div>
  );
};

export default Services;