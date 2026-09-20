import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Search, Menu, X, CheckCircle2, RotateCcw } from 'lucide-react';
import { cursoData } from '../data/cursoData';
import { useProgress } from '../context/ProgressContext';
import SearchModal from './SearchModal';
import ResetProgressModal from './ResetProgressModal';
import PWAInstallButton from './PWAInstallButton';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [showResetModal, setShowResetModal] = useState(false);
  const location = useLocation();
  const { progresoTotal, reiniciarProgreso } = useProgress();
  const total = progresoTotal();

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-amber-400 shadow-sm transition-transform group-hover:scale-105">
              <BookOpen className="h-5 w-5" />
            </div>
            <div>
              <span className="font-heading block text-base font-bold leading-none text-slate-900">
                Capacitación Bíblica
              </span>
              <span className="text-[11px] font-medium text-slate-500">
                Seminario Ministerial
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            <Link
              to="/"
              className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${
                location.pathname === '/'
                  ? 'bg-slate-100 text-slate-900 font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Inicio
            </Link>

            {cursoData.niveles.map(nivel => {
              const active = location.pathname.startsWith(`/nivel/${nivel.id}`);
              return (
                <Link
                  key={nivel.id}
                  to={`/nivel/${nivel.id}`}
                  className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors flex items-center gap-1.5 ${
                    active
                      ? 'bg-indigo-50 text-indigo-700 font-semibold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  <span>Nivel {nivel.id}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right Tools */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Install PWA Button */}
            <PWAInstallButton />

            {/* Search button */}
            <button
              onClick={() => setSearchOpen(true)}
              className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50/80 px-3 py-1.5 text-xs font-medium text-slate-600 hover:border-slate-300 hover:bg-white hover:text-slate-900 transition-all cursor-pointer"
              title="Buscar en el curso"
            >
              <Search className="h-3.5 w-3.5 text-slate-400" />
              <span className="hidden sm:inline">Buscar...</span>
            </button>

            {/* Global progress pill */}
            <div className="hidden sm:flex items-center gap-2 rounded-xl bg-slate-100/90 px-3 py-1.5 text-xs font-semibold text-slate-700">
              <CheckCircle2 className="h-4 w-4 text-emerald-600" />
              <span>{total.porcentaje}%</span>
              <span className="text-[10px] text-slate-500 font-normal">({total.hechas}/{total.total})</span>
            </div>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden rounded-lg p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-slate-200 bg-white px-4 py-3 shadow-lg space-y-1">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              Inicio
            </Link>
            {cursoData.niveles.map(nivel => (
              <Link
                key={nivel.id}
                to={`/nivel/${nivel.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                <span>Nivel {nivel.id}: {nivel.titulo}</span>
                <span className="text-xs text-slate-400">{nivel.lecciones.length} lecciones</span>
              </Link>
            ))}
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between px-3 text-xs text-slate-500">
              <span>Progreso general</span>
              <span className="font-semibold text-slate-800">{total.porcentaje}% ({total.hechas}/{total.total} lecciones)</span>
            </div>
            {total.hechas > 0 && (
              <div className="pt-1 px-3">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setShowResetModal(true);
                  }}
                  className="w-full inline-flex items-center justify-center gap-1.5 rounded-lg py-2 text-xs font-medium text-red-600 bg-red-50 hover:bg-red-100 transition-colors"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  <span>Reiniciar recorrido del curso</span>
                </button>
              </div>
            )}
          </div>
        )}
      </header>

      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <ResetProgressModal
        isOpen={showResetModal}
        onClose={() => setShowResetModal(false)}
        onConfirm={reiniciarProgreso}
        leccionesCompletadas={total.hechas}
      />
    </>
  );
}
