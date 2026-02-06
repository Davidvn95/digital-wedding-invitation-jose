"use client"

import { motion } from "framer-motion"
import { DinnerIcon, GlassIcon, MusicIcon, PalmLeaf, RingsIcon } from "./decorative-elements"

const events = [
  {
    time: "14:00",
    title: "Previos",
    description: "Preparativos y bienvenida",
    icon: MusicIcon,
  },
  {
    time: "16:00",
    title: "Ceremonia",
    description: "Unión matrimonial",
    icon: RingsIcon,
  },
  {
    time: "18:00",
    title: "Cóctel",
    description: "Brindis de celebración",
    icon: GlassIcon,
  },
  {
    time: "19:00",
    title: "Banquete",
    description: "Cena",
    icon: DinnerIcon,
  },
]


export function Timeline() {
  return (
    <section className="py-24 px-6 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-10 w-48 h-48 text-primary/5 pointer-events-none">
        <PalmLeaf className="w-full h-full rotate-45" />
      </div>
      <div className="absolute bottom-10 right-0 w-56 h-56 text-accent/5 pointer-events-none">
        <PalmLeaf className="w-full h-full -rotate-[160deg]" />
      </div>

      <div className="max-w-2xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4 font-sans font-light">
            El programa
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground">
            Itinerario del Día
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          <div className="space-y-12">
            {events.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline icon drawing */}
                <div className="absolute left-0 md:left-1/2 w-10 h-10 bg-card border border-primary/20 rounded-full md:-translate-x-1/2 ring-4 ring-background flex items-center justify-center z-10">
                  <event.icon className="w-5 h-5 text-primary/70" />
                </div>

                {/* Content */}
                <div
                  className={`ml-14 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
                  }`}
                >
                  <span className="inline-block px-3 py-1 bg-muted rounded-full font-sans text-sm text-muted-foreground mb-2">
                    {event.time}
                  </span>
                  <h3 className="font-serif text-xl md:text-2xl text-foreground mb-1">
                    {event.title}
                  </h3>
                  <p className="font-sans text-sm text-muted-foreground font-light">
                    {event.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
