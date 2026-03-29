import React from 'react'
import { experience } from '../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="py-16 border-t border-dark-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="section-heading">experience</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {experience.map(company => (
            <a
              key={company.id}
              href={company.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={company.name}
              className="card block hover:border-accent transition-colors group"
            >
              {company.logo ? (
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-8 object-contain mb-3 opacity-70 group-hover:opacity-100 transition-opacity"
                />
              ) : (
                <div className="h-8 mb-3 flex items-center">
                  <span className="text-xs uppercase tracking-widest text-dark-border border border-dark-border rounded px-2 py-0.5">
                    {company.name}
                  </span>
                </div>
              )}
              <h3 className="font-bold text-sm text-dark-text mb-1 group-hover:text-accent transition-colors">
                {company.name}
              </h3>
              <p className="text-dark-muted text-xs leading-relaxed">
                {company.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
