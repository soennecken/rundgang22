import React, { useEffect, useState } from "react";

import Graph from "./Graph";

const Daten = () => {
  const [weatherData, setWeatherData] = useState([{}]);

  return (
    <main className="daten">
      <div className="graphWrapper">
        <Graph symbol={"DAI.DEX"} />
        <Graph symbol={"AAPL"} />
      </div>
    </main>
  );
};

export default Daten;
