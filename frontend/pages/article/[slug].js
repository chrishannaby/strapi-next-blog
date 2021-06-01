import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import { fetchAPI, fetchLatestArticles } from "../../lib/api";
import StrapiImage from "../../components/image";
import rehypeRaw from "rehype-raw";

const Article = ({ article }) => {
  if (!article) {
    return (
      <div className="flex flex-col items-center">
        <div className="bg-gray-300 rounded h-4 w-24" />
        <div className="mt-2 bg-gray-300 rounded h-12 w-96" />
        <div className="mt-4 bg-gray-300 rounded h-8 w-24" />
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col items-start sm:items-center pb-12 border-b mb-12">
        <p className="text-gray-500">
          <Moment format="MMM Do YYYY">{article.publishedAt}</Moment>
        </p>
        <h1 className="text-5xl font-bold mt-2 sm:text-center">
          {article.title}
        </h1>
        <div className="mt-6 flex items-center space-x-4">
          {article.author.picture && (
            <StrapiImage
              image={article.author.picture}
              className="rounded-full"
              width={40}
              height={40}
            />
          )}
          <p>{article.author.name}</p>
        </div>
      </div>
      <ReactMarkdown
        className="prose"
        children={article.content}
        rehypePlugins={[rehypeRaw]}
      />
    </>
  );
};

export async function getStaticPaths() {
  const articles = await fetchLatestArticles();
  const paths = articles.map((article) => ({
    params: {
      slug: article.slug,
    },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const articles = await fetchAPI(
    `/articles?slug=${params.slug}&status=published`
  );
  const article = articles[0];
  if (!article) {
    return {
      notFound: true,
    };
  }

  return {
    props: { article },
  };
}

export default Article;
