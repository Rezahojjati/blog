import React, { useEffect } from "react";
import { PostProps } from "../../models/models";
import styles from "../../styles/Home.module.css";
import BlogPost from "./HomeComponents/BlogPost";

type RightBArProps = {
  blogs: PostProps[];
};

export default function RightBar(props: RightBArProps) {
  useEffect(() => {
    console.log(props.blogs);
  }, [props]);

  const mapped = props.blogs.map((blog, index) => {
    return <BlogPost key={blog.title} {...blog} />;
  });

  return (
    <div className={styles.homeRightDiv}>
      <div>{mapped}</div>
    </div>
  );
}
