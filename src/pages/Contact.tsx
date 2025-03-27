import React from 'react';
import ContactHero from '../components/contact/ContactHero';
import ContactInfo from '../components/contact/ContactInfo';

const Contact = () => {
  return (
    <div className="min-h-screen bg-primary">
      <main>
        <ContactHero />
        <ContactInfo />
      </main>
    </div>
  );
};

export default Contact;