import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Github, Mail, MessageCircle } from 'lucide-react';
import { CONTACT_CONFIG, getWhatsappUrl } from '../../data/tutoring';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Code size={24} className="text-blue-600 dark:text-blue-400" />
              <span className="font-bold text-lg text-gray-900 dark:text-white">CodeMentor</span>
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              Tutorías especializadas para la UCAB y formación práctica en desarrollo de software con criterio de ingeniería.
            </p>
            <div className="flex space-x-4">
              <a
                href={CONTACT_CONFIG.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub de Jrgil20"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href={getWhatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="text-gray-500 hover:text-emerald-600 dark:text-gray-400 dark:hover:text-emerald-400 transition-colors"
              >
                <MessageCircle size={20} />
              </a>
              <a
                href={`mailto:${CONTACT_CONFIG.email}`}
                aria-label="Email"
                className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Navegación</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/ucab" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-400 transition-colors">
                  Tutorías UCAB
                </Link>
              </li>
              <li>
                <Link to="/recursos" className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
                  Recursos y Labs
                </Link>
              </li>
              <li>
                <Link to="/proyectos" className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link to="/metodologia" className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
                  Metodología
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Recursos de Estudio</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/Jrgil20/gapto10-cfpp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                >
                  gapto10-cfpp (Notas)
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Jrgil20/Asesorias_Estructuta-de-Datos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                >
                  Estructuras de Datos Lab
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Jrgil20/IA-AprendizajeAutomatico_Labs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                >
                  Machine Learning Labs
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Jrgil20/PracticasCiberSeguridad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                >
                  Prácticas Ciberseguridad
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Contacto Directo</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href={getWhatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
                >
                  WhatsApp: +58 424-8981415
                </a>
              </li>
              <li>
                <Link to="/calendario" className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
                  Solicitar Horario
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
                  Mensaje por Formulario
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 dark:text-gray-400">
            <p>
              © {currentYear} CodeMentor • Tutorías UCAB y Desarrollo de Software.
            </p>
            <p className="mt-2 md:mt-0">
              Desarrollado con React, TypeScript y Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;