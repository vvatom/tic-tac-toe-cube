import classNames from "classnames";
import "./upper_wall.css";
import { useEffect, useState } from "react";

// 3  10 15
// 4  11 16
// 5  12 17

const winningCombinations = [
  [3, 4, 5],
  [10, 11, 12],
  [15, 16, 17],
  [3, 10, 15],
  [4, 11, 16],
  [5, 12, 17],
  [3, 11, 17],
  [5, 11, 15],
];

const wall = [3, 4, 5, 10, 11, 12, 15, 16, 17];

export default function UpperWall(props) {
  const {
    mainTab,
    clickBox,
    userSign,
    validateWall,
    setXCount,
    setOCount,
    hoverBox,
    setWallEndGame,
    wallEndGame,
    fullWall,
  } = props;

  useEffect(() => {
    if (!wallEndGame[0].end) {
      const winningResultX = validateWall("X", mainTab, winningCombinations);
      if (winningResultX) {
        setXCount((prevCount) => prevCount + 1);
        setWallEndGame((prev) => {
          return prev.map((item) => {
            if (item.name === "UpperWall") {
              return { ...item, end: true };
            }
            return item;
          });
        });
      }
      const winningResultO = validateWall("O", mainTab, winningCombinations);
      if (winningResultO) {
        setOCount((prevCount) => prevCount + 1);
        setWallEndGame((prev) => {
          return prev.map((item) => {
            if (item.name === "UpperWall") {
              return { ...item, end: true };
            }
            return item;
          });
        });
      }
      if (fullWall("O", "X", mainTab, wall)) {
        setWallEndGame((prev) => {
          return prev.map((item) => {
            if (item.name === "UpperWall") {
              return { ...item, end: true };
            }
            return item;
          });
        });
      }
    }
  }, [
    wallEndGame,
    mainTab,
    wallEndGame.UpperWall,
    setOCount,
    setXCount,
    validateWall,
    setWallEndGame,
    fullWall,
  ]);

  return (
    <div className="upperWallContainer">
      <div
        className={classNames("upperWallContainer__leftUpCorner", {
          blueHover_upper:
            userSign === 0 && mainTab[3].sign === "" && mainTab[3].hovered,
          blueNotHover_upper:
            userSign === 0 && mainTab[3].sign === "" && !mainTab[3].hovered,
          blue_X_upper: mainTab[3].sign === "X",
          redHover_upper:
            userSign === 1 && mainTab[3].sign === "" && mainTab[3].hovered,
          redNotHover_upper:
            userSign === 1 && mainTab[3].sign === "" && !mainTab[3].hovered,
          red_O_upper: mainTab[3].sign === "O",
          clickNone_upper: mainTab[3].sign !== "" || wallEndGame[0].end,
        })}
        onMouseEnter={() => hoverBox(3, true)}
        onMouseLeave={() => hoverBox(3, false)}
        onClick={() => {
          clickBox(3);
        }}
      >
        <p>{mainTab[3].sign}</p>
      </div>
      <div
        className={classNames("upperWallContainer__middleUp", {
          blueHover_upper:
            userSign === 0 && mainTab[10].sign === "" && mainTab[10].hovered,
          blueNotHover_upper:
            userSign === 0 && mainTab[10].sign === "" && !mainTab[10].hovered,
          blue_X_upper: mainTab[10].sign === "X",
          redHover_upper:
            userSign === 1 && mainTab[10].sign === "" && mainTab[10].hovered,
          redNotHover_upper:
            userSign === 1 && mainTab[10].sign === "" && !mainTab[10].hovered,
          red_O_upper: mainTab[10].sign === "O",
          clickNone_upper: mainTab[10].sign !== "" || wallEndGame[0].end,
        })}
        onMouseEnter={() => hoverBox(10, true)}
        onMouseLeave={() => hoverBox(10, false)}
        onClick={() => {
          clickBox(10);
        }}
      >
        <p>{mainTab[10].sign}</p>
      </div>
      <div
        className={classNames("upperWallContainer__rightUpCorner", {
          blueHover_upper:
            userSign === 0 && mainTab[15].sign === "" && mainTab[15].hovered,
          blueNotHover_upper:
            userSign === 0 && mainTab[15].sign === "" && !mainTab[15].hovered,
          blue_X_upper: mainTab[15].sign === "X",
          redHover_upper:
            userSign === 1 && mainTab[15].sign === "" && mainTab[15].hovered,
          redNotHover_upper:
            userSign === 1 && mainTab[15].sign === "" && !mainTab[15].hovered,
          red_O_upper: mainTab[15].sign === "O",
          clickNone_upper: mainTab[15].sign !== "" || wallEndGame[0].end,
        })}
        onMouseEnter={() => hoverBox(15, true)}
        onMouseLeave={() => hoverBox(15, false)}
        onClick={() => {
          clickBox(15);
        }}
      >
        <p>{mainTab[15].sign}</p>
      </div>

      <div
        className={classNames("upperWallContainer__leftCenterCorner", {
          blueHover_upper:
            userSign === 0 && mainTab[4].sign === "" && mainTab[4].hovered,
          blueNotHover_upper:
            userSign === 0 && mainTab[4].sign === "" && !mainTab[4].hovered,
          blue_X_upper: mainTab[4].sign === "X",
          redHover_upper:
            userSign === 1 && mainTab[4].sign === "" && mainTab[4].hovered,
          redNotHover_upper:
            userSign === 1 && mainTab[4].sign === "" && !mainTab[4].hovered,
          red_O_upper: mainTab[4].sign === "O",
          clickNone_upper: mainTab[4].sign !== "" || wallEndGame[0].end,
        })}
        onMouseEnter={() => hoverBox(4, true)}
        onMouseLeave={() => hoverBox(4, false)}
        onClick={() => {
          clickBox(4);
        }}
      >
        <p>{mainTab[4].sign}</p>
      </div>
      <div
        className={classNames("upperWallContainer__middleCenterUp", {
          blueHover_upper:
            userSign === 0 && mainTab[11].sign === "" && mainTab[11].hovered,
          blueNotHover_upper:
            userSign === 0 && mainTab[11].sign === "" && !mainTab[11].hovered,
          blue_X_upper: mainTab[11].sign === "X",
          redHover_upper:
            userSign === 1 && mainTab[11].sign === "" && mainTab[11].hovered,
          redNotHover_upper:
            userSign === 1 && mainTab[11].sign === "" && !mainTab[11].hovered,
          red_O_upper: mainTab[11].sign === "O",
          clickNone_upper: mainTab[11].sign !== "" || wallEndGame[0].end,
        })}
        onMouseEnter={() => hoverBox(11, true)}
        onMouseLeave={() => hoverBox(11, false)}
        onClick={() => {
          clickBox(11);
        }}
      >
        <p>{mainTab[11].sign}</p>
      </div>
      <div
        className={classNames("upperWallContainer__rightCenterorner", {
          blueHover_upper:
            userSign === 0 && mainTab[16].sign === "" && mainTab[16].hovered,
          blueNotHover_upper:
            userSign === 0 && mainTab[16].sign === "" && !mainTab[16].hovered,
          blue_X_upper: mainTab[16].sign === "X",
          redHover_upper:
            userSign === 1 && mainTab[16].sign === "" && mainTab[16].hovered,
          redNotHover_upper:
            userSign === 1 && mainTab[16].sign === "" && !mainTab[16].hovered,
          red_O_upper: mainTab[16].sign === "O",
          clickNone_upper: mainTab[16].sign !== "" || wallEndGame[0].end,
        })}
        onMouseEnter={() => hoverBox(16, true)}
        onMouseLeave={() => hoverBox(16, false)}
        onClick={() => {
          clickBox(16);
        }}
      >
        <p>{mainTab[16].sign}</p>
      </div>

      <div
        className={classNames("upperWallContainer__leftDownCorner", {
          blueHover_upper:
            userSign === 0 && mainTab[5].sign === "" && mainTab[5].hovered,
          blueNotHover_upper:
            userSign === 0 && mainTab[5].sign === "" && !mainTab[5].hovered,
          blue_X_upper: mainTab[5].sign === "X",
          redHover_upper:
            userSign === 1 && mainTab[5].sign === "" && mainTab[5].hovered,
          redNotHover_upper:
            userSign === 1 && mainTab[5].sign === "" && !mainTab[5].hovered,
          red_O_upper: mainTab[5].sign === "O",
          clickNone_upper: mainTab[5].sign !== "" || wallEndGame[0].end,
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
        className={classNames("upperWallContainer__middleDown", {
          blueHover_upper:
            userSign === 0 && mainTab[12].sign === "" && mainTab[12].hovered,
          blueNotHover_upper:
            userSign === 0 && mainTab[12].sign === "" && !mainTab[12].hovered,
          blue_X_upper: mainTab[12].sign === "X",
          redHover_upper:
            userSign === 1 && mainTab[12].sign === "" && mainTab[12].hovered,
          redNotHover_upper:
            userSign === 1 && mainTab[12].sign === "" && !mainTab[12].hovered,
          red_O_upper: mainTab[12].sign === "O",
          clickNone_upper: mainTab[12].sign !== "" || wallEndGame[0].end,
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
        className={classNames("upperWallContainer__rightDownCorner", {
          blueHover_upper:
            userSign === 0 && mainTab[17].sign === "" && mainTab[17].hovered,
          blueNotHover_upper:
            userSign === 0 && mainTab[17].sign === "" && !mainTab[17].hovered,
          blue_X_upper: mainTab[17].sign === "X",
          redHover_upper:
            userSign === 1 && mainTab[17].sign === "" && mainTab[17].hovered,
          redNotHover_upper:
            userSign === 1 && mainTab[17].sign === "" && !mainTab[17].hovered,
          red_O_upper: mainTab[17].sign === "O",
          clickNone_upper: mainTab[17].sign !== "" || wallEndGame[0].end,
        })}
        onMouseEnter={() => hoverBox(17, true)}
        onMouseLeave={() => hoverBox(17, false)}
        onClick={() => {
          clickBox(17);
        }}
      >
        <p>{mainTab[17].sign}</p>
      </div>
    </div>
  );
}
