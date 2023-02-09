import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { PostProps } from "../../models/models";
import BlogPreview from "../../components/blogPreview";
import Header from "../../components/header";
import LeftBar from "../../components/Home/LeftBar";
import styles from "../../styles/Home.module.css";

function SearchHome() {
  const [search, setSearch] = useState<any>("");
  const [results, setResults] = useState<[] | PostProps[]>([]);
  const router = useRouter();

  useEffect(() => {
    if (router.query.result) {
      const queryResults = JSON.parse(router.query.result as unknown as string);
      if (queryResults.length > 0) {
        setResults(queryResults);
      }
    }
    setSearch(router.query.search);
  }, [router.query]);

  return (
    <div className={styles.container}>
      <Header
        title="V-Metrics Blog"
        description="V-Metrics"
        linkUrl=""
      ></Header>
      <LeftBar blogs={results} />
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

export default SearchHome;
