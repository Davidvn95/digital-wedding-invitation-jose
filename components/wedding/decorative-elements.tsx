
export function PalmLeaf({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M50 90C50 90 45 60 20 40M50 90C50 90 55 60 80 40M50 90V20M50 90C50 90 40 70 10 65M50 90C50 90 60 70 90 65M50 90C50 90 35 80 5 85M50 90C50 90 65 80 95 85"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M50 90C50 90 48 50 30 25M50 90C50 90 52 50 70 25M50 90C50 90 50 40 50 10"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.4"
      />
    </svg>
  )
}

export function DelicateFlower({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M50 50C60 30 90 30 80 50C90 70 60 70 50 50ZM50 50C40 30 10 30 20 50C10 70 40 70 50 50ZM50 50C30 40 30 10 50 20C70 10 70 40 50 50ZM50 50C30 60 30 90 50 80C70 90 70 60 50 50Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.5"
      />
      <circle cx="50" cy="50" r="3" fill="currentColor" opacity="0.4" />
    </svg>
  )
}

export function SeaShell({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M50 90C30 90 10 70 10 40C10 20 30 10 50 10C70 10 90 20 90 40C90 70 70 90 50 90Z"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.3"
      />
      <path
        d="M50 90V10M50 90C40 85 25 70 25 40C25 20 40 10 50 10M50 90C60 85 75 70 75 40C75 20 60 10 50 10M50 90C25 80 15 60 15 40M50 90C75 80 85 60 85 40"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.2"
      />
    </svg>
  )
}

export function CoupleLineArt({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Stylized, minimalist line art of a couple overlapping silhouettes */}
      <path
        d="M60 160C60 120 80 90 100 90C120 90 140 120 140 160M100 90C90 70 95 40 105 30C115 20 130 30 135 50C140 70 130 90 120 95M85 85C75 70 75 45 85 35C95 25 110 30 115 45C120 60 115 80 105 85"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M80 160C85 140 95 130 105 130M125 160C120 145 110 135 105 135"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
        opacity="0.4"
      />
    </svg>
  )
}

export function MusicIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" />
    </svg>
  )
}

export function RingsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="8" cy="12" r="5" /><circle cx="16" cy="12" r="5" />
    </svg>
  )
}

export function GlassIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M8 22h8M12 11v11M7 3l5 8 5-8H7z" />
    </svg>
  )
}

export function DinnerIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M3 2h1v10H3zM21 2h-1v10h1zM12 2v20M7 2h10" /><path d="M12 15a5 5 0 0 1 5 5v2H7v-2a5 5 0 0 1 5-5z" />
    </svg>
  )
}

export function DecorativeDivider() {
  return (
    <div className="flex items-center justify-center gap-4 my-8">
      <span className="w-12 h-px bg-primary/20" />
      <SeaShell className="w-6 h-6 text-primary/40" />
      <span className="w-12 h-px bg-primary/20" />
    </div>
  )
}
