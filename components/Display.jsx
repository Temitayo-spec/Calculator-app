/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable arrow-body-style */
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loading,
  selectOutput,
  selectTheme,
  selectValue,
  setLoading,
} from "../store/calcSlice";
import styles from "../styles/display.module.css";

const Display = () => {
  const inputValue = useSelector(selectValue);
  const outputValue = useSelector(selectOutput);

  const inputRef = useRef();

  const theme = useSelector(selectTheme);
  const load = useSelector(loading);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(setLoading(false));
    }, -1500);
  }, []);

  return (
    <div className={`${styles.wrapper} ${load === false ? styles.active : ""}`}>
      <div
        className={`${styles.inner} ${
          // eslint-disable-next-line no-nested-ternary
          theme === 2 ? styles.theme_two : theme === 3 ? styles.theme_three : ""
        }`}
      >
        <input ref={inputRef} type="text" value={inputValue} readOnly />

        <input ref={inputRef} type="text" value={outputValue} readOnly />
      </div>
    </div>
  );
};

export default Display;
