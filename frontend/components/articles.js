import React from "react";
import Card from "./card";

const Articles = ({ articles }) => {
  return (
    <div className="divide-y border-b border-t">
      {articles.map((article, i) => {
        return <Card article={article} key={article.slug} />;
      })}
    </div>
  );
};

export default Articles;
