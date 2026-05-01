import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import type { Vertical } from "../../data/articles";
import { useNavigate } from "react-router";
import LeadForm from "../LeadForm";

interface ArticleCTAProps {
  cta: Vertical["cta"];
}

export const ArticleCTA: React.FC<ArticleCTAProps> = ({ cta }) => {
  const navigate = useNavigate();
  const [formOpen, setFormOpen] = useState(false);

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
        <button
          className="btn btn-primary"
          onClick={(e) => {
            setFormOpen(true);
            e.preventDefault();
          }}
        >
          Get Started
          <ArrowRight size={18} aria-hidden="true" />
        </button>
        <button className="btn btn-secondary" onClick={handleArticleClick}>
          Learn More
        </button>
      </div>

      <LeadForm isOpen={formOpen} onClose={() => setFormOpen(false)} />
    </div>
  );
};
