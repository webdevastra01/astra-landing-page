import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight, ArrowRight } from "lucide-react";
import { VerticalIcon } from "./ArticleIcons";
import type { Vertical } from "../../data/articles";
import LeadForm from "../LeadForm";

interface ArticleSidebarProps {
  articles: Vertical[];
  currentId: string;
}

export const ArticleSidebar: React.FC<ArticleSidebarProps> = ({
  articles,
  currentId,
}) => {
  const navigate = useNavigate();
  const [formOpen, setFormOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleArticleClick = (id: string) => {
    navigate(`/article/${id}`);
    scrollToTop();
  };

  return (
    <>
      <aside className="article-sidebar">
        <div className="article-sidebar-sticky">
          <h3 className="sidebar-title">Explore Verticals</h3>
          <nav className="sidebar-nav" aria-label="Article navigation">
            {articles.map((vertical) => (
              <button
                key={vertical.id}
                className={`sidebar-link ${currentId === vertical.id ? "active" : ""}`}
                onClick={() => handleArticleClick(vertical.id)}
                aria-current={currentId === vertical.id ? "page" : undefined}
              >
                <VerticalIcon id={vertical.id} />
                <div className="sidebar-link-content">
                  <span className="sidebar-link-title">{vertical.name}</span>
                  <span className="sidebar-link-tagline">
                    {vertical.tagline}
                  </span>
                </div>
                <ChevronRight
                  size={16}
                  className="sidebar-link-arrow"
                  aria-hidden="true"
                />
              </button>
            ))}
          </nav>

          <div className="sidebar-cta">
            <h4>Need a custom solution?</h4>
            <p>Talk to our team about how Astra can help your business grow.</p>
            <button
              className="btn btn-primary btn-sm"
              style={{ width: "100%", marginTop: "1rem" }}
              onClick={(e) => {
                setFormOpen(true);
                e.preventDefault();
              }}
            >
              Contact Us
              <ArrowRight size={16} aria-hidden="true" />
            </button>
          </div>
        </div>
      </aside>

      <LeadForm isOpen={formOpen} onClose={() => setFormOpen(false)} />
    </>
  );
};
