import { useState, useEffect, useRef, useContext } from "react";
import { Context } from "../App";
import "./mainCube.css";

import BackWall from "./back_wall";
import BottomWall from "./bottom_wall";
import FrontWall from "./front_wall";
import LeftWall from "./left_wall";
import RightWall from "./right_wall";
import UpperWall from "./upper_wall";

import Counter from "./counter";

import FrontMenu from "./menu/FrontMenu";
import BottomMenu from "./menu/BottomMenu";
import RightMenu from "./menu/RightMenu";
import LeftMenu from "./menu/LeftMenu";
import BackMenu from "./menu/BackMenu";
import UpperMenu from "./menu/UpperMenu";

const MAIN_ARRAY = [
  { id: 0, sign: "", hovered: false },
  { id: 1, sign: "", hovered: false },
  { id: 2, sign: "", hovered: false },
  { id: 3, sign: "", hovered: false },
  { id: 4, sign: "", hovered: false },
  { id: 5, sign: "", hovered: false },
  { id: 6, sign: "", hovered: false },
  { id: 7, sign: "", hovered: false },
  { id: 8, sign: "", hovered: false },
  { id: 9, sign: "", hovered: false },
  { id: 10, sign: "", hovered: false },
  { id: 11, sign: "", hovered: false },
  { id: 12, sign: "", hovered: false },
  { id: 13, sign: "", hovered: false },
  { id: 14, sign: "", hovered: false },
  { id: 15, sign: "", hovered: false },
  { id: 16, sign: "", hovered: false },
  { id: 17, sign: "", hovered: false },
  { id: 18, sign: "", hovered: false },
  { id: 19, sign: "", hovered: false },
  { id: 20, sign: "", hovered: false },
  { id: 21, sign: "", hovered: false },
  { id: 22, sign: "", hovered: false },
  { id: 23, sign: "", hovered: false },
  { id: 24, sign: "", hovered: false },
  { id: 25, sign: "", hovered: false },
];

export default function MainCube() {
  const [mainTab, setMainTab] = useState(MAIN_ARRAY);

  const [gameRules, setGameRules] = useContext(Context);
  const [userSign, setUserSign] = useState(0);
  const [xCount, setXCount] = useState(0);
  const [oCount, setOCount] = useState(0);
  const [position, setPosition] = useState({
    transform: `rotateX(15deg) rotateY(-45deg)`,
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
          return { ...x, sign: x.id === id ? "X" : x.sign };
        })
      );
    } else {
      setUserSign(userSign - 1);
      setMainTab(
        mainTab.map((x) => {
          return { ...x, sign: x.id === id ? "O" : x.sign };
        })
      );
    }
  }

  function hoverBox(id, shouldHover) {
    setMainTab((prevMainTab) =>
      mainTab.map((x) => {
        return { ...x, hovered: x.id === id ? shouldHover : false };
      })
    );
  }

  return (
    <div className="cubeContainer">
      <div
        className="returnButton"
        onClick={() => {
          setMainTab(MAIN_ARRAY);
          setGameRules((prev) => {
            return { ...prev, Play: false };
          });
        }}
      ></div>
      <div ref={divCube} className="cube" style={position}>
        <div className="cube_front">
          {gameRules.Play ? (
            <FrontWall
              hoverBox={hoverBox}
              mainTab={mainTab}
              clickBox={clickBox}
              userSign={userSign}
              validateWall={validateWall}
              setXCount={setXCount}
              setOCount={setOCount}
            />
          ) : (
            <FrontMenu hoverBox={hoverBox} mainTab={mainTab} />
          )}
        </div>
        <div className="cube_right">
          {gameRules.Play ? (
            <RightWall
              hoverBox={hoverBox}
              mainTab={mainTab}
              clickBox={clickBox}
              userSign={userSign}
              validateWall={validateWall}
              setXCount={setXCount}
              setOCount={setOCount}
            />
          ) : (
            <RightMenu hoverBox={hoverBox} mainTab={mainTab} />
          )}
        </div>
        <div className="cube_back">
          {gameRules.Play ? (
            <BackWall
              hoverBox={hoverBox}
              mainTab={mainTab}
              clickBox={clickBox}
              userSign={userSign}
              validateWall={validateWall}
              setXCount={setXCount}
              setOCount={setOCount}
            />
          ) : (
            <BackMenu hoverBox={hoverBox} mainTab={mainTab} />
          )}
        </div>
        <div className="cube_left">
          {gameRules.Play ? (
            <LeftWall
              hoverBox={hoverBox}
              mainTab={mainTab}
              clickBox={clickBox}
              userSign={userSign}
              validateWall={validateWall}
              setXCount={setXCount}
              setOCount={setOCount}
            />
          ) : (
            <LeftMenu hoverBox={hoverBox} mainTab={mainTab} />
          )}
        </div>
        <div className="cube_upper">
          {gameRules.Play ? (
            <UpperWall
              hoverBox={hoverBox}
              mainTab={mainTab}
              clickBox={clickBox}
              userSign={userSign}
              validateWall={validateWall}
              setXCount={setXCount}
              setOCount={setOCount}
            />
          ) : (
            <UpperMenu hoverBox={hoverBox} mainTab={mainTab} />
          )}
        </div>
        <div className="cube_bottom">
          {gameRules.Play ? (
            <BottomWall
              hoverBox={hoverBox}
              mainTab={mainTab}
              clickBox={clickBox}
              userSign={userSign}
              validateWall={validateWall}
              setXCount={setXCount}
              setOCount={setOCount}
            />
          ) : (
            <BottomMenu hoverBox={hoverBox} mainTab={mainTab} />
          )}
        </div>
      </div>
      {gameRules.Play ? (
        <Counter userSign={userSign} xCount={xCount} oCount={oCount} />
      ) : (
        ""
      )}
    </div>
  );
}
