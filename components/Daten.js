import React, { useEffect, useState, useRef  } from "react";

import Graph from "./Graph";

const Daten = () => {
  const [weatherData, setWeatherData] = useState([{}])


  return (
    <main className="daten">
      <div className="stocksWrapper" >
        <div className="graphWrapper">
          <Graph symbol={"DAI.DEX"} stockName={"Daimler AG"} />
          <Graph symbol={"AAPL"} stockName={"Apple Corp."} />
        </div>
        <div className="graphWrapper" >
          <Graph symbol={"DAI.DEX"} stockName={"Daimler AG"} />
          <Graph symbol={"AAPL"} stockName={"Apple Corp."} />
        </div>
      </div>
      
    </main>
  );
};

export default Daten;
