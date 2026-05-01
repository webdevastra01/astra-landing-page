import React from "react";
import { Clock, Calendar} from "lucide-react";
import type { Vertical } from "../../data/articles";

interface ArticleHeroProps {
  article: Vertical;
}

export const ArticleHero: React.FC<ArticleHeroProps> = ({ article }) => {
  const readTime = Math.ceil(article.intro.split(" ").length / 200);
  const today = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <header className="article-hero">
      <div className="container">
        <div className="article-hero-content">
          <div className="article-meta-header">
            <span className="article-category">{article.name}</span>
            <span className="article-divider" aria-hidden="true">
              •
            </span>
            <span className="article-read-time">
              <Clock size={14} aria-hidden="true" />
              {readTime} min read
            </span>
            <span className="article-divider" aria-hidden="true">
              •
            </span>
            <span className="article-date">
              <Calendar size={14} aria-hidden="true" />
              {today}
            </span>
          </div>

          <h1 className="article-title">{article.hero.title}</h1>
          <p className="article-subtitle">{article.hero.description}</p>

          {/* <div className="article-author">
            <div className="article-author-avatar" aria-hidden="true">
              <User size={20} />
            </div>
            <div className="article-author-info">
              <span className="article-author-name">Astra Editorial Team</span>
              <span className="article-author-role">Business Solutions</span>
            </div>
          </div> */}
        </div>
      </div>
    </header>
  );
};
