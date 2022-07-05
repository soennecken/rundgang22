import Head from "next/head";
import Info from "../components/Info";
import Daten from "../components/Daten";
import Headlines from "../components/Headlines";
import Webcam from "../components/Webcam";

export default function Home() {
  return (
    <div className="outer">
      <Head>
        <title>Rundgang 22</title>
        <meta name="description" content="Rundgang 22" />
        <link rel="icon" href="/favicon-2.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/ecl7rwj.css" />
      </Head>

      <main>
        <Webcam />
        <Info />
        <Headlines />
        <Daten />
      </main>
    </div>
  );
}
