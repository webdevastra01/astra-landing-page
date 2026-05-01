import React from "react";
import { Tag } from "lucide-react";

interface ArticleTagsProps {
  categoryName: string;
}

export const ArticleTags: React.FC<ArticleTagsProps> = ({ categoryName }) => {
  const tags = ["Business Growth", "Systems", categoryName, "Astra Ecosystem"];

  return (
    <div className="article-tags">
      <Tag size={16} aria-hidden="true" />
      {tags.map((tag) => (
        <span key={tag} className="article-tag" role="button" tabIndex={0}>
          {tag}
        </span>
      ))}
    </div>
  );
};
