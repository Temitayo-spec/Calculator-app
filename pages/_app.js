/* eslint-disable quotes */
/* eslint-disable react/jsx-props-no-spreading */
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import LoadingScreen from "../components/LoadingScreen";
import Default from "../layouts/default";
import store from "../store";
import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  const [time, setTime] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setTime(false);
    }, 3000);
  }, []);

  return (
    <div className="layouts-ctn">
      {time ? (
        <LoadingScreen />
      ) : (
        <div className={time === false ? "active" : ""}>
          <Provider store={store}>
            <Default time={time}>
              <Component {...pageProps} />
            </Default>
          </Provider>
        </div>
      )}
    </div>
  );
}

export default MyApp;
