import React, { useState, useEffect } from "react";
import Image from "next/image";

import image01 from "../public/images/01.png";
import image02 from "../public/images/02.png";

const headlineTexts = [
  `Student unter Tränen: "dass ich das einmal schaffe, hätte ich nie zu träumen gewagt"`,
  `Krass! Kunststudentin (23) sprengt rahmen`,
  `Rundgang 22: Mythos oder Wahrheit?`,
  `Exmatrikuliert: Studentin im 128 (!!!) semester entdeckt"`,
  `Zufall? Warum dieses Sommerfest mit Absicht auf Juli fällt`,
  `das Comeback des Jahres`,
  `Schamlos: Studierende zeigen alles`,
  `Rekord! 1 Jahr in nur 3 Tagen`,
  `Kim K. über ABK Jahresausstellung: "das lässt sich not in words fassen"`,
  `Kim K. über ABK Jahresausstellung: "OMG!"`,
  `Abi, Hochzeit, Rundgang – 3 Schlüsselmomente die ihr leben verändern werden`,
  `Unfassbar: Professor (54) klaut Feuerzeuch – droht jetzt Stammheim?`,
  `Genial! Student wendet diesen einfachen Trick an`,
  `Genial! Student wendet diesen einfachen Trick an`,
  `Genial! Student wendet diesen einfachen Trick an`,
  `Genial! Student wendet diesen einfachen Trick an`,
  `Genial! Student wendet diesen einfachen Trick an`,
  `Genial! Student wendet diesen einfachen Trick an`,
  `Genial! Student wendet diesen einfachen Trick an`,
  `Genial! Student wendet diesen einfachen Trick an`,
  `Genial! Student wendet diesen einfachen Trick an`,
  `Schock! Wo soll das noch hinführen?`,
  `Rührend: Student (23) mischt perfekten Farbton`,
  `Lichtblick Restaurierung: Was sich jetzt noch retten lässt`,
  `7 Tips für schöne Beine`,
  `Textildesigner auf Entzug: "ICh brauche endlich wieder stoff"`,
  `Fies! Studentin (24) schubst pixel`,
  `Schamlos: Studierende zeigen alles`,
  `Architekturstudentin nach Master:"Worauf kann ich jetzt noch bauen?"`,
  `Durchbruch in der Holzwerkstatt: "Student trifft Nagel auf den Kopf"`,
  `"Ktpp" – Was hat das nur zu bedeuten?`,
  `Siri über ABK Jahresausstellung: "entschuldigung, das habe ich nich verstanden"`,
];
const headlineImages = [
  image01,
  image02,
  image01,
  image02,
  image01,
  image02,
  image01,
  image02,
  image01,
  image02,
  image01,
  image02,
  image01,
  image02,
  image01,
  image02,
  image01,
  image02,
  image01,
  image02,
  image01,
  image02,
  image01,
  image02,
  image01,
  image02,
  image01,
  image02,
  image01,
  image02,
  image01,
  image02,
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
