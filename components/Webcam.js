import React from "react";


// HIER VIMEO ID EINFÜGEN!
const videoID = "730128488" 

const Webcam = () => {
  return (
    <main className="webcam">
      <div className="embed-container">
        <iframe
          src={`https://player.vimeo.com/video/${videoID}?h=8fe1ea4138&background=true`}
          width="440"
          height="1138"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </main>
  );
};

export default Webcam;
