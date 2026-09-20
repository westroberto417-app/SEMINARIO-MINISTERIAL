import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { Nivel, ProgresoNivel } from '../types';
import { cursoData } from '../data/cursoData';

export interface UltimaLeccionVisitada {
  nivelId: number;
  leccionId: string;
}

interface ProgressContextType {
  completadas: string[];
  ultimaLeccionVisitada: UltimaLeccionVisitada | null;
  guardarUltimaLeccion: (nivelId: number, leccionId: string) => void;
  toggleLeccion: (leccionId: string) => void;
  marcarLeccion: (leccionId: string) => void;
  desmarcarLeccion: (leccionId: string) => void;
  estaCompletada: (leccionId: string) => boolean;
  progresoNivel: (nivel: Nivel) => ProgresoNivel;
  progresoTotal: () => { total: number; hechas: number; porcentaje: number };
  reiniciarProgreso: () => void;
}

const STORAGE_KEY = 'seminario_lecciones_completadas';
const LAST_LESSON_KEY = 'seminario_ultima_leccion_visitada';

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [completadas, setCompletadas] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
      // Check legacy Base44 key fallback
      const legacy = localStorage.getItem('capacitacion_completadas') || localStorage.getItem('completadas');
      if (legacy) {
        return JSON.parse(legacy);
      }
    } catch {
      // ignore
    }
    return [];
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(completadas));
    } catch {
      // ignore
    }
  }, [completadas]);

  const [ultimaLeccionVisitada, setUltimaLeccionVisitada] = useState<UltimaLeccionVisitada | null>(() => {
    try {
      const saved = localStorage.getItem(LAST_LESSON_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
      const legacy = localStorage.getItem('ultima_leccion') || localStorage.getItem('last_visited_lesson');
      if (legacy) {
        return JSON.parse(legacy);
      }
    } catch {
      // ignore
    }
    return null;
  });

  const guardarUltimaLeccion = useCallback((nivelId: number, leccionId: string) => {
    const item = { nivelId, leccionId };
    setUltimaLeccionVisitada(item);
    try {
      localStorage.setItem(LAST_LESSON_KEY, JSON.stringify(item));
    } catch {
      // ignore
    }
  }, []);

  const toggleLeccion = useCallback((leccionId: string) => {
    setCompletadas(prev =>
      prev.includes(leccionId)
        ? prev.filter(id => id !== leccionId)
        : [...prev, leccionId]
    );
  }, []);

  const marcarLeccion = useCallback((leccionId: string) => {
    setCompletadas(prev => (prev.includes(leccionId) ? prev : [...prev, leccionId]));
  }, []);

  const desmarcarLeccion = useCallback((leccionId: string) => {
    setCompletadas(prev => prev.filter(id => id !== leccionId));
  }, []);

  const estaCompletada = useCallback((leccionId: string) => {
    return completadas.includes(leccionId);
  }, [completadas]);

  const progresoNivel = useCallback((nivel: Nivel): ProgresoNivel => {
    const total = nivel.lecciones.length;
    const hechas = nivel.lecciones.filter(l => completadas.includes(l.id)).length;
    const porcentaje = total > 0 ? Math.round((hechas / total) * 100) : 0;
    return { total, hechas, porcentaje };
  }, [completadas]);

  const progresoTotal = useCallback(() => {
    const total = cursoData.niveles.reduce((acc, n) => acc + n.lecciones.length, 0);
    const hechas = completadas.length;
    const porcentaje = total > 0 ? Math.round((hechas / total) * 100) : 0;
    return { total, hechas, porcentaje };
  }, [completadas]);

  const reiniciarProgreso = useCallback(() => {
    setCompletadas([]);
    setUltimaLeccionVisitada(null);
    try {
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem(LAST_LESSON_KEY);
      localStorage.removeItem('capacitacion_completadas');
      localStorage.removeItem('completadas');
      localStorage.removeItem('ultima_leccion');
      localStorage.removeItem('last_visited_lesson');
    } catch {
      // ignore
    }
  }, []);

  return (
    <ProgressContext.Provider
      value={{
        completadas,
        ultimaLeccionVisitada,
        guardarUltimaLeccion,
        toggleLeccion,
        marcarLeccion,
        desmarcarLeccion,
        estaCompletada,
        progresoNivel,
        progresoTotal,
        reiniciarProgreso,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = (): ProgressContextType => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};
