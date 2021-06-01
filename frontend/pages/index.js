import Articles from "../components/articles";
import Link from "next/link";
import { fetchLatestArticles } from "../lib/api";

const Home = ({ articles }) => {
  return (
    <>
      <h1 className="text-5xl font-bold mb-12">
        Latest Posts, Statically Rendered
      </h1>
      <Articles articles={articles} />
      <div className="mt-6">
        <Link href="/all">
          <a className="text-blue-400 font-medium">All Posts →</a>
        </Link>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const articles = await fetchLatestArticles();

  return {
    props: { articles },
  };
}

export default Home;
