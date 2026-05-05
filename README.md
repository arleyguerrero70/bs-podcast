# BlackSip Podcast Experience

Una experiencia web interactiva que cuenta la historia de cómo un podcast unifica la cultura de BlackSip, construida con React, Framer Motion y Lenis.

## 🚀 Tecnologías

- **React 18** - Framework UI
- **Vite** - Build tool ultrarrápido
- **Framer Motion** - Animaciones smooth
- **Lenis** - Smooth scroll
- **Tailwind CSS** - Styling utilities
- **Axios** - HTTP client para Mailchimp

## 📋 Requisitos previos

- Node.js 16+ instalado
- npm o yarn
- Cuenta de Mailchimp (para capturar leads)

## 🏗️ Setup inicial

### 1. Clonar el repositorio

```bash
git clone <repo-url>
cd blacksip-podcast-experience
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar variables de entorno

Copia `.env.example` a `.env.local`:

```bash
cp .env.example .env.local
```

Completa los valores de Mailchimp:
```
VITE_MAILCHIMP_API_KEY=tu_api_key
VITE_MAILCHIMP_AUDIENCE_ID=tu_audience_id
VITE_MAILCHIMP_REGION=us5
```

### 4. Obtener credenciales de Mailchimp

1. Ve a [mailchimp.com](https://mailchimp.com)
2. Crea una cuenta gratuita
3. Ve a **Account → Extras → API Keys**
4. Copia tu API Key
5. Ve a **Audience** y copia el **Audience ID**
6. Identifica tu **region** (ej: us5, eu1) en la URL: `https://us5.admin.mailchimp.com`

## 🎮 Desarrollo

```bash
npm run dev
```

El sitio estará disponible en `http://localhost:5173`

## 🏗️ Producción

```bash
npm run build
```

Los archivos compilados estarán en `dist/`

## 📂 Estructura del Proyecto

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.jsx
│   │   ├── CustomCursor.jsx
│   │   └── Footer.jsx
│   └── sections/
│       ├── Hero.jsx
│       ├── FragmentationScroll.jsx
│       ├── BentoGrid.jsx
│       ├── MetricsReveal.jsx
│       ├── EvolutionPath.jsx
│       └── CTAForm.jsx
├── hooks/
│   ├── useInView.js
│   └── useMousePosition.js
├── styles/
│   └── globals.css
├── utils/
│   ├── mailchimp.js
│   └── constants.js
└── App.jsx
```

## 🎨 Customización

### Cambiar textos y headlines

Edita `src/utils/constants.js` - toda la copy está centralizada aquí.

### Modificar colores

Los colores están en:
- `tailwind.config.js` - para Tailwind
- `src/styles/globals.css` - para variables CSS globales

### Ajustar animaciones

Las animaciones Framer Motion están en cada componente de sección. Puedes:
- Cambiar duraciones (`duration`)
- Modificar delays (`delay`)
- Ajustar valores iniciales/finales en `variants`

## 📊 Secciones principales

### Hero
- Headline impactante
- Subheadline descriptiva
- CTA principal
- Indicador de scroll

### Fragmentation Scroll
- SVG animado que se dibuja al scrollear
- Lista de problemas
- Contexto visual del reto

### Bento Grid
- 4 bloques interactivos
- Hover effects con revelación de métricas
- Progressive disclosure de información

### Metrics Reveal
- 3 estadísticas principales
- Expandible para más contexto
- CTA secundario

### Evolution Path
- Línea temporal de 4 fases
- De cultura interna a expansión B2B
- Roadmap visual

### CTA Form
- Integración con Mailchimp
- Validación de campos
- Mensaje de éxito
- Manejo de errores

## 🔐 Seguridad

- Las credenciales de Mailchimp están en `.env.local` (no commiteado)
- La API se llama desde el cliente (considera mover a un backend si es needed)
- Validación básica de email

## 🚨 Troubleshooting

**"Mailchimp integration not working"**
- Verifica que las variables `.env.local` están bien copiadas
- Asegúrate de usar la API Key correcta (no Account ID)
- Valida el Audience ID en Mailchimp

**"Lenis scroll no funciona"**
- Limpia el cache: `npm run build && npm run preview`
- Revisa la consola del navegador

**"Animaciones lentas"**
- Reduce los delays en `constants.js`
- Baja la duración de transiciones en componentes

## 📝 Notas de desarrollo

- Usa `useInView()` para trigger animaciones al scrollear
- El `CustomCursor` funciona automáticamente en buttons y links
- Progressive Disclosure está implementado en `MetricsReveal` y `BentoGrid`
- Todos los textos están en `constants.js` para fácil edición

## 📄 Licencia

Todos los derechos reservados © 2024 BlackSip

## 👥 Contacto

Para preguntas o sugerencias, contacta al equipo de BlackSip.
# bs-podcast
