import Image from "next/image";
import * as Contentful from "contentful";
import styles from "../styles/Home.module.css";

export type ContentfulImageProps = Contentful.Asset;

export default function ContentfulImage(props: ContentfulImageProps) {
  const imageDetails = {
    src: `https:${props.fields.file.url}`,
    alt: props.fields.title,
    width: props.fields.file.details.image?.width,
    height: props.fields.file.details.image?.height,
  };
  return (
    <div className={styles.imageContainer}>
      <Image
        data-testid="imageTest"
        src={imageDetails.src}
        alt={imageDetails.alt}
        layout="fill"
      />
    </div>
  );
}
