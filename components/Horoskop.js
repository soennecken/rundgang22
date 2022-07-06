import React, { useState, useEffect, useRef } from "react";

const Horoskop = (props) => {
  const [zodiac, setZodiac] = useState({});
  const [sign, setSign] = useState("");
  const [running, setRunning] = useState(false);
  const [style, setStyle] = useState("");

  const updateSign = () => {
    props.zodiac === "cancer" ? setSign("") : "";
    props.zodiac === "leo" ? setSign("") : "";
    props.zodiac === "virgo" ? setSign("") : "";
    props.zodiac === "libra" ? setSign("") : "";
    props.zodiac === "scorpio" ? setSign("") : "";
    props.zodiac === "sagittarius" ? setSign("") : "";
    props.zodiac === "capricorn" ? setSign("") : "";
    props.zodiac === "aquarius" ? setSign("") : "";
    props.zodiac === "pisces" ? setSign("") : "";
    props.zodiac === "aries" ? setSign("") : "";
    props.zodiac === "taurus" ? setSign("") : "";
    props.zodiac === "gemini" ? setSign("") : "";
  };

  const options = {
    method: "POST",
    headers: {
      "X-RapidAPI-Key": "ba324c6e88msh483cded8f7c8411p15adedjsn1d6f4b0adb56",
      "X-RapidAPI-Host": "sameer-kumar-aztro-v1.p.rapidapi.com",
    },
  };

  useEffect(  () => {
    updateSign();

    fetch(
      `https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=${props.zodiac}&day=today`,
      options
    )
      .then((response) => response.json())
      .then((response) => setZodiac(response))
      .catch((err) => console.error(err));

      setRunning(true)

  }, []);

  const style01 = {
    transform: `translateY(-${props.height}px)`,
  };

  const none = {};


  return (
    <div className="horoskopOuter" style={running ? style01 : none}>
      <div className="zodiacWrapper" >
        <div>{zodiac.current_date}</div>
        <div className="zodiacHeader">
          <div className="zodiacSign">{sign}</div>
          <h1>{props.zodiac}</h1>
          {zodiac.date_range}
        </div>
        <p>{zodiac.description}</p>
        <table>
          <tbody>
            <tr>
              <td>
                <p>Color</p>
              </td>
              <td>
                <p>{zodiac.color}</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>Compatibility</p>
              </td>
              <td>
                <p>{zodiac.compatibility}</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>Lucky Number</p>
              </td>
              <td>
                <p>{zodiac.lucky_number}</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>Lucky Time</p>
              </td>
              <td>
                <p>{zodiac.lucky_time}</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>Mood</p>
              </td>
              <td>
                <p>{zodiac.mood}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <hr />
    </div>
  );
};

export default Horoskop;
