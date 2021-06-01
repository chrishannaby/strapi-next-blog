import Head from "next/head";
import Link from "next/link";
import "tailwindcss/tailwind.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="https://app.netlify.com/favicon-32x32.png" />
        <title>Strapi Blog</title>
      </Head>
      <main className="max-w-3xl mx-auto px-4 my-12 antialiased text-gray-900">
        <Link href="/">
          <a>
            <h1 className="py-2 text-3xl pb-12 font-bold hover:text-blue-500">
              Strapi Blog
            </h1>
          </a>
        </Link>
        <Component {...pageProps} />
      </main>
    </>
  );
};

export default MyApp;
