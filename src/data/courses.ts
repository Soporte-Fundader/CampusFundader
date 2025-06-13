export interface Course {
  id: string;
  programId: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  imageUrl: string;
  category: string;
  difficulty: 'Básico' | 'Intermedio' | 'Avanzado';
  duration: string;
  totalHours: number;
  modules: {
    title: string;
    description: string;
    duration: string;
    topics: string[];
  }[];
  learningOutcomes: string[];
  prerequisites: string[];
  instructor: {
    name: string;
    title: string;
    bio: string;
    imageUrl: string;
  };
  materials: {
    required: string[];
    recommended: string[];
  };
  evaluationMethod: {
    type: string;
    criteria: string[];
    minimumScore?: number;
  };
  progress?: number;
  isFavorite?: boolean;
  status: 'upcoming' | 'active' | 'completed';
  startDate: string;
  language: string;
  certificate: {
    available: boolean;
    type?: string;
    requirements?: string[];
  };
}

// Example course using the structure
export const courses: Course[] = [
  {
    id: 'intro-programacion-web',
    programId: 'academia-desarrolladores',
    title: 'Introducción a la Programación Web',
    slug: 'intro-programacion-web',
    description: 'Curso fundamental que introduce los conceptos básicos de la programación web, cubriendo HTML, CSS y JavaScript. Los estudiantes aprenderán a crear páginas web interactivas y responsive desde cero.',
    shortDescription: 'Aprende los fundamentos de HTML, CSS y JavaScript para crear tus primeras páginas web interactivas.',
    imageUrl: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg',
    category: 'Desarrollo Web',
    difficulty: 'Básico',
    duration: '3 semanas',
    totalHours: 24,
    modules: [
      {
        title: 'Fundamentos de HTML',
        description: 'Introducción a la estructura básica de páginas web',
        duration: '1 semana',
        topics: [
          'Estructura básica HTML',
          'Elementos y atributos',
          'Formularios y validación',
          'Semántica HTML5'
        ]
      },
      {
        title: 'Estilos con CSS',
        description: 'Aprende a dar estilo y diseño a tus páginas',
        duration: '1 semana',
        topics: [
          'Selectores CSS',
          'Box Model',
          'Flexbox y Grid',
          'Responsive Design'
        ]
      },
      {
        title: 'JavaScript Básico',
        description: 'Introducción a la programación con JavaScript',
        duration: '1 semana',
        topics: [
          'Variables y tipos de datos',
          'Funciones y eventos',
          'DOM Manipulation',
          'Proyecto final'
        ]
      }
    ],
    learningOutcomes: [
      'Crear páginas web estructuradas con HTML5',
      'Aplicar estilos CSS modernos',
      'Implementar interactividad básica con JavaScript',
      'Desarrollar sitios web responsive'
    ],
    prerequisites: [
      'Conocimientos básicos de computación',
      'Acceso a una computadora con internet',
      'No se requiere experiencia previa en programación'
    ],
    instructor: {
      name: 'Carlos Rodríguez',
      title: 'Desarrollador Web Senior',
      bio: 'Desarrollador web con más de 10 años de experiencia en la industria y 5 años como instructor.',
      imageUrl: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg'
    },
    materials: {
      required: [
        'Computadora con acceso a internet',
        'Editor de código (VS Code recomendado)',
        'Navegador web moderno'
      ],
      recommended: [
        'Segunda pantalla para seguir las clases',
        'Cuaderno para apuntes',
        'Cuenta en GitHub'
      ]
    },
    evaluationMethod: {
      type: 'Proyecto Final',
      criteria: [
        'Participación en clase (20%)',
        'Ejercicios prácticos (30%)',
        'Proyecto final (50%)'
      ],
      minimumScore: 70
    },
    progress: 0,
    isFavorite: false,
    status: 'upcoming',
    startDate: '2024-02-01',
    language: 'Español',
    certificate: {
      available: true,
      type: 'Certificado de Finalización',
      requirements: [
        'Completar todos los módulos',
        'Aprobar el proyecto final',
        'Asistencia mínima del 80%'
      ]
    }
  }
];