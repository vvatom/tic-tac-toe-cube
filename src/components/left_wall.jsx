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

const wall = [1, 24, 7, 2, 25, 6, 3, 4, 5];

export default function LeftWall(props) {
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
    if (!wallEndGame[2].end) {
      const winningResultX = validateWall("X", mainTab, winningCombinations);
      if (winningResultX) {
        setXCount((prevCount) => prevCount + 1);
        setWallEndGame((prev) => {
          return prev.map((item) => {
            if (item.name === "LeftWall") {
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
            if (item.name === "LeftWall") {
              return { ...item, end: true };
            }
            return item;
          });
        });
      }
      if (fullWall("O", "X", mainTab, wall)) {
        setWallEndGame((prev) => {
          return prev.map((item) => {
            if (item.name === "LeftWall") {
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
    wallEndGame.LeftWall,
    setOCount,
    setXCount,
    validateWall,
    setWallEndGame,
    fullWall,
  ]);
  return (
    <div className="leftWallContainer">
      <div
        className={classNames("leftWallContainer__leftUpCorner", {
          blueHover_left:
            userSign === 0 && mainTab[1].sign === "" && mainTab[1].hovered,
          blueNotHover_left:
            userSign === 0 && mainTab[1].sign === "" && !mainTab[1].hovered,
          blue_X_left: mainTab[1].sign === "X",
          redHover_left:
            userSign === 1 && mainTab[1].sign === "" && mainTab[1].hovered,
          redNotHover_left:
            userSign === 1 && mainTab[1].sign === "" && !mainTab[1].hovered,
          red_O_left: mainTab[1].sign === "O",
          clickNone_left: mainTab[1].sign !== "" || wallEndGame[2].end,
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
        className={classNames("leftWallContainer__middleUp", {
          blueHover_left:
            userSign === 0 && mainTab[2].sign === "" && mainTab[2].hovered,
          blueNotHover_left:
            userSign === 0 && mainTab[2].sign === "" && !mainTab[2].hovered,
          blue_X_left: mainTab[2].sign === "X",
          redHover_left:
            userSign === 1 && mainTab[2].sign === "" && mainTab[2].hovered,
          redNotHover_left:
            userSign === 1 && mainTab[2].sign === "" && !mainTab[2].hovered,
          red_O_left: mainTab[2].sign === "O",
          clickNone_left: mainTab[2].sign !== "" || wallEndGame[2].end,
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
        className={classNames("leftWallContainer__rightUpCorner", {
          blueHover_left:
            userSign === 0 && mainTab[3].sign === "" && mainTab[3].hovered,
          blueNotHover_left:
            userSign === 0 && mainTab[3].sign === "" && !mainTab[3].hovered,
          blue_X_left: mainTab[3].sign === "X",
          redHover_left:
            userSign === 1 && mainTab[3].sign === "" && mainTab[3].hovered,
          redNotHover_left:
            userSign === 1 && mainTab[3].sign === "" && !mainTab[3].hovered,
          red_O_left: mainTab[3].sign === "O",
          clickNone_left: mainTab[3].sign !== "" || wallEndGame[2].end,
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
        className={classNames("leftWallContainer__leftCenterCorner", {
          blueHover_left:
            userSign === 0 && mainTab[24].sign === "" && mainTab[24].hovered,
          blueNotHover_left:
            userSign === 0 && mainTab[24].sign === "" && !mainTab[24].hovered,
          blue_X_left: mainTab[24].sign === "X",
          redHover_left:
            userSign === 1 && mainTab[24].sign === "" && mainTab[24].hovered,
          redNotHover_left:
            userSign === 1 && mainTab[24].sign === "" && !mainTab[24].hovered,
          red_O_left: mainTab[24].sign === "O",
          clickNone_left: mainTab[24].sign !== "" || wallEndGame[2].end,
        })}
        onMouseEnter={() => hoverBox(24, true)}
        onMouseLeave={() => hoverBox(24, false)}
        onClick={() => {
          clickBox(24);
        }}
      >
        <p>{mainTab[24].sign}</p>
      </div>
      <div
        className={classNames("leftWallContainer__middleCenterUp", {
          blueHover_left:
            userSign === 0 && mainTab[25].sign === "" && mainTab[25].hovered,
          blueNotHover_left:
            userSign === 0 && mainTab[25].sign === "" && !mainTab[25].hovered,
          blue_X_left: mainTab[25].sign === "X",
          redHover_left:
            userSign === 1 && mainTab[25].sign === "" && mainTab[25].hovered,
          redNotHover_left:
            userSign === 1 && mainTab[25].sign === "" && !mainTab[25].hovered,
          red_O_left: mainTab[25].sign === "O",
          clickNone_left: mainTab[25].sign !== "" || wallEndGame[2].end,
        })}
        onMouseEnter={() => hoverBox(25, true)}
        onMouseLeave={() => hoverBox(25, false)}
        onClick={() => {
          clickBox(25);
        }}
      >
        <p>{mainTab[25].sign}</p>
      </div>
      <div
        className={classNames("leftWallContainer__rightCenterorner", {
          blueHover_left:
            userSign === 0 && mainTab[4].sign === "" && mainTab[4].hovered,
          blueNotHover_left:
            userSign === 0 && mainTab[4].sign === "" && !mainTab[4].hovered,
          blue_X_left: mainTab[4].sign === "X",
          redHover_left:
            userSign === 1 && mainTab[4].sign === "" && mainTab[4].hovered,
          redNotHover_left:
            userSign === 1 && mainTab[4].sign === "" && !mainTab[4].hovered,
          red_O_left: mainTab[4].sign === "O",
          clickNone_left: mainTab[4].sign !== "" || wallEndGame[2].end,
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
        className={classNames("leftWallContainer__leftDownCorner", {
          blueHover_left:
            userSign === 0 && mainTab[7].sign === "" && mainTab[7].hovered,
          blueNotHover_left:
            userSign === 0 && mainTab[7].sign === "" && !mainTab[7].hovered,
          blue_X_left: mainTab[7].sign === "X",
          redHover_left:
            userSign === 1 && mainTab[7].sign === "" && mainTab[7].hovered,
          redNotHover_left:
            userSign === 1 && mainTab[7].sign === "" && !mainTab[7].hovered,
          red_O_left: mainTab[7].sign === "O",
          clickNone_left: mainTab[7].sign !== "" || wallEndGame[2].end,
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
        className={classNames("leftWallContainer__middleDown", {
          blueHover_left:
            userSign === 0 && mainTab[6].sign === "" && mainTab[6].hovered,
          blueNotHover_left:
            userSign === 0 && mainTab[6].sign === "" && !mainTab[6].hovered,
          blue_X_left: mainTab[6].sign === "X",
          redHover_left:
            userSign === 1 && mainTab[6].sign === "" && mainTab[6].hovered,
          redNotHover_left:
            userSign === 1 && mainTab[6].sign === "" && !mainTab[6].hovered,
          red_O_left: mainTab[6].sign === "O",
          clickNone_left: mainTab[6].sign !== "" || wallEndGame[2].end,
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
        className={classNames("leftWallContainer__rightDownCorner", {
          blueHover_left:
            userSign === 0 && mainTab[5].sign === "" && mainTab[5].hovered,
          blueNotHover_left:
            userSign === 0 && mainTab[5].sign === "" && !mainTab[5].hovered,
          blue_X_left: mainTab[5].sign === "X",
          redHover_left:
            userSign === 1 && mainTab[5].sign === "" && mainTab[5].hovered,
          redNotHover_left:
            userSign === 1 && mainTab[5].sign === "" && !mainTab[5].hovered,
          red_O_left: mainTab[5].sign === "O",
          clickNone_left: mainTab[5].sign !== "" || wallEndGame[2].end,
        })}
        onMouseEnter={() => hoverBox(5, true)}
        onMouseLeave={() => hoverBox(5, false)}
        onClick={() => {
          clickBox(5);
        }}
      >
        <p>{mainTab[5].sign}</p>
      </div>
    </div>
  );
}
