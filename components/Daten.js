import React, { useEffect, useState, useRef } from "react";

import Graph from "./Graph";
import Horoskop from "./Horoskop";

const Daten = () => {
  const [height, setHeight] = useState("");

  const elementRef = useRef(null);

  useEffect(() => {
    setHeight(`${elementRef.current.clientHeight}`);

  }, []);

  console.log(height);

  return (
    <main className="daten">
      <div className="horoskopWrapper"  >
        <div ref={elementRef}>
          <Horoskop zodiac={"cancer"} height={height}/>
          <Horoskop zodiac={"leo"} height={height}/>
          <Horoskop zodiac={"virgo"} height={height}/>
          <Horoskop zodiac={"libra"} height={height}/>
          <Horoskop zodiac={"scorpio"} height={height}/>
          <Horoskop zodiac={"sagittarius"} height={height}/>
          <Horoskop zodiac={"capricorn"} height={height}/>
          <Horoskop zodiac={"aquarius"} height={height}/>
          <Horoskop zodiac={"pisces"} height={height}/>
          <Horoskop zodiac={"aries"} height={height}/>
          <Horoskop zodiac={"taurus"} height={height}/>
          <Horoskop zodiac={"gemini"} height={height}/>
        </div>
      </div>

      <div className="stocksWrapper">
        <div className="graphWrapper">
          <Graph symbol={"GOOG"} stockName={"Alphabet Inc"} />
          <Graph symbol={"WMT"} stockName={"Walmart Inc"} />
        </div>
        <div className="graphWrapper">
          <Graph symbol={"DAI.DEX"} stockName={"Daimler AG"} />
          <Graph symbol={"AAPL"} stockName={"Apple Corp."} />
        </div>
        <div className="graphWrapper">
          <Graph symbol={"PEP"} stockName={"PepsiCo, Inc"} />
          <Graph symbol={"BABA"} stockName={"Alibaba Group Holding"} />
        </div>
        <div className="graphWrapper">
          <Graph symbol={"ADBE"} stockName={"Adobe Inc."} />
          <Graph symbol={"MCD"} stockName={"McDonald's Corporation"} />
        </div>
      </div>
    </main>
  );
};

export default Daten;
