import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowLeft } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 py-20 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 mb-4">
        <BookOpen className="h-8 w-8" />
      </div>
      <h1 className="font-heading text-3xl font-bold text-slate-900">
        Página no encontrada
      </h1>
      <p className="mt-2 text-base text-slate-600 max-w-md">
        La lección o sección solicitada no se encuentra disponible. Puedes regresar a la página de inicio o explorar los niveles de formación.
      </p>
      <div className="mt-6 flex gap-3">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Volver al inicio</span>
        </Link>
        <Link
          to="/nivel/3"
          className="inline-flex items-center gap-2 rounded-xl bg-indigo-50 px-5 py-2.5 text-sm font-semibold text-indigo-700 hover:bg-indigo-100 transition-colors"
        >
          <span>Ir a Nivel 3</span>
        </Link>
      </div>
    </div>
  );
}
