import React, { useState, useEffect } from "react";
import Image from "next/image";

import image01 from "../public/images/01.png";
import image02 from "../public/images/02.png";

const headlineTexts = ["OMG", "Genial!", "kjasfdlja", "kfllmvir"];
const headlineImages = [image01, image02, image01, image02];
const positions = ["flex-start", "center", "flex-end"];

const Headlines = () => {
  const [viewportHeight, setViewportHeight] = useState(0)

  const random = Math.floor(Math.random() * headlineTexts.length);


  const [index, setIndex] = useState(random);

  function updateIndex() {
    {
      index < headlineTexts.length - 1 ? setIndex(index + 1) : setIndex(0);
    }
  }

  useEffect(  () => {
    setViewportHeight(window.innerHeight),
    console.log(viewportHeight)
  })

  return (
    <main className="headlines">
      <div
        className="headlineWrapper"
        style={{bottom: `calc(${(viewportHeight*0.4)} + 17px)`}}
        onClick={() => {
          updateIndex();
        }}
      >
        <div className="image">
          <div className="thumbnailWrapper">
            <Image src={headlineImages[index]} />
          </div>
        </div>

        <div className="line">
          <h1>{headlineTexts[index]}</h1>
          <div className="weiter">
            <a href="https://abk.live" target="_blank" rel="noreferrer">
              <div>weiter zu abk.live</div>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Headlines;
