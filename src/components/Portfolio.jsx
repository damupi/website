import React from 'react'
import { portfolio } from '../data/portfolio'

function ProjectCard({ title, description, url }) {
  return (
    <div className="card flex flex-col gap-3">
      <div>
        <h3 className="font-bold text-sm text-dark-text mb-1">
          {url ? (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={title}
              className="hover:text-accent transition-colors"
            >
              {title}
            </a>
          ) : (
            <span>{title}</span>
          )}
        </h3>
        <p className="text-dark-muted text-sm leading-relaxed">{description}</p>
      </div>
      {!url && (
        <span className="text-xs text-dark-border border border-dark-border rounded px-2 py-0.5 self-start">
          private
        </span>
      )}
    </div>
  )
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-16 border-t border-dark-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="section-heading">projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {portfolio.map(item => (
            <ProjectCard key={item.id} {...item} />
          ))}
        </div>
        <a
          href="https://github.com/damupi"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-dark-muted hover:text-accent transition-colors"
        >
          github.com/damupi →
        </a>
      </div>
    </section>
  )
}
