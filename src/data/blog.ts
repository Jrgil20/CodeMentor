import { BlogPost } from '../types';

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Principios SOLID en la Programación Moderna",
    excerpt: "Una guía práctica sobre cómo aplicar los principios SOLID para escribir código más mantenible y escalable.",
    content: "Los principios SOLID son fundamentales para el desarrollo de software moderno. En este artículo, exploraremos cada principio con ejemplos prácticos y casos de uso reales...",
    date: "2023-05-15",
    author: "Profesor de Programación",
    image: "https://images.pexels.com/photos/1181290/pexels-photo-1181290.jpeg?auto=compress&cs=tinysrgb&w=600",
    tags: ["Arquitectura", "Buenas Prácticas", "Desarrollo"],
    slug: "principios-solid-programacion-moderna"
  },
  {
    id: 2,
    title: "Optimización de Rendimiento en Aplicaciones React",
    excerpt: "Técnicas avanzadas para mejorar significativamente el rendimiento de tus aplicaciones React.",
    content: "React ofrece un rendimiento excepcional por defecto, pero hay numerosas técnicas para optimizar aún más tus aplicaciones. En este artículo, exploraremos memoización, virtualización, code splitting y más...",
    date: "2023-06-22",
    author: "Profesor de Programación",
    image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600",
    tags: ["React", "Performance", "Frontend"],
    slug: "optimizacion-rendimiento-aplicaciones-react"
  },
  {
    id: 3,
    title: "Introducción a TypeScript para Desarrolladores JavaScript",
    excerpt: "Guía completa para empezar con TypeScript si ya conoces JavaScript.",
    content: "TypeScript se ha convertido en una herramienta esencial para proyectos de desarrollo modernos. En esta guía, veremos cómo TypeScript mejora JavaScript y cómo empezar a usarlo en tus proyectos existentes...",
    date: "2023-07-10",
    author: "Profesor de Programación",
    image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600",
    tags: ["TypeScript", "JavaScript", "Tutoriales"],
    slug: "introduccion-typescript-desarrolladores-javascript"
  }
];