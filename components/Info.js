import React, { useState } from "react";

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
      onClick={() => setOpen(!open)}>
      <div className={open ? "infoContent" : "hide"}>Test</div>
    </div>
    </main>
  );
};

export default Info;
