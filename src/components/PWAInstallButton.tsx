import React, { useState } from 'react';
import { Download, Share, PlusSquare, Check, X } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';

export const PWAInstallButton: React.FC = () => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);
  const [justInstalled, setJustInstalled] = useState(false);

  if (isInstalled) {
    return null;
  }

  const handleInstall = async () => {
    const success = await install();
    if (success) {
      setJustInstalled(true);
    }
  };

  return (
    <>
      {/* Android / Chromium / Desktop Install Button */}
      {isInstallable && (
        <button
          type="button"
          onClick={handleInstall}
          className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-3 py-1.5 text-xs font-semibold text-slate-950 shadow-xs hover:from-amber-400 hover:to-amber-500 transition-all cursor-pointer"
          title="Instalar como aplicación en tu pantalla de inicio"
        >
          {justInstalled ? (
            <>
              <Check className="h-3.5 w-3.5" />
              <span>¡Instalada!</span>
            </>
          ) : (
            <>
              <Download className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Instalar App</span>
              <span className="sm:hidden">Instalar</span>
            </>
          )}
        </button>
      )}

      {/* iOS Safari Guide Button */}
      {isIOS && !isInstallable && (
        <button
          type="button"
          onClick={() => setShowIOSGuide(true)}
          className="inline-flex items-center gap-1.5 rounded-xl border border-amber-500/40 bg-amber-50/80 px-2.5 py-1.5 text-xs font-semibold text-amber-900 hover:bg-amber-100 transition-all cursor-pointer"
          title="Cómo instalar en iPhone o iPad"
        >
          <Download className="h-3.5 w-3.5 text-amber-700" />
          <span>Instalar en iOS</span>
        </button>
      )}

      {/* Fallback button on mobile/desktop if prompt has not fired yet */}
      {!isInstallable && !isIOS && (
        <button
          type="button"
          onClick={() => setShowIOSGuide(true)}
          className="inline-flex items-center gap-1.5 rounded-xl border border-amber-400/60 bg-amber-50 px-2.5 py-1.5 text-xs font-semibold text-amber-900 hover:bg-amber-100 transition-all cursor-pointer shadow-2xs"
          title="Cómo instalar como aplicación"
        >
          <Download className="h-3.5 w-3.5 text-amber-700" />
          <span>Instalar App</span>
        </button>
      )}

      {/* Modal / Guide for iOS & Manual browser install */}
      {showIOSGuide && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in"
          onClick={() => setShowIOSGuide(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl border border-slate-200"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-800">
                <Download className="h-6 w-6" />
              </div>
              <button
                onClick={() => setShowIOSGuide(false)}
                className="rounded-xl p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-4">
              <h3 className="font-heading text-lg font-bold text-slate-900">
                Instalar Capacitación Bíblica
              </h3>
              <p className="mt-1 text-xs text-slate-500">
                Instala la aplicación en tu pantalla de inicio para acceder rápidamente y estudiar sin distracciones ni barras de navegación.
              </p>

              <div className="mt-4 space-y-3 rounded-xl bg-slate-50 p-4 border border-slate-100 text-xs text-slate-700">
                <div className="flex items-start gap-2.5">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700 font-bold">
                    1
                  </div>
                  <p className="pt-0.5">
                    Abre el enlace compartido en <strong>Chrome</strong> (en Android / PC) o en <strong>Safari</strong> (en iPhone / iPad).
                  </p>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700 font-bold">
                    2
                  </div>
                  <p className="pt-0.5">
                    En iPhone toca el botón <strong>Compartir</strong> <Share className="inline h-3.5 w-3.5 text-sky-600 mx-0.5" /> y selecciona <strong className="text-slate-900">"Agregar al inicio"</strong> <PlusSquare className="inline h-3.5 w-3.5 text-slate-700 mx-0.5" />.
                    <br />
                    En Android / Chrome toca el menú <strong>⋮</strong> y selecciona <strong className="text-slate-900">"Instalar aplicación"</strong> o <strong>"Agregar a la pantalla principal"</strong>.
                  </p>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700 font-bold">
                    3
                  </div>
                  <p className="pt-0.5">
                    ¡Listo! Tendrás el icono directo con pantalla completa, soporte offline y tu progreso guardado.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 flex justify-end">
              <button
                type="button"
                onClick={() => setShowIOSGuide(false)}
                className="rounded-xl bg-slate-900 px-4 py-2 text-xs sm:text-sm font-semibold text-white hover:bg-slate-800 transition-colors"
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PWAInstallButton;
