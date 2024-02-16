import classNames from "classnames";
import "./back_wall.css";
import { useEffect, useState } from "react";

// 1  8  21
// 2  9  18
// 3  10 15

const winningCombinations = [
  [1, 2, 3],
  [8, 9, 10],
  [21, 18, 15],
  [1, 8, 21],
  [2, 9, 18],
  [3, 10, 15],
  [1, 9, 15],
  [3, 9, 21],
];

export default function BackWall(props) {
  const {
    mainTab,
    clickBox,
    userSign,
    validateWall,
    setXCount,
    setOCount,
    rostateState,
  } = props;

  const [isWin, setIsWin] = useState(true);

  useEffect(() => {
    if (isWin) {
      const winningResultX = validateWall("X", mainTab, winningCombinations);
      if (winningResultX) {
        setXCount((prevCount) => prevCount + 1);
        setIsWin(false);
      }
      const winningResultO = validateWall("O", mainTab, winningCombinations);
      if (winningResultO) {
        setOCount((prevCount) => prevCount + 1);
        setIsWin(false);
      }
    }
  }, [mainTab, isWin, setOCount, setXCount, validateWall]);
  return (
    <div className="backWallContainer">
      <div
        className={classNames("backWallContainer__leftUpCorner", {
          blueHover: userSign === 0 && mainTab[1].sign === "",
          blue_X: mainTab[1].sign === "X",
          redHover: userSign === 1 && mainTab[1].sign === "",
          red_O: mainTab[1].sign === "O",
          clickNone: mainTab[1].sign !== "",
        })}
        onClick={() => {
          clickBox(1);
        }}
      >
        <p>{mainTab[1].sign}</p>
      </div>
      <div
        className={classNames("backWallContainer__middleUp", {
          blueHover: userSign === 0 && mainTab[8].sign === "",
          blue_X: mainTab[8].sign === "X",
          redHover: userSign === 1 && mainTab[8].sign === "",
          red_O: mainTab[8].sign === "O",
          clickNone: mainTab[8].sign !== "",
        })}
        onClick={() => {
          clickBox(8);
        }}
      >
        <p>{mainTab[8].sign}</p>
      </div>
      <div
        className={classNames("backWallContainer__rightUpCorner", {
          blueHover: userSign === 0 && mainTab[21].sign === "",
          blue_X: mainTab[21].sign === "X",
          redHover: userSign === 1 && mainTab[21].sign === "",
          red_O: mainTab[21].sign === "O",
          clickNone: mainTab[21].sign !== "",
        })}
        onClick={() => {
          clickBox(21);
        }}
      >
        <p>{mainTab[21].sign}</p>
      </div>

      <div
        className={classNames("backWallContainer__leftCenterCorner", {
          blueHover: userSign === 0 && mainTab[2].sign === "",
          blue_X: mainTab[2].sign === "X",
          redHover: userSign === 1 && mainTab[2].sign === "",
          red_O: mainTab[2].sign === "O",
          clickNone: mainTab[2].sign !== "",
        })}
        onClick={() => {
          clickBox(2);
        }}
      >
        <p>{mainTab[2].sign}</p>
      </div>
      <div
        className={classNames("backWallContainer__middleCenterUp", {
          blueHover: userSign === 0 && mainTab[9].sign === "",
          blue_X: mainTab[9].sign === "X",
          redHover: userSign === 1 && mainTab[9].sign === "",
          red_O: mainTab[9].sign === "O",
          clickNone: mainTab[9].sign !== "",
        })}
        onClick={() => {
          clickBox(9);
        }}
      >
        <p>{mainTab[9].sign}</p>
      </div>
      <div
        className={classNames("backWallContainer__rightCenterorner", {
          blueHover: userSign === 0 && mainTab[18].sign === "",
          blue_X: mainTab[18].sign === "X",
          redHover: userSign === 1 && mainTab[18].sign === "",
          red_O: mainTab[18].sign === "O",
          clickNone: mainTab[18].sign !== "",
        })}
        onClick={() => {
          clickBox(18);
        }}
      >
        <p>{mainTab[18].sign}</p>
      </div>

      <div
        className={classNames("backWallContainer__leftDownCorner", {
          blueHover: userSign === 0 && mainTab[3].sign === "",
          blue_X: mainTab[3].sign === "X",
          redHover: userSign === 1 && mainTab[3].sign === "",
          red_O: mainTab[3].sign === "O",
          clickNone: mainTab[3].sign !== "",
        })}
        onClick={() => {
          clickBox(3);
        }}
      >
        <p>{mainTab[3].sign}</p>
      </div>
      <div
        className={classNames("backWallContainer__middleDown", {
          blueHover: userSign === 0 && mainTab[10].sign === "",
          blue_X: mainTab[10].sign === "X",
          redHover: userSign === 1 && mainTab[10].sign === "",
          red_O: mainTab[10].sign === "O",
          clickNone: mainTab[10].sign !== "",
        })}
        onClick={() => {
          clickBox(10);
        }}
      >
        <p>{mainTab[10].sign}</p>
      </div>
      <div
        className={classNames("backWallContainer__rightDownCorner", {
          blueHover: userSign === 0 && mainTab[15].sign === "",
          blue_X: mainTab[15].sign === "X",
          redHover: userSign === 1 && mainTab[15].sign === "",
          red_O: mainTab[15].sign === "O",
          clickNone: mainTab[15].sign !== "",
        })}
        onClick={() => {
          clickBox(15);
        }}
      >
        <p>{mainTab[15].sign}</p>
      </div>
    </div>
  );
}
