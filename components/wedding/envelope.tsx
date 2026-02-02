"use client"

import { motion } from "framer-motion"

interface EnvelopeProps {
  onOpen: () => void
  isOpening: boolean
}

export function Envelope({ onOpen, isOpening }: EnvelopeProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground font-sans font-light">
          Has recibido una invitación
        </p>
      </motion.div>

      {/* Envelope container */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative cursor-pointer"
        onClick={onOpen}
      >
        {/* Envelope body */}
        <motion.div
          animate={isOpening ? { y: 100, opacity: 0, scale: 0.8 } : {}}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="relative w-80 sm:w-96 h-56 sm:h-64"
        >
          {/* Back of envelope */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#f5ebe0] to-[#eddfcc] rounded-lg shadow-lg" />
          
          {/* Envelope flap (top triangle) */}
          <motion.div
            animate={isOpening ? { rotateX: 180 } : {}}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            style={{ transformOrigin: "top center", transformStyle: "preserve-3d" }}
            className="absolute -top-0 left-0 right-0 z-20"
          >
            <svg viewBox="0 0 384 120" className="w-full drop-shadow-sm">
              <path
                d="M0,0 L192,100 L384,0 L384,0 L0,0 Z"
                fill="#e8d9c5"
              />
              <path
                d="M0,0 L192,100 L384,0"
                fill="none"
                stroke="#d4c4ae"
                strokeWidth="1"
              />
            </svg>
          </motion.div>

          {/* Front of envelope */}
          <div className="absolute inset-0 z-10">
            {/* Bottom flap */}
            <svg viewBox="0 0 384 256" className="w-full h-full">
              <path
                d="M0,256 L0,80 L192,200 L384,80 L384,256 Z"
                fill="#f0e4d4"
              />
              <path
                d="M0,80 L192,200 L384,80"
                fill="none"
                stroke="#d4c4ae"
                strokeWidth="1"
              />
            </svg>
          </div>

          {/* Wax seal */}
          <motion.div
            animate={isOpening ? { scale: 0, opacity: 0 } : {}}
            transition={{ duration: 0.3 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary shadow-lg flex items-center justify-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-primary-foreground/30 flex items-center justify-center">
                <span className="font-[family-name:var(--font-script)] text-lg sm:text-xl text-primary-foreground text-nowrap">
                  J & L
                </span>
              </div>
            </div>
          </motion.div>

          {/* Card peeking out */}
          <motion.div
            animate={isOpening ? { y: -80, opacity: 1 } : { y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute top-4 left-4 right-4 h-48 sm:h-56 bg-card rounded shadow-sm z-0 flex items-center justify-center"
          >
            <div className="text-center px-6">
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2 font-sans">
                Boda
              </p>
              <p className="font-[family-name:var(--font-script)] text-2xl sm:text-3xl text-foreground">
                José Luis & Lorena
              </p>
              <div className="w-12 h-px bg-primary/40 mx-auto my-3" />
              <p className="text-xs text-muted-foreground font-sans">
                18 de Marzo, 2026
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpening ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        className="mt-12 text-center"
      >
        <motion.p
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-sm text-muted-foreground font-sans font-light"
        >
          Toca para abrir
        </motion.p>
      </motion.div>
    </div>
  )
}
