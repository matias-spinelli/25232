import { useRef } from "react";

export const useSizzleSound = () => {
  const audioRef = useRef(null);

  const play = () => {
    if (audioRef.current) return; // evita que se duplique
    const audio = new Audio("/sounds/fire-sizzle.mp3");
    audio.loop = true;
    audio.volume = 0.4;
    audio.play().catch(err => console.warn("No se pudo reproducir el sonido:", err));
    audioRef.current = audio;
  };

  const stop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current = null;
    }
  };

  return { play, stop };
};
