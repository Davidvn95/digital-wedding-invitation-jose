"use client"

import { motion } from "framer-motion"
import { CoupleLineArt, HexagonFrame, LeafyCluster, SeaShell } from "./decorative-elements"

export function WeddingQuote() {
  return (
    <section className="py-20 px-6 bg-background relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-10 flex justify-center relative"
        >
          <HexagonFrame className="absolute w-64 h-64 text-primary/10 -top-8" />
          <motion.div
            animate={{ rotate: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
            className="absolute -top-12 -left-12 w-24 h-24 text-accent/20"
          >
            <LeafyCluster className="w-full h-full" />
          </motion.div>
          <CoupleLineArt className="w-48 h-48 md:w-64 md:h-64 text-primary/40 relative z-10" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-6"
        >
          <span className="text-primary/40 block">
            <SeaShell className="w-8 h-8 mx-auto rotate-12" />
          </span>
          
          <h2 className="font-[family-name:var(--font-script)] text-4xl md:text-5xl text-foreground max-w-2xl mx-auto leading-relaxed">
            "Caminaremos juntos, siempre de la mano, con el corazón lleno de sueños y el alma llena de amor."
          </h2>
          
          <p className="font-sans text-sm tracking-[0.3em] uppercase text-muted-foreground mt-8">
            — José Luis & Lorena
          </p>
        </motion.div>
      </div>
      
      {/* Decorative background for desktop visibility */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden hidden lg:block">
        <div className="absolute top-1/2 left-10 -translate-y-1/2 opacity-5">
           <SeaShell className="w-32 h-32 rotate-45" />
        </div>
        <div className="absolute top-1/2 right-10 -translate-y-1/2 opacity-5">
           <SeaShell className="w-32 h-32 -rotate-12" />
        </div>
      </div>
    </section>
  )
}
