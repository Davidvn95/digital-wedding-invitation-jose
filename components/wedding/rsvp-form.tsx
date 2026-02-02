"use client"

import React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Check, Heart, MessageSquare } from "lucide-react"

// Para conectar con Google Sheets, necesitas:
// 1. Crear un Google Form o usar Google Apps Script
// 2. Configurar la variable de entorno NEXT_PUBLIC_GOOGLE_FORM_URL con la URL del formulario

export function RSVPForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    attendance: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const googleFormUrl = process.env.NEXT_PUBLIC_GOOGLE_FORM_URL

      if (googleFormUrl) {
        // Enviar a Google Sheets via Google Apps Script
        const response = await fetch(googleFormUrl, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nombre: formData.name,
            email: formData.email,
            asistencia: formData.attendance === "yes" ? "Sí" : "No",
            mensaje: formData.message,
            fecha: new Date().toLocaleString("es-CO"),
          }),
        })
        
        // Con mode: "no-cors" no podemos verificar la respuesta,
        // pero asumimos que fue exitoso
        setIsSubmitted(true)
      } else {
        // Si no hay URL configurada, simular envío
        console.log("[v0] Formulario enviado (modo demo):", formData)
        await new Promise((resolve) => setTimeout(resolve, 1500))
        setIsSubmitted(true)
      }
    } catch (err) {
      console.error("[v0] Error al enviar formulario:", err)
      setError("Hubo un error al enviar tu confirmación. Por favor intenta de nuevo.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section className="py-24 px-6 bg-muted/30" id="rsvp">
      <div className="max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4 font-sans font-light">
            Confirma tu asistencia
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-4">
            RSVP
          </h2>
          <p className="font-sans text-muted-foreground font-light">
            Por favor confirma antes del 1 de Marzo de 2026
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-card rounded-2xl p-12 text-center shadow-sm"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mb-6">
                  <Check className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-serif text-2xl text-foreground mb-3">
                  ¡Gracias por confirmar!
                </h3>
                <p className="font-sans text-muted-foreground font-light">
                  Hemos recibido tu confirmación. Estamos muy emocionados de celebrar este día contigo.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="bg-card rounded-2xl p-8 md:p-10 shadow-sm space-y-8"
              >
                {error && (
                  <div className="p-4 bg-destructive/10 rounded-lg text-destructive text-sm font-sans">
                    {error}
                  </div>
                )}

                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="font-sans text-sm text-foreground flex items-center gap-2">
                    <Heart className="w-4 h-4 text-primary" />
                    Nombre completo
                  </Label>
                  <Input
                    id="name"
                    placeholder="Tu nombre"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    required
                    className="bg-background border-border focus:ring-primary font-sans"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="font-sans text-sm text-foreground">
                    Correo electrónico
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    required
                    className="bg-background border-border focus:ring-primary font-sans"
                  />
                </div>

                {/* Attendance */}
                <div className="space-y-3">
                  <Label className="font-sans text-sm text-foreground">
                    ¿Podrás asistir?
                  </Label>
                  <RadioGroup
                    value={formData.attendance}
                    onValueChange={(value) => handleChange("attendance", value)}
                    className="flex gap-4"
                  >
                    <div className="flex-1">
                      <RadioGroupItem
                        value="yes"
                        id="yes"
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor="yes"
                        className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg border-2 border-border cursor-pointer transition-all peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 hover:border-primary/50 font-sans text-sm"
                      >
                        <Check className="w-4 h-4" />
                        Asistiré
                      </Label>
                    </div>
                    <div className="flex-1">
                      <RadioGroupItem
                        value="no"
                        id="no"
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor="no"
                        className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg border-2 border-border cursor-pointer transition-all peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 hover:border-primary/50 font-sans text-sm"
                      >
                        No podré asistir
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="font-sans text-sm text-foreground flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-primary" />
                    Mensaje para los novios (opcional)
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Escribe un mensaje..."
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    rows={3}
                    className="bg-background border-border focus:ring-primary font-sans resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting || !formData.attendance}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-sans font-normal tracking-wide py-6 text-base"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                        className="inline-block w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                      />
                      Enviando...
                    </span>
                  ) : (
                    "Confirmar Asistencia"
                  )}
                </Button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
