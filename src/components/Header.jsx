import React, { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'stack', href: '#stack' },
  { label: 'what i build', href: '#what-i-build' },
  { label: 'work', href: '#experience' },
  { label: 'writing', href: '#writing' },
  { label: 'contact', href: '#contact' },
]

function Logo() {
  return (
    <a href="#" aria-label="damupi home" className="flex items-center shrink-0">
      <svg width="38" height="42" viewBox="0 0 516 563" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <ellipse stroke="#ff0000" strokeWidth="28" ry="87.8" rx="248" cy="283" cx="258" fill="none" />
        <line stroke="#ff0000" strokeWidth="28" strokeLinecap="round" x2="258" y2="553" x1="258" y1="84" />
        <line stroke="#ff0000" strokeWidth="28" strokeLinecap="round" x2="258" y2="50" x1="258" y1="10" />
      </svg>
    </a>
  )
}

export default function Header() {
  const [isDark, setIsDark] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    const dark = stored ? stored === 'dark' : true
    setIsDark(dark)
    document.documentElement.className = dark ? 'dark' : 'light'
  }, [])

  function toggleTheme() {
    const next = !isDark
    setIsDark(next)
    document.documentElement.className = next ? 'dark' : 'light'
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  return (
    <header className="sticky top-0 z-50 bg-dark-bg/90 dark:bg-dark-bg/90 backdrop-blur border-b border-dark-border font-mono">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm" aria-label="Main navigation">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-dark-muted hover:text-accent transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="text-dark-muted hover:text-accent transition-colors p-1.5 border border-dark-border rounded"
          >
            {isDark ? (
              /* Sun icon — click to go light */
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              /* Moon icon — click to go dark */
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          {/* Mobile burger */}
          <button
            className="md:hidden text-dark-muted hover:text-accent"
            aria-label="Toggle mobile menu"
            onClick={() => setMenuOpen(o => !o)}
          >
            <span className="text-xl">{menuOpen ? '✕' : '☰'}</span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden border-t border-dark-border bg-dark-bg px-4 py-4 flex flex-col gap-4 text-sm" aria-label="Mobile navigation">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-dark-muted hover:text-accent transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
