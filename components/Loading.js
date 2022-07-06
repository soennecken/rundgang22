import React from "react";
import Lottie from "react-lottie";
import animationData from "../public/animations/data.json";

const Loading = (props) => {
  const active = {
    height: "200vh",
    opacity: "1",
  };

  const hidden = {
    height: "200vh",
    opacity: "0",
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    renderer: "svg",
  };

  return (
    <div className={"loadingWrapper"} style={props.loading ? active : hidden}>
      <Lottie options={defaultOptions} height={"100vh"} width={"100vw"} />
    </div>
  );
};

export default Loading;
