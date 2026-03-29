import React from 'react'

export default function Footer() {
  return (
    <footer className="border-t border-dark-border py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col items-center gap-4">
        <svg width="32" height="35" viewBox="0 0 516 563" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <ellipse stroke="#ff0000" strokeWidth="28" ry="87.8" rx="248" cy="283" cx="258" fill="none" />
          <line stroke="#ff0000" strokeWidth="28" strokeLinecap="round" x2="258" y2="553" x1="258" y1="84" />
          <line stroke="#ff0000" strokeWidth="28" strokeLinecap="round" x2="258" y2="50" x1="258" y1="10" />
        </svg>
        <p className="text-dark-muted text-sm italic">Love me or hate me, but mean it.</p>
        <p className="text-dark-border text-xs">&copy; {new Date().getFullYear()} damupi</p>
      </div>
    </footer>
  )
}
