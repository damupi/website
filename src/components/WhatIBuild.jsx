import React from 'react'
import { whatIBuild } from '../data/whatIBuild'

export default function WhatIBuild() {
  return (
    <section id="what-i-build" className="py-16 border-t border-light-border dark:border-dark-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="section-heading">what i build</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {whatIBuild.map(item => (
            <div key={item.id} className="card">
              <h3 className="text-accent dark:text-accent-dark font-bold mb-2 text-base uppercase tracking-wide">
                {item.title}
              </h3>
              <p className="text-light-muted dark:text-dark-muted text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
