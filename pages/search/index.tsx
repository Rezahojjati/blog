import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { PostProps } from "../../models/models";
import BlogPreview from "../../components/blogPreview";
import Header from "../../components/header";
import LeftBar from "../../components/Home/LeftBar";
import styles from "../../styles/Home.module.css";
import { client } from "../../en";
import SearchBar from "../../components/Home/HomeComponents/SearchBar";
import SubscribeBar from "../../components/Home/HomeComponents/SubscribeBar";
import LeftLinks from "../../components/Home/HomeComponents/LeftLinks";

export default function SearchHome(props: { blogs: PostProps[] }) {
  const [search, setSearch] = useState<any>("");
  const [results, setResults] = useState<[] | PostProps[]>([]);
  const router = useRouter();
  const [allBlogs, setAllBlogs] = useState<PostProps[] | []>([]);

  useEffect(() => {
    if (router.query.result) {
      const queryResults = JSON.parse(router.query.result as unknown as string);
      if (queryResults.length > 0) {
        setResults(queryResults);
      } else {
        setResults([]);
      }
    }
    setSearch(router.query.search);
    setAllBlogs(props.blogs);
  }, [props, router.query]);

  return (
    <div className={styles.container}>
      <Header
        title="V-Metrics Blog"
        description="V-Metrics"
        linkUrl=""
      ></Header>
      <div className={styles.homeLeftDiv}>
        <h3>V-Metrics Blog</h3>
        <SearchBar blogs={allBlogs} />
        <SubscribeBar />
        <LeftLinks />
      </div>
      <div className={styles.homeRightDiv}>
        <p>Search: {search}</p>
        {results.map((blog, index) => {
          return (
            <div key={index}>
              <BlogPreview {...blog} />
            </div>
          );
        })}
      </div>
    </div>
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
