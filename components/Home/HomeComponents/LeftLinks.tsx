import React from "react";
import styles from "../../../styles/Home.module.css";
import VMetricsLogo from "./VMetricsLogo";
import Image from "next/image";

export default function LeftLinks() {
  return (
    <div className={styles.linkDiv}>
      <h4>1-2-1 LOVE TAPS</h4>
      <p>
        Where we share one central theme, two or more questions, and one or more
        habits, to stimulate your curiosity, self-exploration and interoception
        — all in the interest of supporting you in being better and shining more
        brightly. May what we share inspire you to reflect more deeply and
        listen more closely to how your body-mind responds. To be better we must
        upgrade our personal operating system. The most valuable upgrades allow
        for the more complete expression of our potential and pave the way for
        personal transformations. Transformations that empower us and those we
        love.
      </p>
      <div
        style={{
          position: "relative",
          width: "100%",
          padding: "7%",
          alignItems: "flex-start",
        }}
      >
        <Image
          alt="Image Alt"
          src={"/vmetrics.png"}
          layout="fill"
          objectFit="contain" // Scale your image down to fit into the container
        />
      </div>
    </div>
  );
}
