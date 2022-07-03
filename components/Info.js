import React, { useState } from "react";
import Marquee from "react-fast-marquee";

import logo from "../public/images/RG22_Logo.png";

const Info = () => {
  const [open, setOpen] = useState(false);

  const inactive = {
    height: "100px",
  };

  const active = {
    height: "500px",
  };

  return (
    <main>
      <div className="logo">
        <img src={logo} />
      </div>
      <div
        style={open ? active : inactive}
        className="info"
        onClick={() => setOpen(!open)}
      >
        <Marquee gradient={false}>
          <div className="liveTicker">
            +++ABK LIVE++++++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK
            LIVE +++ABK LIVE++++++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK
            LIVE+++ABK LIVE +++ABK LIVE++++++ABK LIVE+++ABK LIVE+++ABK
            LIVE+++ABK LIVE+++ABK LIVE +++ABK LIVE++++++ABK LIVE+++ABK
            LIVE+++ABK LIVE+++ABK LIVE+++ABK LIVE +++ABK LIVE++++++ABK
            LIVE+++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK LIVE++++++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK
            LIVE +++ABK LIVE++++++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK
            LIVE+++ABK LIVE +++ABK LIVE++++++ABK LIVE+++ABK LIVE+++ABK
            LIVE+++ABK LIVE+++ABK LIVE +++ABK LIVE++++++ABK LIVE+++ABK
            LIVE+++ABK LIVE+++ABK LIVE+++ABK LIVE +++ABK LIVE++++++ABK
            LIVE+++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK LIVE            +++ABK LIVE++++++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK
            LIVE +++ABK LIVE++++++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK
            LIVE+++ABK LIVE +++ABK LIVE++++++ABK LIVE+++ABK LIVE+++ABK
            LIVE+++ABK LIVE+++ABK LIVE +++ABK LIVE++++++ABK LIVE+++ABK
            LIVE+++ABK LIVE+++ABK LIVE+++ABK LIVE +++ABK LIVE++++++ABK
            LIVE+++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK LIVE            +++ABK LIVE++++++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK
            LIVE +++ABK LIVE++++++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK
            LIVE+++ABK LIVE +++ABK LIVE++++++ABK LIVE+++ABK LIVE+++ABK
            LIVE+++ABK LIVE+++ABK LIVE +++ABK LIVE++++++ABK LIVE+++ABK
            LIVE+++ABK LIVE+++ABK LIVE+++ABK LIVE +++ABK LIVE++++++ABK
            LIVE+++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK LIVE            +++ABK LIVE++++++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK
            LIVE +++ABK LIVE++++++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK
            LIVE+++ABK LIVE +++ABK LIVE++++++ABK LIVE+++ABK LIVE+++ABK
            LIVE+++ABK LIVE+++ABK LIVE +++ABK LIVE++++++ABK LIVE+++ABK
            LIVE+++ABK LIVE+++ABK LIVE+++ABK LIVE +++ABK LIVE++++++ABK
            LIVE+++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK LIVE            +++ABK LIVE++++++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK
            LIVE +++ABK LIVE++++++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK
            LIVE+++ABK LIVE +++ABK LIVE++++++ABK LIVE+++ABK LIVE+++ABK
            LIVE+++ABK LIVE+++ABK LIVE +++ABK LIVE++++++ABK LIVE+++ABK
            LIVE+++ABK LIVE+++ABK LIVE+++ABK LIVE +++ABK LIVE++++++ABK
            LIVE+++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK LIVE
          </div>
        </Marquee>
        <div className={open ? "infoContent" : "hide"}>Test</div>
      </div>
    </main>
  );
};

export default Info;
