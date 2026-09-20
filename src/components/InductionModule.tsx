import React from 'react';
import { Headphones, Video, FileText, ExternalLink, Compass, Folder } from 'lucide-react';
import { recursosGenerales } from '../data/cursoData';

export default function InductionModule() {
  const getIcon = (tipo: string) => {
    switch (tipo) {
      case 'audio':
        return Headphones;
      case 'video':
        return Video;
      case 'carpeta':
        return Folder;
      default:
        return FileText;
    }
  };

  const getTypeLabel = (tipo: string) => {
    switch (tipo) {
      case 'audio':
        return 'Audio Conferencia';
      case 'video':
        return 'Video Formativo';
      case 'carpeta':
        return 'Carpeta de Materiales';
      default:
        return 'Manual / Documento';
    }
  };

  return (
    <section className="border-b border-slate-300/80 bg-[#dfe7f2] py-8 sm:py-10 md:py-12">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex items-center gap-2 mb-1">
          <Compass className="h-5 w-5 text-indigo-600" />
          <h2 className="font-heading text-xl font-bold text-slate-900">
            Materiales de Introducción
          </h2>
        </div>
        <p className="text-sm text-slate-500 mb-5">
          Recursos de bienvenida y guías pedagógicas para orientarte antes de comenzar el recorrido formativo.
        </p>

        <div className="grid gap-3.5 sm:grid-cols-2">
          {recursosGenerales.map((rec, idx) => {
            const IconComponent = getIcon(rec.tipo);
            const isFolder = rec.tipo === 'carpeta';
            return (
              <a
                key={idx}
                href={rec.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-start gap-3.5 rounded-2xl border p-4 transition-all hover:shadow-md hover:-translate-y-0.5 ${
                  isFolder
                    ? 'border-amber-200 bg-gradient-to-br from-amber-50/70 to-white hover:border-amber-400'
                    : 'border-slate-200 bg-white hover:border-indigo-300'
                }`}
              >
                <span
                  className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl transition-colors ${
                    isFolder
                      ? 'bg-amber-100 text-amber-700 group-hover:bg-amber-600 group-hover:text-white'
                      : 'bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white'
                  }`}
                >
                  <IconComponent className="h-5 w-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span
                      className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                        isFolder
                          ? 'bg-amber-100 text-amber-800'
                          : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      {getTypeLabel(rec.tipo)}
                    </span>
                  </div>
                  <h3
                    className={`mt-1 font-heading text-sm font-bold transition-colors ${
                      isFolder
                        ? 'text-slate-900 group-hover:text-amber-700'
                        : 'text-slate-900 group-hover:text-indigo-600'
                    }`}
                  >
                    {rec.titulo}
                  </h3>
                  <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                    {rec.descripcion}
                  </p>
                </div>
                <ExternalLink
                  className={`h-4 w-4 flex-shrink-0 transition-colors mt-1 ${
                    isFolder
                      ? 'text-amber-400 group-hover:text-amber-600'
                      : 'text-slate-300 group-hover:text-indigo-500'
                  }`}
                />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
