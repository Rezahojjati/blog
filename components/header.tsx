import Head from "next/head";
import { HeaderProps } from "../models/models";

export default function Header(props: HeaderProps) {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      <link rel="icon" href={props.linkUrl} />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@700&family=Mulish:wght@500&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
}
