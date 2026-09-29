import React from 'react';
import { useDonacion } from '../context/DonacionContext';
import AnimatedCoffeeIcon from './AnimatedCoffeeIcon';
import { Heart } from 'lucide-react';

export default function FloatingCafecitoButton() {
  const { openDonacion } = useDonacion();

  return (
    <aside
      aria-label="Colaboración ministerial"
      className="fixed bottom-20 sm:bottom-6 right-3 sm:right-6 z-[9999] pointer-events-auto"
    >
      <button
        onClick={openDonacion}
        type="button"
        className="flex items-center gap-2 sm:gap-2.5 rounded-full bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 px-3 py-2 sm:px-4 sm:py-2.5 text-white shadow-xl shadow-amber-950/35 ring-2 ring-amber-300 hover:ring-white transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer group animate-subtle-float"
        aria-label="Invitanos un café para colaborar con el ministerio en Mercado Pago"
        title="Si este material está bendiciendo tu vida, colabora con nosotros"
      >
        {/* Coffee cup with animated steam and gentle ping indicator */}
        <div className="relative flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-amber-900/40 ring-1 ring-amber-200/60 shadow-inner flex-shrink-0">
          <AnimatedCoffeeIcon size="sm" steamColor="#FEF3C7" />
          <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-400"></span>
          </span>
        </div>

        {/* Button label visible on all screens */}
        <div className="flex flex-col text-left pr-1">
          <span className="text-xs sm:text-sm font-bold leading-tight flex items-center gap-1">
            <span>Invitame un café</span>
            <Heart className="h-3 w-3 text-red-300 fill-red-300 flex-shrink-0" />
          </span>
          <span className="text-[10px] text-amber-100 font-semibold leading-none flex items-center gap-1 mt-0.5">
            <span>Colaborar</span>
            <span className="text-amber-200 font-mono text-[9px]">&bull; Mercado Pago</span>
          </span>
        </div>
      </button>
    </aside>
  );
}
