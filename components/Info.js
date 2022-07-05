import React, { useEffect, useState } from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

import logo from "../public/images/logo_gif.gif";
import jana from "../public/images/02.png";

const Info = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = (event) => {
      window.scrollY > 0 ? setOpen(true) : "";
      window.scrollY < 0 ? setOpen(false) : "";
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main>
      <div className="logo">
        <Image src={logo} />
      </div>
      <div className={open ? "info" : "closed"} onClick={() => setOpen(!open)}>
        <div className="headMarqueeWrapper">
          <div className="headMarqueeInner">
            <Marquee gradient={false}>
              <div className="liveTicker">
                +++ABK LIVE++++++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK
                LIVE +++ABK LIVE++++++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK
                LIVE+++ABK LIVE +++ABK LIVE++++++ABK LIVE+++ABK LIVE+++ABK
                LIVE+++ABK LIVE+++ABK LIVE +++ABK LIVE++++++ABK LIVE+++ABK
                LIVE+++ABK LIVE+++ABK LIVE+++ABK LIVE +++ABK LIVE++++++ABK
                LIVE+++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK
                LIVE++++++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK LIVE
                +++ABK LIVE++++++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK
                LIVE +++ABK LIVE++++++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK
                LIVE+++ABK LIVE +++ABK LIVE++++++ABK LIVE+++ABK LIVE+++ABK
                LIVE+++ABK LIVE+++ABK LIVE +++ABK LIVE++++++ABK LIVE+++ABK
                LIVE+++ABK LIVE+++ABK LIVE+++ABK LIVE +++ABK LIVE++++++ABK
                LIVE+++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK LIVE +++ABK
                LIVE++++++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK LIVE
                +++ABK LIVE++++++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK
                LIVE +++ABK LIVE++++++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK
                LIVE+++ABK LIVE +++ABK LIVE++++++ABK LIVE+++ABK LIVE+++ABK
                LIVE+++ABK LIVE+++ABK LIVE +++ABK LIVE++++++ABK LIVE+++ABK
                LIVE+++ABK LIVE+++ABK LIVE+++ABK LIVE +++ABK LIVE++++++ABK
                LIVE+++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK LIVE +++ABK
                LIVE++++++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK LIVE
                +++ABK LIVE++++++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK
                LIVE +++ABK LIVE++++++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK
                LIVE+++ABK LIVE +++ABK LIVE++++++ABK LIVE+++ABK LIVE+++ABK
                LIVE+++ABK LIVE+++ABK LIVE +++ABK LIVE++++++ABK LIVE+++ABK
                LIVE+++ABK LIVE+++ABK LIVE+++ABK LIVE +++ABK LIVE++++++ABK
                LIVE+++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK LIVE +++ABK
                LIVE++++++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK LIVE
                +++ABK LIVE++++++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK
                LIVE +++ABK LIVE++++++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK
                LIVE+++ABK LIVE +++ABK LIVE++++++ABK LIVE+++ABK LIVE+++ABK
                LIVE+++ABK LIVE+++ABK LIVE +++ABK LIVE++++++ABK LIVE+++ABK
                LIVE+++ABK LIVE+++ABK LIVE+++ABK LIVE +++ABK LIVE++++++ABK
                LIVE+++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK LIVE +++ABK
                LIVE++++++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK LIVE
              </div>
            </Marquee>
          </div>
        </div>
        <div className={open ? "infoContent" : "hide"}>
          <Marquee gradient={false}>
            <div className="liveTicker">
              Öffnungszeiten +++ Öffnungszeiten +++ Öffnungszeiten +++
              Öffnungszeiten +++ Öffnungszeiten +++ Öffnungszeiten +++
              Öffnungszeiten +++ Öffnungszeiten +++ Öffnungszeiten +++
            </div>
          </Marquee>
          <table className="program">
            <tbody>
              <tr>
                <td className="col1">Freitag</td>
                <td className="col1">18:00–23:00</td>
              </tr>
              <tr>
                <td className="col1">Samstag/Sonntag</td>
                <td className="col1">12:00–20:00</td>
              </tr>
            </tbody>
          </table>

          <Marquee gradient={false}>
            <div className="liveTicker">
              Offizielle Eröffnung +++ Offizielle Eröffnung +++ Offizielle
              Eröffnung +++ Offizielle Eröffnung +++ Offizielle Eröffnung +++
              Offizielle Eröffnung +++ Offizielle Eröffnung +++ Offizielle
              Eröffnung +++ Offizielle Eröffnung +++
            </div>
          </Marquee>
          <table className="program">
            <tbody>
              <tr>
                <td className="col1">Freitag</td>
                <td className="col1">18:00</td>

                <td className="col1">
                  Offizielle Eröffnung des Rundgangs durch Prof.in Dr. Barbara
                  Bader, Rektorin der ABK Stuttgart, mit anschließender
                  Verleihung der Akademie- Preise (gefördert durch die SV
                  SparkassenVersicherung) und des DAAD-Preises
                </td>
                <td className="col1">Campus</td>
              </tr>
            </tbody>
          </table>

          <Marquee gradient={false}>
            <div className="liveTicker">
              Musik und Lounge +++ Musik und Lounge +++ Musik und Lounge +++
              Musik und Lounge +++ Musik und Lounge +++ Musik und Lounge +++
              Musik und Lounge +++ Musik und Lounge +++ Musik und Lounge +++
            </div>
          </Marquee>
          <table className="program">
            <tbody>
              <tr>
                <td className="col1">Freitag</td>
                <td className="col1">23:00</td>

                <td className="col1">Musik und Lounge zum Rundgang</td>
                <td className="col1">Neubau 2, Erdgeschoss, Vortragssaal</td>
              </tr>
            </tbody>
          </table>

          <Marquee gradient={false}>
            <div className="liveTicker">
              Tag der Freunde +++ Tag der Freunde +++ Tag der Freunde +++ Tag
              der Freunde +++ Tag der Freunde +++ Tag der Freunde +++ Tag der
              Freunde +++ Tag der Freunde +++ Tag der Freunde +++ Tag der
              Freunde +++ Tag der Freunde +++ Tag der Freunde +++ Tag der
              Freunde +++ Tag der Freunde +++ Tag der Freunde +++
            </div>
          </Marquee>
          <table className="program">
            <tbody>
              <tr>
                <td className="col1">Sonntag</td>
                <td className="col1">12:30</td>

                <td className="col1">
                  Die Freunde der Akademie Stuttgart e.V. stellen sich vor und
                  laden ein zur Matinee mit Verleihung des Erwin-Heinle-Preises,
                  des Kurt Weidemann-Preises sowie des Kunstpreises Förder-Koje
                  2022 mit anschließendem Stehempfang
                </td>
                <td className="col1">Neubau 2, Erdgeschoss, Vortragssaal</td>
              </tr>
            </tbody>
          </table>

          <Marquee gradient={false}>
            <div className="liveTicker">
              Führungen +++ Führungen +++ Führungen +++ Führungen +++ Führungen
              +++ Führungen +++ Führungen +++ Führungen +++ Führungen +++
              Führungen +++ Führungen +++ Führungen +++ Führungen +++ Führungen
              +++ Führungen +++ Führungen +++ Führungen +++
            </div>
          </Marquee>
          <table className="program">
            <tbody>
              <tr>
                <td className="col1">Samstag/Sonntag</td>
                <td className="col1">13:00</td>

                <td className="col1">Konservierung und Restaurierung</td>
                <td className="col1">Neubau 2, Erdgeschoss, Infostand</td>
              </tr>
              <tr>
                <td className="col1"> </td>
                <td className="col1">14:00</td>

                <td className="col1">Kunst/Künstlerisches Lehramt</td>

                <td className="col1">Neubau 2, Erdgeschoss, Infostand</td>
              </tr>
              <tr>
                <td className="col1"> </td>
                <td className="col1">15:00</td>

                <td className="col1">Textildesign</td>

                <td className="col1">Neubau 2, Erdgeschoss, Infostand</td>
              </tr>
              <tr>
                <td className="col1"> </td>
                <td className="col1">16:00</td>

                <td className="col1">Kommunikationsdesign</td>

                <td className="col1">Neubau 2, Erdgeschoss, Infostand</td>
              </tr>
              <tr>
                <td className="col1"> </td>
                <td className="col1">17:00</td>

                <td className="col1">Industrial Design</td>

                <td className="col1">Neubau 2, Erdgeschoss, Infostand</td>
              </tr>
              <tr>
                <td className="col1"> </td>
                <td className="col1">18:00</td>

                <td className="col1">Architektur</td>

                <td className="col1">Neubau 2, Erdgeschoss, Infostand</td>
              </tr>
            </tbody>
          </table>

          <Marquee gradient={false}>
            <div className="liveTicker">
              Diplom- und Masterarbeiten +++ Diplom- und Masterarbeiten +++
              Diplom- und Masterarbeiten +++ Diplom- und Masterarbeiten +++
              Diplom- und Masterarbeiten +++ Diplom- und Masterarbeiten +++
              Diplom- und Masterarbeiten +++ Diplom- und Masterarbeiten +++
              Diplom- und Masterarbeiten +++ Diplom- und Masterarbeiten +++
              Diplom- und Masterarbeiten +++ Diplom- und Masterarbeiten +++
            </div>
          </Marquee>
          <table className="program">
            <tbody>
              <tr>
                <td className="col1">14.–22.Juli</td>
                <td className="col1"></td>

                <td className="col1">
                  Diplom Bildende Kunst, M.Ed. Künstlerisches Lehramt mit
                  Bildender Kunst, M. F.A. Körper, Theorie und Poetik des
                  Performativen (KTPP)
                </td>
                <td className="col1">
                  <div>
                    Kunstbezirk Stuttgart
                    <br />
                    Projektraum AKKU
                  </div>
                  <div>
                    Leonhardsplatz 28, 70182 Stuttgart
                    <br />
                    Gerberstr. 5c, 70178 Stuttgart
                  </div>
                </td>
              </tr>
              <tr>
                <td className="col1"> </td>
              </tr>
              <tr>
                <td className="col1">15.–17.Juli</td>
                <td className="col1"></td>
                <td className="col1">Architektur</td>
                <td className="col1">ABK Stuttgart/Neubau 1, Glaskasten</td>
              </tr>
              <tr>
                <td className="col1"></td>
                <td className="col1"></td>
                <td className="col1">Industrial Design</td>
                <td className="col1"> ABK Stuttgart/Neubau 2, Graben</td>
              </tr>
              <tr>
                <td className="col1"></td>
                <td className="col1"></td>
                <td className="col1">Kommunikationsdesign</td>
                <td className="col1"> ABK Stuttgart/Neubau 2, Graben</td>
              </tr>
              <tr>
                <td className="col1"></td>
                <td className="col1"></td>
                <td className="col1">Textildesign</td>
                <td className="col1"> ABK Stuttgart/Neubau 2, Graben</td>
              </tr>
            </tbody>
          </table>
          <div className="colophon">
            <table>
              <thead>
                <tr>
                  <td className="col1">Impressum</td>
                </tr>
                <tr>
                  <td className="col1"> </td>
                </tr>
                <tr>
                  <td className="col1">
                    Angaben gemäß § 5 TMG (Telemediengesetz)
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="col1">Rechtlicher Sitz</td>
                  <td className="col1">
                    Staatliche Akademie der Bildenden Künste Stuttgart
                    <br />
                    Am Weißenhof 1<br />
                    70191 Stuttgart
                    <br />
                    Deutschland
                    <br />
                    <br />
                  </td>
                  <td className="col1">
                    +49 (0)711 28440-101
                    <br />
                    <a href="mailto:info@abk-stuttgart.de">
                      info(at)abk-stuttgart.de
                    </a>
                    <br />
                    <a href="https://abk-stuttgart.de">www.abk-stuttgart.de</a>
                    <br />
                  </td>
                </tr>

                <tr>
                  <td className="col1">Konzeption und Gestaltung</td>
                  <td className="col1">
                    Andy Grammel
                    <br />
                    Jule Hägele
                    <br />
                    Jana Rzehak
                    <br />
                    Sonja Schwarz
                    <br />
                    <br />
                  </td>
                  <td className="col1">Technische Umsetzung</td>
                  <td className="col1">Mark Julien Hahn</td>
                </tr>

                <tr>
                  <td className="col1">Projektkoordination</td>
                  <td className="col1">Marion Butsch</td>
                  <td className="col1">Schriften</td>
                  <td className="col1">
                    Acumin Pro
                    <br />
                    Pirelli (Optimo.ch)
                    <br />
                    <br />
                  </td>
                </tr>

                <tr>
                  <td className="col1">Rechtsform</td>
                  <td className="col1">
                    Die Staatliche Akademie der Bildenden Künste Stuttgart ist
                    eine Körperschaft des Öffentlichen Rechts. Sie wird durch
                    die Rektorin Prof. Dr. Barbara Bader gesetzlich vertreten.
                    <br />
                    <br />
                  </td>
                  <td className="col1">
                    Aufsichtsbehörde
                    <br />
                  </td>
                  <td className="col1">
                    Ministerium für Wissenschaft, Forschung und Kunst
                    <br />
                    Baden-Württemberg Postfach 10 34 53 70029 Stuttgart
                    <br />
                    Deutschland
                    <br />
                    <br />
                  </td>
                </tr>

                <tr>
                  <td className="col1">Haftung für Inhalte</td>
                  <td className="col3">
                    Diese Website dient lediglich der Information. Ihr Inhalt
                    wurde mit größter Sorgfalt zusammengestellt. Eine Haftung
                    oder Garantie für die Aktualität, Richtigkeit und
                    Vollständigkeit der zur Verfügung gestellten Informationen
                    und Daten ist jedoch ausgeschlossen.
                    <br />
                    <br />
                  </td>
                </tr>

                <tr>
                  <td className="col1">Haftung für Links</td>
                  <td className="col3">
                    Die Staatliche Akademie der Bildenden Künste Stuttgart ist
                    als Inhaltsanbieter für die eigenen Inhalte, die sie zur
                    Nutzung bereithält, nach den allgemeinen Gesetzen
                    verantwortlich. Von diesen eigenen Inhalten sind
                    Querverweise (externe Links) auf die von anderen Anbietern
                    bereit gehaltenen Inhalte zu unterscheiden. Diese fremden
                    Inhalte stammen nicht von der Staatlichen Akademie der
                    Bildenden Künste Stuttgart und spiegeln auch nicht die
                    Meinung der Staatlichen Akademie der Bildenden Künste
                    Stuttgart wider, sondern dienen lediglich der Information.
                    Die Staatliche Akademie der Bildenden Künste Stuttgart macht
                    sich diese Inhalte nicht zu eigen. Bei Bekanntwerden von
                    Rechtsverletzungen werden derartige Links umgehend entfernt.
                    Diese Erklärung gilt für alle auf unserer Website
                    angezeigten Links und für alle Inhalte der Seiten, zu denen
                    die bei uns angemeldeten Banner und Links führen.
                    <br />
                    <br />
                  </td>
                </tr>

                <tr>
                  <td className="col1">Urheberrecht</td>
                  <td className="col3">
                    Die Inhalte der Website unterliegen dem deutschen
                    Urheberrecht und sind urheberrechtlich geschützt. Die
                    Vervielfältigung, Bearbeitung und Verbreitung von
                    Informationen oder Daten, insbesondere die Verwendung von
                    Texten, Textteilen oder Bildmaterial bedarf der
                    schriftlichen Zustimmung der Staatlichen Akademie der
                    Bildenden Künste Stuttgart. Die Wiederveröffentlichung oder
                    Weiterverbreitung von Inhalten dieser Website einschließlich
                    des sogenannten Framings und ähnlicher Maßnahmen ist somit
                    ohne ausdrückliche schriftliche Zustimmung der Staatlichen
                    Akademie der Bildenden Künste Stuttgart nicht gestattet
                    <br />
                    <br />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="imageWrapper">
            <div className="imageInner">
              <Image src={jana} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Info;
