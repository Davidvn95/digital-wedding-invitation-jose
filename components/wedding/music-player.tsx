'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface MusicPlayerProps {
  shouldPlay: boolean;
}

export function MusicPlayer({ shouldPlay }: MusicPlayerProps) {
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (shouldPlay && audioRef.current) {
      const playAudio = async () => {
        try {
          audioRef.current!.volume = 0.3;
          await audioRef.current!.play();
          setIsPlaying(true);
        } catch (error) {
          console.log('Autoplay prevented by browser');
        }
      };
      playAudio();
    }
  }, [shouldPlay]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <>
      <audio ref={audioRef} loop preload='auto' src='/musica.mp3' />

      <AnimatePresence>
        {shouldPlay && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            onClick={toggleMute}
            className='fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-card/90 backdrop-blur-sm shadow-lg border border-border flex items-center justify-center hover:bg-card transition-colors'
            aria-label={isMuted ? 'Activar sonido' : 'Silenciar'}
          >
            <motion.div initial={false} animate={{ rotate: isMuted ? 0 : 360 }} transition={{ duration: 0.3 }}>
              {isMuted ? <VolumeX className='w-5 h-5 text-muted-foreground' /> : <Volume2 className='w-5 h-5 text-primary' />}
            </motion.div>

            {/* Sound wave animation */}
            {!isMuted && isPlaying && (
              <motion.div
                className='absolute inset-0 rounded-full border-2 border-primary/30'
                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              />
            )}
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
