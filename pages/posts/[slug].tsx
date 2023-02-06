import { GetStaticPaths, GetStaticProps } from "next";

import { client } from "../../en";
import styles from "../../styles/Home.module.css";
import Container from "../../components/container";
import ContentfulImage from "../../components/contentfulImage";
import Header from "../../components/header";
import RichText from "../../components/richText";
import Heading from "../../components/heading";
import Footer from "../../components/footer";
import { PostProps } from "../../models/models";

export default function Posts(props: PostProps) {
  // @ts-ignore
  const metaDescription = props.body.content[0].content[0].value;
  return (
    <Container>
      <article className={styles.main}>
        <Header
          description={metaDescription}
          title={props.title}
          linkUrl="/favicon.ico"
        />
        <Heading heading={props.title} />
        {props.image && <ContentfulImage {...props.image} />}
        <RichText body={props.body} />
        <Footer author={props.author} createdAt={props.createdAt} />
      </article>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const blogs = await client.getEntries<PostProps>({
    content_type: "blog",
    "fields.slug": context?.params?.slug,
  });
  return {
    props: {
      ...(blogs?.items[0]?.fields as object),
    },
  };
};

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};
