/* eslint-disable linebreak-style */
/* eslint-disable arrow-body-style */
/* eslint-disable quotes */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loading,
  selectTheme,
  selectValue,
  setLoading,
  setOutput,
  setValue,
} from "../store/calcSlice";
import styles from "../styles/main.module.css";

const Main = () => {
  const dispatch = useDispatch();
  const inputValue = useSelector(selectValue);
  const theme = useSelector(selectTheme);

  const load = useSelector(loading);

  useEffect(() => {
    setTimeout(() => {
      dispatch(setLoading(false));
    }, -1500);
  }, []);

  const clear = () => {
    dispatch(setValue(""));
    dispatch(setOutput(""));
  };

  const backSpace = () => {
    dispatch(setValue(inputValue.slice(0, -1)));
  };

  const calculate = () => {
    try {
      // eslint-disable-next-line no-eval
      dispatch(setOutput(eval(inputValue).toString()));
      dispatch(setValue(""));
    } catch (error) {
      dispatch(setOutput("Error"));
    }
  };

  return (
    <div className={`${styles.wrapper} ${load === false ? styles.active : ""}`}>
      <div
        className={`${styles.inner} ${
          // eslint-disable-next-line no-nested-ternary
          theme === 2 ? styles.theme_two : theme === 3 ? styles.theme_three : ""
        }`}
      >
        <div className={styles.grid_four}>
          <button
            onClick={() => dispatch(setValue(inputValue.concat(7)))}
            type="button"
          >
            7
          </button>
          <button
            onClick={() => dispatch(setValue(inputValue.concat(8)))}
            type="button"
          >
            8
          </button>
          <button
            onClick={() => dispatch(setValue(inputValue.concat(9)))}
            type="button"
          >
            9
          </button>
          <button onClick={backSpace} type="button">
            DEL
          </button>
          <button
            onClick={() => dispatch(setValue(inputValue.concat(4)))}
            type="button"
          >
            4
          </button>
          <button
            onClick={() => dispatch(setValue(inputValue.concat(5)))}
            type="button"
          >
            5
          </button>
          <button
            onClick={() => dispatch(setValue(inputValue.concat(6)))}
            type="button"
          >
            6
          </button>
          <button
            onClick={() => dispatch(setValue(inputValue.concat("+")))}
            type="button"
          >
            +
          </button>
          <button
            onClick={() => dispatch(setValue(inputValue.concat(1)))}
            type="button"
          >
            1
          </button>
          <button
            onClick={() => dispatch(setValue(inputValue.concat(2)))}
            type="button"
          >
            2
          </button>
          <button
            onClick={() => dispatch(setValue(inputValue.concat(3)))}
            type="button"
          >
            3
          </button>
          <button
            onClick={() => dispatch(setValue(inputValue.concat("-")))}
            type="button"
          >
            -
          </button>
          <button
            onClick={() => dispatch(setValue(inputValue.concat(".")))}
            type="button"
          >
            .
          </button>
          <button
            onClick={() => dispatch(setValue(inputValue.concat(0)))}
            type="button"
          >
            0
          </button>
          <button
            onClick={() => dispatch(setValue(inputValue.concat("/")))}
            type="button"
          >
            /
          </button>
          <button
            onClick={() => dispatch(setValue(inputValue.concat("*")))}
            type="button"
          >
            x
          </button>
        </div>
        <div className={styles.grid_two}>
          <button onClick={clear} type="button">
            RESET
          </button>
          <button onClick={calculate} type="button">
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
