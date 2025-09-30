import React from "react";
import "./rich-article.css";

export function RichArticle({ html }: { html: string }) {
  return <article className="rt" dangerouslySetInnerHTML={{ __html: html }} />;
}
