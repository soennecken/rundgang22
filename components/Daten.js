import React, { useEffect, useState, useRef  } from "react";

import Graph from "./Graph";
import Horoskop from "./Horoskop"

const Daten = () => {
  const [weatherData, setWeatherData] = useState([{}])


  return (
    <main className="daten">

      <div className="horoskopWrapper">
        <Horoskop zodiac={"cancer"}/>
        <Horoskop zodiac={"leo"}/>
        <Horoskop zodiac={"virgo"}/>
        <Horoskop zodiac={"libra"}/>
        <Horoskop zodiac={"scorpio"}/>
        <Horoskop zodiac={"sagittarius"}/>
        <Horoskop zodiac={"capricorn"}/>
        <Horoskop zodiac={"aquarius"}/>
        <Horoskop zodiac={"pisces"}/>
        <Horoskop zodiac={"aries"}/>
        <Horoskop zodiac={"taurus"}/>
        <Horoskop zodiac={"gemini"}/>
      </div>

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
