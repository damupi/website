import React from 'react'

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[80vh] flex flex-col justify-center max-w-5xl mx-auto px-4 sm:px-6 py-20"
    >
      <div className="flex flex-col md:flex-row items-start md:items-center gap-10">
        <div className="flex-1">
          <p className="text-accent text-sm mb-3 tracking-widest uppercase">damupi</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
            Analytics Engineer<br />
            <span className="text-accent">&amp; MCP Developer</span>
          </h1>
          <p className="text-dark-muted text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
            10+ years across GA4, GTM, BigQuery, Snowflake and Dataform.
            I build MCP servers that let teams query analytics data in plain English.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#portfolio"
              className="px-5 py-2 bg-accent text-white rounded hover:bg-opacity-90 transition-opacity text-sm font-bold"
            >
              see my work
            </a>
            <a
              href="#contact"
              className="px-5 py-2 border border-dark-border text-dark-muted rounded hover:border-accent hover:text-accent transition-colors text-sm"
            >
              say hello
            </a>
          </div>
        </div>

        <div className="shrink-0">
          <img
            src="/avatar.jpeg"
            alt="damupi avatar"
            className="w-32 h-32 md:w-44 md:h-44 rounded-full object-cover border-2 border-accent"
          />
        </div>
      </div>
    </section>
  )
}
