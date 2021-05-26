import Articles from "../components/articles";
import { fetchSortedArticles } from "../lib/api";

const All = ({ articles }) => {
  return (
    <>
      <h1 className="text-5xl font-bold mb-12">All Posts</h1>
      <Articles articles={articles} />
    </>
  );
};

export async function getStaticProps() {
  const articles = await fetchSortedArticles();

  return {
    props: { articles },
  };
}

export default All;
