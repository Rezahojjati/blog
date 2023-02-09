import React from "react";
import styles from "../../../styles/Home.module.css";
import VMetricsLogo from "./VMetricsLogo";

export default function LeftLinks() {
  return (
    <div className={styles.linkDiv}>
      <h4>1-2-1 LOVE TAPS</h4>
      <p>
        Where we share one central theme, two or more questions, and at least
        one habit to stimulate your curiosity, self-exploration and
        interoception — all in the interest of supporting you in being better
        and shining more brightly. To be better requires empowerment to upgrade
        and reboot aspects of your personal operating system. Upgrades that
        allow for the more complete expression of your potential, personal
        transformations and the realization of peak experiences, more
        consistently.
      </p>
      <VMetricsLogo />
    </div>
  );
}
