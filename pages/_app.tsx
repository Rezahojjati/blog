import "../styles/globals.css";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "../components/navbar/navbar";
import Head from "next/head";
import { SEOProps } from "../models/models";

function MyApp({ Component, pageProps }: AppProps<SEOProps>) {
  return (
    <>
      <Head>
        <title>{pageProps.title}</title>
        <meta name="description" content={pageProps.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar activeItem={pageProps.active} />
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
