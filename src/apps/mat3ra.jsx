import React from "react";
import Admonition from "@theme/Admonition";
import styles from "./styles.module.css";

const Mat3raAdmonition = ({ url }) => {
  return (
    <Admonition type="tip" title="MAT3RA.COM" className={styles.mat3ra}>
      <p>
        Review, clone, modify, and run this calculation on{" "}
        <Mat3raButton url={url} />
      </p>
      <details>
        <summary>What is Mat3ra?</summary>
        <p><b>Mat3ra</b> is a cloud platform to organize, run, share and
          collaborate on your high performance computing projects. There are
          several ways we can run Quantum Espresso jobs on Mat3ra.</p>
        <ol>
          <li><b>Web Interface:</b> If you are new to various command line
            tools and programming languages, this option is the easiest way to
            get started. Here is an example.</li>

          <li><b>Bash script:</b> You can define your jobs using bash script and
            submit them via web interface. See an example here.</li>

          <li><b>REST API:</b> Mat3ra also provides REST API to most of its
            features. In this way we can access Mat3ra directly from a Jupyter
            Notebook. Fine more here.</li>

          <li><b>CLI via SSH:</b> If you are experienced user, you can directly
            access Mat3ra cluster infra from you terminal. Here is an example.</li>
        </ol>
        <p>Find more at <a href="https://mat3ra.com">mat3ra.com</a>.</p>
      </details>
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
