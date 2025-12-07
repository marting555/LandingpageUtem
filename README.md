# Landing Page · Ingeniería en Informática UTEM

Proyecto de landing page desarrollado con **Astro** y **Tailwind CSS** para la asignatura **Computación Móvil** de la Universidad Tecnológica Metropolitana (UTEM).

## 📋 Descripción del Proyecto

Esta landing page fue diseñada para promover la carrera de Ingeniería en Informática de la UTEM, destacando sus principales características, perfil de egreso, plan de estudios y oportunidades que ofrece a los estudiantes. El sitio está optimizado para dispositivos móviles y de escritorio, utilizando tecnologías web estudiadas en la clase de computacion movil.

## 📑 Tabla de Contenidos

- [📋 Descripción del Proyecto](#-descripción-del-proyecto)
- [✅ Requerimientos Cumplidos](#-requerimientos-cumplidos)
- [🛠️ Tecnologías](#️-tecnologías)
- [⚙️ Requisitos previos](#️-requisitos-previos)
- [🚀 Puesta en marcha](#-puesta-en-marcha)
- [📁 Estructura del Proyecto](#-estructura-del-proyecto)
- [🎯 Características Destacadas](#-características-destacadas)
- [🧪 Checklist de Evaluación del Profesor](#-checklist-de-evaluación-del-profesor)
- [📝 Notas de Desarrollo](#-notas-de-desarrollo)
- [👨‍💻 Autor](#-autor)

## ✅ Requerimientos Cumplidos

### Secciones implementadas:
  - ✅ **Hero principal** con título, subtítulo, 2 CTAs, imagen de estudiantes UTEM y Ruta Formativa
  - ✅ **StatsStrip** con estadísticas clave de la carrera
  - ✅ **Perfil de Egreso** con información académica detallada
  - ✅ **Características** con 6+ diferenciadores (título, descripción, iconos)
  - ✅ **Plan de Estudios** con estructura de mallas curriculares
  - ✅ **VideoSection** con video institucional embebido (YouTube)
  - ✅ **Sobre nosotros** con equipo del proyecto y enlaces a perfiles
  - ✅ **Call to Action** con formulario de contacto
  - ✅ **Footer** con información institucional y acreditación

### Tecnologías:
- ✅ Proyecto creado con **Astro 4.16.19**
- ✅ Estilos con **Tailwind CSS** y configuración personalizada (colores UTEM)
- ✅ Layout principal reutilizable (`MainLayout.astro`)
- ✅ Componentes modulares y reutilizables (9 componentes)
- ✅ **Diseño 100% responsivo** (móvil, tablet, escritorio)
- ✅ Navegación sticky con logo oficial UTEM
- ✅ Imágenes optimizadas del sitio oficial UTEM
- ✅ Enlaces funcionales a recursos externos

## ⚙️ Requisitos previos

- Node.js 18 o superior
- npm o pnpm

## 🚀 Puesta en marcha

### Instalación

```bash
npm install
```

### Desarrollo

```bash
npm run dev
```

Por defecto, Astro iniciará el proyecto en `http://localhost:4321`.

### Build de producción

```bash
npm run build
npm run preview
```

## 📁 Estructura del Proyecto

```
trabajo landing page/
├── public/
│   └── images/          # Imágenes y recursos estáticos
├── src/
│   ├── components/      # Componentes reutilizables
│   │   ├── Hero.astro
│   │   ├── StatsStrip.astro
│   │   ├── ProgramOverview.astro
│   │   ├── FeaturesSection.astro
│   │   ├── FeatureCard.astro
│   │   ├── PlanSection.astro
│   │   ├── VideoSection.astro
│   │   ├── SobreNosotros.astro
│   │   └── CallToAction.astro
│   ├── layouts/
│   │   └── MainLayout.astro  # Layout base con header y footer
│   ├── pages/
│   │   └── index.astro       # Página principal
│   └── styles/
│       └── global.css        # Estilos globales
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## 🎯 Características Destacadas

- **Diseño Responsive:** Adaptado para móviles, tablets y escritorio
- **Navegación Fluida:** Scroll suave entre secciones con navegación sticky
- **Componentes Modulares:** Código organizado y reutilizable
- **Optimización de Imágenes:** Assets optimizados para carga rápida
- **Accesibilidad:** Estructura semántica HTML5
- **Colores Institucionales:** Paleta oficial UTEM integrada



## 🚀 Despliegue

El proyecto puede ser desplegado en plataformas como Vercel, Netlify o GitHub Pages:

```bash
npm run build
```

Los archivos estáticos se generarán en la carpeta `dist/`.



### Comandos útiles para Git

```bash
git init
git add .
git commit -m "feat: primera versión de la landing UTEM"
git branch -M main
git remote add origin <URL-de-tu-repositorio>
git push -u origin main
```

## 👨‍💻 Autor

**Jairo Martínez**  
Estudiante de Ingeniería en Informática · UTEM  
Proyecto desarrollado para Computación Móvil - 2025

---


