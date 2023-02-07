import React from "react";
import styles from "../../../styles/Home.module.css";

export default function SearchBar() {
  return (
    <div>
      <p className={styles.searchTitle}>Search</p>
      <div className={styles.searchDiv}>
        <input className="form-control" />
        <button
          className="btn btn-primary"
          style={{
            backgroundColor: "#33e1ff",
            borderColor: "#33e1ff",
            fontFamily: "Mulish , sans-serif",
          }}
        >
          Search
        </button>
      </div>
    </div>
  );
}
