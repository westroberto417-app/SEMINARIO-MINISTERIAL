import React, { useState } from 'react';
import { Award, Layers, Sparkles, BookOpen, Heart, Shield, GraduationCap, CheckCircle2, Church, RotateCcw } from 'lucide-react';
import { cursoData } from '../data/cursoData';
import HeroHeader from '../components/HeroHeader';
import InductionModule from '../components/InductionModule';
import LevelCard from '../components/LevelCard';
import { useProgress } from '../context/ProgressContext';
import ResetProgressModal from '../components/ResetProgressModal';

export default function HomePage() {
  const totalLecciones = cursoData.niveles.reduce((acc, n) => acc + n.lecciones.length, 0);
  const { progresoTotal, reiniciarProgreso } = useProgress();
  const { total, hechas, porcentaje } = progresoTotal();
  const [showResetModal, setShowResetModal] = useState(false);

  return (
    <div className="min-h-screen bg-[#dfe7f2]">
      {/* Hero Header */}
      <HeroHeader curso={cursoData} totalLecciones={totalLecciones} />

      {/* Presentación del Pastor Esteban West */}
      <section className="border-b border-slate-200 bg-white py-8 sm:py-10 md:py-12">
        <div className="mx-auto max-w-4xl px-6">
          <div className="flex flex-col sm:flex-row items-start gap-5">
            <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-700 shadow-xs ring-1 ring-indigo-100">
              <GraduationCap className="h-7 w-7" />
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-amber-100 text-amber-800 font-semibold px-2.5 py-0.5 text-xs">
                  Palabras de los Autores
                </span>
                <span className="text-xs text-slate-400 font-medium">Seminario Ministerial</span>
              </div>

              <h2 className="mt-2 font-heading text-2xl font-bold text-slate-900">
                Presentación del Programa Formativo
              </h2>

              <p className="mt-3 text-base leading-relaxed text-slate-700">
                Los pastores <strong>Esteban West</strong> y <strong>Jorgelina González</strong> como, educadores, consejeros y comunicadores; presentan este material de estudio bíblico; desde la experiencia propia y extrayendo información de diferentes expertos y maestros cristianos de renombre (como Armando Alducín, Bernardo Stamateas, Derek Prince, Charles Spurgeon, Billy Graham, Dante Gebel, John MacArthur y otros), han compilado en este curso los temas más fundamentales que todo cristiano comprometido con Dios tendría que saber, como también el abordaje bíblico y psicológico necesario para encarar el tema del servicio a Dios desde una perspectiva de sanidad integral.
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-slate-500">
                <span className="flex items-center gap-1.5 font-medium text-slate-700">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  Formación teológica sólida
                </span>
                <span className="flex items-center gap-1.5 font-medium text-slate-700">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  Sanidad emocional y relacional
                </span>
                <span className="flex items-center gap-1.5 font-medium text-slate-700">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  Servicio y ministerio efectivo
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Materiales de Introducción con guías formativas */}
      <InductionModule />

      {/* Niveles del Curso */}
      <section className="mx-auto max-w-6xl px-6 py-10 sm:py-12 md:py-16">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
            <Layers className="h-3.5 w-3.5" />
            <span>Malla Curricular</span>
          </div>

          <h2 className="mt-2 sm:mt-3 font-heading text-2xl sm:text-4xl font-bold text-slate-900">
            Los Cuatro Niveles de Formación
          </h2>

          <p className="mt-2 sm:mt-3 text-sm sm:text-base text-slate-600">
            Una ruta formativa progresiva diseñada para llevarte desde la comprensión de las trampas del sistema hasta la plenitud en tu ministerio.
          </p>
        </div>

        {/* Global Progress Banner */}
        {hechas > 0 && (
          <div className="mt-6 sm:mt-8 rounded-2xl bg-white p-5 border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 font-bold">
                {porcentaje}%
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Tu avance global en el seminario</h4>
                <p className="text-xs text-slate-500">{hechas} de {total} lecciones completadas</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <div className="w-full sm:w-56 h-2.5 rounded-full bg-slate-100 overflow-hidden">
                <div
                  className="h-full bg-emerald-500 rounded-full transition-all duration-500"
                  style={{ width: `${porcentaje}%` }}
                />
              </div>

              <button
                type="button"
                onClick={() => setShowResetModal(true)}
                className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:border-red-200 hover:bg-red-50 hover:text-red-600 transition-all cursor-pointer self-end sm:self-auto"
                title="Reiniciar recorrido del curso"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                <span>Reiniciar recorrido</span>
              </button>
            </div>
          </div>
        )}

        {/* Modal de confirmación para reiniciar progreso */}
        <ResetProgressModal
          isOpen={showResetModal}
          onClose={() => setShowResetModal(false)}
          onConfirm={reiniciarProgreso}
          leccionesCompletadas={hechas}
        />

        {/* 4 Levels Grid */}
        <div className="mt-8 sm:mt-10 grid gap-6 md:grid-cols-2">
          {cursoData.niveles.map((nivel, idx) => (
            <LevelCard key={nivel.id} nivel={nivel} index={idx} />
          ))}
        </div>
      </section>

      {/* Las 4 Secciones del Curso */}
      <section className="border-t border-slate-300/80 bg-white py-10 sm:py-12 md:py-14">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-8 text-center max-w-2xl mx-auto">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900">
              Las 4 Secciones del Curso
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              Un recorrido formativo completo para transformar el entendimiento, el alma y el servicio cristiano.
            </p>
          </div>

          <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* 1. Despertar y Discernimiento */}
            <div className="rounded-2xl bg-[#e3effa] p-5 sm:p-6 border border-[#b8d7f2] shadow-xs transition-transform duration-200 hover:-translate-y-1">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#cbe3f7] text-sky-800 mb-4 shadow-2xs">
                <Shield className="h-5 w-5" />
              </div>
              <h3 className="font-heading text-base sm:text-lg font-bold text-slate-900 leading-snug">
                1. Despertar y Discernimiento
              </h3>
              <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-700">
                Desmantelamos las ideologías, filosofías engañosas y sistemas mundiales que sutilmente han moldeado los patrones de vida del ser humano.
              </p>
            </div>

            {/* 2. El Plan de Salvación */}
            <div className="rounded-2xl bg-[#fdf0de] p-5 sm:p-6 border border-[#f6d5a4] shadow-xs transition-transform duration-200 hover:-translate-y-1">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f9e2bf] text-amber-900 mb-4 shadow-2xs">
                <BookOpen className="h-5 w-5" />
              </div>
              <h3 className="font-heading text-base sm:text-lg font-bold text-slate-900 leading-snug">
                2. El Plan de Salvación
              </h3>
              <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-700">
                Comprendemos el rescate divino en Cristo, los fundamentos históricos de la fe bíblica y el rompimiento de paradigmas y fanatismos religiosos.
              </p>
            </div>

            {/* 3. Sanidad y Restauración */}
            <div className="rounded-2xl bg-[#e1f5eb] p-5 sm:p-6 border border-[#b8e7ce] shadow-xs transition-transform duration-200 hover:-translate-y-1">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#c8edd7] text-emerald-900 mb-4 shadow-2xs">
                <Heart className="h-5 w-5" />
              </div>
              <h3 className="font-heading text-base sm:text-lg font-bold text-slate-900 leading-snug">
                3. Sanidad y Restauración
              </h3>
              <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-700">
                Abordamos la salud integral del alma: autoestima sana, resolución de conflictos, resiliencia y madurez emocional bajo la guía del Espíritu Santo.
              </p>
            </div>

            {/* 4. La Biblia y el Ministerio */}
            <div className="rounded-2xl bg-[#eee6fc] p-5 sm:p-6 border border-[#d8c5f8] shadow-xs transition-transform duration-200 hover:-translate-y-1">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#ded0fa] text-purple-900 mb-4 shadow-2xs">
                <Church className="h-5 w-5" />
              </div>
              <h3 className="font-heading text-base sm:text-lg font-bold text-slate-900 leading-snug">
                4. La Biblia y el Ministerio
              </h3>
              <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-700">
                Profundizamos en las Escrituras, los dones espirituales y el llamado ministerial para servir con excelencia y liderar con propósito en el Reino.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
