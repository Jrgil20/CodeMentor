import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/home/Hero';
import FeaturedCourses from '../components/home/FeaturedCourses';
import Testimonials from '../components/home/Testimonials';
import FeaturedProjects from '../components/home/FeaturedProjects';
import BlogPreview from '../components/home/BlogPreview';
import CTASection from '../components/home/CTASection';

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>CodeMentor - Aprende a programar con un mentor experto</title>
        <meta name="description" content="Clases personalizadas de programación con enfoque práctico en algoritmos, estructuras de datos y desarrollo web moderno. Transforme su carrera profesional." />
      </Helmet>

      <Hero />
      <FeaturedCourses />
      <Testimonials />
      <FeaturedProjects />
      <BlogPreview />
      <CTASection />
    </>
  );
};

export default HomePage;