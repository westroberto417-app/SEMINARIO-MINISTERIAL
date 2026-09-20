import React from 'react';
import { Link } from 'react-router-dom';
import { Eye, BookOpen, HeartPulse, Church, ChevronRight } from 'lucide-react';
import { Nivel } from '../types';
import { useProgress } from '../context/ProgressContext';

interface LevelCardProps {
  nivel: Nivel;
  index: number;
}

export default function LevelCard({ nivel }: LevelCardProps) {
  const { progresoNivel } = useProgress();
  const { total, hechas, porcentaje } = progresoNivel(nivel);
  const isCompleted = porcentaje === 100;

  const getIcon = (icono: string) => {
    switch (icono) {
      case 'Eye':
        return Eye;
      case 'BookOpen':
        return BookOpen;
      case 'HeartPulse':
        return HeartPulse;
      case 'Church':
        return Church;
      default:
        return BookOpen;
    }
  };

  const IconComponent = getIcon(nivel.icono);

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-[2rem] bg-white shadow-lg ring-1 ring-slate-200/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Top Banner with Image, Badges & Title */}
      <Link
        to={`/nivel/${nivel.id}`}
        className="group relative block h-60 overflow-hidden bg-slate-900"
      >
        <img
          src={nivel.imagen}
          alt={nivel.titulo}
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
        {/* Color overlay matching the level */}
        <div
          className={`absolute inset-0 bg-gradient-to-t ${nivel.color} opacity-70 mix-blend-multiply`}
        />
        {/* Dark gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-900/40 to-slate-900/20" />

        {/* Top Icon Badge in White Squircle */}
        <div className="absolute top-5 left-5">
          <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-white p-3 shadow-md">
            <IconComponent className="h-7 w-7 text-slate-900" />
          </div>
        </div>

        {/* Level Tag Pill */}
        <div className="absolute top-5 right-5">
          <span className="rounded-full bg-slate-950/60 px-3.5 py-1 text-xs font-semibold text-white backdrop-blur-md ring-1 ring-white/10">
            Nivel {nivel.id}
          </span>
        </div>

        {/* Bottom Title & Subtitle inside Banner */}
        <div className="absolute bottom-5 left-5 right-5">
          <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white drop-shadow-sm leading-tight">
            {nivel.titulo}
          </h3>
          <p className="mt-1.5 text-sm sm:text-[15px] font-normal text-white/90 leading-snug line-clamp-2">
            {nivel.subtitulo}
          </p>
        </div>
      </Link>

      {/* Card Body with TEMAS FUNDAMENTALES (Visual Index) */}
      <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
            TEMAS FUNDAMENTALES
          </h4>

          <ul className="space-y-3">
            {nivel.lecciones.map((leccion) => (
              <li key={leccion.id}>
                <Link
                  to={`/nivel/${nivel.id}/leccion/${leccion.id}`}
                  className="group/item flex items-start gap-3 text-sm sm:text-[15px] text-slate-700 hover:text-slate-950 transition-colors leading-snug"
                >
                  <span
                    className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full transition-transform group-hover/item:scale-125"
                    style={{ backgroundColor: nivel.colorSolid }}
                  />
                  <span className="font-normal group-hover/item:font-medium transition-all">
                    {leccion.titulo}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom Progress & Explorador */}
        <div className="mt-8 pt-5 border-t border-slate-100">
          {/* Progress Header */}
          <div className="flex items-center justify-between text-sm mb-2 font-medium">
            <span className="text-slate-500">Progreso</span>
            <span className="text-slate-700 font-bold">{porcentaje} %</span>
          </div>

          {/* Progress Bar */}
          <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{
                width: `${porcentaje}%`,
                backgroundColor: isCompleted ? '#10b981' : nivel.colorSolid,
              }}
            />
          </div>

          {/* Lessons count & Explorador action */}
          <div className="mt-4 flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              {hechas} / {total} LECCIONES
            </span>

            <Link
              to={`/nivel/${nivel.id}`}
              className="inline-flex items-center gap-1 text-sm sm:text-base font-bold transition-all hover:gap-1.5"
              style={{ color: nivel.colorSolid }}
            >
              <span>Explorador</span>
              <ChevronRight className="h-4 w-4 stroke-[2.5]" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
