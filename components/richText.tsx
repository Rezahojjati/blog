import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { RichTextProps } from "../models/models";

export default function RichText(props: RichTextProps) {
  return (
    <div>
      <div style={{ padding: "2% 0" }}>
        {documentToReactComponents(props.body)}
      </div>
    </div>
  );
}
