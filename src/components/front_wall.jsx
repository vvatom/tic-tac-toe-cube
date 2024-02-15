import classNames from "classnames";
import "./front_wall.css";
import { useEffect, useState } from "react";

// 5  12  17
// 6  13  20
// 7  14  23

const winningCombinations = [
  [5, 6, 7],
  [12, 13, 14],
  [17, 20, 23],
  [5, 12, 17],
  [6, 13, 20],
  [7, 14, 23],
  [5, 13, 23],
  [7, 13, 17],
];

export default function FrontWall(props) {
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
  }, [mainTab]);
  return (
    <div className="frontWallContainer">
      <div
        className={classNames("frontWallContainer__leftUpCorner", {
          blueHover: userSign === 0 && mainTab[5].sign === "",
          blue_X: mainTab[5].sign === "X",
          redHover: userSign === 1 && mainTab[5].sign === "",
          red_O: mainTab[5].sign === "O",
        })}
        onClick={() => {
          clickBox(5);
        }}
      >
        <p>{mainTab[5].sign}</p>
      </div>
      <div
        className={classNames("frontWallContainer__middleUp", {
          blueHover: userSign === 0 && mainTab[12].sign === "",
          blue_X: mainTab[12].sign === "X",
          redHover: userSign === 1 && mainTab[12].sign === "",
          red_O: mainTab[12].sign === "O",
        })}
        onClick={() => {
          clickBox(12);
        }}
      >
        <p>{mainTab[12].sign}</p>
      </div>
      <div
        className={classNames("frontWallContainer__rightUpCorner", {
          blueHover: userSign === 0 && mainTab[17].sign === "",
          blue_X: mainTab[17].sign === "X",
          redHover: userSign === 1 && mainTab[17].sign === "",
          red_O: mainTab[17].sign === "O",
        })}
        onClick={() => {
          clickBox(17);
        }}
      >
        <p>{mainTab[17].sign}</p>
      </div>

      <div
        className={classNames("frontWallContainer__leftCenterCorner", {
          blueHover: userSign === 0 && mainTab[6].sign === "",
          blue_X: mainTab[6].sign === "X",
          redHover: userSign === 1 && mainTab[6].sign === "",
          red_O: mainTab[6].sign === "O",
        })}
        onClick={() => {
          clickBox(6);
        }}
      >
        <p>{mainTab[6].sign}</p>
      </div>
      <div
        className={classNames("frontWallContainer__leftCenterCorner", {
          blueHover: userSign === 0 && mainTab[13].sign === "",
          blue_X: mainTab[13].sign === "X",
          redHover: userSign === 1 && mainTab[13].sign === "",
          red_O: mainTab[13].sign === "O",
        })}
        onClick={() => {
          clickBox(13);
        }}
      >
        <p>{mainTab[13].sign}</p>
      </div>
      <div
        className={classNames("frontWallContainer__rightCenterorner", {
          blueHover: userSign === 0 && mainTab[20].sign === "",
          blue_X: mainTab[20].sign === "X",
          redHover: userSign === 1 && mainTab[20].sign === "",
          red_O: mainTab[20].sign === "O",
        })}
        onClick={() => {
          clickBox(20);
        }}
      >
        <p>{mainTab[20].sign}</p>
      </div>

      <div
        className={classNames("frontWallContainer__leftDownCorner", {
          blueHover: userSign === 0 && mainTab[7].sign === "",
          blue_X: mainTab[7].sign === "X",
          redHover: userSign === 1 && mainTab[7].sign === "",
          red_O: mainTab[7].sign === "O",
        })}
        onClick={() => {
          clickBox(7);
        }}
      >
        <p>{mainTab[7].sign}</p>
      </div>
      <div
        className={classNames("frontWallContainer__middleDown", {
          blueHover: userSign === 0 && mainTab[14].sign === "",
          blue_X: mainTab[14].sign === "X",
          redHover: userSign === 1 && mainTab[14].sign === "",
          red_O: mainTab[14].sign === "O",
        })}
        onClick={() => {
          clickBox(14);
        }}
      >
        <p>{mainTab[14].sign}</p>
      </div>
      <div
        className={classNames("frontWallContainer__rightDownCorner", {
          blueHover: userSign === 0 && mainTab[23].sign === "",
          blue_X: mainTab[23].sign === "X",
          redHover: userSign === 1 && mainTab[23].sign === "",
          red_O: mainTab[23].sign === "O",
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
