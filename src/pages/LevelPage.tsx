import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Circle, Layers, ChevronRight, ChevronLeft, BookOpen, Sparkles } from 'lucide-react';
import { cursoData } from '../data/cursoData';
import { useProgress } from '../context/ProgressContext';
import LessonCard from '../components/LessonCard';
import LevelMaterialsSection from '../components/LevelMaterialsSection';

export default function LevelPage() {
  const { id } = useParams<{ id: string }>();
  const nivelId = parseInt(id || '1', 10);
  const nivel = cursoData.niveles.find(n => n.id === nivelId);
  const { progresoNivel, estaCompletada } = useProgress();
  const [filter, setFilter] = useState<'all' | 'pending' | 'completed'>('all');

  if (!nivel) {
    return <Navigate to="/" replace />;
  }

  const { total, hechas, porcentaje } = progresoNivel(nivel);
  const isCompleted = porcentaje === 100;

  const filteredLessons = nivel.lecciones.filter(l => {
    const done = estaCompletada(l.id);
    if (filter === 'completed') return done;
    if (filter === 'pending') return !done;
    return true;
  });

  const prevNivel = cursoData.niveles.find(n => n.id === nivelId - 1);
  const nextNivel = cursoData.niveles.find(n => n.id === nivelId + 1);

  return (
    <div className="min-h-screen bg-[#dfe7f2]">
      {/* Level Hero Header */}
      <div className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0">
          <img
            src={nivel.imagen}
            alt={nivel.titulo}
            referrerPolicy="no-referrer"
            className="h-full w-full object-cover opacity-25 mix-blend-luminosity"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
          <div className={`absolute inset-0 bg-gradient-to-br ${nivel.color} opacity-60 mix-blend-multiply`} />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-900/60 to-slate-900/40" />
        </div>

        <div className="relative mx-auto max-w-5xl px-6 pt-10 pb-8 sm:py-14">
          {/* Breadcrumb Back */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white transition-colors group mb-5"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span>Volver a todos los niveles</span>
          </Link>

          <div className="max-w-3xl">
            <span
              className="inline-block rounded-full px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-xs backdrop-blur-sm"
              style={{ backgroundColor: nivel.colorSolid }}
            >
              Nivel {nivel.id} de 4
            </span>

            <h1 className="mt-3 sm:mt-4 font-heading text-2xl sm:text-4xl md:text-5xl font-bold leading-tight text-white">
              {nivel.titulo}
            </h1>

            <p className="mt-2 text-base sm:text-xl font-light text-white/90">
              {nivel.subtitulo}
            </p>

            <p className="mt-3 sm:mt-5 text-sm sm:text-base leading-relaxed text-slate-200/90 max-w-2xl">
              {nivel.descripcion}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="mx-auto max-w-5xl px-6 py-8 sm:py-10">
        {/* Progress Card */}
        <div className="mb-6 sm:mb-8 rounded-3xl border border-slate-200 bg-white p-5 sm:p-7 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div
                className="flex h-12 w-12 items-center justify-center rounded-2xl text-white font-bold text-lg shadow-xs"
                style={{ backgroundColor: isCompleted ? '#10b981' : nivel.colorSolid }}
              >
                {isCompleted ? <CheckCircle2 className="h-6 w-6" /> : `${porcentaje}%`}
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-slate-900">
                  {isCompleted ? '¡Felicidades, nivel completado!' : 'Tu progreso en este nivel'}
                </h3>
                <p className="text-xs text-slate-500">
                  Has completado <strong className="text-slate-800">{hechas}</strong> de las{' '}
                  <strong className="text-slate-800">{total}</strong> lecciones formativas
                </p>
              </div>
            </div>

            <span className="text-sm font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded-full self-start sm:self-auto">
              {hechas} / {total}
            </span>
          </div>

          <div className="mt-5 h-2.5 w-full overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{
                width: `${porcentaje}%`,
                backgroundColor: isCompleted ? '#10b981' : nivel.colorSolid,
              }}
            />
          </div>
        </div>

        {/* Lessons Section Header & Filter */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <h2 className="font-heading text-xl font-bold text-slate-900">
              Lecciones del Nivel
            </h2>
            <span className="rounded-full bg-slate-200 px-2.5 py-0.5 text-xs font-semibold text-slate-700">
              {nivel.lecciones.length} lecciones
            </span>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl text-xs font-medium self-start sm:self-auto">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1 rounded-lg transition-colors ${
                filter === 'all' ? 'bg-white text-slate-900 font-semibold shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Todas ({total})
            </button>
            <button
              onClick={() => setFilter('pending')}
              className={`px-3 py-1 rounded-lg transition-colors ${
                filter === 'pending' ? 'bg-white text-slate-900 font-semibold shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Pendientes ({total - hechas})
            </button>
            <button
              onClick={() => setFilter('completed')}
              className={`px-3 py-1 rounded-lg transition-colors ${
                filter === 'completed' ? 'bg-white text-slate-900 font-semibold shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Completadas ({hechas})
            </button>
          </div>
        </div>

        {/* Lessons Grid */}
        {filteredLessons.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 p-12 text-center text-slate-500">
            <p className="text-sm font-medium">No hay lecciones en esta vista de filtro.</p>
            <button
              onClick={() => setFilter('all')}
              className="mt-3 text-xs font-semibold text-indigo-600 hover:underline"
            >
              Ver todas las lecciones
            </button>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2">
            {filteredLessons.map((leccion) => {
              const originalIndex = nivel.lecciones.findIndex(l => l.id === leccion.id);
              return (
                <LessonCard
                  key={leccion.id}
                  leccion={leccion}
                  nivelId={nivel.id}
                  colorSolid={nivel.colorSolid}
                  index={originalIndex}
                />
              );
            })}
          </div>
        )}

        {/* Level Materials in Google Drive */}
        <LevelMaterialsSection
          nivelId={nivel.id}
          colorSolid={nivel.colorSolid}
          nivelTitulo={nivel.titulo}
        />

        {/* Bottom Level Switch Navigation */}
        <div className="mt-8 sm:mt-10 flex items-center justify-between border-t border-slate-200 pt-6 sm:pt-8">
          {prevNivel ? (
            <Link
              to={`/nivel/${prevNivel.id}`}
              className="group inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900"
            >
              <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              <span>Nivel {prevNivel.id}: {prevNivel.titulo}</span>
            </Link>
          ) : (
            <span />
          )}

          {nextNivel ? (
            <Link
              to={`/nivel/${nextNivel.id}`}
              className="group inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-800"
            >
              <span>Nivel {nextNivel.id}: {nextNivel.titulo}</span>
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          ) : (
            <Link
              to="/"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-800"
            >
              <span>Volver al inicio</span>
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
