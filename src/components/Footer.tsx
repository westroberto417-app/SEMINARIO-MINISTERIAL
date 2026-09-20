import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, RotateCcw, ShieldCheck, Heart } from 'lucide-react';
import { cursoData } from '../data/cursoData';
import { useProgress } from '../context/ProgressContext';
import ResetProgressModal from './ResetProgressModal';

export default function Footer() {
  const { reiniciarProgreso, progresoTotal } = useProgress();
  const { hechas, total, porcentaje } = progresoTotal();
  const [showResetModal, setShowResetModal] = useState(false);

  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-400">
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Col 1: About */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-400 text-slate-950 font-bold">
                <BookOpen className="h-5 w-5" />
              </div>
              <span className="font-heading text-lg font-bold text-white">
                Capacitación Cristiana Bíblica
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-300 max-w-md">
              Programa formativo ministerial compilado por el Pastor Esteban West, integrando las enseñanzas de reconocidos ministros y maestros bíblicos para la edificación y madurez de la iglesia de Cristo.
            </p>
            <div className="flex items-center gap-2 text-xs text-amber-300/90 pt-1">
              <ShieldCheck className="h-4 w-4" />
              <span>Aplicación limpia e independiente, sin anuncios ni marcas de agua</span>
            </div>
          </div>

          {/* Col 2: Niveles */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white mb-3">
              Niveles del Curso
            </h4>
            <ul className="space-y-2 text-sm">
              {cursoData.niveles.map(nivel => (
                <li key={nivel.id}>
                  <Link
                    to={`/nivel/${nivel.id}`}
                    className="hover:text-amber-300 transition-colors flex items-center justify-between py-0.5"
                  >
                    <span>Nivel {nivel.id}: {nivel.titulo}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Student Status */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white mb-3">
              Tu Formación
            </h4>
            <div className="rounded-xl bg-slate-800/80 p-3.5 border border-slate-700/60 space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-300">
                <span>Lecciones completadas:</span>
                <span className="font-bold text-amber-300">{hechas} de {total}</span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-700">
                <div
                  className="h-full rounded-full bg-emerald-400 transition-all duration-500"
                  style={{ width: `${porcentaje}%` }}
                />
              </div>
              <div className="pt-2 flex justify-between items-center text-xs">
                <span className="text-slate-400">{porcentaje}% avanzado</span>
                {hechas > 0 && (
                  <button
                    type="button"
                    onClick={() => setShowResetModal(true)}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-300 hover:text-red-400 bg-slate-700/60 hover:bg-slate-700 px-2 py-1 rounded-md transition-colors cursor-pointer"
                    title="Reiniciar recorrido del curso"
                  >
                    <RotateCcw className="h-3 w-3 text-slate-400 group-hover:text-red-400" />
                    <span>Reiniciar</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Modal de confirmación para reiniciar recorrido */}
        <ResetProgressModal
          isOpen={showResetModal}
          onClose={() => setShowResetModal(false)}
          onConfirm={reiniciarProgreso}
          leccionesCompletadas={hechas}
        />

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} Seminario Ministerial — Pastor Esteban West. Todos los derechos reservados.
          </p>
          <p className="flex items-center gap-1">
            <span>Para la gloria de Dios</span>
            <Heart className="h-3.5 w-3.5 text-red-400 fill-red-400" />
          </p>
        </div>
      </div>
    </footer>
  );
}
