import React from 'react';
import { Hero } from '../components/Hero';
import { ProductEcosystem } from '../components/ProductEcosystem';
import { QAServices } from '../components/QAServices';
import { Benefits } from '../components/Benefits';
import { Process } from '../components/Process';
import { ContactSection } from '../components/ContactSection';

export const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <ProductEcosystem />
      <QAServices />
      <Benefits />
      <Process />
      <ContactSection />
    </>
  );
};
