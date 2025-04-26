import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import HomePage from './pages/HomePage';
import ResourcesPage from './pages/ResourcesPage';
import ProjectsPage from './pages/ProjectsPage';
import MethodologyPage from './pages/MethodologyPage';
import AboutPage from './pages/AboutPage';
import SelfAssessmentPage from './pages/SelfAssessmentPage';
import ContactPage from './pages/ContactPage';
import CalendarPage from './pages/CalendarPage';
import BlogPage from './pages/BlogPage';

function App() {
  // Detect dark mode preference
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <Router>
      <Helmet>
        <title>CodeMentor - Aprende a programar con un mentor experto</title>
        <meta name="description" content="Clases personalizadas de programación con enfoque práctico en algoritmos, estructuras de datos y desarrollo web moderno." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#3B82F6" />
      </Helmet>
      <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/recursos" element={<ResourcesPage />} />
            <Route path="/proyectos" element={<ProjectsPage />} />
            <Route path="/metodologia" element={<MethodologyPage />} />
            <Route path="/sobre-mi" element={<AboutPage />} />
            <Route path="/auto-evaluacion" element={<SelfAssessmentPage />} />
            <Route path="/contacto" element={<ContactPage />} />
            <Route path="/calendario" element={<CalendarPage />} />
            <Route path="/blog" element={<BlogPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;