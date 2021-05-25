import Head from "next/head";
import "../assets/css/style.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href="https://app.netlify.com/favicon-32x32.png"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Staatliches"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/css/uikit.min.css"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.min.js" />
        <script src="https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/js/uikit-icons.min.js" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.js" />
        <title>Strapi Blog</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
