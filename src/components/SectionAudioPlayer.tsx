import React, { useState } from 'react';
import {
  Volume2,
  VolumeX,
  Play,
  Pause,
  Sparkles,
  Sliders,
  Check,
  CheckCircle2,
  Info
} from 'lucide-react';
import { useSpeech } from '../hooks/useSpeech';

interface SectionAudioPlayerProps {
  id: string; // e.g. "intro", "sec-0", "sec-1", "all"
  title: string;
  text: string;
  colorSolid?: string;
  compact?: boolean;
}

export const SectionAudioPlayer: React.FC<SectionAudioPlayerProps> = ({
  id,
  title,
  text,
  compact = false
}) => {
  const {
    isSupported,
    isPlaying,
    isPaused,
    currentId,
    progress,
    voices,
    selectedVoice,
    setSelectedVoice,
    rate,
    setRate,
    speak,
    stop
  } = useSpeech();

  const [showConfig, setShowConfig] = useState(false);

  const isCurrentActive = currentId === id;
  const isPlayingNow = isCurrentActive && isPlaying;
  const isPausedNow = isCurrentActive && isPaused;

  const handlePlayToggle = () => {
    if (!isSupported) {
      alert('Tu navegador no tiene activada la síntesis de voz (SpeechSynthesis). Prueba en Google Chrome o Microsoft Edge.');
      return;
    }
    speak(text, id, title);
  };

  const handleStop = (e: React.MouseEvent) => {
    e.stopPropagation();
    stop();
  };

  return (
    <div className="relative inline-flex items-center">
      {/* Discreet pill button with subtle speaker icon */}
      <div
        className={`inline-flex items-center gap-1 rounded-full transition-all duration-200 border ${
          isCurrentActive
            ? 'bg-indigo-600 text-white border-indigo-700 shadow-sm ring-2 ring-indigo-200'
            : 'bg-slate-100/90 hover:bg-indigo-50/80 text-slate-700 hover:text-indigo-900 border-slate-200/90 hover:border-indigo-300/80 shadow-2xs'
        } ${compact ? 'px-2 py-0.5 text-xs' : 'px-2.5 py-1 text-xs'}`}
      >
        <button
          type="button"
          onClick={handlePlayToggle}
          className="flex items-center gap-1.5 font-medium cursor-pointer focus:outline-hidden group"
          title={
            isPlayingNow
              ? 'Pausar audio'
              : isPausedNow
              ? 'Reanudar lectura en voz alta'
              : 'Escuchar con locución en voz alta'
          }
        >
          {isPlayingNow ? (
            <>
              <Pause className="h-3 w-3 text-white fill-white animate-pulse" />
              <span className="font-semibold text-white text-[11px]">Pausar</span>
            </>
          ) : isPausedNow ? (
            <>
              <Play className="h-3 w-3 text-white fill-white" />
              <span className="font-semibold text-white text-[11px]">Reanudar</span>
            </>
          ) : (
            <>
              <Volume2 className="h-3.5 w-3.5 text-slate-500 group-hover:text-indigo-600 transition-colors" />
              <span className="text-slate-600 group-hover:text-indigo-700 text-[11px]">Escuchar</span>
            </>
          )}
        </button>

        {/* Progress pill if playing */}
        {isCurrentActive && progress > 0 && (
          <span className="text-[10px] font-mono font-semibold text-indigo-100 pl-0.5">
            {progress}%
          </span>
        )}

        {/* Stop button when active */}
        {isCurrentActive && (
          <button
            type="button"
            onClick={handleStop}
            className="p-0.5 rounded-full hover:bg-indigo-700 text-white/90 hover:text-white transition-colors cursor-pointer"
            title="Detener audio"
          >
            <VolumeX className="h-3 w-3" />
          </button>
        )}

        {/* Voice and Speed Settings trigger */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setShowConfig(!showConfig);
          }}
          className={`p-0.5 rounded-full transition-colors cursor-pointer ${
            isCurrentActive
              ? 'text-indigo-200 hover:text-white hover:bg-indigo-700/60'
              : 'text-slate-400 hover:text-indigo-600 hover:bg-slate-200/60'
          }`}
          title="Configurar voz natural y velocidad"
        >
          <Sliders className="h-3 w-3" />
        </button>
      </div>

      {/* Voice and Speed settings popup */}
      {showConfig && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setShowConfig(false)}
          />
          <div className="absolute right-0 top-full mt-2 z-50 w-80 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl text-slate-800 text-xs">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <div className="flex items-center gap-1.5 font-bold text-slate-900">
                <Volume2 className="h-4 w-4 text-indigo-600" />
                <span className="text-sm">Configuración de Voz</span>
              </div>
              <button
                type="button"
                onClick={() => setShowConfig(false)}
                className="text-slate-400 hover:text-slate-600 font-bold px-1 text-sm cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Currently selected voice badge */}
            <div className="mt-3 p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
              <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-0.5">
                Voz activa seleccionada:
              </span>
              <div className="flex items-center justify-between gap-2">
                <span className="font-semibold text-slate-800 truncate text-xs">
                  {selectedVoice ? selectedVoice.name.replace(/^Microsoft\s+/i, '').replace(/^Google\s+/i, 'Google ') : 'Predeterminada'}
                </span>
                <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md text-[10px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200 flex-shrink-0">
                  <CheckCircle2 className="h-3 w-3" />
                  Activa
                </span>
              </div>
            </div>

            {/* Speed selection */}
            <div className="mt-3">
              <span className="block font-semibold text-slate-700 mb-1.5">
                Velocidad de locución
              </span>
              <div className="grid grid-cols-3 gap-1.5">
                {[
                  { val: 0.85, label: '0.85x (Pausada)' },
                  { val: 0.92, label: '0.92x (Natural)' },
                  { val: 1.0, label: '1.0x (Normal)' },
                ].map(({ val, label }) => (
                  <button
                    key={val}
                    type="button"
                    onClick={() => setRate(val)}
                    className={`rounded-lg py-1 px-1.5 text-center transition-all cursor-pointer ${
                      rate === val
                        ? 'bg-indigo-600 text-white font-bold shadow-2xs'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200 font-medium'
                    }`}
                  >
                    <span className="block text-xs">{val === 0.92 ? '0.92x ⭐' : `${val}x`}</span>
                    <span className="block text-[9px] opacity-80">{val === 0.85 ? 'Pausada' : val === 0.92 ? 'Natural' : 'Normal'}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Voice selection list */}
            {voices.length > 0 && (
              <div className="mt-3">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-semibold text-slate-700">
                    Voces en español en tu dispositivo ({voices.length})
                  </span>
                  <span className="text-[10px] text-indigo-600 font-medium">Recomendadas arriba</span>
                </div>

                <div className="max-h-40 overflow-y-auto space-y-1 pr-1 border border-slate-100 rounded-xl p-1">
                  {voices.map((item, idx) => {
                    const isSelected = selectedVoice?.name === item.voice.name;
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => {
                          setSelectedVoice(item.voice);
                          if (isCurrentActive) {
                            speak(text, id, title);
                          }
                        }}
                        className={`w-full flex items-center justify-between text-left p-1.5 rounded-lg transition-colors cursor-pointer ${
                          isSelected
                            ? 'bg-indigo-50 text-indigo-900 font-semibold ring-1 ring-indigo-300'
                            : 'hover:bg-slate-50 text-slate-700'
                        }`}
                      >
                        <div className="truncate pr-2 min-w-0">
                          <span className="block truncate font-medium text-xs">{item.label}</span>
                          <span className="text-[10px] text-slate-400 block truncate">
                            {item.isNatural ? '✨ Voz Natural / Neural' : item.lang}
                          </span>
                        </div>
                        {isSelected && <Check className="h-3.5 w-3.5 text-indigo-600 flex-shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            <div className="mt-3 pt-2 border-t border-slate-100 text-[11px] text-slate-500 leading-snug flex items-start gap-1.5">
              <Info className="h-3.5 w-3.5 text-indigo-500 flex-shrink-0 mt-0.5" />
              <span>
                <strong>Consejo:</strong> Para obtener la máxima naturalidad y calidez de voz, abre la app desde <strong>Google Chrome</strong> o <strong>Microsoft Edge</strong> (ambos proveen voces neuronales naturales gratuitas).
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
