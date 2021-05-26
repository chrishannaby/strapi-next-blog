import React from "react";
import Link from "next/link";
import Moment from "react-moment";

const Card = ({ article }) => {
  return (
    <div className="py-8">
      <p className="text-gray-500">
        <Moment format="MMM Do YYYY">{article.publishedAt}</Moment>
      </p>
      <Link href={`/article/${article.slug}`}>
        <a>
          <h2 id="title" className="mt-2 font-bold text-3xl">
            {article.title}
          </h2>
        </a>
      </Link>
      <p className="mt-1 uppercase text-sm text-blue-400">
        {article.category.name}
      </p>
      <p className="py-5 tracking-wide text-gray-600">{article.description}</p>
      <Link href={`/article/${article.slug}`}>
        <a className="text-blue-400 font-medium">Read more →</a>
      </Link>
    </div>
  );
};

export default Card;
