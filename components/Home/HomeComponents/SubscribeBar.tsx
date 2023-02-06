import React from "react";
import styles from "../../../styles/Home.module.css";

export default function SubscribeBar() {
  return (
    <div style={{ marginTop: "15px" }}>
      <p className={styles.searchTitle}>Subscribe</p>
      <div className={styles.searchDiv}>
        <input placeholder="me@email.com" className="form-control" />
        <button className="btn btn-warning">Subscribe</button>
      </div>
    </div>
  );
}
