import { Col, Row } from "react-bootstrap";

import Container from "../../components/container";
import styles from "../../styles/Home.module.css";
import { client } from "../../en";
import BlogPreview from "../../components/blogPreview";
import Heading from "../../components/heading";
import { BlogHomeProps, PostProps } from "../../models/models";

function BlogHome(props: BlogHomeProps) {
  const mappedBlogs = props.blogs.map((blog) => {
    return (
      <Col sm={12} lg={6} key={blog.title}>
        <BlogPreview {...blog} />
      </Col>
    );
  });
  return (
    <Container>
      <main className={styles.main}>
        <div style={{ padding: "2% 0" }}>
          <Heading heading="Our most recent blogs!" />
        </div>
        <Row>{mappedBlogs}</Row>
      </main>
    </Container>
  );
}
export const getStaticProps = async () => {
  const allBlogs = await client.getEntries<PostProps>({
    content_type: "blog",
  });

  let blogArray: PostProps[] = [];
  allBlogs.items.forEach((item) => {
    blogArray.push(item.fields);
  });

  return {
    props: {
      title: "V-Metrics Blog",
      active: "posts",
      description: "V-Metrics blog",
      length: allBlogs?.total,
      blogs: blogArray,
    },
  };
};
export default BlogHome;
