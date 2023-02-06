import React from "react";
import styles from "../../../styles/Home.module.css";

export default function SearchBar() {
  return (
    <div>
      <p className={styles.searchTitle}>Search</p>
      <div className={styles.searchDiv}>
        <input className="form-control" />
        <button className="btn btn-primary">Search</button>
      </div>
    </div>
  );
}
