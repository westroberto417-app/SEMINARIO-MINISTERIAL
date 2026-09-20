import React from 'react';
import { Link } from 'react-router-dom';
import { Quote, CheckCircle2, User, ArrowRight } from 'lucide-react';
import { Leccion } from '../types';
import { useProgress } from '../context/ProgressContext';

interface LessonCardProps {
  leccion: Leccion;
  nivelId: number;
  colorSolid: string;
  index: number;
}

export default function LessonCard({ leccion, nivelId, colorSolid, index }: LessonCardProps) {
  const { estaCompletada } = useProgress();
  const completed = estaCompletada(leccion.id);

  return (
    <Link
      to={`/nivel/${nivelId}/leccion/${leccion.id}`}
      className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg"
    >
      <div>
        {/* Header with lesson index, completion badge, and minister */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div
                className="flex h-11 w-11 items-center justify-center rounded-xl text-base font-bold text-white shadow-sm"
                style={{ backgroundColor: colorSolid }}
              >
                {index + 1}
              </div>
              {completed && (
                <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 ring-2 ring-white shadow-xs">
                  <CheckCircle2 className="h-3.5 w-3.5 text-white" />
                </span>
              )}
            </div>

            <div>
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                Lección {leccion.id}
              </span>
              <h4 className="font-heading text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors leading-snug">
                {leccion.titulo}
              </h4>
            </div>
          </div>
        </div>

        {/* Subtitle */}
        <p className="mt-3 text-sm text-slate-600 line-clamp-2 leading-relaxed">
          {leccion.subtitulo}
        </p>

        {/* Verse snippet */}
        <div className="mt-4 flex items-start gap-2.5 rounded-xl bg-slate-50 p-3 text-xs text-slate-600 border border-slate-100">
          <Quote className="h-3.5 w-3.5 flex-shrink-0 text-amber-500 mt-0.5" />
          <p className="italic line-clamp-2">{leccion.versiculo}</p>
        </div>
      </div>

      {/* Footer info: Minister reference and arrow */}
      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
        <div className="flex items-center gap-1.5 truncate max-w-[75%]">
          <User className="h-3.5 w-3.5 text-slate-400 flex-shrink-0" />
          <span className="truncate">Ref: <strong className="text-slate-700 font-semibold">{leccion.ministro}</strong></span>
        </div>

        <span className="inline-flex items-center gap-1 font-semibold text-indigo-600 group-hover:translate-x-1 transition-transform">
          <span>Estudiar</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </Link>
  );
}
