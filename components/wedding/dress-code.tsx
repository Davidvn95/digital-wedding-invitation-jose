"use client"

import { motion } from "framer-motion"
import { WineOff } from "lucide-react"
import { PalmLeaf, SeaShell } from "./decorative-elements"

export function DressCode() {
  const suggestedColors = [
    { name: "Beige", hex: "#f5f5dc" },
    { name: "Café", hex: "#6f4e37" },
    { name: "Amarillo Pastel", hex: "#fdfd96" },
    { name: "Terracotta", hex: "#e2725b" },
    { name: "Verde Oliva", hex: "#808000" },
    { name: "Palo de Rosa", hex: "#e8adaa" },
  ]

  return (
    <section className="py-24 px-6 bg-background relative overflow-hidden" id="dress-code">
      {/* Decorative background */}
      <div className="absolute top-1/4 -left-10 w-64 h-64 text-primary/5 pointer-events-none -rotate-12">
        <PalmLeaf className="w-full h-full" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Alcohol message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 p-8 border border-primary/10 rounded-2xl bg-primary/5"
        >
          <div className="flex justify-center mb-4">
            <WineOff className="w-8 h-8 text-primary/60" strokeWidth={1.5} />
          </div>
          <p className="font-serif text-lg md:text-xl text-foreground italic max-w-2xl mx-auto leading-relaxed">
            "Durante la celebración no se ofrecerán bebidas alcohólicas. Agradecemos su comprensión y les informamos que pueden llevar el suyo si así lo prefieren."
          </p>
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4 font-sans font-light">
            Cómo asistir
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground">
            Dress Code
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24 relative">
          {/* Vertical Divider for desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-primary/10 -translate-x-1/2" />

          {/* Mujeres */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center space-y-6"
          >
            <h3 className="font-[family-name:var(--font-script)] text-4xl text-primary">Mujeres</h3>
            <div className="space-y-4">
              <p className="font-serif text-xl text-foreground">Colores sugeridos</p>
              <p className="font-sans text-sm text-muted-foreground font-light leading-relaxed">
                Vestidos largos en tonos cálidos y naturales.
              </p>
              
              <div className="flex flex-wrap justify-center gap-3 mt-6">
                {suggestedColors.map((color) => (
                  <div key={color.name} className="group flex flex-col items-center gap-2">
                    <div 
                      className="w-10 h-10 rounded-full shadow-sm ring-2 ring-background ring-offset-2 ring-offset-primary/10"
                      style={{ backgroundColor: color.hex }}
                    />
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-sans">{color.name}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-primary/5">
                <p className="text-xs uppercase tracking-[0.2em] text-destructive/70 font-sans font-medium mb-1">Evitar:</p>
                <p className="font-sans text-sm text-muted-foreground">Blanco, dorado y negro</p>
              </div>
            </div>
          </motion.div>

          {/* Hombres */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center space-y-6"
          >
            <h3 className="font-[family-name:var(--font-script)] text-4xl text-primary">Hombres</h3>
            <div className="space-y-4">
              <p className="font-serif text-xl text-foreground">Traje sugerido</p>
              <div className="flex flex-col items-center gap-4 py-4">
                <div className="space-y-2">
                  <p className="font-sans text-sm text-muted-foreground font-light">Guayabera blanca</p>
                  <p className="font-sans text-sm text-muted-foreground font-light">Pantalón drill beige</p>
                  <p className="font-sans text-sm text-muted-foreground font-light">Zapatos café</p>
                </div>
              </div>
              
              <div className="pt-6 border-t border-primary/5 flex justify-center">
                 <SeaShell className="w-10 h-10 text-primary/20" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
