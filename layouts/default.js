/* eslint-disable quotes */
import Head from "next/head";
import styles from "../styles/default.module.css";

const Default = ({ children }) => (
  <div className={styles.container}>
    <Head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="./images/favicon-32x32.png"
      />

      <title>Frontend Mentor | Calculator app</title>
    </Head>
    {children}
  </div>
);

export default Default;
