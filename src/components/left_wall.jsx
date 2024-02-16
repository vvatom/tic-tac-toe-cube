import classNames from "classnames";
import "./left_wall.css";
import { useEffect, useState } from "react";

// 1  2  3
// 24 25 4
// 7  6  5

const winningCombinations = [
  [1, 24, 7],
  [2, 25, 6],
  [3, 4, 5],
  [1, 2, 3],
  [24, 25, 4],
  [7, 6, 5],
  [1, 25, 5],
  [7, 25, 3],
];

export default function LeftWall(props) {
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
    <div className="leftWallContainer">
      <div
        className={classNames("leftWallContainer__leftUpCorner", {
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
        className={classNames("leftWallContainer__middleUp", {
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
        className={classNames("leftWallContainer__rightUpCorner", {
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
        className={classNames("leftWallContainer__leftCenterCorner", {
          blueHover: userSign === 0 && mainTab[24].sign === "",
          blue_X: mainTab[24].sign === "X",
          redHover: userSign === 1 && mainTab[24].sign === "",
          red_O: mainTab[24].sign === "O",
          clickNone: mainTab[24].sign !== "",
        })}
        onClick={() => {
          clickBox(24);
        }}
      >
        <p>{mainTab[24].sign}</p>
      </div>
      <div
        className={classNames("leftWallContainer__middleCenterUp", {
          blueHover: userSign === 0 && mainTab[25].sign === "",
          blue_X: mainTab[25].sign === "X",
          redHover: userSign === 1 && mainTab[25].sign === "",
          red_O: mainTab[25].sign === "O",
          clickNone: mainTab[25].sign !== "",
        })}
        onClick={() => {
          clickBox(25);
        }}
      >
        <p>{mainTab[25].sign}</p>
      </div>
      <div
        className={classNames("leftWallContainer__rightCenterorner", {
          blueHover: userSign === 0 && mainTab[4].sign === "",
          blue_X: mainTab[4].sign === "X",
          redHover: userSign === 1 && mainTab[4].sign === "",
          red_O: mainTab[4].sign === "O",
          clickNone: mainTab[4].sign !== "",
        })}
        onClick={() => {
          clickBox(4);
        }}
      >
        <p>{mainTab[4].sign}</p>
      </div>

      <div
        className={classNames("leftWallContainer__leftDownCorner", {
          blueHover: userSign === 0 && mainTab[7].sign === "",
          blue_X: mainTab[7].sign === "X",
          redHover: userSign === 1 && mainTab[7].sign === "",
          red_O: mainTab[7].sign === "O",
          clickNone: mainTab[7].sign !== "",
        })}
        onClick={() => {
          clickBox(7);
        }}
      >
        <p>{mainTab[7].sign}</p>
      </div>
      <div
        className={classNames("leftWallContainer__middleDown", {
          blueHover: userSign === 0 && mainTab[6].sign === "",
          blue_X: mainTab[6].sign === "X",
          redHover: userSign === 1 && mainTab[6].sign === "",
          red_O: mainTab[6].sign === "O",
          clickNone: mainTab[6].sign !== "",
        })}
        onClick={() => {
          clickBox(6);
        }}
      >
        <p>{mainTab[6].sign}</p>
      </div>
      <div
        className={classNames("leftWallContainer__rightDownCorner", {
          blueHover: userSign === 0 && mainTab[5].sign === "",
          blue_X: mainTab[5].sign === "X",
          redHover: userSign === 1 && mainTab[5].sign === "",
          red_O: mainTab[5].sign === "O",
          clickNone: mainTab[5].sign !== "",
        })}
        onClick={() => {
          clickBox(5);
        }}
      >
        <p>{mainTab[5].sign}</p>
      </div>
    </div>
  );
}
