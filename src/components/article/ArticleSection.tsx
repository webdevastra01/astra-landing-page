import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import type { Section, FeatureItem } from '../../data/articles';

interface ArticleSectionProps {
  section: Section;
  index: number;
}

export const ArticleSection: React.FC<ArticleSectionProps> = ({ section, index }) => {
  const hasItems = section.items && section.items.length > 0;
  const isStringItems = hasItems && typeof section.items![0] === 'string';

  return (
    <section className="article-section" aria-labelledby={`section-${index}`}>
      <h2 className="article-section-title" id={`section-${index}`}>
        {section.title}
      </h2>

      {/* Content paragraph (for type: "content") */}
      {section.content && (
        <div className="article-content-text">
          <p>{section.content}</p>
        </div>
      )}
      
      {/* Features grid */}
      {section.type === 'features' && hasItems && (
        <div className="article-features-grid">
          {(section.items as FeatureItem[]).map((item, i) => (
            <div key={i} className="article-feature-card">
              <div className="article-feature-header">
                <div className="article-feature-icon" aria-hidden="true">
                  <CheckCircle2 size={20} />
                </div>
                <h3 className="article-feature-title">{item.title}</h3>
              </div>
              <p className="article-feature-description">{item.description}</p>
            </div>
          ))}
        </div>
      )}

      {/* Bullets or content items */}
      {hasItems && isStringItems && (
        <ul className={`article-bullets ${section.type === 'content' ? 'article-content-bullets' : ''}`}>
          {(section.items as string[]).map((item, i) => (
            <li key={i} className="article-bullet-item">
              <span className="article-bullet-marker" aria-hidden="true">
                <CheckCircle2 size={18} />
              </span>
              <span className="article-bullet-text">{item}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Steps */}
      {section.type === 'steps' && hasItems && (
        <div className="article-steps">
          {(section.items as string[]).map((item, i) => (
            <div key={i} className="article-step">
              <div className="article-step-number" aria-hidden="true">{i + 1}</div>
              <div className="article-step-content">
                <p>{item}</p>
              </div>
              {i < (section.items as string[]).length - 1 && (
                <div className="article-step-connector" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
};