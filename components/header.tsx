import Head from "next/head";
import { HeaderProps } from "../models/models";

export default function Header(props: HeaderProps) {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      <link rel="icon" href={props.linkUrl} />
    </Head>
  );
}
