import classNames from "classnames";
import "./right_wall.css";
import { useEffect, useState } from "react";

// 15 18 21
// 16 19 22
// 17 20 23

const winningCombinations = [
  [15, 16, 17],
  [18, 19, 20],
  [21, 22, 23],
  [15, 18, 21],
  [16, 19, 22],
  [17, 20, 23],
  [15, 19, 23],
  [17, 19, 21],
];

export default function RightWall(props) {
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
    <div className="rightWallContainer">
      <div
        className={classNames("rightWallContainer__leftUpCorner", {
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
      <div
        className={classNames("rightWallContainer__middleUp", {
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
        className={classNames("rightWallContainer__rightUpCorner", {
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
        className={classNames("rightWallContainer__leftCenterCorner", {
          blueHover: userSign === 0 && mainTab[16].sign === "",
          blue_X: mainTab[16].sign === "X",
          redHover: userSign === 1 && mainTab[16].sign === "",
          red_O: mainTab[16].sign === "O",
          clickNone: mainTab[16].sign !== "",
        })}
        onClick={() => {
          clickBox(16);
        }}
      >
        <p>{mainTab[16].sign}</p>
      </div>
      <div
        className={classNames("rightWallContainer__middleCenterUp", {
          blueHover: userSign === 0 && mainTab[19].sign === "",
          blue_X: mainTab[19].sign === "X",
          redHover: userSign === 1 && mainTab[19].sign === "",
          red_O: mainTab[19].sign === "O",
          clickNone: mainTab[19].sign !== "",
        })}
        onClick={() => {
          clickBox(19);
        }}
      >
        <p>{mainTab[19].sign}</p>
      </div>
      <div
        className={classNames("rightWallContainer__rightCenterorner", {
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
        className={classNames("rightWallContainer__leftDownCorner", {
          blueHover: userSign === 0 && mainTab[17].sign === "",
          blue_X: mainTab[17].sign === "X",
          redHover: userSign === 1 && mainTab[17].sign === "",
          red_O: mainTab[17].sign === "O",
          clickNone: mainTab[17].sign !== "",
        })}
        onClick={() => {
          clickBox(17);
        }}
      >
        <p>{mainTab[17].sign}</p>
      </div>
      <div
        className={classNames("rightWallContainer__middleDown", {
          blueHover: userSign === 0 && mainTab[20].sign === "",
          blue_X: mainTab[20].sign === "X",
          redHover: userSign === 1 && mainTab[20].sign === "",
          red_O: mainTab[20].sign === "O",
          clickNone: mainTab[20].sign !== "",
        })}
        onClick={() => {
          clickBox(20);
        }}
      >
        <p>{mainTab[20].sign}</p>
      </div>
      <div
        className={classNames("rightWallContainer__rightDownCorner", {
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
    </div>
  );
}
