"use client"

import { motion } from "framer-motion"
import { MailOpen } from "lucide-react"

export function WeddingGifts() {
  return (
    <section className="py-24 px-6 bg-muted/20 relative overflow-hidden">
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          <div className="flex justify-center mb-6">
             <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <MailOpen className="w-8 h-8 text-primary/70" strokeWidth={1.2} />
             </div>
          </div>

          <p className="font-serif text-2xl md:text-3xl text-foreground italic leading-relaxed px-4">
            "Lo más valioso para nosotros es contar con su compañía en nuestro gran día. Pero si lo prefieren y desean hacernos un detalle, la lluvia de sobres será bienvenida. 💌"
          </p>

          <div className="flex flex-col items-center gap-4">
            <div className="w-24 h-px bg-primary/20" />
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground font-sans font-light">
              Lluvia de sobres
            </p>
          </div>
        </motion.div>
      </div>

      {/* Subtle decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -ml-32 -mb-32" />
    </section>
  )
}
