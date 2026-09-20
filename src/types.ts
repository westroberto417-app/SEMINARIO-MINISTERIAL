export interface SeccionLeccion {
  titulo: string;
  contenido: string;
}

export interface EjemploPractico {
  titulo: string;
  contenido: string;
}

export interface RecursoMultimedia {
  tipo: 'audio' | 'video' | 'documento' | 'infografia' | 'evaluacion' | 'diapositivas';
  titulo: string;
  descripcion: string;
  url?: string;
}

export interface EnriquecimientoLeccion {
  ejemplos?: EjemploPractico[];
  recursos?: RecursoMultimedia[];
}

export interface Leccion {
  id: string;
  titulo: string;
  subtitulo: string;
  versiculo: string;
  ministro: string;
  introduccion: string;
  secciones: SeccionLeccion[];
  reflexion: string;
}

export interface Nivel {
  id: number;
  titulo: string;
  subtitulo: string;
  descripcion: string;
  color: string;
  colorSolid: string;
  icono: 'Eye' | 'BookOpen' | 'HeartPulse' | 'Church';
  imagen: string;
  lecciones: Leccion[];
}

export interface RecursoGeneral {
  tipo: 'documento' | 'audio' | 'video' | 'carpeta';
  titulo: string;
  descripcion: string;
  url: string;
}

export interface Curso {
  titulo: string;
  subtitulo: string;
  descripcion: string;
  imagenHero: string;
  niveles: Nivel[];
}

export interface ProgresoNivel {
  total: number;
  hechas: number;
  porcentaje: number;
}
