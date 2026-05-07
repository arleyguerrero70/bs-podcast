export const SITE_CONFIG = {
  title: 'Podcast: La voz de nuestra cultura',
  description: 'Descubre cómo un podcast unifica nuestra cultura, amplifica nuestra voz y abre nuevos mercados.',
  company: 'BlackSip',
  companyUrl: 'https://blacksip.com',
};

export const CONTENT = {
  nav: {
    home: { label: 'Inicio', href: '#home' },
  },

  hero: {
    headline: 'Nos convertimos en una voz',
    subheadline: 'La innovación en E-commerce no es solo técnica, es cultural.',
    cta: 'Nuestra cultura como activo estratégico',
  },

  preambulo: {
    quote: 'La mejora del 1% en muchas áreas genera un cambio extraordinario a largo plazo.',
    body: {
      intro:
        'Durante años, el equipo británico de ciclismo fue mediocre. Todo cambió cuando Dave Brailsford implementó la estrategia de la acumulación de mejoras marginales:',
      improvements: [
        'Ajustaron la posición de los ciclistas.',
        'Mejoraron la ropa.',
        'Cambiaron la almohada en la que dormían.',
        'Optimizaron la higiene para evitar enfermedades.',
      ],
      resultsTitle: 'Resultado:',
      results: [
        'En 5 años ganaron 66 medallas olímpicas y paralímpicas.',
        'Ganaron 5 Tour de Francia en 6 años.',
      ],
      closing:
        'Un entorno de mejora continua y hábitos positivos puede convertir a un equipo promedio en una potencia mundial.',
    },
  },

  protagonista: {
    diploma: {
      title: 'Diploma de Podcaster.',
      subtitle: 'Aún sigo aprendiendo cositas, vuelve pronto...',
      href: 'https://platzi.com/p/arleyguerrero/ruta/7338-ruta/diploma/detalle/',
      thumbnailSrc: '/dist/assets/thumb.png',
      thumbnailAlt: 'Platzi',
      providerLabel: 'Platzi',
      providerUrl: 'www.platzi.com',
    },
    learned: {
      heading: 'Aprendí qué:',
      items: [
        {
          title: 'Los podcast nos entregan mucha data',
          href: 'https://naranjamedia.co/casos-de-exito/nu',
        },
        {
          title: 'Compartir la cultura',
          href: 'https://youtu.be/n3YDMGQMj4s?si=5RHN5QujfifAwz6U&t=4174',
        },
        {
          title: 'El auge del Podcast',
          href: 'https://www.revistapym.com.co/articulos/digital/74929/el-auge-del-podcast-tendencias-y-proyecciones',
        },
      ],
    },
  },

  pilotMetrics: {
    headline: '¿Qué aprendidmos en nuestro piloto?',
    kpis: [
      { label: 'Últimos 30 días', value: 1, deltaLabel: '-67%' },
      { label: 'Todos los tiempos', value: 45 },
    ],
    spotifyCta: {
      title: 'Escucha el episodio en Spotify',
      subtitle: 'Visítanos y escucha el piloto.',
      href: 'https://open.spotify.com/show/1Lk3ruMhpHYGFJXPhmIbJ8',
    },
    downloadsByLocation: {
      title: 'Descargas por ubicación',
      subtitle: '7 de abril – 6 de mayo de 2026',
      imageSrc: '/dist/assets/mapa.png',
      imageAlt: 'Mapa de descargas por ubicación',
      rows: [
        { name: 'United States', downloads: 12, percent: 54.55 },
        {
          name: 'Colombia',
          downloads: 5,
          percent: 22.73,
          children: [
            { name: 'Bogotá', downloads: 4, percent: 18.18 },
            { name: 'Medellín', downloads: 1, percent: 4.55 },
          ],
        },
      ],
    },
    listeners: {
      title: 'Oyentes',
      series: [
        { month: '2025-03', value: 9 },
        { month: '2025-04', value: 14 },
        { month: '2025-05', value: 1 },
        { month: '2025-06', value: 0 },
        { month: '2025-07', value: 0 },
        { month: '2025-08', value: 0 },
        { month: '2025-09', value: 1 },
        { month: '2025-10', value: 2 },
        { month: '2025-11', value: 1 },
        { month: '2025-12', value: 0 },
        { month: '2026-01', value: 4 },
        { month: '2026-02', value: 3 },
        { month: '2026-03', value: 0 },
        { month: '2026-04', value: 4 },
      ],
    },
  },

  fragmentation: {
    headline: 'El ADN de la innovación',
    description: 'Compartiremos de la voz de nuestros lideres, la evolución de nuestra cultura, su impacto en el equipo, y cómo nos ayuda a ser más eficientes y efectivos.',
    listItems: [
      'La voz conecta mejor que los textos',
      'Disminuiremos la información dispersa',
      'Dificultad en transmitir las ideas',
      'Fricciones que restan energía y claridad',
    ],
  },

  solution: {
    headline: 'La solución: Un podcast como voz unificada',
    description: 'No es solo audio. Es una ritualidad. Un espacio donde la cultura cobra vida, donde los valores resuenan, donde nos convertimos en uno.',
    benefits: [
      'Comunicación clara y accesible para todos',
      'Cultura compartida en un espacio sin fricciones',
      'Voz auténtica de la marca',
      'Conexión humana en un entorno remoto',
    ],
  },

  bentoGrid: {
    headline: 'Se enseña con ejemplo',
    description: '',
    items: [
      {
        id: 'communication',
        title: '¿Quienes somos?',
        description: 'Le hablaremos directamente a nuestros Blacksippers.',
        metric: 'Será el primer episodio',
        tooltip: 'Nuevamente nuestro C Level nos presentará nuestra misión por darle identidad a nuestra cultura.',
      },
      {
        id: 'cohesion',
        title: 'Cohesión cultural',
        description: '¿Cómo eran nuestras versiones antes de la fusión?',
        metric: 'Nuestro sentimiento de pertenencia',
        tooltip: 'Recordaremos con cariño de dónde venimos, y qué conservaremos en esta nueva versión.',
      },
      {
        id: 'authenticity',
        title: 'Autenticidad compartida',
        description: 'Historias reales de nuestro equipo, sin filtros.',
        metric: 'Confianza en nuestro equipo de lideres',
        tooltip: 'Nuestros directores de forma autentica nos impulsarán para los retos que enfrentaremos.',
      }
    ],
  },

  metrics: {
    headline: 'El mercado habla claro',
    description: 'Los datos demuestran que el podcast es la inversión que más crece en comunicación corporativa.',
    stats: [
      {
        value: '125%',
        label: 'crecimiento anual en inversión en podcasts empresariales',
        source: '2023-2024',
      },
      {
        value: '3.2x',
        label: 'retorno en engagement cuando una marca tiene podcast',
        source: 'Marketing Intelligence',
      },
      {
        value: '87%',
        label: 'de empresas Fortune 500 ahora producen contenido en podcast',
        source: '2024 Report',
      },
    ],
    cta: 'Conviértete en de las primeras agencias en Spotify y Apple Podcast',
  },

  evolution: {
    headline: '¿Empezamos?',
    description: 'Primero, consolidamos la voz interna. Luego, la transformamos en oportunidad.',
    phases: [
      {
        phase: 'Fase 1: Identidad interna',
        duration: 'Ahora - 6 meses',
        description: 'Construimos nuestros primeros episodios, consolidamos la voz y cultura de BlackSip .',
        focus: 'Cultura, valores, historias del equipo',
      },
      {
        phase: 'Fase 2: Consolidación & datos',
        duration: '3 - 6 meses',
        description: 'Recopilamos feedback, métricas y experiencias que demuestran el impacto interno.',
        focus: 'Engagement, retención, satisfacción interna',
      },
      {
        phase: 'Fase 3: Expansión B2B',
        duration: '8 - 12 meses',
        description: 'Lanzamos "El Podcast de BlackSip" como recurso de valor para clientes y mercado.',
        focus: 'Casos de éxito, estrategia, tendencias en marketing y e-commerce',
      }
    ],
  },

  cta: {
    headline: '¿Listo para construir esta voz juntos?',
    description: 'No es solo un podcast. Es la voz de BlackSip, coherente y potente.',
    formFields: {
      name: '¿Cuál es tu nombre?',
      email: '¿Y tu correo?',
      role: '¿Cuál es tu rol en BlackSip?',
      message: 'Cuéntanos: ¿Por qué es importante para ti que esto suceda?',
    },
    submitButton: 'Trabajemos juntos',
    successMessage: 'Perfecto. Nos comunicaremos muy pronto para empezar.',
  },

  footer: {
    copyright: '© 2024 BlackSip. Todos los derechos reservados.',
    links: [
      { label: 'Contacto', href: '#contact' },
      { label: 'Política de privacidad', href: '/privacy' },
      { label: 'Sitio web', href: 'https://blacksip.com' },
    ],
  },
};
