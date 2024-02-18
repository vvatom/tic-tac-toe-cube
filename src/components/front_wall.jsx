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
  const {
    mainTab,
    clickBox,
    userSign,
    validateWall,
    setXCount,
    setOCount,
    hoverBox,
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
    <div className="frontWallContainer">
      <div
        className={classNames("frontWallContainer__leftUpCorner", {
          blueHover_front:
            userSign === 0 && mainTab[5].sign === "" && mainTab[5].hovered,
          blueNotHover_front:
            userSign === 0 && mainTab[5].sign === "" && !mainTab[5].hovered,
          blue_X_front: mainTab[5].sign === "X",
          redHover_front:
            userSign === 1 && mainTab[5].sign === "" && mainTab[5].hovered,
          redNotHover_front:
            userSign === 1 && mainTab[5].sign === "" && !mainTab[5].hovered,
          red_O_front: mainTab[5].sign === "O",
          clickNone_front: mainTab[5].sign !== "",
        })}
        onMouseEnter={() => hoverBox(5, true)}
        onMouseLeave={() => hoverBox(5, false)}
        onClick={() => {
          clickBox(5);
        }}
      >
        <p>{mainTab[5].sign}</p>
      </div>
      <div
        className={classNames("frontWallContainer__middleUp", {
          blueHover_front:
            userSign === 0 && mainTab[12].sign === "" && mainTab[12].hovered,
          blueNotHover_front:
            userSign === 0 && mainTab[12].sign === "" && !mainTab[12].hovered,
          blue_X_front: mainTab[12].sign === "X",
          redHover_front:
            userSign === 1 && mainTab[12].sign === "" && mainTab[12].hovered,
          redNotHover_front:
            userSign === 1 && mainTab[12].sign === "" && !mainTab[12].hovered,
          red_O_front: mainTab[12].sign === "O",
          clickNone_front: mainTab[12].sign !== "",
        })}
        onMouseEnter={() => hoverBox(12, true)}
        onMouseLeave={() => hoverBox(12, false)}
        onClick={() => {
          clickBox(12);
        }}
      >
        <p>{mainTab[12].sign}</p>
      </div>
      <div
        className={classNames("frontWallContainer__rightUpCorner", {
          blueHover_front:
            userSign === 0 && mainTab[17].sign === "" && mainTab[17].hovered,
          blueNotHover_front:
            userSign === 0 && mainTab[17].sign === "" && !mainTab[17].hovered,
          blue_X_front: mainTab[17].sign === "X",
          redHover_front:
            userSign === 1 && mainTab[17].sign === "" && mainTab[17].hovered,
          redNotHover_front:
            userSign === 1 && mainTab[17].sign === "" && !mainTab[17].hovered,
          red_O_front: mainTab[17].sign === "O",
          clickNone_front: mainTab[17].sign !== "",
        })}
        onMouseEnter={() => hoverBox(17, true)}
        onMouseLeave={() => hoverBox(17, false)}
        onClick={() => {
          clickBox(17);
        }}
      >
        <p>{mainTab[17].sign}</p>
      </div>

      <div
        className={classNames("frontWallContainer__leftCenterCorner", {
          blueHover_front:
            userSign === 0 && mainTab[6].sign === "" && mainTab[6].hovered,
          blueNotHover_front:
            userSign === 0 && mainTab[6].sign === "" && !mainTab[6].hovered,
          blue_X_front: mainTab[6].sign === "X",
          redHover_front:
            userSign === 1 && mainTab[6].sign === "" && mainTab[6].hovered,
          redNotHover_front:
            userSign === 1 && mainTab[6].sign === "" && !mainTab[6].hovered,
          red_O_front: mainTab[6].sign === "O",
          clickNone_front: mainTab[6].sign !== "",
        })}
        onMouseEnter={() => hoverBox(6, true)}
        onMouseLeave={() => hoverBox(6, false)}
        onClick={() => {
          clickBox(6);
        }}
      >
        <p>{mainTab[6].sign}</p>
      </div>
      <div
        className={classNames("frontWallContainer__middleCenterUp", {
          blueHover_front:
            userSign === 0 && mainTab[13].sign === "" && mainTab[13].hovered,
          blueNotHover_front:
            userSign === 0 && mainTab[13].sign === "" && !mainTab[13].hovered,
          blue_X_front: mainTab[13].sign === "X",
          redHover_front:
            userSign === 1 && mainTab[13].sign === "" && mainTab[13].hovered,
          redNotHover_front:
            userSign === 1 && mainTab[13].sign === "" && !mainTab[13].hovered,
          red_O_front: mainTab[13].sign === "O",
          clickNone_front: mainTab[13].sign !== "",
        })}
        onMouseEnter={() => hoverBox(13, true)}
        onMouseLeave={() => hoverBox(13, false)}
        onClick={() => {
          clickBox(13);
        }}
      >
        <p>{mainTab[13].sign}</p>
      </div>
      <div
        className={classNames("frontWallContainer__rightCenterorner", {
          blueHover_front:
            userSign === 0 && mainTab[20].sign === "" && mainTab[20].hovered,
          blueNotHover_front:
            userSign === 0 && mainTab[20].sign === "" && !mainTab[20].hovered,
          blue_X_front: mainTab[20].sign === "X",
          redHover_front:
            userSign === 1 && mainTab[20].sign === "" && mainTab[20].hovered,
          redNotHover_front:
            userSign === 1 && mainTab[20].sign === "" && !mainTab[20].hovered,
          red_O_front: mainTab[20].sign === "O",
          clickNone_front: mainTab[20].sign !== "",
        })}
        onMouseEnter={() => hoverBox(20, true)}
        onMouseLeave={() => hoverBox(20, false)}
        onClick={() => {
          clickBox(20);
        }}
      >
        <p>{mainTab[20].sign}</p>
      </div>

      <div
        className={classNames("frontWallContainer__leftDownCorner", {
          blueHover_front:
            userSign === 0 && mainTab[7].sign === "" && mainTab[7].hovered,
          blueNotHover_front:
            userSign === 0 && mainTab[7].sign === "" && !mainTab[7].hovered,
          blue_X_front: mainTab[7].sign === "X",
          redHover_front:
            userSign === 1 && mainTab[7].sign === "" && mainTab[7].hovered,
          redNotHover_front:
            userSign === 1 && mainTab[7].sign === "" && !mainTab[7].hovered,
          red_O_front: mainTab[7].sign === "O",
          clickNone_front: mainTab[7].sign !== "",
        })}
        onMouseEnter={() => hoverBox(7, true)}
        onMouseLeave={() => hoverBox(7, false)}
        onClick={() => {
          clickBox(7);
        }}
      >
        <p>{mainTab[7].sign}</p>
      </div>
      <div
        className={classNames("frontWallContainer__middleDown", {
          blueHover_front:
            userSign === 0 && mainTab[14].sign === "" && mainTab[14].hovered,
          blueNotHover_front:
            userSign === 0 && mainTab[14].sign === "" && !mainTab[14].hovered,
          blue_X_front: mainTab[14].sign === "X",
          redHover_front:
            userSign === 1 && mainTab[14].sign === "" && mainTab[14].hovered,
          redNotHover_front:
            userSign === 1 && mainTab[14].sign === "" && !mainTab[14].hovered,
          red_O_front: mainTab[14].sign === "O",
          clickNone_front: mainTab[14].sign !== "",
        })}
        onMouseEnter={() => hoverBox(14, true)}
        onMouseLeave={() => hoverBox(14, false)}
        onClick={() => {
          clickBox(14);
        }}
      >
        <p>{mainTab[14].sign}</p>
      </div>
      <div
        className={classNames("frontWallContainer__rightDownCorner", {
          blueHover_front:
            userSign === 0 && mainTab[23].sign === "" && mainTab[23].hovered,
          blueNotHover_front:
            userSign === 0 && mainTab[23].sign === "" && !mainTab[23].hovered,
          blue_X_front: mainTab[23].sign === "X",
          redHover_front:
            userSign === 1 && mainTab[23].sign === "" && mainTab[23].hovered,
          redNotHover_front:
            userSign === 1 && mainTab[23].sign === "" && !mainTab[23].hovered,
          red_O_front: mainTab[23].sign === "O",
          clickNone_front: mainTab[23].sign !== "",
        })}
        onMouseEnter={() => hoverBox(23, true)}
        onMouseLeave={() => hoverBox(23, false)}
        onClick={() => {
          clickBox(23);
        }}
      >
        <p>{mainTab[23].sign}</p>
      </div>
    </div>
  );
}
