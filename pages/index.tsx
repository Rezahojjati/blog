import type { InferGetServerSidePropsType, NextPage } from "next";
import styles from "../styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.css";
import LeftBar from "../components/Home/LeftBar";
import RightBar from "../components/Home/RightBar";
import { client } from "../en";
import { PostProps } from "../models/models";
import Header from "../components/header";

export default function Home({
  blogs,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className={styles.container}>
      <Header
        title="V-Metrics Blog"
        description="V-Metrics"
        linkUrl=""
      ></Header>
      <LeftBar />
      <RightBar blogs={blogs} />
    </div>
  );
}

export const getServerSideProps = async () => {
  const allBlogs = await client.getEntries<PostProps>({
    content_type: "blog",
  });

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
