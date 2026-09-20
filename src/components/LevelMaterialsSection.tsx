import React, { useState } from 'react';
import { 
  Folder, 
  FileText, 
  Headphones, 
  Video, 
  Presentation, 
  Image, 
  ExternalLink, 
  Download,
  Filter
} from 'lucide-react';
import { materialesPorNivel } from '../data/cursoData';
import { RecursoMultimedia } from '../types';

interface LevelMaterialsSectionProps {
  nivelId: number;
  colorSolid: string;
  nivelTitulo: string;
}

export default function LevelMaterialsSection({ 
  nivelId, 
  colorSolid, 
  nivelTitulo 
}: LevelMaterialsSectionProps) {
  const materiales = materialesPorNivel[nivelId] || [];
  const [activeFilter, setActiveFilter] = useState<string>('all');

  if (materiales.length === 0) return null;

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
      case 'diapositivas':
        return 'Presentación (PPTX)';
      default:
        return 'Documento (PDF)';
    }
  };

  const filteredMaterials = materiales.filter(item => {
    if (activeFilter === 'all') return true;
    return item.tipo === activeFilter;
  });

  const tiposDisponibles = Array.from(new Set(materiales.map(m => m.tipo)));

  return (
    <section className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-slate-200">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 text-slate-900">
            <span
              className="flex h-8 w-8 items-center justify-center rounded-lg text-white"
              style={{ backgroundColor: colorSolid }}
            >
              <Folder className="h-4 w-4" />
            </span>
            <h2 className="font-heading text-xl sm:text-2xl font-bold">
              Materiales y Recursos en Google Drive
            </h2>
          </div>
          <p className="mt-1 text-xs sm:text-sm text-slate-500">
            {materiales.length} archivos integrados para profundizar en el Nivel {nivelId}: manuales PDF, audios m4a, videos y presentaciones.
          </p>
        </div>

        <a
          href="https://drive.google.com/drive/folders/16-m3ayjaORgXryP70Tn1qDerD9StRoae"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-xs hover:bg-slate-800 transition-colors self-start sm:self-auto"
        >
          <Folder className="h-4 w-4 text-amber-400" />
          <span>Abrir Carpeta en Google Drive</span>
          <ExternalLink className="h-3.5 w-3.5 text-slate-400" />
        </a>
      </div>

      {/* Tipo Filters */}
      {tiposDisponibles.length > 1 && (
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <button
            onClick={() => setActiveFilter('all')}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors ${
              activeFilter === 'all'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
          >
            Todos ({materiales.length})
          </button>
          {tiposDisponibles.map(tipo => {
            const count = materiales.filter(m => m.tipo === tipo).length;
            return (
              <button
                key={tipo}
                onClick={() => setActiveFilter(tipo)}
                className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors ${
                  activeFilter === tipo
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                {getMediaLabel(tipo)} ({count})
              </button>
            );
          })}
        </div>
      )}

      {/* Materials Grid */}
      <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
        {filteredMaterials.map((mat, idx) => {
          const IconComp = getMediaIcon(mat.tipo);
          return (
            <a
              key={idx}
              href={mat.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-4 transition-all hover:border-indigo-300 hover:shadow-md hover:-translate-y-0.5"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <span
                    className="flex h-9 w-9 items-center justify-center rounded-xl"
                    style={{ backgroundColor: `${colorSolid}15`, color: colorSolid }}
                  >
                    <IconComp className="h-4 w-4" />
                  </span>
                  <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-600">
                    {getMediaLabel(mat.tipo)}
                  </span>
                </div>

                <h3 className="font-heading text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors line-clamp-2">
                  {mat.titulo}
                </h3>
                <p className="mt-1.5 text-xs text-slate-500 leading-relaxed line-clamp-3">
                  {mat.descripcion}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-indigo-600 group-hover:text-indigo-700">
                <span>Ver / Descargar en Drive</span>
                <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
