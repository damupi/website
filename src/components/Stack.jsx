import React from 'react'
import { stack } from '../data/stack'

export default function Stack() {
  return (
    <section id="stack" className="py-16 border-t border-light-border dark:border-dark-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="section-heading">stack</h2>
        <div className="flex flex-wrap gap-3">
          {stack.map(item => (
            <span
              key={item}
              className="px-3 py-1 text-base border border-light-border dark:border-dark-border rounded text-light-muted dark:text-dark-muted hover:border-light-muted dark:hover:border-dark-muted hover:text-accent dark:hover:text-accent-dark hover:font-bold transition-colors"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
