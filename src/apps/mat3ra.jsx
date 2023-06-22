import React from "react";
import Admonition from "@theme/Admonition";
import styles from "./styles.module.css";

const Mat3raAdmonition = ({ url }) => {
  return (
    <Admonition type="tip" title="MAT3RA.COM">
      <p>
        Review, clone, modify, and run this calculation on{" "}
        <Mat3raButton url={url} />
      </p>
      <p style={{ color: "grey", fontSize: "0.9em" }}>
        ✻ <b>Mat3ra</b> is a cloud platform to organize, run, share and
        collaborate on your high performance computing projects.{" "}
        <a href="https://mat3ra.com">Learn more</a>.
      </p>
    </Admonition>
  );
};

export const Mat3raButton = ({ url }) => {
  return (
    <a href={url} target="_blank">
      <button className={styles.mat3ra}></button>
    </a>
  );
};

export default Mat3raAdmonition;
