import React from 'react';
import { useDonacion } from '../context/DonacionContext';
import AnimatedCoffeeIcon from './AnimatedCoffeeIcon';

export default function FloatingCafecitoButton() {
  const { openDonacion } = useDonacion();

  return (
    <aside
      aria-label="Colaboración ministerial"
      className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-[9999] pointer-events-auto"
    >
      <button
        onClick={openDonacion}
        type="button"
        className="flex items-center gap-2 rounded-full bg-amber-600 hover:bg-amber-500 p-2 sm:px-3.5 sm:py-2 text-white shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer group border border-amber-400/40"
        aria-label="Invitanos un café para colaborar con el ministerio"
        title="Colaborar con un cafecito (Mercado Pago)"
      >
        <div className="flex h-7 w-7 items-center justify-center flex-shrink-0">
          <AnimatedCoffeeIcon size="sm" steamColor="#FEF3C7" />
        </div>

        <span className="hidden sm:inline-block text-xs font-semibold text-white tracking-wide pr-1">
          Cafecito
        </span>
      </button>
    </aside>
  );
}
