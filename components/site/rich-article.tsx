import React from "react";
import "./rich-article.css";

export function RichArticle({ html, className }: { html: string; className?: string }) {
  return <article className={className ? `rt ${className}` : "rt"} dangerouslySetInnerHTML={{ __html: html }} />;
}
