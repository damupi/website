import React from 'react'
import { stack } from '../data/stack'

export default function Stack() {
  return (
    <section id="stack" className="py-16 border-t border-dark-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="section-heading">stack</h2>
        <div className="flex flex-wrap gap-3">
          {stack.map(item => (
            <span
              key={item}
              className="px-3 py-1 text-sm border border-dark-border rounded text-dark-muted hover:border-accent hover:text-accent transition-colors"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
