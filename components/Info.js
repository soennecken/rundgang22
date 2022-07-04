import React, { useEffect, useState } from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

import logo from "../public/images/logo_gif.gif";

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
                <td className="col2">18:00–23:00</td>
              </tr>
              <tr>
                <td className="col1">Samstag/Sonntag</td>
                <td className="col2">12:00–20:00</td>
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
                <td className="col2">18:00</td>

                <td className="col3">
                  Offizielle Eröffnung des Rundgangs durch Prof.in Dr. Barbara
                  Bader, Rektorin der ABK Stuttgart, mit anschließender
                  Verleihung der Akademie- Preise (gefördert durch die SV
                  SparkassenVersicherung) und des DAAD-Preises
                </td>
                <td className="col4">Campus</td>
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
                <td className="col2">23:00</td>

                <td className="col3">Musik und Lounge zum Rundgang</td>
                <td className="col4">Neubau 2, Erdgeschoss, Vortragssaal</td>
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
                <td className="col2">12:30</td>

                <td className="col3">
                  Die Freunde der Akademie Stuttgart e.V. stellen sich vor und
                  laden ein zur Matinee mit Verleihung des Erwin-Heinle-Preises,
                  des Kurt Weidemann-Preises sowie des Kunstpreises Förder-Koje
                  2022 mit anschließendem Stehempfang
                </td>
                <td className="col4">Neubau 2, Erdgeschoss, Vortragssaal</td>
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
                <td className="col2">13:00</td>

                <td className="col3">Konservierung und Restaurierung</td>
                <td className="col4">Treffpunkt:</td>
              </tr>
              <tr>
                <td className="col1"> </td>
                <td className="col2">14:00</td>

                <td className="col3">Kunst/Künstlerisches Lehramt</td>
                <td className="col4">Neubau 2, Erdgeschoss, Infostand</td>
              </tr>
              <tr>
                <td className="col1"> </td>
                <td className="col2">15:00</td>

                <td className="col3">Textildesign</td>
                <td className="col4"> </td>
              </tr>
              <tr>
                <td className="col1"> </td>
                <td className="col2">16:00</td>

                <td className="col3">Kommunikationsdesign</td>
                <td className="col4"> </td>
              </tr>
              <tr>
                <td className="col1"> </td>
                <td className="col2">17:00</td>

                <td className="col3">Industrial Design</td>
                <td className="col4"> </td>
              </tr>
              <tr>
                <td className="col1"> </td>
                <td className="col2">18:00</td>

                <td className="col3">Architektur</td>
                <td className="col4"> </td>
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
                <td className="col2"></td>

                <td className="col3">
                  Diplom Bildende Kunst, M.Ed. Künstlerisches Lehramt mit
                  Bildender Kunst, M. F.A. Körper, Theorie und Poetik des
                  Performativen (KTPP)
                </td>
                <td className="col4">
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
                <td className="col2"></td>
                <td className="col3">Architektur</td>
                <td className="col4">ABK Stuttgart/Neubau 1, Glaskasten</td>
              </tr>
              <tr>
                <td className="col1"></td>
                <td className="col2"></td>
                <td className="col3">Industrial Design</td>
                <td className="col4"> ABK Stuttgart/Neubau 2, Graben</td>
              </tr>
              <tr>
                <td className="col1"></td>
                <td className="col2"></td>
                <td className="col3">Kommunikationsdesign</td>
                <td className="col4"> ABK Stuttgart/Neubau 2, Graben</td>
              </tr>
              <tr>
                <td className="col1"></td>
                <td className="col2"></td>
                <td className="col3">Textildesign</td>
                <td className="col4"> ABK Stuttgart/Neubau 2, Graben</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default Info;
