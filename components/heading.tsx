import { Container } from "react-bootstrap";
import { HeadingProps } from "../models/models";

export default function Heading(props: HeadingProps) {
  return (
    <div style={{ padding: "2% 0" }}>
      <h1>{props.heading}</h1>
    </div>
  );
}
