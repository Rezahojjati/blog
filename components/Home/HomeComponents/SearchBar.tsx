import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { PostProps } from "../../../models/models";
import styles from "../../../styles/Home.module.css";

type SearchBArProps = {
  blogs: PostProps[];
};

export default function SearchBar(props: SearchBArProps) {
  const [blogs, setBlogs] = useState<null | PostProps[]>(null);
  const [search, setSearch] = useState<null | string>(null);
  const [searchResult, setSearchResult] = useState<[] | PostProps[]>([]);
  const router = useRouter();

  useEffect(() => {
    setBlogs(props.blogs);
  }, [props.blogs]);

  const handleSearch = () => {
    const result: any = [];
    const indexesAdded: number[] = [];
    if (search) {
      props.blogs?.forEach((blog, index) => {
        if (
          blog.title.toLowerCase().includes(search.toLocaleLowerCase()) &&
          !indexesAdded.includes(index)
        ) {
          result.push(blog);
          indexesAdded.push(index);
        }
        blog.body.content.forEach((para) => {
          para.content.forEach((p: any) => {
            if (p.value.includes(search) && !indexesAdded.includes(index)) {
              result.push(blog);
              indexesAdded.push(index);
            }
          });
        });
      });
    }
    setSearchResult(result);

    router.push({
      pathname: "/search",
      query: { search: search, result: JSON.stringify(result) },
    });
  };

  return (
    <div>
      <p className={styles.searchTitle}>Search</p>
      <div className={styles.searchDiv}>
        <input
          className="form-control"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button
          className="btn btn-primary"
          style={{
            backgroundColor: "#33e1ff",
            borderColor: "#33e1ff",
            fontFamily: "Mulish , sans-serif",
          }}
          onClick={(e) => {
            handleSearch();
          }}
        >
          Search
        </button>
      </div>
    </div>
  );
}
