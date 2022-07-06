import React from "react";

const Loading = (props) => {
  const active = {
    height: "200vh",
    opacity: "1"
  };

  const hidden = {
    height: "200vh",
    opacity: "0"
  };

  return (
    <div className={"loadingWrapper"} style={props.loading ? active : hidden}>
      <lottie-player
        src="https://assets6.lottiefiles.com/packages/lf20_szxax0do.json"
        background="transparent"
        speed="1"
        style={{width: "100vw", height: "100vh"}}
        loop
        autoplay
      ></lottie-player>
    </div>
  );
};

export default Loading;
