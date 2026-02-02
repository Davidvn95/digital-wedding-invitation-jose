"use client"

import { Countdown } from "@/components/wedding/countdown"
import { Envelope } from "@/components/wedding/envelope"
import { EventDetails } from "@/components/wedding/event-details"
import { Footer } from "@/components/wedding/footer"
import { HeroSection } from "@/components/wedding/hero-section"
import { MusicPlayer } from "@/components/wedding/music-player"
import { RSVPForm } from "@/components/wedding/rsvp-form"
import { Timeline } from "@/components/wedding/timeline"
import { TransitionScreen } from "@/components/wedding/transition-screen"
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"

type ViewState = "envelope" | "transition" | "invitation"

import { WeddingQuote } from "@/components/wedding/wedding-quote"

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
            <WeddingQuote />
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
