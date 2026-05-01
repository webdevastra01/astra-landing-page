import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, FileQuestion } from "lucide-react";

export const ArticleNotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="article-page">
      <div
        className="container"
        style={{ paddingTop: "120px", textAlign: "center", minHeight: "60vh" }}
      >
        <div
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "24px",
            background: "var(--primary-subtle)",
            color: "var(--primary)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto var(--space-6)",
          }}
        >
          <FileQuestion size={40} />
        </div>
        <h1
          style={{
            fontSize: "var(--text-4xl)",
            marginBottom: "var(--space-4)",
          }}
        >
          Article Not Found
        </h1>
        <p
          style={{
            color: "var(--text-muted)",
            marginBottom: "var(--space-8)",
            maxWidth: "400px",
            margin: "0 auto var(--space-8)",
          }}
        >
          The article you're looking for doesn't exist or may have been moved.
        </p>
        <button className="btn btn-primary" onClick={() => navigate("/")}>
          <ArrowLeft size={18} />
          Back to Home
        </button>
      </div>
    </div>
  );
};
