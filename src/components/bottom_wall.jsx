import classNames from "classnames";
import "./bottom_wall.css";
import { useEffect, useState } from "react";

// 7  14 23
// 24 0  22
// 1  8  21

const winningCombinations = [
  [7, 24, 1],
  [14, 0, 8],
  [23, 22, 21],
  [7, 14, 23],
  [24, 0, 22],
  [1, 8, 21],
  [7, 0, 21],
  [1, 0, 23],
];

export default function BottomWall(props) {
  const { mainTab, clickBox, userSign, validateWall, setXCount, setOCount } =
    props;

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
    <div className="bottomWallContainer">
      <div
        className={classNames("bottomWallContainer__leftUpCorner", {
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
        className={classNames("bottomWallContainer__middleUp", {
          blueHover: userSign === 0 && mainTab[14].sign === "",
          blue_X: mainTab[14].sign === "X",
          redHover: userSign === 1 && mainTab[14].sign === "",
          red_O: mainTab[14].sign === "O",
          clickNone: mainTab[14].sign !== "",
        })}
        onClick={() => {
          clickBox(14);
        }}
      >
        <p>{mainTab[14].sign}</p>
      </div>
      <div
        className={classNames("bottomWallContainer__rightUpCorner", {
          blueHover: userSign === 0 && mainTab[23].sign === "",
          blue_X: mainTab[23].sign === "X",
          redHover: userSign === 1 && mainTab[23].sign === "",
          red_O: mainTab[23].sign === "O",
          clickNone: mainTab[23].sign !== "",
        })}
        onClick={() => {
          clickBox(23);
        }}
      >
        <p>{mainTab[23].sign}</p>
      </div>

      <div
        className={classNames("bottomWallContainer__leftCenterCorner", {
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
        className={classNames("bottomWallContainer__middleCenterUp", {
          blueHover: userSign === 0 && mainTab[0].sign === "",
          blue_X: mainTab[0].sign === "X",
          redHover: userSign === 1 && mainTab[0].sign === "",
          red_O: mainTab[0].sign === "O",
          clickNone: mainTab[0].sign !== "",
        })}
        onClick={() => {
          clickBox(0);
        }}
      >
        <p>{mainTab[0].sign}</p>
      </div>
      <div
        className={classNames("bottomWallContainer__rightCenterorner", {
          blueHover: userSign === 0 && mainTab[22].sign === "",
          blue_X: mainTab[22].sign === "X",
          redHover: userSign === 1 && mainTab[22].sign === "",
          red_O: mainTab[22].sign === "O",
          clickNone: mainTab[22].sign !== "",
        })}
        onClick={() => {
          clickBox(22);
        }}
      >
        <p>{mainTab[22].sign}</p>
      </div>

      <div
        className={classNames("bottomWallContainer__leftDownCorner", {
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
        className={classNames("bottomWallContainer__middleDown", {
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
        className={classNames("bottomWallContainer__rightDownCorner", {
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
    </div>
  );
}
