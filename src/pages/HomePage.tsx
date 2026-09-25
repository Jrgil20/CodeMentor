import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/home/Hero';
import UcabTutoring from '../components/home/UcabTutoring';
import FeaturedCourses from '../components/home/FeaturedCourses';
import Testimonials from '../components/home/Testimonials';
import FeaturedProjects from '../components/home/FeaturedProjects';
import BlogPreview from '../components/home/BlogPreview';
import CTASection from '../components/home/CTASection';

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>CodeMentor - Tutorías UCAB y Formación en Software con IA</title>
        <meta name="description" content="Tutorías universitarias para estudiantes de la UCAB en Estructura de Datos, POO e Ingeniería de Software. Cursos prácticos de desarrollo de software asistido por IA." />
      </Helmet>

      <Hero />
      <UcabTutoring />
      <FeaturedCourses />
      <Testimonials />
      <FeaturedProjects />
      <BlogPreview />
      <CTASection />
    </>
  );
};

export default HomePage;