import React, { createContext, useContext, useState, useEffect, useRef, useCallback } from 'react';

export interface VoiceOption {
  voice: SpeechSynthesisVoice;
  label: string;
  isNatural: boolean;
  lang: string;
  priority: number;
}

interface SpeechContextType {
  isSupported: boolean;
  isPlaying: boolean;
  isPaused: boolean;
  currentId: string | null;
  progress: number;
  voices: VoiceOption[];
  selectedVoice: SpeechSynthesisVoice | null;
  setSelectedVoice: (v: SpeechSynthesisVoice | null) => void;
  rate: number;
  setRate: (r: number) => void;
  speak: (text: string, id: string, title?: string) => void;
  pause: () => void;
  resume: () => void;
  stop: () => void;
}

const SpeechContext = createContext<SpeechContextType | undefined>(undefined);

const PREF_VOICE_KEY = 'capacitacion_speech_voice_name_v2';
const PREF_RATE_KEY = 'capacitacion_speech_rate_v2';

export const SpeechProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSupported, setIsSupported] = useState<boolean>(() => {
    return typeof window !== 'undefined' && 'speechSynthesis' in window;
  });

  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [currentId, setCurrentId] = useState<string | null>(null);
  const [voices, setVoices] = useState<VoiceOption[]>([]);
  const [selectedVoice, setSelectedVoice] = useState<SpeechSynthesisVoice | null>(null);
  // Default to 0.92 for much more natural, articulate, human cadence
  const [rate, setRateState] = useState<number>(() => {
    try {
      const saved = localStorage.getItem(PREF_RATE_KEY);
      if (saved) {
        const val = parseFloat(saved);
        if (!isNaN(val) && val >= 0.7 && val <= 1.5) return val;
      }
    } catch {
      // Ignore storage errors
    }
    return 0.92;
  });
  const [progress, setProgress] = useState<number>(0);

  const totalLengthRef = useRef<number>(1);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const setRate = (newRate: number) => {
    setRateState(newRate);
    try {
      localStorage.setItem(PREF_RATE_KEY, String(newRate));
    } catch {
      // Ignore storage errors
    }
  };

  const handleSelectVoice = (v: SpeechSynthesisVoice | null) => {
    setSelectedVoice(v);
    if (v?.name) {
      try {
        localStorage.setItem(PREF_VOICE_KEY, v.name);
      } catch {
        // Ignore storage errors
      }
    }
  };

  const refreshVoices = useCallback(() => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      setIsSupported(false);
      return;
    }
    setIsSupported(true);

    const available = window.speechSynthesis.getVoices();
    if (!available || available.length === 0) return;

    // Filter Spanish voices first
    const spanishVoices = available.filter(
      (v) =>
        v.lang.toLowerCase().startsWith('es') ||
        v.lang.toLowerCase().includes('es-') ||
        v.lang.toLowerCase().includes('spa')
    );

    const targetList = spanishVoices.length > 0 ? spanishVoices : available;

    const scored: VoiceOption[] = targetList.map((voice) => {
      const nameLower = voice.name.toLowerCase();
      const langLower = voice.lang.toLowerCase();

      // Strong penalty for notoriously robotic legacy voices (eSpeak, Pico, Klatt, etc.)
      const isRobotic =
        nameLower.includes('espeak') ||
        nameLower.includes('klatt') ||
        nameLower.includes('mbrola') ||
        nameLower.includes('pico') ||
        nameLower.includes('synthesizer') ||
        nameLower.includes('compact') ||
        nameLower.includes('sampler');

      // Detection of natural neural / high-fidelity voices
      const isNatural =
        !isRobotic &&
        (nameLower.includes('natural') ||
          nameLower.includes('neural') ||
          nameLower.includes('online') ||
          nameLower.includes('google') ||
          nameLower.includes('enhanced') ||
          nameLower.includes('premium') ||
          nameLower.includes('siri') ||
          nameLower.includes('paulina') ||
          nameLower.includes('jorge') ||
          nameLower.includes('diego') ||
          nameLower.includes('monica') ||
          nameLower.includes('dalia') ||
          nameLower.includes('alvaro') ||
          nameLower.includes('elvira') ||
          nameLower.includes('paloma') ||
          nameLower.includes('sabina') ||
          nameLower.includes('gonzalo') ||
          nameLower.includes('salome'));

      let priority = 0;

      if (isRobotic) {
        priority = -1000;
      } else {
        // High quality Edge / Microsoft Online Natural voices
        if (nameLower.includes('online (natural)')) priority += 500;
        else if (nameLower.includes('natural')) priority += 400;
        else if (nameLower.includes('neural')) priority += 380;
        else if (nameLower.includes('enhanced') || nameLower.includes('premium')) priority += 350;

        // Google natural voices (Chrome/Android)
        if (nameLower.includes('google') && (langLower.startsWith('es') || nameLower.includes('español'))) {
          priority += 320;
        } else if (nameLower.includes('google')) {
          priority += 220;
        }

        // Apple / Siri Spanish voices
        if (nameLower.includes('siri') || nameLower.includes('paulina') || nameLower.includes('diego')) {
          priority += 300;
        }

        // Prioritize Latin American Spanish dialects (es-419, es-AR, es-MX, es-US)
        if (langLower === 'es-ar' || langLower.includes('argentina') || nameLower.includes('diego')) {
          priority += 160;
        } else if (langLower === 'es-419' || langLower === 'es-mx' || langLower === 'es-us') {
          priority += 130;
        } else if (langLower.startsWith('es')) {
          priority += 80;
        }
      }

      let cleanName = voice.name
        .replace(/^Microsoft\s+/i, 'Edge ')
        .replace(/^Google\s+/i, 'Google ')
        .replace(/\s*\(Natural\)/i, ' (Natural)')
        .replace(/\s*-\s*Spanish.*$/i, '');

      return {
        voice,
        label: cleanName,
        isNatural,
        lang: voice.lang,
        priority
      };
    });

    scored.sort((a, b) => b.priority - a.priority);
    setVoices(scored);

    // Retrieve saved preference or pick the best natural voice
    let savedVoiceName: string | null = null;
    try {
      savedVoiceName = localStorage.getItem(PREF_VOICE_KEY);
    } catch {
      // Ignore
    }

    if (savedVoiceName) {
      const match = scored.find(v => v.voice.name === savedVoiceName);
      if (match) {
        setSelectedVoice(match.voice);
        return;
      }
    }

    // Default to the highest scored (natural) voice
    if (scored.length > 0) {
      // Pick the first non-robotic voice
      const best = scored.find(s => s.priority > 0) || scored[0];
      setSelectedVoice(best.voice);
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      setIsSupported(false);
      return;
    }

    setIsSupported(true);
    refreshVoices();

    if ('speechSynthesis' in window) {
      window.speechSynthesis.onvoiceschanged = refreshVoices;
    }

    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.onvoiceschanged = null;
        window.speechSynthesis.cancel();
      }
    };
  }, [refreshVoices]);

  // Preprocess text to sound natural and human:
  // - expand biblical & common abbreviations
  // - format pauses so speech synthesis takes natural breaths
  const sanitizeTextForSpeech = (rawText: string): string => {
    return rawText
      .replace(/https?:\/\/\S+/g, '')
      .replace(/\bCap\.\s*(\d+)/gi, 'Capítulo $1')
      .replace(/\bv\.\s*(\d+)/gi, 'versículo $1')
      .replace(/\bvv\.\s*(\d+)/gi, 'versículos $1')
      .replace(/\bej\.\s*/gi, 'por ejemplo, ')
      .replace(/\betc\./gi, 'etcétera.')
      .replace(/\bpág\.\s*/gi, 'página ')
      .replace(/[*_~`#>[\]]/g, ' ')
      .replace(/[—–]/g, ', ')
      .replace(/;\s*/g, ', ')
      .replace(/\s+/g, ' ')
      .trim();
  };

  const stop = useCallback(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsPlaying(false);
    setIsPaused(false);
    setCurrentId(null);
    setProgress(0);
  }, []);

  const pause = useCallback(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.pause();
      setIsPaused(true);
      setIsPlaying(false);
    }
  }, []);

  const resume = useCallback(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.resume();
      setIsPaused(false);
      setIsPlaying(true);
    }
  }, []);

  const speak = useCallback(
    (text: string, id: string, title?: string) => {
      if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;

      if (currentId === id) {
        if (isPlaying) {
          pause();
          return;
        }
        if (isPaused) {
          resume();
          return;
        }
      }

      window.speechSynthesis.cancel();

      const cleanedContent = sanitizeTextForSpeech(text);
      const fullNarration = title
        ? `${title}. ... ${cleanedContent}`
        : cleanedContent;

      totalLengthRef.current = Math.max(fullNarration.length, 1);

      const utterance = new SpeechSynthesisUtterance(fullNarration);
      utteranceRef.current = utterance;

      if (selectedVoice) {
        utterance.voice = selectedVoice;
        utterance.lang = selectedVoice.lang;
      } else {
        utterance.lang = 'es-419';
      }

      // Natural speech parameters
      utterance.rate = rate; // 0.92 default
      utterance.pitch = 0.98; // Warm, natural human timbre

      utterance.onstart = () => {
        setIsPlaying(true);
        setIsPaused(false);
        setCurrentId(id);
        setProgress(0);
      };

      utterance.onboundary = (event) => {
        if (event.charIndex !== undefined && totalLengthRef.current > 0) {
          const pct = Math.min(100, Math.round((event.charIndex / totalLengthRef.current) * 100));
          setProgress(pct);
        }
      };

      utterance.onend = () => {
        setIsPlaying(false);
        setIsPaused(false);
        setCurrentId(null);
        setProgress(100);
      };

      utterance.onerror = (e) => {
        if (e.error !== 'canceled' && e.error !== 'interrupted') {
          console.warn('Speech synthesis playback event:', e.error);
        }
        setIsPlaying(false);
        setIsPaused(false);
        setCurrentId(null);
      };

      window.speechSynthesis.speak(utterance);
    },
    [currentId, isPlaying, isPaused, selectedVoice, rate, pause, resume]
  );

  return (
    <SpeechContext.Provider
      value={{
        isSupported,
        isPlaying,
        isPaused,
        currentId,
        progress,
        voices,
        selectedVoice,
        setSelectedVoice: handleSelectVoice,
        rate,
        setRate,
        speak,
        pause,
        resume,
        stop
      }}
    >
      {children}
    </SpeechContext.Provider>
  );
};

export function useSpeech() {
  const context = useContext(SpeechContext);
  if (!context) {
    throw new Error('useSpeech must be used within a SpeechProvider');
  }
  return context;
}
