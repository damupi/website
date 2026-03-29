import React from 'react'
import { articles, speaking } from '../data/writing'

export default function Writing() {
  return (
    <section id="writing" className="py-16 border-t border-dark-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="section-heading">writing &amp; speaking</h2>

        {articles.length > 0 && (
          <div className="mb-10">
            <h3 className="text-sm uppercase tracking-widest text-dark-muted mb-4">Articles</h3>
            <div className="flex flex-col gap-3">
              {articles.map(article => (
                <a
                  key={article.id}
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark-text hover:text-accent transition-colors text-sm"
                >
                  {article.title}
                  <span className="text-dark-border ml-2 text-xs">{article.platform}</span>
                </a>
              ))}
            </div>
          </div>
        )}

        <div>
          <h3 className="text-sm uppercase tracking-widest text-dark-muted mb-4">Speaking</h3>
          <div className="flex flex-col gap-4">
            {speaking.map(talk => (
              <div key={talk.id} className="card">
                <p className="text-xs text-accent uppercase tracking-wide mb-1">{talk.event}</p>
                <p className="text-dark-text text-sm font-bold">{talk.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
