import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  ArrowLeft,
  Quote,
  User,
  CheckCircle2,
  Circle,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  BookOpen
} from 'lucide-react';
import { cursoData, enriquecimientoPorLeccion } from '../data/cursoData';
import { useProgress } from '../context/ProgressContext';
import LessonEnrichment from '../components/LessonEnrichment';

export default function LessonPage() {
  const { id, leccionId } = useParams<{ id: string; leccionId: string }>();
  const nivelId = parseInt(id || '1', 10);
  const nivel = cursoData.niveles.find(n => n.id === nivelId);
  const leccion = nivel?.lecciones.find(l => l.id === leccionId);

  const { estaCompletada, toggleLeccion, guardarUltimaLeccion } = useProgress();

  useEffect(() => {
    if (nivel && leccion) {
      guardarUltimaLeccion(nivel.id, leccion.id);
    }
  }, [nivel?.id, leccion?.id, guardarUltimaLeccion]);

  if (!nivel || !leccion) {
    return <Navigate to="/nivel/1" replace />;
  }

  const completed = estaCompletada(leccion.id);
  const lecciones = nivel.lecciones;
  const currentIndex = lecciones.findIndex(l => l.id === leccionId);
  const prevLesson = currentIndex > 0 ? lecciones[currentIndex - 1] : null;
  const nextLesson = currentIndex < lecciones.length - 1 ? lecciones[currentIndex + 1] : null;

  const enriquecimiento = enriquecimientoPorLeccion[leccion.id] || null;

  return (
    <div className="min-h-screen bg-[#dfe7f2]">
      {/* Lesson Header Banner */}
      <div
        className="relative overflow-hidden text-white"
        style={{ backgroundColor: nivel.colorSolid }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/85 via-slate-900/60 to-black/75" />

        <div className="relative mx-auto max-w-3xl px-6 pt-8 pb-8 sm:py-12">
          {/* Breadcrumb back */}
          <Link
            to={`/nivel/${nivel.id}`}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-white/80 hover:text-white transition-colors group mb-4 sm:mb-6"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span>Volver a {nivel.titulo}</span>
          </Link>

          {/* Lesson Counter Badge */}
          <div>
            <span className="inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm ring-1 ring-white/20">
              Lección {currentIndex + 1} de {lecciones.length} &bull; Nivel {nivel.id}
            </span>

            <h1 className="mt-3 sm:mt-4 font-heading text-2xl sm:text-4xl md:text-5xl font-bold leading-tight text-white">
              {leccion.titulo}
            </h1>

            <p className="mt-2 sm:mt-3 text-sm sm:text-xl font-light text-white/90">
              {leccion.subtitulo}
            </p>
          </div>
        </div>
      </div>

      {/* Main Article Content */}
      <article className="mx-auto max-w-3xl px-6 py-8 sm:py-10">
        {/* Biblical Scripture Card */}
        <div className="rounded-2xl border border-amber-200/80 bg-amber-50/70 p-5 sm:p-6 shadow-xs">
          <div className="flex items-start gap-3.5">
            <Quote className="h-6 w-6 flex-shrink-0 text-amber-600 mt-0.5" />
            <div>
              <p className="font-serif text-base sm:text-lg italic leading-relaxed text-slate-800">
                &ldquo;{leccion.versiculo}&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Minister / Reference Tag */}
        <div className="mt-4 flex items-center gap-2 text-xs sm:text-sm text-slate-500">
          <User className="h-4 w-4 text-slate-400" />
          <span>
            Enseñanza y enfoque de referencia:{' '}
            <strong className="font-semibold text-slate-800">{leccion.ministro}</strong>
          </span>
        </div>

        {/* Introduction */}
        <div className="mt-8">
          <h3 className="font-heading text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
            Introducción a la lección
          </h3>
          <p className="text-base sm:text-lg leading-relaxed text-slate-700 font-normal">
            {leccion.introduccion}
          </p>
        </div>

        {/* Structured Sections */}
        <div className="mt-12 space-y-10">
          {leccion.secciones.map((sec, idx) => (
            <section key={idx} className="space-y-3">
              <div className="flex items-center gap-3">
                <span
                  className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl text-sm font-bold text-white shadow-xs"
                  style={{ backgroundColor: nivel.colorSolid }}
                >
                  {idx + 1}
                </span>
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-slate-900">
                  {sec.titulo}
                </h2>
              </div>
              <div className="pl-11">
                <p className="text-base leading-relaxed text-slate-700">
                  {sec.contenido}
                </p>
              </div>
            </section>
          ))}
        </div>

        {/* Optional Practical Examples and Multimedia Resources */}
        <LessonEnrichment enriquecimiento={enriquecimiento} colorSolid={nivel.colorSolid} />

        {/* Personal Reflection Card */}
        <div className="mt-12 rounded-3xl bg-slate-900 p-6 sm:p-8 text-white shadow-lg">
          <div className="flex items-center gap-2.5 text-amber-400">
            <Sparkles className="h-5 w-5" />
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider">
              Pregunta de Reflexión y Aplicación Personal
            </h3>
          </div>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-200">
            {leccion.reflexion}
          </p>
        </div>

        {/* Interactive Completion Button */}
        <div className="mt-8">
          <button
            onClick={() => toggleLeccion(leccion.id)}
            className={`w-full flex items-center justify-center gap-2.5 rounded-2xl py-4 px-6 font-bold text-base transition-all duration-200 shadow-sm ${
              completed
                ? 'bg-emerald-50 text-emerald-800 ring-2 ring-emerald-300 hover:bg-emerald-100'
                : 'bg-slate-900 text-white hover:bg-slate-800 active:scale-[0.99]'
            }`}
          >
            {completed ? (
              <>
                <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                <span>Lección completada &bull; Clic para desmarcar</span>
              </>
            ) : (
              <>
                <Circle className="h-5 w-5 text-slate-400" />
                <span>Marcar esta lección como completada</span>
              </>
            )}
          </button>
        </div>

        {/* Next and Previous Lesson Navigation */}
        <div className="mt-12 flex flex-col sm:flex-row items-stretch justify-between gap-4 border-t border-slate-200 pt-8">
          {prevLesson ? (
            <Link
              to={`/nivel/${nivel.id}/leccion/${prevLesson.id}`}
              className="group flex flex-1 items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 transition-all hover:border-slate-300 hover:shadow-md"
            >
              <ChevronLeft className="h-5 w-5 flex-shrink-0 text-slate-400 transition-transform group-hover:-translate-x-1" />
              <div className="min-w-0">
                <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Lección Anterior
                </span>
                <span className="block truncate text-sm font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">
                  {prevLesson.titulo}
                </span>
              </div>
            </Link>
          ) : (
            <div className="flex-1" />
          )}

          {nextLesson ? (
            <Link
              to={`/nivel/${nivel.id}/leccion/${nextLesson.id}`}
              className="group flex flex-1 items-center justify-end gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-right transition-all hover:border-slate-300 hover:shadow-md"
            >
              <div className="min-w-0">
                <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Siguiente Lección
                </span>
                <span className="block truncate text-sm font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">
                  {nextLesson.titulo}
                </span>
              </div>
              <ChevronRight className="h-5 w-5 flex-shrink-0 text-slate-400 transition-transform group-hover:translate-x-1" />
            </Link>
          ) : (
            <Link
              to={`/nivel/${nivel.id}`}
              className="group flex flex-1 items-center justify-end gap-3 rounded-2xl border border-emerald-200 bg-emerald-50/50 p-4 text-right transition-all hover:bg-emerald-50 hover:shadow-md"
            >
              <div className="min-w-0">
                <span className="block text-xs font-semibold uppercase tracking-wider text-emerald-600">
                  Fin del Nivel {nivel.id}
                </span>
                <span className="block truncate text-sm font-bold text-emerald-900">
                  Volver al Nivel
                </span>
              </div>
              <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-emerald-600" />
            </Link>
          )}
        </div>
      </article>
    </div>
  );
}
