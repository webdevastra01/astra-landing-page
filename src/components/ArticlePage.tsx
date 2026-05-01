import React from "react";
import { useParams } from "react-router-dom";
import {
  ReadingProgress,
  ArticleNav,
  ArticleHero,
  ArticleSidebar,
  ArticleSection,
  ArticleTags,
  ArticleCTA,
  RelatedArticles,
  ArticleNotFound,
} from "../components/article";
import { SEO } from "../components/SEO";
import { articleData, getArticleById } from "../data/articles";
import "../styles/ArticlePage.css";

const ArticlePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const article = id ? getArticleById(id) : undefined;

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  if (!article) {
    return (
      <>
        <SEO
          title="Article Not Found"
          description="The article you're looking for doesn't exist or may have been moved."
        />
        <ArticleNotFound />
      </>
    );
  }

  // Generate keywords from article content
  const keywords = [
    article.name,
    "Astra Group",
    "Business Solutions",
    "Philippines",
    ...article.sections
      .flatMap(
        (s) =>
          s.items?.filter((item): item is string => typeof item === "string") ||
          [],
      )
      .slice(0, 5),
  ];

  const today = new Date().toISOString();

  return (
    <div className="article-page">
      <SEO
        title={article.hero.title}
        description={article.hero.description}
        type="article"
        keywords={keywords}
        publishedTime={today}
        modifiedTime={today}
      />

      <ReadingProgress />
      <ArticleNav />
      <ArticleHero article={article} />

      <main className="article-main">
        <div className="container">
          <div className="article-layout">
            <ArticleSidebar
              articles={articleData.verticals}
              currentId={article.id}
            />
            <article className="article-body">
              <div className="article-intro">
                <p className="text-lead">{article.intro}</p>
              </div>

              {article.sections.map((section, index) => (
                <ArticleSection
                  key={`${article.id}-section-${index}`}
                  section={section}
                  index={index}
                />
              ))}

              <ArticleTags categoryName={article.name} />
            </article>
          </div>
        </div>
      </main>

      <ArticleCTA cta={article.cta} />
      <RelatedArticles
        articles={articleData.verticals}
        currentId={article.id}
      />
    </div>
  );
};

export default ArticlePage;
