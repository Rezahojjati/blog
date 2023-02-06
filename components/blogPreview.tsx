import Link from "next/link";
import { PostProps } from "../models/models";
import Container from "./container";
import ContentfulImage from "./contentfulImage";
import Heading from "./heading";

export default function BlogPreview(props: PostProps) {
  // @ts-ignore
  const firstParagraph: string = props.body.content[0].content[0].value;
  const preview: string = props.image
    ? firstParagraph.slice(0, 200) + "... "
    : firstParagraph + "... ";

  return (
    <Container>
      <Heading heading={props.title} />

      {props.image! && <ContentfulImage {...props.image} />}
      <p>
        <span data-testid="blog-preview-paragraph">{preview}</span>
        <Link href={`/posts/${props.slug}`}>Read</Link>
      </p>
    </Container>
  );
}
