"use client"

import { motion } from "framer-motion"
import { DelicateFlower, GeometricFrame, LeafyCluster, PalmLeaf } from "./decorative-elements"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
      {/* Decorative elements - Adjusted for desktop visibility */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden container mx-auto relative">
        <motion.div 
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-10 -left-10 md:left-0 w-64 h-64 text-primary/10"
        >
          <PalmLeaf className="w-full h-full" />
        </motion.div>

        <motion.div 
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 -right-10 md:right-0 w-80 h-80 text-accent/10"
        >
          <PalmLeaf className="w-full h-full rotate-[160deg]" />
        </motion.div>

        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 left-10 md:left-20 w-32 h-32 text-primary/20"
        >
          <DelicateFlower className="w-full h-full" />
        </motion.div>
      </div>

      {/* Pinterest-style Geometric & Leafy Frame */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1.5, ease: "easeOut" }}
           className="relative w-full max-w-[90vw] md:max-w-2xl aspect-square flex items-center justify-center"
        >
          <GeometricFrame className="absolute w-full h-full text-primary/10" />
          
          {/* Top-left leafy cluster */}
          <motion.div 
            initial={{ opacity: 0, x: -20, y: -20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="absolute top-0 left-0 w-32 md:w-48 h-32 md:h-48 text-accent/15 -rotate-12"
          >
            <LeafyCluster className="w-full h-full" />
          </motion.div>

          {/* Bottom-right leafy cluster */}
          <motion.div 
            initial={{ opacity: 0, x: 20, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="absolute bottom-0 right-0 w-32 md:w-48 h-32 md:h-48 text-accent/15 rotate-[160deg]"
          >
            <LeafyCluster className="w-full h-full" />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-3xl mx-auto"
      >
        <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-8 font-sans font-light">
          Estás cordialmente invitado a la ceremonia de boda de
        </p>

        <h1 className="font-[family-name:var(--font-script)] text-4xl md:text-7xl lg:text-8xl text-foreground leading-tight">
          José Luis Coronado González
        </h1>
        
        <div className="flex items-center justify-center gap-4 md:gap-6 my-4 md:my-6">
          <span className="w-12 md:w-24 h-px bg-primary/40" />
          <span className="font-[family-name:var(--font-script)] text-2xl md:text-4xl text-primary">&</span>
          <span className="w-12 md:w-24 h-px bg-primary/40" />
        </div>

        <h1 className="font-[family-name:var(--font-script)] text-4xl md:text-7xl lg:text-8xl mb-8 md:mb-10 text-foreground leading-tight">
          Diana Lorena Castillo Coral 
        </h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="space-y-1 md:space-y-2"
        >
          <p className="text-base md:text-xl font-sans font-light text-muted-foreground tracking-wide">
            Miércoles, 18 de Marzo de 2026
          </p>
          <p className="text-sm md:text-base font-sans font-light text-muted-foreground/80 px-4 md:px-0">
            Cabaña Taipan en Tolú, Sucre, playas del francés
          </p>
          <p className="text-xs md:text-sm font-sans font-light text-muted-foreground/70 mt-1 md:mt-2">
            14:00 horas
          </p>
        </motion.div>
      </motion.div>

      {/* Scroll indicator - Moved down and resized for mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-4 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-0.5"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="text-primary/40"
        >
          <svg 
            viewBox="0 0 24 32" 
            className="w-6 h-8 md:w-8 md:h-10 rotate-180"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M21.271,15.483L13,12.163V3.547C13,1.591,11.43,0,9.5,0S6,1.591,6,3.547V23.5C6,23.776,6.224,24,6.5,24 S7,23.776,7,23.5V3.547C7,2.143,8.121,1,9.5,1S12,2.143,12,3.547v8.922c0,0.027,0,0.052,0,0.078v4.933c0,0.276,0.224,0.5,0.5,0.5 s0.5-0.224,0.5-0.5v-4.242l7.903,3.176c1.531,0.604,2.365,2.125,2.136,3.698l-1.188,7.894C21.603,29.713,20.024,31,18.23,31H5.785 c-0.492,0-0.96-0.225-1.253-0.602l-3.226-4.153C1.106,25.986,1,25.68,1,25.358v-5.361c0-0.394,0.16-0.766,0.451-1.046l1.524-1.472 c0.198-0.192,0.204-0.509,0.012-0.707c-0.19-0.198-0.507-0.204-0.707-0.013l-1.523,1.472C0.275,18.695,0,19.339,0,19.997v5.361 c0,0.538,0.184,1.07,0.518,1.5l3.225,4.153C4.223,31.63,4.986,32,5.785,32H18.23c2.287,0,4.253-1.655,4.573-3.85l1.226-7.894 C24.325,18.221,23.235,16.259,21.271,15.483z"></path>
          </svg>
        </motion.div>
        <span className="text-[9px] tracking-[0.2em] uppercase text-muted-foreground/60 font-sans">Desliza</span>
      </motion.div>
    </section>
  )
}
