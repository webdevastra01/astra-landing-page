import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Globe } from "lucide-react";
import { IconMap } from "./ArticleIcons";
import type { Vertical } from "../../data/articles";

interface RelatedArticlesProps {
  articles: Vertical[];
  currentId: string;
}

export const RelatedArticles: React.FC<RelatedArticlesProps> = ({
  articles,
  currentId,
}) => {
  const navigate = useNavigate();

  const related = articles.filter((v) => v.id !== currentId).slice(0, 3);

  const handleClick = (id: string) => {
    navigate(`/article/${id}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="article-related" aria-labelledby="related-title">
      <div className="container">
        <h2 className="section-title text-center" id="related-title">
          Explore More Verticals
        </h2>
        <p
          className="section-description text-center"
          style={{ marginBottom: "3rem" }}
        >
          Discover how Astra's integrated ecosystem can transform every aspect
          of your business.
        </p>
        <div className="article-related-grid">
          {related.map((vertical) => (
            <article
              key={vertical.id}
              className="article-related-card"
              onClick={() => handleClick(vertical.id)}
              role="button"
              tabIndex={0}
              aria-label={`Read more about ${vertical.name}`}
            >
              <div className="article-related-icon" aria-hidden="true">
                {IconMap[vertical.id] || <Globe size={24} />}
              </div>
              <h4>{vertical.name}</h4>
              <p>{vertical.tagline}</p>
              <span className="article-related-link">
                Read more <ArrowRight size={14} aria-hidden="true" />
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
