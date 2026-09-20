import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Layers, BookOpen, ArrowRight, PlayCircle } from 'lucide-react';
import { Curso } from '../types';
import { useProgress } from '../context/ProgressContext';

interface HeroHeaderProps {
  curso: Curso;
  totalLecciones: number;
}

export default function HeroHeader({ curso, totalLecciones }: HeroHeaderProps) {
  const { completadas, ultimaLeccionVisitada } = useProgress();

  // Target last visited lesson, or next pending lesson, or first lesson
  let targetLessonLink = '/nivel/1/leccion/1-1';
  if (ultimaLeccionVisitada?.nivelId && ultimaLeccionVisitada?.leccionId) {
    targetLessonLink = `/nivel/${ultimaLeccionVisitada.nivelId}/leccion/${ultimaLeccionVisitada.leccionId}`;
  } else {
    for (const n of curso.niveles) {
      const pending = n.lecciones.find(l => !completadas.includes(l.id));
      if (pending) {
        targetLessonLink = `/nivel/${n.id}/leccion/${pending.id}`;
        break;
      }
    }
  }

  const hasStarted = Boolean(ultimaLeccionVisitada) || completadas.length > 0;

  return (
    <header className="relative overflow-hidden bg-slate-950 text-white">
      {/* Background with image and deep gradients */}
      <div className="absolute inset-0">
        <img
          src={curso.imagenHero}
          alt={curso.titulo}
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover object-center opacity-30 mix-blend-luminosity"
          onError={(e) => {
            // Hide image gracefully if blocked
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-slate-900/90 to-indigo-950/85" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pt-10 pb-8 sm:pt-14 sm:pb-12 md:py-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-amber-200 backdrop-blur-sm ring-1 ring-white/15">
            <Sparkles className="h-4 w-4 text-amber-300" />
            <span>Programa de Formación Integral</span>
          </div>

          <h1 className="mt-4 sm:mt-6 font-heading text-3xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight text-white">
            {curso.titulo}
          </h1>

          <p className="mt-2 sm:mt-3 text-lg sm:text-2xl font-light text-amber-100/90">
            {curso.subtitulo}
          </p>

          <p className="mt-3 sm:mt-5 text-sm sm:text-base md:text-lg leading-relaxed text-slate-200/90 max-w-2xl">
            {curso.descripcion}
          </p>

          {/* Stats Badges */}
          <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-200">
            <div className="flex items-center gap-2">
              <Layers className="h-4 sm:h-5 w-4 sm:w-5 text-amber-300" />
              <span className="font-medium">4 niveles estructurados</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="h-4 sm:h-5 w-4 sm:w-5 text-amber-300" />
              <span className="font-medium">{totalLecciones} lecciones profundas</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span className="font-medium">100% en español</span>
            </div>
          </div>

          {/* Call to Action: jump straight to last visited or next lesson */}
          <div className="mt-6 sm:mt-8 flex items-center">
            <Link
              to={targetLessonLink}
              className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-7 py-3 text-sm sm:text-base font-bold text-slate-950 shadow-lg shadow-amber-400/20 hover:bg-amber-300 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>{hasStarted ? 'Continuar formación' : 'Comenzar formación'}</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
