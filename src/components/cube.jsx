import BackWall from "./back_wall";
import BottomWall from "./bottom_wall";
import "./cube.css";
import FrontWall from "./front_wall";
import LeftWall from "./left_wall";
import RightWall from "./right_wall";
import UpperWall from "./upper_wall";
import { useState, useEffect } from "react";

export default function Cube() {
  const [mainTab, setMainTab] = useState([
    { id: 0, sign: "", color: "" },
    { id: 1, sign: "", color: "" },
    { id: 2, sign: "", color: "" },
    { id: 3, sign: "", color: "" },
    { id: 4, sign: "", color: "" },
    { id: 5, sign: "", color: "" },
    { id: 6, sign: "", color: "" },
    { id: 7, sign: "", color: "" },
    { id: 8, sign: "", color: "" },
    { id: 9, sign: "", color: "" },
    { id: 10, sign: "", color: "" },
    { id: 11, sign: "", color: "" },
    { id: 12, sign: "", color: "" },
    { id: 13, sign: "", color: "" },
    { id: 14, sign: "", color: "" },
    { id: 15, sign: "", color: "" },
    { id: 16, sign: "", color: "" },
    { id: 17, sign: "", color: "" },
    { id: 18, sign: "", color: "" },
    { id: 19, sign: "", color: "" },
    { id: 20, sign: "", color: "" },
    { id: 21, sign: "", color: "" },
    { id: 22, sign: "", color: "" },
    { id: 23, sign: "", color: "" },
    { id: 24, sign: "", color: "" },
    { id: 25, sign: "", color: "" },
  ]);

  const [userSign, setUserSign] = useState(0);

  function clickBox(id) {
    if (userSign === 0) {
      setUserSign(userSign + 1);
      setMainTab(
        mainTab.map((x) => {
          if (x.id === id) {
            x.sign = "X";
          }
          return x;
        })
      );
    } else {
      setUserSign(userSign - 1);
      setMainTab(
        mainTab.map((x) => {
          if (x.id === id) {
            x.sign = "O";
          }
          return x;
        })
      );
    }
  }

  useEffect(() => {}, []);

  return (
    <div className="cubeContainer">
      <BackWall mainTab={mainTab} clickBox={clickBox} userSign={userSign} />
      <div className="cubeContainer__cross">
        <LeftWall mainTab={mainTab} clickBox={clickBox} userSign={userSign} />
        <UpperWall mainTab={mainTab} clickBox={clickBox} userSign={userSign} />
        <RightWall mainTab={mainTab} clickBox={clickBox} userSign={userSign} />
      </div>
      <FrontWall mainTab={mainTab} clickBox={clickBox} userSign={userSign} />
      <BottomWall mainTab={mainTab} clickBox={clickBox} userSign={userSign} />
    </div>
  );
}
