import { useState, useEffect } from "react";
import Loading from '../components/Loading'

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  const hideScreen = () => {

  }

  useEffect(() => {
    setTimeout(function () {
      setLoading(false);
    }, 5000)
  }, []);

  return (
    <>
      <Loading loading={loading} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
