import React from 'react'

export default function Hero() {
  return (
    <section
      id="hero"
      className="dark:bg-gradient-to-b dark:from-accent/10 dark:via-dark-bg dark:to-dark-bg"
    >
      <div className="min-h-[80vh] flex flex-col justify-center max-w-5xl mx-auto px-4 sm:px-6 py-20">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-10">
        <div className="flex-1">
          <p className="text-accent dark:text-accent-dark text-base mb-3 tracking-widest uppercase">damupi</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            AI Engineer<br />
            <span className="text-accent dark:text-accent-dark">&amp; Automation Builder</span>
          </h1>
          <p className="text-light-muted dark:text-dark-muted text-lg sm:text-xl leading-relaxed mb-8 max-w-xl">
            10+ years in analytics and data engineering, now building AI agents,
            tool-calling systems and production LLM workflows — automation that
            goes well beyond a dashboard.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#portfolio"
              className="px-5 py-2 bg-accent text-white rounded hover:bg-opacity-90 hover:shadow-lg hover:shadow-black/30 dark:hover:shadow-white/20 transition-shadow duration-200 text-base font-bold"
            >
              see my work
            </a>
            <a
              href="#contact"
              className="px-5 py-2 border border-light-border dark:border-dark-border text-light-muted dark:text-dark-muted rounded hover:border-accent dark:hover:border-accent-dark hover:text-accent dark:hover:text-accent-dark hover:shadow-lg hover:shadow-black/30 dark:hover:shadow-white/20 transition-shadow duration-200 text-base"
            >
              say hello
            </a>
          </div>
        </div>

        <div className="shrink-0">
          {/*
            Profile photo: drop your avatar file into public/ as "avatar.jpeg"
            (or update the src below to match your filename).
            Current file: /public/avatar.jpeg
          */}
          <img
            src="/avatar.jpeg"
            alt="David Pino — AI Engineer"
            className="w-32 h-32 md:w-44 md:h-44 rounded-full object-cover border-2 border-accent"
          />
        </div>
      </div>
      </div>
    </section>
  )
}
