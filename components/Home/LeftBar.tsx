import Image from "next/image";
import React from "react";
import { PostProps } from "../../models/models";
import styles from "../../styles/Home.module.css";
import LeftLinks from "./HomeComponents/LeftLinks";
import SearchBar from "./HomeComponents/SearchBar";
import SubscribeBar from "./HomeComponents/SubscribeBar";

type LeftBarProps = {
  blogs: PostProps[];
};

export default function LeftBar(props: LeftBarProps) {
  return (
    <div className={styles.homeLeftDiv}>
      <div
        style={{ position: "relative", width: "100%", paddingBottom: "40%" }}
      >
        <Image
          alt="Image Alt"
          src={"/logo.png"}
          layout="fill"
          objectFit="contain" // Scale your image down to fit into the container
        />
      </div>
      <div>
        <h3>V-Metrics Blog</h3>
        <SearchBar blogs={props.blogs} />
        <SubscribeBar />
        <LeftLinks />
      </div>
    </div>
  );
}
