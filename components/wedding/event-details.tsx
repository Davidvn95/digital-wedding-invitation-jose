"use client"

import { motion } from "framer-motion"
import { Calendar, Church, Clock, MapPin } from "lucide-react"
import { DelicateFlower } from "./decorative-elements"

const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/c9o1zXqDXJ8ZmyC79"

const details = [
  {
    icon: Calendar,
    title: "Fecha",
    info: "18 de Marzo, 2026",
  },
  {
    icon: Clock,
    title: "Hora",
    info: "14:00 horas",
  },
  {
    icon: Church,
    title: "Ceremonia",
    info: "Tolú, Sucre",
  },
  {
    icon: MapPin,
    title: "Ubicación",
    info: "Colombia",
    isLink: true,
  },
]

export function EventDetails() {
  return (
    <section className="py-24 px-6 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 -right-10 -translate-y-1/2 w-48 h-48 text-primary/5 pointer-events-none">
        <DelicateFlower className="w-full h-full rotate-12" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4 font-sans font-light">
            Los detalles
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground">
            Cuándo & Dónde
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {details.map((detail, index) => (
            <motion.div
              key={detail.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-muted mb-4">
                <detail.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">
                {detail.title}
              </h3>
              {detail.isLink ? (
                <a 
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-serif text-lg text-primary hover:text-primary/80 underline underline-offset-4 transition-colors"
                >
                  {detail.info}
                </a>
              ) : (
                <p className="font-serif text-lg text-foreground">
                  {detail.info}
                </p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Location button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary/10 hover:bg-primary/20 rounded-full transition-colors group"
          >
            <MapPin className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" strokeWidth={1.5} />
            <span className="font-sans text-sm tracking-wide text-foreground">Ver ubicación en Google Maps</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
