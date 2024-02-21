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

const wall = [1, 2, 3, 8, 9, 10, 21, 18, 15];

export default function BackWall(props) {
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
    if (!wallEndGame[4].end) {
      const winningResultX = validateWall("X", mainTab, winningCombinations);
      if (winningResultX) {
        setXCount((prevCount) => prevCount + 1);
        setWallEndGame((prev) => {
          return prev.map((item) => {
            if (item.name === "BackWall") {
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
            if (item.name === "BackWall") {
              return { ...item, end: true };
            }
            return item;
          });
        });
      }
      if (fullWall("O", "X", mainTab, wall)) {
        setWallEndGame((prev) => {
          return prev.map((item) => {
            if (item.name === "BackWall") {
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
    wallEndGame.BackWall,
    setOCount,
    setXCount,
    validateWall,
    setWallEndGame,
    fullWall,
  ]);

  return (
    <div className="backWallContainer">
      <div
        className={classNames("backWallContainer__leftUpCorner", {
          blueHover_back:
            userSign === 0 && mainTab[1].sign === "" && mainTab[1].hovered,
          blueNotHover_back:
            userSign === 0 && mainTab[1].sign === "" && !mainTab[1].hovered,
          blue_X_back: mainTab[1].sign === "X",
          redHover_back:
            userSign === 1 && mainTab[1].sign === "" && mainTab[1].hovered,
          redNotHover_back:
            userSign === 1 && mainTab[1].sign === "" && !mainTab[1].hovered,
          red_O_back: mainTab[1].sign === "O",
          clickNone_back: mainTab[1].sign !== "" || wallEndGame[4].end,
        })}
        onMouseEnter={() => hoverBox(1, true)}
        onMouseLeave={() => hoverBox(1, false)}
        onClick={() => {
          clickBox(1);
        }}
      >
        <p>{mainTab[1].sign}</p>
      </div>
      <div
        className={classNames("backWallContainer__middleUp", {
          blueHover_back:
            userSign === 0 && mainTab[8].sign === "" && mainTab[8].hovered,
          blueNotHover_back:
            userSign === 0 && mainTab[8].sign === "" && !mainTab[8].hovered,
          blue_X_back: mainTab[8].sign === "X",
          redHover_back:
            userSign === 1 && mainTab[8].sign === "" && mainTab[8].hovered,
          redNotHover_back:
            userSign === 1 && mainTab[8].sign === "" && !mainTab[8].hovered,
          red_O_back: mainTab[8].sign === "O",
          clickNone_back: mainTab[8].sign !== "" || wallEndGame[4].end,
        })}
        onMouseEnter={() => hoverBox(8, true)}
        onMouseLeave={() => hoverBox(8, false)}
        onClick={() => {
          clickBox(8);
        }}
      >
        <p>{mainTab[8].sign}</p>
      </div>
      <div
        className={classNames("backWallContainer__rightUpCorner", {
          blueHover_back:
            userSign === 0 && mainTab[21].sign === "" && mainTab[21].hovered,
          blueNotHover_back:
            userSign === 0 && mainTab[21].sign === "" && !mainTab[21].hovered,
          blue_X_back: mainTab[21].sign === "X",
          redHover_back:
            userSign === 1 && mainTab[21].sign === "" && mainTab[21].hovered,
          redNotHover_back:
            userSign === 1 && mainTab[21].sign === "" && !mainTab[21].hovered,
          red_O_back: mainTab[21].sign === "O",
          clickNone_back: mainTab[21].sign !== "" || wallEndGame[4].end,
        })}
        onMouseEnter={() => hoverBox(21, true)}
        onMouseLeave={() => hoverBox(21, false)}
        onClick={() => {
          clickBox(21);
        }}
      >
        <p>{mainTab[21].sign}</p>
      </div>

      <div
        className={classNames("backWallContainer__leftCenterCorner", {
          blueHover_back:
            userSign === 0 && mainTab[2].sign === "" && mainTab[2].hovered,
          blueNotHover_back:
            userSign === 0 && mainTab[2].sign === "" && !mainTab[2].hovered,
          blue_X_back: mainTab[2].sign === "X",
          redHover_back:
            userSign === 1 && mainTab[2].sign === "" && mainTab[2].hovered,
          redNotHover_back:
            userSign === 1 && mainTab[2].sign === "" && !mainTab[2].hovered,
          red_O_back: mainTab[2].sign === "O",
          clickNone_back: mainTab[2].sign !== "" || wallEndGame[4].end,
        })}
        onMouseEnter={() => hoverBox(2, true)}
        onMouseLeave={() => hoverBox(2, false)}
        onClick={() => {
          clickBox(2);
        }}
      >
        <p>{mainTab[2].sign}</p>
      </div>
      <div
        className={classNames("backWallContainer__middleCenterUp", {
          blueHover_back:
            userSign === 0 && mainTab[9].sign === "" && mainTab[9].hovered,
          blueNotHover_back:
            userSign === 0 && mainTab[9].sign === "" && !mainTab[9].hovered,
          blue_X_back: mainTab[9].sign === "X",
          redHover_back:
            userSign === 1 && mainTab[9].sign === "" && mainTab[9].hovered,
          redNotHover_back:
            userSign === 1 && mainTab[9].sign === "" && !mainTab[9].hovered,
          red_O_back: mainTab[9].sign === "O",
          clickNone_back: mainTab[9].sign !== "" || wallEndGame[4].end,
        })}
        onMouseEnter={() => hoverBox(9, true)}
        onMouseLeave={() => hoverBox(9, false)}
        onClick={() => {
          clickBox(9);
        }}
      >
        <p>{mainTab[9].sign}</p>
      </div>
      <div
        className={classNames("backWallContainer__rightCenterorner", {
          blueHover_back:
            userSign === 0 && mainTab[18].sign === "" && mainTab[18].hovered,
          blueNotHover_back:
            userSign === 0 && mainTab[18].sign === "" && !mainTab[18].hovered,
          blue_X_back: mainTab[18].sign === "X",
          redHover_back:
            userSign === 1 && mainTab[18].sign === "" && mainTab[18].hovered,
          redNotHover_back:
            userSign === 1 && mainTab[18].sign === "" && !mainTab[18].hovered,
          red_O_back: mainTab[18].sign === "O",
          clickNone_back: mainTab[18].sign !== "" || wallEndGame[4].end,
        })}
        onMouseEnter={() => hoverBox(18, true)}
        onMouseLeave={() => hoverBox(18, false)}
        onClick={() => {
          clickBox(18);
        }}
      >
        <p>{mainTab[18].sign}</p>
      </div>

      <div
        className={classNames("backWallContainer__leftDownCorner", {
          blueHover_back:
            userSign === 0 && mainTab[3].sign === "" && mainTab[3].hovered,
          blueNotHover_back:
            userSign === 0 && mainTab[3].sign === "" && !mainTab[3].hovered,
          blue_X_back: mainTab[3].sign === "X",
          redHover_back:
            userSign === 1 && mainTab[3].sign === "" && mainTab[3].hovered,
          redNotHover_back:
            userSign === 1 && mainTab[3].sign === "" && !mainTab[3].hovered,
          red_O_back: mainTab[3].sign === "O",
          clickNone_back: mainTab[3].sign !== "" || wallEndGame[4].end,
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
        className={classNames("backWallContainer__middleDown", {
          blueHover_back:
            userSign === 0 && mainTab[10].sign === "" && mainTab[10].hovered,
          blueNotHover_back:
            userSign === 0 && mainTab[10].sign === "" && !mainTab[10].hovered,
          blue_X_back: mainTab[10].sign === "X",
          redHover_back:
            userSign === 1 && mainTab[10].sign === "" && mainTab[10].hovered,
          redNotHover_back:
            userSign === 1 && mainTab[10].sign === "" && !mainTab[10].hovered,
          red_O_back: mainTab[10].sign === "O",
          clickNone_back: mainTab[10].sign !== "" || wallEndGame[4].end,
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
        className={classNames("backWallContainer__rightDownCorner", {
          blueHover_back:
            userSign === 0 && mainTab[15].sign === "" && mainTab[15].hovered,
          blueNotHover_back:
            userSign === 0 && mainTab[15].sign === "" && !mainTab[15].hovered,
          blue_X_back: mainTab[15].sign === "X",
          redHover_back:
            userSign === 1 && mainTab[15].sign === "" && mainTab[15].hovered,
          redNotHover_back:
            userSign === 1 && mainTab[15].sign === "" && !mainTab[15].hovered,
          red_O_back: mainTab[15].sign === "O",
          clickNone_back: mainTab[15].sign !== "" || wallEndGame[4].end,
        })}
        onMouseEnter={() => hoverBox(15, true)}
        onMouseLeave={() => hoverBox(15, false)}
        onClick={() => {
          clickBox(15);
        }}
      >
        <p>{mainTab[15].sign}</p>
      </div>
    </div>
  );
}
