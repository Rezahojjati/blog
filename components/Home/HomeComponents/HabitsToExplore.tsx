import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { RichTextProps } from "../../../models/models";
import styles from "../../../styles/Home.module.css";
import HabitsToExploreImage from "../../Images/HabitsToExploreImage";

function HabitsToExplore(props: RichTextProps) {
  return (
    <div className={styles.habQuestions}>
      <div className={styles.refQuestionsBody}>
        <h3>Habits to Explore</h3>
        {documentToReactComponents(props.body)}
      </div>
      <HabitsToExploreImage />
    </div>
  );
}

export default HabitsToExplore;
