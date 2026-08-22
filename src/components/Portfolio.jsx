import React from 'react'
import { portfolio } from '../data/portfolio'

function ProjectCard({ title, description, url }) {
  return (
    <div className="card flex flex-col gap-3">
      <div>
        <h3 className="font-bold text-base text-light-text dark:text-dark-text mb-1">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={title}
            className="underline underline-offset-4 decoration-light-text dark:decoration-dark-text hover:decoration-accent dark:hover:decoration-accent-dark hover:text-accent dark:hover:text-accent-dark transition-colors"
          >
            {title}
          </a>
        </h3>
        <p className="text-light-muted dark:text-dark-muted text-base leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

export default function Portfolio() {
  const publicProjects = portfolio.filter(item => item.url !== null)
  const privateCount = portfolio.filter(item => item.url === null).length

  return (
    <section id="portfolio" className="py-16 border-t border-light-border dark:border-dark-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="section-heading">projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {publicProjects.map(item => (
            <ProjectCard key={item.id} {...item} />
          ))}
        </div>
        {privateCount > 0 && (
          <p className="text-xs text-light-border dark:text-dark-border mb-6">
            + {privateCount} private project{privateCount > 1 ? 's' : ''} not listed here
          </p>
        )}
        <a
          href="https://github.com/damupi"
          target="_blank"
          rel="noopener noreferrer"
          className="text-base text-light-muted dark:text-dark-muted hover:text-accent dark:hover:text-accent-dark transition-colors"
        >
          github.com/damupi →
        </a>
      </div>
    </section>
  )
}
