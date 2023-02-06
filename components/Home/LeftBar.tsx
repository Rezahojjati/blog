import React from "react";
import styles from "../../styles/Home.module.css";
import LeftLinks from "./HomeComponents/LeftLinks";
import SearchBar from "./HomeComponents/SearchBar";
import SubscribeBar from "./HomeComponents/SubscribeBar";

export default function LeftBar() {
  return (
    <div className={styles.homeLeftDiv}>
      <div>
        <h3>V-Metrics Blog</h3>
        <SearchBar />
        <SubscribeBar />
        <LeftLinks />
      </div>
    </div>
  );
}
