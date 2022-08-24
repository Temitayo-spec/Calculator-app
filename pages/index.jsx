/* eslint-disable linebreak-style */
/* eslint-disable no-nested-ternary */
/* eslint-disable arrow-body-style */
/* eslint-disable quotes */
import React from "react";
import { useSelector } from "react-redux";
import Display from "../components/Display";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import { selectTheme } from "../store/calcSlice";
import styles from "../styles/default.module.css";

const Home = () => {
  const themeValaue = useSelector(selectTheme);
  return (
    <div
      className={`${styles.wrapper} ${
        themeValaue === 2
          ? styles.theme_two
          : themeValaue === 3
            ? styles.theme_three
            : ""
      }`}
    >
      <div className={styles.inner}>
        <Navbar />
        <Display />
        <Main />
        <div className={styles.attribution}>
          Challenge by
          {" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor
          </a>
          . Coded by
          {" "}
          <a href="https://github.com/Temitayo-spec" target="_blank" rel="noreferrer">
            Temmy
          </a>
          .
        </div>
      </div>
    </div>
  );
};

export default Home;
