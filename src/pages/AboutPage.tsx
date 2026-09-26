import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  Trophy, 
  GraduationCap, 
  Award, 
  Github, 
  Linkedin, 
  MessageCircle, 
  CheckCircle2,
  Star,
  Sparkles
} from 'lucide-react';
import Section from '../components/common/Section';
import Button from '../components/common/Button';
import { CONTACT_CONFIG, getWhatsappUrl } from '../data/tutoring';
import { HIGHLIGHTED_GRADES, EDUCATION_PROGRAMS, STUDENT_INFO } from '../data/academic';

const AboutPage: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const achievements = [
    {
      title: "1.er Lugar — SolucionaLab Hackathon",
      organization: "Mercantil Seguros (2025)",
      description: "Co-desarrollo de un agente NLP inteligente para la detección de patrones críticos y validación de violaciones de SLA en feedback de usuarios."
    },
    {
      title: "Programación Competitiva (ICPC)",
      organization: "ICPC Super Regional Venezuela-Colombia",
      description: "Clasificado al Super Regional internacional y 1.º y 5.º lugar en los maratones oficiales de programación competitiva de la UCAB."
    },
    {
      title: "IBM Z Student Ambassador",
      organization: "IBM (2025-2026)",
      description: "Capacitador y embajador estudiantil en computación empresarial, COBOL y Python en entornos de mainframe z/OS."
    },
    {
      title: "Lead Organizer — GitHub Copilot Dev Days",
      organization: "GitHub Community (2026)",
      description: "Coordinación técnica, diseño de actividades prácticas de ingeniería de software asistida por IA y evaluación de prompts."
    },
    {
      title: "Arbitrum Excellence Scholarship",
      organization: "Arbitrum Foundation (2024–2025)",
      description: "Beca de excelencia otorgada por mérito académico y aportes al ecosistema Web3."
    },
    {
      title: "Facilitador Universitario UCAB",
      organization: "Universidad Católica Andrés Bello (2025)",
      description: "Dictado del microcurso 'Seguridad en Redes': hardening de dispositivos y fundamentos de protección en infraestructura."
    }
  ];

  const skillGroups = [
    {
      category: "Lenguajes",
      skills: ["C", "C++", "Java", "Python", "JavaScript", "SQL", "COBOL (Básico)"]
    },
    {
      category: "Backend & Bases de Datos",
      skills: ["Node.js", "Express", "REST APIs", "JDBC", "MySQL", "Supabase", "Clean Architecture"]
    },
    {
      category: "Fundamentos CS (Foco Tutorías)",
      skills: ["Estructuras de Datos", "Algoritmos", "OOP", "TDD", "Memoria Dinámica", "Big O", "Async I/O"]
    },
    {
      category: "AI & Web3",
      skills: ["Azure AI Foundry", "Prompt Engineering", "Agentes NLP", "Solana", "Smart Contracts"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Sobre Mí | Jesús R. Gil - CodeMentor UCAB</title>
        <meta 
          name="description" 
          content="Conoce la trayectoria de Jesús R. Gil: estudiante avanzado de Ingeniería Informática en la UCAB, competidor ICPC, ganador de hackathons y mentor de programación." 
        />
      </Helmet>

      <div className="pt-20">
        
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-gray-900 to-indigo-950 text-white py-16 md:py-24 border-b border-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
              
              <div className="w-full md:w-2/3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-300 border border-blue-500/30 mb-4">
                  <GraduationCap size={15} />
                  Estudiante Avanzado de {STUDENT_INFO.degree} • {STUDENT_INFO.university}
                </div>

                <h1 className="text-4xl md:text-5xl font-black mb-3 tracking-tight">
                  {STUDENT_INFO.name}
                </h1>

                <p className="text-lg md:text-xl text-blue-200 font-medium mb-6">
                  Backend Developer | AI & Web3 | Competidor ICPC
                </p>

                <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-6">
                  Mi trayectoria técnica combina la rigurosidad del código de bajo y alto nivel con la resolución algorítmica bajo restricciones estrictas de tiempo y memoria. He representado a la UCAB en el Super Regional ICPC y obtenido podios en maratones de programación. Como tutor, enseño a pensar con criterio de ingeniería, sin atajos ni código a ciegas.
                </p>

                {/* Enlaces de Contacto y Redes */}
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="https://www.linkedin.com/in/jesus-r-gil/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-4 py-2.5 rounded-lg transition-colors shadow-sm"
                  >
                    <Linkedin size={15} />
                    LinkedIn
                  </a>
                  <a
                    href={CONTACT_CONFIG.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white text-xs font-semibold px-4 py-2.5 rounded-lg border border-gray-700 transition-colors"
                  >
                    <Github size={15} />
                    GitHub ({CONTACT_CONFIG.githubUser})
                  </a>
                  <a
                    href={getWhatsappUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-4 py-2.5 rounded-lg transition-colors shadow-sm"
                  >
                    <MessageCircle size={15} />
                    WhatsApp
                  </a>
                </div>
              </div>

              {/* Card Resumen Rápido */}
              <div className="w-full md:w-1/3 bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-xl text-xs space-y-4">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-white/10 pb-2">
                  Ficha Técnica
                </h3>
                <div>
                  <span className="text-gray-400 block mb-0.5">Ubicación:</span>
                  <span className="font-semibold text-white">{STUDENT_INFO.location}</span>
                </div>
                <div>
                  <span className="text-gray-400 block mb-0.5">Alma Máter:</span>
                  <span className="font-semibold text-white">{STUDENT_INFO.university} ({STUDENT_INFO.campus})</span>
                </div>
                <div>
                  <span className="text-gray-400 block mb-0.5">Programa / Plan:</span>
                  <span className="font-semibold text-white">{STUDENT_INFO.degree} ({STUDENT_INFO.curriculumPlan})</span>
                </div>
                <div>
                  <span className="text-gray-400 block mb-0.5">Especialidad en Tutorías:</span>
                  <span className="font-semibold text-blue-400">Algoritmos, Estructura de Datos, Bases de Datos, Dev Software</span>
                </div>
                <div>
                  <span className="text-gray-400 block mb-0.5">Correo institucional:</span>
                  <span className="font-semibold text-white break-all">{STUDENT_INFO.email}</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Récord Académico / Materias Clave */}
        <Section
          title="Récord Académico y Materias Núcleo"
          subtitle="Desempeño sobresaliente comprobado en las materias fundamentales de ciencias de la computación"
          centered
          background="white"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {HIGHLIGHTED_GRADES.map((item) => (
              <div
                key={item.id}
                className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-850 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm hover:border-blue-300 dark:hover:border-blue-600 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono font-bold text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded">
                      {item.code}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/60 dark:text-blue-300">
                      <Star size={12} className="fill-current text-blue-600 dark:text-blue-400" />
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">
                    {item.name}
                  </h3>

                  <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100 dark:border-gray-700/60 flex items-center justify-between text-[11px] text-gray-500 dark:text-gray-400">
                  <span>{item.period}</span>
                  <span className="font-bold text-blue-600 dark:text-blue-400 text-xs">
                    {item.grade} / {item.maxGrade} pts
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Logros y Liderazgo */}
        <Section
          title="Logros, Competencias y Liderazgo"
          subtitle="Resultados comprobados en programación competitiva, hackathons y liderazgo de comunidades técnicas"
          centered
          background="light"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          >
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
                    <Trophy size={20} />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-3">
                    {item.organization}
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Section>

        {/* Stack Tecnológico */}
        <Section
          title="Stack Tecnológico y Fundamentos"
          subtitle="Dominio técnico de bajo y alto nivel aplicado tanto al desarrollo backend como a la enseñanza"
          centered
          background="white"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {skillGroups.map((group, idx) => (
              <div
                key={idx}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700"
              >
                <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-xs font-medium bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2.5 py-1 rounded-lg border border-gray-200 dark:border-gray-600"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Educación y Diplomados UCAB */}
        <Section
          title="Educación, Diplomados y Extensión UCAB"
          subtitle="Formación universitaria continua en la Universidad Católica Andrés Bello"
          centered
          background="light"
        >
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <h3 className="text-base font-bold text-gray-900 dark:text-white">
                  Formación Académica Universitaria
                </h3>
              </div>
              
              <div className="space-y-4">
                {EDUCATION_PROGRAMS.map((edu, idx) => (
                  <div 
                    key={idx} 
                    className={`p-4 rounded-xl border text-xs ${
                      edu.highlight 
                        ? 'bg-blue-50/50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800/50' 
                        : 'bg-gray-50 dark:bg-gray-750 border-gray-200 dark:border-gray-700'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="font-bold text-gray-900 dark:text-white text-sm">
                        {edu.title}
                      </span>
                      {edu.highlight && (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200">
                          UCAB
                        </span>
                      )}
                    </div>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">
                      {edu.institution} — <span className="text-gray-500 dark:text-gray-400">{edu.school} ({edu.campus})</span>
                    </p>
                    <p className="text-emerald-600 dark:text-emerald-400 font-semibold mb-2">
                      Status: {edu.status}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Award className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                  <h3 className="text-base font-bold text-gray-900 dark:text-white">
                    Certificaciones Internacionales
                  </h3>
                </div>
                <ul className="space-y-4 text-xs text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-gray-900 dark:text-white text-sm">GitHub Foundations</span>
                      <p className="text-xs text-gray-500 mt-0.5">Certificación oficial en flujos de trabajo profesionales de Git y GitHub.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-gray-900 dark:text-white text-sm">Generative AI Foundations</span>
                      <p className="text-xs text-gray-500 mt-0.5">Amazon Web Services (AWS) — Fundamentos y modelos generativos.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-gray-900 dark:text-white text-sm">C/C++ & Java Fundamentals</span>
                      <p className="text-xs text-gray-500 mt-0.5">Certificaciones técnicas de fundamentos en Platzi y Udemy.</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-700 bg-emerald-50/50 dark:bg-emerald-950/20 p-4 rounded-xl border border-emerald-200 dark:border-emerald-900/40">
                <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-300 font-bold text-xs mb-1">
                  <Sparkles size={14} />
                  Compromiso Pedagógico
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                  En mis tutorías combino la exigencia metodológica de la UCAB con casos prácticos reales para asegurar que domines la lógica y los parciales sin memorizar soluciones.
                </p>
              </div>
            </div>

          </div>

          {/* CTA hacia Tutorías */}
          <div className="mt-12 text-center">
            <Button to="/ucab" variant="primary" size="lg">
              Ver tutorías para la UCAB
            </Button>
          </div>
        </Section>

      </div>
    </>
  );
};

export default AboutPage;