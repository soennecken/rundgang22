import { useState, useEffect } from "react";
import Loading from '../components/Loading'

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  const hideScreen = () => {
    setTimeout(setLoading(false), 7000)
  }

  useEffect(() => {
    hideScreen()
    console.log(loading)
  }, []);

  return (
    <>
      <Loading loading={loading} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
