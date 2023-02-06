import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { ResourcesPRops } from "../../../models/models";
import styles from "../../../styles/Home.module.css";

function Resources(props: ResourcesPRops) {
  return (
    <div className={styles.resourcesDiv}>
      <h3>{props.tittle}</h3>
      {documentToReactComponents(props.body)}
    </div>
  );
}

export default Resources;
