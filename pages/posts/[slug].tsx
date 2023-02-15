import { GetStaticPaths, GetStaticProps } from "next";
import { client } from "../../en";
import styles from "../../styles/Home.module.css";
import { PostProps } from "../../models/models";
import BlogPost from "../../components/Home/HomeComponents/BlogPost";

export default function Posts(props: PostProps) {
  // @ts-ignore
  const metaDescription = props.body.content[0].content[0].value;
  return (
    <div
      style={{ paddingLeft: "2%", paddingRight: "2%" }}
      className={styles.blogPostDiv}
    >
      <BlogPost key={props.title} {...props} />
    </div>
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
