"use client"

import { motion } from "framer-motion"
import { useEffect } from "react"

interface TransitionScreenProps {
  onComplete: () => void
}

export function TransitionScreen({ onComplete }: TransitionScreenProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete()
    }, 4500)
    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col items-center justify-center bg-background px-6"
    >
      <div className="text-center max-w-xl">
        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="w-24 h-px bg-primary/40 mx-auto mb-8"
        />

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-[family-name:var(--font-script)] text-6xl md:text-8xl text-foreground"
        >
          Nos casamos
        </motion.h1>

        {/* Decorative hearts or element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="my-10 flex items-center justify-center gap-3"
        >
          <span className="w-8 h-px bg-primary/30" />
          <svg 
            className="w-5 h-5 text-primary/60" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
          <span className="w-8 h-px bg-primary/30" />
        </motion.div>

        {/* Bible verse */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="space-y-4"
        >
          <p className="font-serif text-lg md:text-xl text-muted-foreground leading-relaxed italic">
            {'"'}Por eso dejará el hombre a su padre y a su madre, y se unirá a su esposa, y los dos llegarán a ser un solo cuerpo.{'"'}
          </p>
          <p className="font-sans text-sm text-muted-foreground/70 tracking-wider uppercase">
            Efesios 5:31
          </p>
        </motion.div>

        {/* Decorative line bottom */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="w-24 h-px bg-primary/40 mx-auto mt-10"
        />

        {/* Loading indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
          className="mt-12"
        >
          <div className="flex justify-center gap-1.5">
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-primary/40"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
