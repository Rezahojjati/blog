import React from "react";

import styles from "../../../styles/Home.module.css";
import { PostProps } from "../../../models/models";
import ContentfulImage from "../../contentfulImage";
import RichText from "../../richText";
import Footer from "../../footer";
import ReflectionQuestions from "./ReflectionQuestions";
import HabitsToExplore from "./HabitsToExplore";
import Resources from "./Resources";

function BlogPost(props: PostProps) {
  return (
    <div>
      <article className={styles.main}>
        <h1 className={styles.blogTitle}>{props.title}</h1>
        {props.image && <ContentfulImage {...props.image} />}
        <RichText body={props.body} />
        <ReflectionQuestions body={props.reflectionQuestions} />
        <HabitsToExplore body={props.habitsToExplore} />
        <div className={styles.resourcesMainDiv}>
          {props.relatedResources && (
            <Resources
              tittle="Related Resources for V-Metrics Members"
              body={props.relatedResources}
            />
          )}
          {props.relatedResourcesNonMembers && (
            <Resources
              tittle="Related Resources for Non-Members"
              body={props.relatedResourcesNonMembers}
            />
          )}
        </div>
        <Footer
          slug={props.slug}
          author={props.author}
          createdAt={props.createdAt}
        />
      </article>
    </div>
  );
}

export default BlogPost;
