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
            "Queremos contarles que durante la ceremonia no se ofrecerá licor. Sin embargo, si desean acompañar el momento con su bebida preferida, pueden traerla sin problema. Lo más importante para nosotros es compartir este día con ustedes 💛"
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
            ¿Cómo asistir?
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
            className="text-center space-y-8"
          >
            <h3 className="font-[family-name:var(--font-script)] text-4xl text-primary">Mujeres</h3>
            
            <div className="relative aspect-[3/4] max-w-[280px] mx-auto overflow-hidden rounded-2xl shadow-xl ring-1 ring-primary/10">
              <img 
                src="/mujeres.jpeg" 
                alt="Referencia Vestidor Mujeres" 
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>

            <div className="space-y-6">
              <p className="font-serif text-lg text-foreground italic leading-relaxed">
                "Queremos que se sientan cómodas y hermosas en nuestro gran día."
              </p>
              
              <div className="space-y-3">
                <p className="font-sans text-sm text-muted-foreground font-light leading-relaxed">
                  Sugerimos vestidos en tonos <span className="text-foreground/80 font-medium">beige, café, terracota</span> o <span className="text-foreground/80 font-medium">verde esmeralda</span>, con un estilo elegante y fresco de playa.
                </p>
              </div>

              <div className="relative py-4">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="w-full border-t border-primary/10"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-background px-4 font-serif text-lg text-primary/80 italic text-center">Sandalias planas o de plataforma son ideales</span>
                </div>
              </div>

              <p className="font-sans text-xs uppercase tracking-[0.2em] text-primary/60 font-medium">
                Evitemos estampados
                <span className="block text-[10px] opacity-70 mt-1 uppercase tracking-widest font-light">Para mantener la armonía de la celebración</span>
              </p>
            </div>
          </motion.div>

          {/* Hombres */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center space-y-8"
          >
            <h3 className="font-[family-name:var(--font-script)] text-4xl text-primary">Hombres</h3>

            <div className="relative aspect-[3/4] max-w-[280px] mx-auto overflow-hidden rounded-2xl shadow-xl ring-1 ring-primary/10">
              <img 
                src="/hombres.jpeg" 
                alt="Referencia Vestidor Hombres" 
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>

            <div className="space-y-6">
              <p className="font-serif text-lg text-foreground italic leading-relaxed">
                "Para lograr un ambiente armónico y elegante, sugerimos:"
              </p>
              
              <div className="space-y-3">
                <p className="font-sans text-sm text-muted-foreground font-light leading-relaxed">
                  Camisas en tonos <span className="text-foreground/80 font-medium">beige, café, terracota</span> o <span className="text-foreground/80 font-medium">verde esmeralda</span>
                </p>
                <p className="font-sans text-sm text-muted-foreground font-light">
                  Pantalón de vestir o lino
                </p>
              </div>

              <div className="relative py-4">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="w-full border-t border-primary/10"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-background px-4 font-serif text-lg text-primary/80 italic">La guayabera es bienvenida</span>
                </div>
              </div>

              <p className="font-sans text-xs uppercase tracking-[0.2em] text-primary/60 font-medium">
                Un look fresco y cómodo
                <span className="block text-[10px] opacity-70 mt-1 uppercase tracking-widest font-light">Ideal para una boda de playa</span>
              </p>
              
              <div className="pt-2 flex justify-center">
                 <SeaShell className="w-10 h-10 text-primary/20" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Shared Avoid section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="inline-block px-8 py-4 border-t border-primary/10">
            <p className="text-[10px] uppercase tracking-[0.3em] text-destructive/60 font-sans font-semibold mb-2">
              Importante evitar:
            </p>
            <p className="font-serif text-xl md:text-2xl text-foreground/70 italic">
              Blanco, dorado y negro
            </p>
            <p className="mt-2 text-[10px] uppercase tracking-widest text-muted-foreground font-light">
              Agradecemos su colaboración para mantener la armonía visual
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
