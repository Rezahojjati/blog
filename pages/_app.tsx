import "../styles/globals.css";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "../components/navbar/navbar";
import Head from "next/head";
import { PostProps, SEOProps } from "../models/models";
import { client } from "../en";

function MyApp({ Component, pageProps }: AppProps<SEOProps>) {
  return (
    <>
      <Head>
        <title>{pageProps.title}</title>
        <meta name="description" content={pageProps.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar blogs={pageProps.blogs} activeItem={pageProps.active} />
      <Component {...pageProps} />;
    </>
  );
}

export const getStaticProps = async () => {
  const allBlogs = await client.getEntries<PostProps>({
    content_type: "blog",
  });

  if (!allBlogs) {
    throw new Error(`Failed to fetch posts`);
  }

  let blogArray: PostProps[] = [];
  allBlogs.items.forEach((item) => {
    blogArray.push(item.fields);
  });

  return {
    props: {
      blogs: blogArray,
    },
  };
};

export default MyApp;
