import Link from "next/link";
import { PostProps } from "../models/models";
import Container from "./container";
import ContentfulImage from "./contentfulImage";
import Heading from "./heading";
import styles from "../styles/Home.module.css";

export default function BlogPreview(props: PostProps) {
  // @ts-ignore
  const firstParagraph: string = props.body.content[0].content[0].value;
  const preview: string = props.image
    ? firstParagraph.slice(0, 200) + "... "
    : firstParagraph + "... ";

  return (
    <div>
      <article className={styles.main}>
        <h1 className={styles.blogTitle}>{props.title}</h1>
        {props.image! && <ContentfulImage {...props.image} />}
        <p>
          <span data-testid="blog-preview-paragraph">{preview}</span>
          <Link href={`/posts/${props.slug}`}>Read</Link>
        </p>
      </article>
    </div>
  );
}
