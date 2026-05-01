import React from "react";
import { ArrowRight } from "lucide-react";
import type { Vertical } from "../../data/articles";
import { useNavigate } from "react-router";

interface ArticleCTAProps {
  cta: Vertical["cta"];
}

export const ArticleCTA: React.FC<ArticleCTAProps> = ({ cta }) => {
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleArticleClick = () => {
    navigate(`/article/ecosystem`);
    scrollToTop();
  };

  return (
    <div className="article-cta-box">
      <h3>{cta.text}</h3>
      <div className="article-cta-actions">
        <button className="btn btn-primary">
          Get Started
          <ArrowRight size={18} aria-hidden="true" />
        </button>
        <button className="btn btn-secondary" onClick={handleArticleClick}>
          Learn More
        </button>
      </div>
    </div>
  );
};
