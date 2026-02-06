"use client"

import { Countdown } from "@/components/wedding/countdown"
import { DressCode } from "@/components/wedding/dress-code"
import { Envelope } from "@/components/wedding/envelope"
import { EventDetails } from "@/components/wedding/event-details"
import { Footer } from "@/components/wedding/footer"
import { HeroSection } from "@/components/wedding/hero-section"
import { MusicPlayer } from "@/components/wedding/music-player"
import { RSVPForm } from "@/components/wedding/rsvp-form"
import { Timeline } from "@/components/wedding/timeline"
import { TransitionScreen } from "@/components/wedding/transition-screen"
import { WeddingGifts } from "@/components/wedding/wedding-gifts"
import guestsData from "@/data/guests.json"
import { AnimatePresence, motion } from "framer-motion"
import { useSearchParams } from "next/navigation"
import { Suspense, useEffect, useState } from "react"

type ViewState = "envelope" | "transition" | "invitation"

import { WeddingQuote } from "@/components/wedding/wedding-quote"

function InvitationContent() {
  const searchParams = useSearchParams()
  const [currentView, setCurrentView] = useState<ViewState>("envelope")
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false)
  const [musicStarted, setMusicStarted] = useState(false)
  const [guest, setGuest] = useState<{ name: string; quotas: number } | null>(null)

  useEffect(() => {
    const slug = searchParams.get("g") // 'g' for guest/invitado
    if (slug) {
      const foundGuest = guestsData.find((g) => g.slug === slug)
      if (foundGuest) {
        setGuest({ name: foundGuest.name, quotas: foundGuest.quotas })
      }
    }
  }, [searchParams])

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
            <Envelope 
              onOpen={handleOpenEnvelope} 
              isOpening={isEnvelopeOpen} 
              guestName={guest?.name}
              quotas={guest?.quotas}
            />
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
            <DressCode />
            <Timeline />
            <WeddingGifts />
            <RSVPForm />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}

export default function WeddingInvitation() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background flex items-center justify-center">Cargando...</div>}>
      <InvitationContent />
    </Suspense>
  )
}
