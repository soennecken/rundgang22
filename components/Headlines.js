import React, { useState, useEffect } from "react";
import Image from "next/image";

import image01 from "../public/images/image01.png";
import image02 from "../public/images/image02.png";
import image03 from "../public/images/image03.png";
import image04 from "../public/images/image04.png";
import image05 from "../public/images/image05.png";
import image06 from "../public/images/image06.png";
import image07 from "../public/images/image07.png";
import image08 from "../public/images/image08.png";
import image09 from "../public/images/image09.png";
import image10 from "../public/images/image10.png";
import image11 from "../public/images/image11.png";
import image12 from "../public/images/image12.png";
import image13 from "../public/images/image13.png";
import image14 from "../public/images/image14.png";
import image15 from "../public/images/image15.png";
import image16 from "../public/images/image16.png";
import image17 from "../public/images/image17.png";
import image18 from "../public/images/image18.png";
import image19 from "../public/images/image19.png";
import image20 from "../public/images/image20.png";
import image21 from "../public/images/image21.png";
import image22 from "../public/images/image22.png";
import image23 from "../public/images/image23.png";
import image24 from "../public/images/image24.png";
import image25 from "../public/images/image25.png";
import image26 from "../public/images/image26.png";
import image27 from "../public/images/image27.png";
import image28 from "../public/images/image28.png";
import image29 from "../public/images/image29.png";
import image30 from "../public/images/image30.png";


const headlineTexts = [
  `Genial! Student wendet diesen einfachen Trick an`,
  `Student unter Tränen: "dass ich das einmal schaffe, hätte ich nie zu träumen gewagt"`,
  `Krass! Kunststudentin (23) sprengt rahmen`,
  `Rundgang 22: Mythos oder Wahrheit?`,
  `Genial! Studentin wendet diesen einfachen Trick an`,
  `Exmatrikuliert: Studentin im 128 (!!!) semester entdeckt"`,
  `Zufall? Warum dieses Sommerfest mit Absicht auf Juli fällt`,
  `Genial! Studentin wendet diesen einfachen Trick an`,
  `das Comeback des Jahres`,
  `Schamlos: Studierende zeigen alles`,
  `Genial! Student wendet diesen einfachen Trick an`,
  `Rekord! 1 Jahr in nur 3 Tagen`,
  `Kim K. über ABK Jahresausstellung: "das lässt sich not in words fassen"`,
  `Genial! Studentin wendet diesen einfachen Trick an`,
  `Abi, Hochzeit, Rundgang – 3 Schlüsselmomente die ihr leben verändern werden`,
  `Unfassbar: Professor (54) klaut Feuerzeug – droht jetzt Stammheim?`,
  `Genial! Student wendet diesen einfachen Trick an`,
  `Schock! Wo soll das noch hinführen?`,
  `Kim K. über ABK Jahresausstellung: "OMG!"`,
  `Rührend: Student (23) mischt perfekten Farbton`,
  `Lichtblick Restaurierung: Was sich jetzt noch retten lässt`,
  `7 Tips für schöne Beine`,
  `Genial! Studentin wendet diesen einfachen Trick an`,
  `Textildesigner auf Entzug: "ICh brauche endlich wieder stoff"`,
  `Fies! Studentin (24) schubst pixel`,
  `Genial! Studentin wendet diesen einfachen Trick an`,
  `Architekturstudentin nach Master:"Worauf kann ich jetzt noch bauen?"`,
  `Genial! Student wendet diesen einfachen Trick an`,
  `Durchbruch in der Holzwerkstatt: "Student trifft Nagel auf den Kopf"`,
  `"Ktpp" – Was hat das nur zu bedeuten?`,
];
const headlineImages = [
  image01,
  image02,
  image03,
  image04,
  image05,
  image06,
  image07,
  image08,
  image09,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
  image18,
  image19,
  image20,
  image21,
  image22,
  image23,
  image24,
  image25,
  image26,
  image27,
  image28,
  image29,
  image30,
];
const positions = ["flex-start", "center", "flex-end"];

const Headlines = () => {
  const [viewportHeight, setViewportHeight] = useState(0);

  const random = Math.floor(Math.random() * headlineTexts.length);

  const [index, setIndex] = useState(random);

  function updateIndex() {
    {
      index < headlineTexts.length - 1 ? setIndex(index + 1) : setIndex(0);
    }
  }

  useEffect(() => {
    setViewportHeight(window.innerHeight), console.log(viewportHeight);
  });

  return (
    <main className="headlines">
      <div
        className="headlineWrapper"
        style={{ bottom: `calc(${viewportHeight * 0.4} + 17px)` }}
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
              <div>→ zur digitalen Ausstellung</div>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Headlines;
