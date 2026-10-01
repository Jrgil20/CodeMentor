import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/home/Hero';
import UcabTutoring from '../components/home/UcabTutoring';
import Testimonials from '../components/home/Testimonials';
import FeaturedProjects from '../components/home/FeaturedProjects';
import CTASection from '../components/home/CTASection';

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>CodeMentor - Tutorías UCAB para Ingeniería Informática</title>
        <meta name="description" content="Tutorías universitarias especializadas para estudiantes de Ingeniería Informática de la UCAB en Estructura de Datos, Bases de Datos, POO y Desarrollo de Software. Preparación para parciales y proyectos." />
      </Helmet>

      <Hero />
      <UcabTutoring />
      <Testimonials />
      <FeaturedProjects />
      <CTASection />
    </>
  );
};

export default HomePage;