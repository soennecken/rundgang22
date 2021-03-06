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
      <div className="logo" onClick={() => setOpen(!open)}>
        <Image src={logo} />
      </div>
      <div className={open ? "info" : "closed"} onClick={() => setOpen(!open)}>
        <div className="headMarqueeWrapper">
          <div className="headMarqueeInner">
            <Marquee gradient={false}>
              <div className="liveTicker">
                +++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK
                LIVE +++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK
                LIVE+++ABK LIVE +++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK
                LIVE+++ABK LIVE+++ABK LIVE +++ABK LIVE+++ABK LIVE+++ABK
                LIVE+++ABK LIVE+++ABK LIVE+++ABK LIVE +++ABK LIVE+++ABK
                LIVE+++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK
                LIVE+++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK LIVE
                +++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK
                LIVE +++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK
                LIVE+++ABK LIVE +++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK
                LIVE+++ABK LIVE+++ABK LIVE +++ABK LIVE+++ABK LIVE+++ABK
                LIVE+++ABK LIVE+++ABK LIVE+++ABK LIVE +++ABK LIVE+++ABK
                LIVE+++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK LIVE +++ABK
                LIVE+++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK LIVE
                +++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK
                LIVE +++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK
                LIVE+++ABK LIVE +++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK
                LIVE+++ABK LIVE+++ABK LIVE +++ABK LIVE+++ABK LIVE+++ABK
                LIVE+++ABK LIVE+++ABK LIVE+++ABK LIVE +++ABK LIVE+++ABK
                LIVE+++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK LIVE +++ABK
                LIVE+++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK LIVE
                +++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK
                LIVE +++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK
                LIVE+++ABK LIVE +++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK
                LIVE+++ABK LIVE+++ABK LIVE +++ABK LIVE+++ABK LIVE+++ABK
                LIVE+++ABK LIVE+++ABK LIVE+++ABK LIVE +++ABK LIVE+++ABK
                LIVE+++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK LIVE +++ABK
                LIVE+++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK LIVE
                +++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK
                LIVE +++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK
                LIVE+++ABK LIVE +++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK
                LIVE+++ABK LIVE+++ABK LIVE +++ABK LIVE+++ABK LIVE+++ABK
                LIVE+++ABK LIVE+++ABK LIVE+++ABK LIVE +++ABK LIVE+++ABK
                LIVE+++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK LIVE +++ABK
                LIVE+++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK LIVE+++ABK LIVE
              </div>
            </Marquee>
          </div>
        </div>
        <div className={open ? "infoContent" : "hide"}>
          <Marquee gradient={false}>
            <div className="liveTicker">
              ??ffnungszeiten +++ ??ffnungszeiten +++ ??ffnungszeiten +++
              ??ffnungszeiten +++ ??ffnungszeiten +++ ??ffnungszeiten +++
              ??ffnungszeiten +++ ??ffnungszeiten +++ ??ffnungszeiten +++
            </div>
          </Marquee>
          <table className="program">
            <tbody>
              <tr>
                <td className="col1">Freitag</td>
                <td className="col1">18:00???23:00</td>
              </tr>
              <tr>
                <td className="col1">Samstag/Sonntag</td>
                <td className="col1">12:00???20:00</td>
              </tr>
            </tbody>
          </table>

          <Marquee gradient={false}>
            <div className="liveTicker">
              Offizielle Er??ffnung +++ Offizielle Er??ffnung +++ Offizielle
              Er??ffnung +++ Offizielle Er??ffnung +++ Offizielle Er??ffnung +++
              Offizielle Er??ffnung +++ Offizielle Er??ffnung +++ Offizielle
              Er??ffnung +++ Offizielle Er??ffnung +++
            </div>
          </Marquee>
          <table className="program">
            <tbody>
              <tr>
                <td className="col1">Freitag</td>
                <td className="col1">18:00</td>

                <td className="col1">
                  Offizielle Er??ffnung des Rundgangs durch Prof.in Dr. Barbara
                  Bader, Rektorin der ABK Stuttgart, mit anschlie??ender
                  Verleihung der Akademie- Preise (gef??rdert durch die SV
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
                  des Kurt Weidemann-Preises sowie des Kunstpreises F??rder-Koje
                  2022 mit anschlie??endem Stehempfang
                </td>
                <td className="col1">Neubau 2, Erdgeschoss, Vortragssaal</td>
              </tr>
            </tbody>
          </table>

          <Marquee gradient={false}>
            <div className="liveTicker">
              F??hrungen +++ F??hrungen +++ F??hrungen +++ F??hrungen +++ F??hrungen
              +++ F??hrungen +++ F??hrungen +++ F??hrungen +++ F??hrungen +++
              F??hrungen +++ F??hrungen +++ F??hrungen +++ F??hrungen +++ F??hrungen
              +++ F??hrungen +++ F??hrungen +++ F??hrungen +++
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

                <td className="col1">Kunst/K??nstlerisches Lehramt</td>

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
                <td className="col1">14.???22.Juli</td>
                <td className="col1"></td>

                <td className="col1">
                  Diplom Bildende Kunst, M.Ed. Ku??nstlerisches Lehramt mit
                  Bildender Kunst, M. F.A. K??rper, Theorie und Poetik des
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
                <td className="col1">15.???17.Juli</td>
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
                    Angaben gem???? ?? 5 TMG (Telemediengesetz) <br />
                    <br />
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="col1">Rechtlicher Sitz</td>
                  <td className="col1">
                    Staatliche Akademie der Bildenden K??nste Stuttgart
                    <br />
                    Am Wei??enhof 1<br />
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
                    <br />
                  </td>
                </tr>

                <tr>
                  <td className="col1">Konzeption und Gestaltung</td>
                  <td className="col1">
                    Andy Grammel
                    <br />
                    Jule H??gele
                    <br />
                    Jana Rzehak
                    <br />
                    Sonja Schwarz
                    <br />
                    <br />
                  </td>
                  <td className="col1">Technische Umsetzung</td>
                  <td className="col1">
                    Mark Julien Hahn <br />
                    <br />
                  </td>
                </tr>

                <tr>
                  <td className="col1">Projektkoordination</td>
                  <td className="col1">
                    Marion Butsch <br />
                    <br />
                  </td>
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
                    Die Staatliche Akademie der Bildenden K??nste Stuttgart ist
                    eine K??rperschaft des ??ffentlichen Rechts. Sie wird durch
                    die Rektorin Prof. Dr. Barbara Bader gesetzlich vertreten.
                    <br />
                    <br />
                  </td>
                  <td className="col1">
                    Aufsichtsbeh??rde
                    <br />
                  </td>
                  <td className="col1">
                    Ministerium f??r Wissenschaft, Forschung und Kunst
                    <br />
                    Baden-W??rttemberg Postfach 10 34 53 70029 Stuttgart
                    <br />
                    Deutschland
                    <br />
                    <br />
                  </td>
                </tr>

                <tr>
                  <td className="col1">Haftung f??r Inhalte</td>
                  <td className="col3">
                    Diese Website dient lediglich der Information. Ihr Inhalt
                    wurde mit gr????ter Sorgfalt zusammengestellt. Eine Haftung
                    oder Garantie f??r die Aktualit??t, Richtigkeit und
                    Vollst??ndigkeit der zur Verf??gung gestellten Informationen
                    und Daten ist jedoch ausgeschlossen.
                    <br />
                    <br />
                  </td>
                </tr>

                <tr>
                  <td className="col1">Haftung f??r Links</td>
                  <td className="col3">
                    Die Staatliche Akademie der Bildenden K??nste Stuttgart ist
                    als Inhaltsanbieter f??r die eigenen Inhalte, die sie zur
                    Nutzung bereith??lt, nach den allgemeinen Gesetzen
                    verantwortlich. Von diesen eigenen Inhalten sind
                    Querverweise (externe Links) auf die von anderen Anbietern
                    bereit gehaltenen Inhalte zu unterscheiden. Diese fremden
                    Inhalte stammen nicht von der Staatlichen Akademie der
                    Bildenden K??nste Stuttgart und spiegeln auch nicht die
                    Meinung der Staatlichen Akademie der Bildenden K??nste
                    Stuttgart wider, sondern dienen lediglich der Information.
                    Die Staatliche Akademie der Bildenden K??nste Stuttgart macht
                    sich diese Inhalte nicht zu eigen. Bei Bekanntwerden von
                    Rechtsverletzungen werden derartige Links umgehend entfernt.
                    Diese Erkl??rung gilt f??r alle auf unserer Website
                    angezeigten Links und f??r alle Inhalte der Seiten, zu denen
                    die bei uns angemeldeten Banner und Links f??hren.
                    <br />
                    <br />
                  </td>
                </tr>

                <tr>
                  <td className="col1">Urheberrecht</td>
                  <td className="col3">
                    Die Inhalte der Website unterliegen dem deutschen
                    Urheberrecht und sind urheberrechtlich gesch??tzt. Die
                    Vervielf??ltigung, Bearbeitung und Verbreitung von
                    Informationen oder Daten, insbesondere die Verwendung von
                    Texten, Textteilen oder Bildmaterial bedarf der
                    schriftlichen Zustimmung der Staatlichen Akademie der
                    Bildenden K??nste Stuttgart. Die Wiederver??ffentlichung oder
                    Weiterverbreitung von Inhalten dieser Website einschlie??lich
                    des sogenannten Framings und ??hnlicher Ma??nahmen ist somit
                    ohne ausdr??ckliche schriftliche Zustimmung der Staatlichen
                    Akademie der Bildenden K??nste Stuttgart nicht gestattet
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
