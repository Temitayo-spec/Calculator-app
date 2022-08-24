/* eslint-disable linebreak-style */
/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable arrow-body-style */
/* eslint-disable quotes */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loading, selectTheme, setLoading, setTheme,
} from "../store/calcSlice";
import styles from "../styles/navbar.module.css";

const Navbar = () => {
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();
  const load = useSelector(loading);

  useEffect(() => {
    setTimeout(() => {
      dispatch(setLoading(false));
    }, -1500);
  }, []);

  return (
    <div
      className={`${styles.wrapper} ${load === false ? styles.activate : ""}`}
    >
      <div
        className={`${styles.inner} ${
          theme === 2 ? styles.theme_two : theme === 3 ? styles.theme_three : ""
        }`}
      >
        <h4>calc</h4>
        <div className={styles.theme__switcher_ctn}>
          <p>THEME</p>
          <div className={styles.theme_switcher}>
            <div className={styles.numbering}>
              <span>1</span>
              <span>2</span>
              <span>3</span>
            </div>
            <div className={styles.switcher}>
              <div
                className={`${styles.switchers} ${
                  theme === 1 && styles.active
                }`}
                onClick={() => {
                  dispatch(setTheme(1));
                }}
              />
              <div
                className={`${styles.switchers} ${
                  theme === 2 && styles.active
                }`}
                onClick={() => {
                  dispatch(setTheme(2));
                }}
              />
              <div
                className={`${styles.switchers} ${
                  theme === 3 && styles.active
                }`}
                onClick={() => {
                  dispatch(setTheme(3));
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
