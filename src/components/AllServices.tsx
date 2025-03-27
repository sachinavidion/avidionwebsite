import React from 'react';

const services = [
  'Website Development',
  'Mobile App Development',
  'Custom Software',
  'E-Commerce Development',
  'CRM & ERP Systems',
  'AI Integration',
  'HealthTech / EdTech / Logistics Platforms',
  'Cloud & Digital Transformation'
];

const AllServices = () => {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-dark-purple/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-3xl transition-all duration-500 group cursor-pointer hover:shadow-glow-lg glow-on-hover"
            >
              <h3 className="text-xl font-semibold text-white group-hover:text-accent-glow transition-colors duration-500">
                {service}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllServices