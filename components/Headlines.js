import React, { useState } from "react";
import Image from "next/image";

import image01 from "../public/images/01.png";
import image02 from "../public/images/02.png";

const headlineTexts = ["OMG", "Genial!", "kjasfdlja", "kfllmvir"];
const headlineImages = [image01, image02, image01, image02];
const positions = ["flex-start", "center", "flex-end"];

const Headlines = () => {
  const random = Math.floor(Math.random() * headlineTexts.length);

  const [index, setIndex] = useState(random);
  const [vertical, setVertical] = useState(0);
  const [horizontal, setHorizontal] = useState(0);

  function updateIndex() {
    {
      index < headlineTexts.length - 1 ? setIndex(index + 1) : setIndex(0);
    }
  }
  function changePosition() {
    setVertical(Math.floor(Math.random() * 3)),
      setHorizontal(Math.floor(Math.random() * 3));
  }

  const styles = {
    justifyContent: positions[vertical],
    alignItems: positions[horizontal],
  };

  return (
    <main className="headlines" style={styles}>
      <div className="headlineWrapper">
        <div className="image">
          <Image src={headlineImages[index]} />
        </div>

        <div className="line">
          <h1>{headlineTexts[index]}</h1>
          <div
            className="weiter"
            onClick={() => {
              updateIndex(), changePosition();
            }}
          >
            <div>weiter</div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Headlines;
