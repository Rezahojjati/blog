import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { RichTextProps } from "../../../models/models";
import styles from "../../../styles/Home.module.css";
import ReflectionQuestionImage from "../../Images/ReflectionQuestionImage";

function ReflectionQuestions(props: RichTextProps) {
  return (
    <div className={styles.refQuestions}>
      <ReflectionQuestionImage />
      <div className={styles.refQuestionsBody}>
        <h3>Reflection Questions</h3>
        {documentToReactComponents(props.body)}
      </div>
    </div>
  );
}

export default ReflectionQuestions;
