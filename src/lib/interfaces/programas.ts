export interface Programa {
  id: number;
  documentId: string;
  Tituloprograma: string;
  Decripcionprograma: string;
  Coverprograma: {
    id: number;
    documentId: string;
    url: string;
  };
  Objetivos: {
    id: number;
    Objetivosprogama: string;
  }[];
  Modulos: {
    id: number;
    NombreModulo: string;
  }[];
  InfoPrograma: {
    id: number;
    Duracion: string;
    HorarioPrograma: string;
    Modalidad: string;
    Sede: string;
  };
  InfoEncargado: {
    id: number;
    NombreEncargadi: string;
    CoordinadorPrograma: string;
    Contactar: string;
  };
  BeneficiosPrograma: {
    id: number;
    beneficios: string;
  };
}