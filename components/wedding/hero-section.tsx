"use client"

import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 opacity-20">
        <svg viewBox="0 0 200 200" className="w-full h-full text-primary">
          <path
            fill="currentColor"
            d="M40,80 Q60,20 100,40 Q140,60 120,100 Q100,140 60,120 Q20,100 40,80"
            opacity="0.3"
          />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-80 h-80 opacity-20">
        <svg viewBox="0 0 200 200" className="w-full h-full text-accent">
          <path
            fill="currentColor"
            d="M40,80 Q60,20 100,40 Q140,60 120,100 Q100,140 60,120 Q20,100 40,80"
            opacity="0.3"
          />
        </svg>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl mx-auto"
      >
        <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-8 font-sans font-light">
          Estás cordialmente invitado a celebrar
        </p>

        <h1 className="font-[family-name:var(--font-script)] text-5xl md:text-7xl lg:text-8xl text-foreground">
          José Luis
        </h1>
        
        <div className="flex items-center justify-center gap-6 my-6">
          <span className="w-16 md:w-24 h-px bg-primary/40" />
          <span className="font-[family-name:var(--font-script)] text-3xl md:text-4xl text-primary">&</span>
          <span className="w-16 md:w-24 h-px bg-primary/40" />
        </div>

        <h1 className="font-[family-name:var(--font-script)] text-5xl md:text-7xl lg:text-8xl mb-10 text-foreground">
          Lorena
        </h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="space-y-2"
        >
          <p className="text-lg md:text-xl font-sans font-light text-muted-foreground tracking-wide">
            Miércoles, 18 de Marzo de 2026
          </p>
          <p className="text-base font-sans font-light text-muted-foreground/80">
            Coveñas, Sucre - Colombia
          </p>
          <p className="text-sm font-sans font-light text-muted-foreground/70 mt-2">
            14:00 horas
          </p>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 bg-primary/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
