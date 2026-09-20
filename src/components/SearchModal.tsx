import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, X, BookOpen, CheckCircle2, ChevronRight } from 'lucide-react';
import { cursoData } from '../data/cursoData';
import { useProgress } from '../context/ProgressContext';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const { estaCompletada } = useProgress();

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];

    const found: Array<{
      nivelId: number;
      nivelTitulo: string;
      leccionId: string;
      titulo: string;
      subtitulo: string;
      ministro: string;
      versiculo: string;
    }> = [];

    for (const nivel of cursoData.niveles) {
      for (const l of nivel.lecciones) {
        const matchesTitle = l.titulo.toLowerCase().includes(q);
        const matchesSub = l.subtitulo.toLowerCase().includes(q);
        const matchesMinister = l.ministro.toLowerCase().includes(q);
        const matchesVerse = l.versiculo.toLowerCase().includes(q);
        const matchesIntro = l.introduccion.toLowerCase().includes(q);
        const matchesSections = l.secciones.some(
          s => s.titulo.toLowerCase().includes(q) || s.contenido.toLowerCase().includes(q)
        );

        if (matchesTitle || matchesSub || matchesMinister || matchesVerse || matchesIntro || matchesSections) {
          found.push({
            nivelId: nivel.id,
            nivelTitulo: nivel.titulo,
            leccionId: l.id,
            titulo: l.titulo,
            subtitulo: l.subtitulo,
            ministro: l.ministro,
            versiculo: l.versiculo,
          });
        }
      }
    }

    return found;
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 md:p-20">
      <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity" onClick={onClose} />

      <div className="relative w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-slate-900/10">
        <div className="flex items-center gap-3 border-b border-slate-200 px-4 py-3.5">
          <Search className="h-5 w-5 text-slate-400" />
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Buscar por tema, ministro (ej. Stamateas, Alducín), versículo..."
            className="w-full bg-transparent text-slate-900 placeholder-slate-400 outline-none text-base"
            autoFocus
          />
          <button
            onClick={onClose}
            className="rounded-lg p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto p-2">
          {query.trim() === '' ? (
            <div className="p-8 text-center text-slate-400">
              <BookOpen className="mx-auto h-8 w-8 text-slate-300 mb-2" />
              <p className="text-sm font-medium">Escribe una palabra para buscar en las 33 lecciones del seminario</p>
              <div className="mt-4 flex flex-wrap justify-center gap-1.5">
                {['Sanidad', 'Autoestima', 'Resiliencia', 'Alducín', 'Stamateas', 'Salvación', 'Ministerio'].map(
                  tag => (
                    <button
                      key={tag}
                      onClick={() => setQuery(tag)}
                      className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                    >
                      {tag}
                    </button>
                  )
                )}
              </div>
            </div>
          ) : results.length === 0 ? (
            <div className="p-8 text-center text-slate-500">
              <p className="text-sm">No se encontraron resultados para &ldquo;{query}&rdquo;</p>
            </div>
          ) : (
            <div className="space-y-1">
              <p className="px-3 py-1.5 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                {results.length} {results.length === 1 ? 'resultado encontrado' : 'resultados encontrados'}
              </p>
              {results.map(r => {
                const done = estaCompletada(r.leccionId);
                return (
                  <Link
                    key={r.leccionId}
                    to={`/nivel/${r.nivelId}/leccion/${r.leccionId}`}
                    onClick={onClose}
                    className="flex items-center justify-between gap-3 rounded-xl p-3 hover:bg-slate-50 transition-colors group"
                  >
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-semibold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md">
                          Nivel {r.nivelId}
                        </span>
                        <span className="text-xs text-slate-400 truncate">{r.ministro}</span>
                      </div>
                      <h4 className="mt-1 text-sm font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">
                        {r.titulo}
                      </h4>
                      <p className="text-xs text-slate-500 truncate">{r.subtitulo}</p>
                    </div>

                    <div className="flex items-center gap-2">
                      {done && <CheckCircle2 className="h-4 w-4 text-emerald-500" />}
                      <ChevronRight className="h-4 w-4 text-slate-300 group-hover:text-slate-500 transition-colors" />
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
