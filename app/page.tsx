"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Envelope } from "@/components/wedding/envelope"
import { HeroSection } from "@/components/wedding/hero-section"
import { EventDetails } from "@/components/wedding/event-details"
import { Timeline } from "@/components/wedding/timeline"
import { Countdown } from "@/components/wedding/countdown"
import { RSVPForm } from "@/components/wedding/rsvp-form"
import { Footer } from "@/components/wedding/footer"
import { MusicPlayer } from "@/components/wedding/music-player"
import { TransitionScreen } from "@/components/wedding/transition-screen"

type ViewState = "envelope" | "transition" | "invitation"

export default function WeddingInvitation() {
  const [currentView, setCurrentView] = useState<ViewState>("envelope")
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false)
  const [musicStarted, setMusicStarted] = useState(false)

  const handleOpenEnvelope = () => {
    setIsEnvelopeOpen(true)
    setMusicStarted(true)
    setTimeout(() => {
      setCurrentView("transition")
    }, 800)
  }

  const handleTransitionComplete = () => {
    setCurrentView("invitation")
  }

  return (
    <main className="min-h-screen bg-background">
      <MusicPlayer shouldPlay={musicStarted} />
      <AnimatePresence mode="wait">
        {currentView === "envelope" && (
          <motion.div
            key="envelope"
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
          >
            <Envelope onOpen={handleOpenEnvelope} isOpening={isEnvelopeOpen} />
          </motion.div>
        )}
        
        {currentView === "transition" && (
          <TransitionScreen 
            key="transition" 
            onComplete={handleTransitionComplete} 
          />
        )}
        
        {currentView === "invitation" && (
          <motion.div
            key="invitation"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <HeroSection />
            <Countdown />
            <EventDetails />
            <Timeline />
            <RSVPForm />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
