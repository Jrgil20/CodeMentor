# CodeMentor

Plataforma estática de tutorías y cursos de programación (foco en materias de la UCAB y fundamentos de desarrollo de software con IA).

## Desarrollo local

Este proyecto utiliza **pnpm** como gestor de paquetes.

```bash
# Instalar dependencias
pnpm install

# Iniciar servidor de desarrollo
pnpm run dev

# Compilar para producción (sitio estático en dist/)
pnpm run build

# Previsualizar compilación local
pnpm run preview
```

## Despliegue estático

El proyecto compila a archivos 100% estáticos en la carpeta `dist/`, compatible con Netlify, Cloudflare Pages o GitHub Pages sin costos de servidor.