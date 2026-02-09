"use client"

import { motion } from "framer-motion";
import { SeaShell } from "./decorative-elements";

export function Footer() {
  return (
    <footer className='py-16 px-6 bg-card border-t border-border'>
      <div className='max-w-4xl mx-auto text-center'>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className='font-serif text-3xl md:text-4xl text-foreground mb-4'>José & Lorena</h2>

          <div className='flex items-center justify-center gap-2 text-muted-foreground mb-8'>
            <span className='w-8 h-px bg-border' />
            <SeaShell className='w-5 h-5 text-primary/60' />
            <span className='w-8 h-px bg-border' />
          </div>

          <p className='font-sans text-sm text-muted-foreground font-light mb-2'>18 de Marzo, 2026</p>
          <p className='font-sans text-xs text-muted-foreground/60 tracking-wide'>#JoseYLorena2026</p>
        </motion.div>
      </div>
    </footer>
  );
}
