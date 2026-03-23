"use client";

import { useRef, useEffect } from "react";

interface AudioPlayerProps {
  isOpened: boolean;
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
}

export default function AudioPlayer({ isOpened, isPlaying, setIsPlaying }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Sync state with audio element
  useEffect(() => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // If auto-play fails (interaction required), reset state
          setIsPlaying(false);
        });
      }
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, setIsPlaying]);

  // Handle initial open auto-play
  useEffect(() => {
    if (isOpened && audioRef.current && !isPlaying) {
      setIsPlaying(true);
    }
  }, [isOpened, setIsPlaying]);

  return <audio ref={audioRef} src="/music.mp3" loop />;
}
