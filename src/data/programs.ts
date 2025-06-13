export interface Program {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  imageUrl: string;
  coverImageUrl: string;
  objectives: string[];
  targetAudience: string[];
  requirements: string[];
  courseCount: number;
  duration: string;
  schedule: {
    startDate: string;
    endDate: string;
    sessions: {
      day: string;
      time: string;
    }[];
  };
  location: {
    type: 'online' | 'presential' | 'hybrid';
    address?: string;
    platform?: string;
  };
  coordinator: {
    name: string;
    title: string;
    email: string;
    imageUrl: string;
  };
  benefits: string[];
  certification: {
    type: string;
    issuer: string;
    requirements: string[];
  };
}

// Example program using the structure
export const programs: Program[] = [
  {
    id: 'rincon-clubhouse',
    name: 'Rincón Clubhouse',
    slug: 'rincon-clubhouse',
    description: 'Un espacio innovador diseñado para jóvenes donde pueden desarrollar habilidades tecnológicas y sociales en un ambiente seguro y colaborativo. El programa combina el aprendizaje práctico con mentorías personalizadas para fomentar la creatividad y el desarrollo personal.',
    shortDescription: 'Espacio de aprendizaje tecnológico y desarrollo personal para jóvenes.',
    imageUrl: 'https://images.pexels.com/photos/7988087/pexels-photo-7988087.jpeg',
    coverImageUrl: 'https://images.pexels.com/photos/8199562/pexels-photo-8199562.jpeg',
    objectives: [
      'Desarrollar habilidades tecnológicas fundamentales',
      'Fomentar la creatividad y la innovación',
      'Fortalecer habilidades de trabajo en equipo',
      'Promover el pensamiento crítico y la resolución de problemas',
      'Crear un ambiente seguro para el aprendizaje y la exploración'
    ],
    targetAudience: [
      'Jóvenes entre 12 y 18 años',
      'Estudiantes interesados en tecnología',
      'Participantes sin experiencia previa en programación',
      'Adolescentes buscando desarrollo personal'
    ],
    requirements: [
      'Edad entre 12 y 18 años',
      'Interés en tecnología y aprendizaje',
      'Compromiso de asistencia regular',
      'Autorización de padres o tutores'
    ],
    courseCount: 8,
    duration: '4 meses',
    schedule: {
      startDate: '2024-02-01',
      endDate: '2024-05-30',
      sessions: [
        {
          day: 'Lunes',
          time: '14:00 - 17:00'
        },
        {
          day: 'Miércoles',
          time: '14:00 - 17:00'
        }
      ]
    },
    location: {
      type: 'hybrid',
      address: 'Calle Principal #123, Ciudad de Panamá',
      platform: 'Google Meet'
    },
    coordinator: {
      name: 'María González',
      title: 'Coordinadora de Programas Juveniles',
      email: 'maria.gonzalez@fundader.org',
      imageUrl: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg'
    },
    benefits: [
      'Acceso a equipamiento tecnológico moderno',
      'Mentorías personalizadas',
      'Certificado de participación',
      'Proyectos prácticos para el portafolio',
      'Red de contactos en el sector tecnológico',
      'Eventos especiales y workshops'
    ],
    certification: {
      type: 'Certificado de Competencias Digitales',
      issuer: 'Fundación Fundader',
      requirements: [
        'Asistencia mínima del 80%',
        'Completar todos los proyectos asignados',
        'Participación activa en actividades grupales'
      ]
  }
  }
];