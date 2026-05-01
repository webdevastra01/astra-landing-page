import React from "react";
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  type?: "website" | "article";
  image?: string;
  url?: string;
  keywords?: string[];
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  type = "website",
  image = "/og-default.jpg", // Your default OG image
  url = typeof window !== "undefined" ? window.location.href : "",
  keywords = [],
  author = "Astra Group of Companies",
  publishedTime,
  modifiedTime,
}) => {
  const siteTitle = "Astra Group of Companies";
  const fullTitle = title === siteTitle ? title : `${title} | ${siteTitle}`;

  return (
    <Helmet>
      {/* Basic */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(", ")} />
      )}
      <meta name="author" content={author} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteTitle} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Article-specific */}
      {type === "article" && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === "article" && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}

      {/* Canonical */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};
