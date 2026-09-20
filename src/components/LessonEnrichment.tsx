import React from 'react';
import { Lightbulb, Headphones, Image, FileText, CheckSquare, ExternalLink, Video, Presentation } from 'lucide-react';
import { EnriquecimientoLeccion, RecursoMultimedia } from '../types';

interface LessonEnrichmentProps {
  enriquecimiento?: EnriquecimientoLeccion | null;
  colorSolid: string;
}

export default function LessonEnrichment({ enriquecimiento, colorSolid }: LessonEnrichmentProps) {
  if (!enriquecimiento) return null;
  const { ejemplos = [], recursos = [] } = enriquecimiento;

  if (ejemplos.length === 0 && recursos.length === 0) return null;

  const getMediaIcon = (tipo: RecursoMultimedia['tipo']) => {
    switch (tipo) {
      case 'audio':
        return Headphones;
      case 'video':
        return Video;
      case 'infografia':
        return Image;
      case 'diapositivas':
        return Presentation;
      case 'evaluacion':
        return CheckSquare;
      default:
        return FileText;
    }
  };

  const getMediaLabel = (tipo: RecursoMultimedia['tipo']) => {
    switch (tipo) {
      case 'audio':
        return 'Audio Conferencia';
      case 'video':
        return 'Video Formativo';
      case 'infografia':
        return 'Infografía Explicativa';
      case 'evaluacion':
        return 'Evaluación / Quiz';
      case 'diapositivas':
        return 'Diapositivas / Presentación';
      default:
        return 'Documento de Estudio';
    }
  };

  return (
    <div className="mt-12 space-y-8">
      {/* Ejemplos prácticos */}
      {ejemplos.length > 0 && (
        <div className="rounded-3xl border border-indigo-100 bg-indigo-50/40 p-6 sm:p-8">
          <div className="flex items-center gap-2.5 text-indigo-700">
            <Lightbulb className="h-5 w-5" />
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider">
              Ejemplos prácticos y aplicaciones
            </h3>
          </div>

          <div className="mt-5 space-y-4">
            {ejemplos.map((ej, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white p-5 shadow-xs border border-indigo-100/60"
              >
                <h4 className="font-heading text-base font-bold text-slate-900">
                  {ej.titulo}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {ej.contenido}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Recursos Multimedia Complementarios */}
      {recursos.length > 0 && (
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
          <div className="flex items-center gap-2.5" style={{ color: colorSolid }}>
            <Headphones className="h-5 w-5" />
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider">
              Recursos multimedia de profundización
            </h3>
          </div>
          <p className="mt-1.5 text-xs text-slate-500">
            Material complementario de apoyo didáctico para profundizar en esta lección.
          </p>

          <div className="mt-5 space-y-3">
            {recursos.map((rec, idx) => {
              const IconComp = getMediaIcon(rec.tipo);
              const content = (
                <>
                  <span
                    className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl transition-transform group-hover:scale-105"
                    style={{ backgroundColor: `${colorSolid}18`, color: colorSolid }}
                  >
                    <IconComp className="h-5 w-5" />
                  </span>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-600">
                        {getMediaLabel(rec.tipo)}
                      </span>
                    </div>
                    <h4 className="mt-1 font-heading text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                      {rec.titulo}
                    </h4>
                    <p className="mt-1 text-xs leading-relaxed text-slate-500">
                      {rec.descripcion}
                    </p>
                  </div>

                  {rec.url && (
                    <ExternalLink className="h-4 w-4 flex-shrink-0 text-slate-300 group-hover:text-indigo-600 transition-colors mt-1" />
                  )}
                </>
              );

              return rec.url ? (
                <a
                  key={idx}
                  href={rec.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 rounded-2xl border border-slate-200/90 p-4 transition-all hover:border-indigo-300 hover:bg-slate-50/60 hover:shadow-xs"
                >
                  {content}
                </a>
              ) : (
                <div
                  key={idx}
                  className="group flex items-start gap-4 rounded-2xl border border-slate-200/90 p-4 bg-slate-50/40"
                >
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
