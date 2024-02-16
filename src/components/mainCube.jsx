import "./mainCube.css";
import BackWall from "./back_wall";
import BottomWall from "./bottom_wall";
import FrontWall from "./front_wall";
import LeftWall from "./left_wall";
import RightWall from "./right_wall";
import UpperWall from "./upper_wall";
import { useState, useEffect, useRef } from "react";

export default function MainCube() {
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
  const [xCount, setXCount] = useState(0);
  const [oCount, setOCount] = useState(0);
  const [position, setPosition] = useState({
    transform: `rotateX(45deg) rotateY(-45deg)`,
  });

  const divCube = useRef(null);

  useEffect(() => {
    let drag = false;
    let x0 = null;
    let y0 = null;

    function getE(ev) {
      return ev.touches ? ev.touches[0] : ev;
    }

    function lock(ev) {
      let e = getE(ev);
      drag = true;
      x0 = e.clientX;
      y0 = e.clientY;
    }
    function rot(ev) {
      if (drag) {
        let e = getE(ev);
        let x = e.clientX;
        let y = e.clientY;
        let dx = x - x0;
        let dy = y - y0;
        let d = Math.hypot(dx, dy);
        if (d) {
          let i = +(-dy / d).toFixed(5);
          let j = +(dx / d).toFixed(5);
          let a = +(0.3 * d).toFixed(2);
          let c =
            `rotate3d(${i}, ${j}, ${0}, ${a}deg)` +
            getComputedStyle(divCube.current).transform.replace("none", "");
          setPosition({ transform: c });
          x0 = x;
          y0 = y;
        }
      }
    }
    function rel(ev) {
      if (drag) {
        x0 = null;
        y0 = null;
        drag = false;
      }
    }

    document.addEventListener("mousedown", lock, false);
    document.addEventListener("touchstart", lock, false);

    document.addEventListener("mousemove", rot, false);
    document.addEventListener("touchmove", rot, false);

    document.addEventListener("mouseup", rel, false);
    document.addEventListener("touchend", rel, false);
  });

  function validateWall(sign, mainTab, combinations) {
    return combinations.some((item) => {
      return item.every((itemIndex) => {
        return mainTab[itemIndex].sign === sign;
      });
    });
  }

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

  return (
    <div className="cubeContainer">
      <div ref={divCube} className="cube" style={position}>
        <div className="cube_front">
          <FrontWall
            mainTab={mainTab}
            clickBox={clickBox}
            userSign={userSign}
            validateWall={validateWall}
            setXCount={setXCount}
            setOCount={setOCount}
          />
        </div>
        <div className="cube_right">
          <RightWall
            mainTab={mainTab}
            clickBox={clickBox}
            userSign={userSign}
            validateWall={validateWall}
            setXCount={setXCount}
            setOCount={setOCount}
          />
        </div>
        <div className="cube_back">
          <BackWall
            mainTab={mainTab}
            clickBox={clickBox}
            userSign={userSign}
            validateWall={validateWall}
            setXCount={setXCount}
            setOCount={setOCount}
          />
        </div>
        <div className="cube_left">
          <LeftWall
            mainTab={mainTab}
            clickBox={clickBox}
            userSign={userSign}
            validateWall={validateWall}
            setXCount={setXCount}
            setOCount={setOCount}
          />
        </div>
        <div className="cube_upper">
          <UpperWall
            mainTab={mainTab}
            clickBox={clickBox}
            userSign={userSign}
            validateWall={validateWall}
            setXCount={setXCount}
            setOCount={setOCount}
          />
        </div>
        <div className="cube_bottom">
          <BottomWall
            mainTab={mainTab}
            clickBox={clickBox}
            userSign={userSign}
            validateWall={validateWall}
            setXCount={setXCount}
            setOCount={setOCount}
          />
        </div>
      </div>
      <div className="counterContainer">
        <p>X : {xCount}/6</p>
        <p>O : {oCount}/6</p>
      </div>
    </div>
  );
}
