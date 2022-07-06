import React from "react";
import Lottie from "react-lottie";
import animationDataDesktop from "../public/animations/data.json";
import animationDataMobile from "../public/animations/data-hoch.json";

const Loading = (props) => {
  const active = {
    height: "200vh",
  };

  const hidden = {
    height: "0",
  };

  const animationDesktop = {
    loop: true,
    autoplay: true,
    animationData: animationDataDesktop,
    renderer: "svg",
  };

  const animationMobile = {
    loop: true,
    autoplay: true,
    animationData: animationDataMobile,
    renderer: "svg",
  };

  return (
    <div className={"loadingWrapper"} style={props.loading ? active : hidden}>
      <div className="loadingDesktop">
        <Lottie options={animationDesktop} height={"100vh"} width={"100vw"} />
      </div>
      <div className="loadingMobile">
        <Lottie options={animationMobile} height={"100vh"} width={"100vw"} />
      </div>
    </div>
  );
};

export default Loading;
