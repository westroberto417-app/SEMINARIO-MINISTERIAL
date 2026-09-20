import React from 'react';
import { RotateCcw, AlertTriangle, X } from 'lucide-react';

interface ResetModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  leccionesCompletadas: number;
}

export default function ResetProgressModal({
  isOpen,
  onClose,
  onConfirm,
  leccionesCompletadas,
}: ResetModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="reset-modal-title"
    >
      <div
        className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl border border-slate-200 transition-all"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
            <AlertTriangle className="h-6 w-6" />
          </div>
          <button
            onClick={onClose}
            className="rounded-xl p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors"
            aria-label="Cerrar ventana"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-4">
          <h3 id="reset-modal-title" className="font-heading text-lg font-bold text-slate-900">
            ¿Reiniciar recorrido de estudio?
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            Estás a punto de restablecer el progreso de{' '}
            <strong className="text-slate-900">{leccionesCompletadas} {leccionesCompletadas === 1 ? 'lección completada' : 'lecciones completadas'}</strong>.
            Esta acción desmarcará todas las lecturas para que puedas iniciar el curso nuevamente desde el principio.
          </p>
        </div>

        <div className="mt-6 flex flex-col-reverse sm:flex-row items-center justify-end gap-2.5">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto rounded-xl px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-700 hover:bg-slate-100 transition-colors"
          >
            Cancelar
          </button>
          <button
            type="button"
            onClick={() => {
              onConfirm();
              onClose();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-xs hover:bg-red-700 transition-colors"
          >
            <RotateCcw className="h-4 w-4" />
            Sí, reiniciar recorrido
          </button>
        </div>
      </div>
    </div>
  );
}
