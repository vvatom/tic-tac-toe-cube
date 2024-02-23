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

const wall = [7, 24, 1, 14, 0, 8, 23, 22, 21];

export default function BottomWall(props) {
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
    if (!wallEndGame[5].end) {
      const winningResultX = validateWall("X", mainTab, winningCombinations);
      if (winningResultX) {
        setWallEndGame((prev) => {
          return prev.map((item) => {
            if (item.name === "BottomWall") {
              return { ...item, winWallX: winningResultX };
            }
            return item;
          });
        });

        setXCount((prevCount) => prevCount + 1);
        setWallEndGame((prev) => {
          return prev.map((item) => {
            if (item.name === "BottomWall") {
              return { ...item, end: true };
            }
            return item;
          });
        });
      }
      const winningResultO = validateWall("O", mainTab, winningCombinations);
      if (winningResultO) {
        setWallEndGame((prev) => {
          return prev.map((item) => {
            if (item.name === "BottomWall") {
              return { ...item, winWallO: winningResultO };
            }
            return item;
          });
        });

        setOCount((prevCount) => prevCount + 1);
        setWallEndGame((prev) => {
          return prev.map((item) => {
            if (item.name === "BottomWall") {
              return { ...item, end: true };
            }
            return item;
          });
        });
      }
      ///
      if (fullWall("O", "X", mainTab, wall)) {
        setWallEndGame((prev) => {
          return prev.map((item) => {
            if (item.name === "BottomWall") {
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
    wallEndGame.BottomWall,
    setOCount,
    setXCount,
    validateWall,
    setWallEndGame,
    fullWall,
  ]);
  return (
    <div className="bottomWallContainer">
      <div
        className={classNames("bottomWallContainer__leftUpCorner", {
          blue_X_bottom_win: wallEndGame.some((item) =>
            item.winWallX.some((item) => item === 7)
          ),
          blueHover_bottom:
            userSign === 0 && mainTab[7].sign === "" && mainTab[7].hovered,
          blueNotHover_bottom:
            userSign === 0 && mainTab[7].sign === "" && !mainTab[7].hovered,
          blue_X_bottom: mainTab[7].sign === "X",

          red_O_bottom_win: wallEndGame.some((item) =>
            item.winWallO.some((item) => item === 7)
          ),
          redHover_bottom:
            userSign === 1 && mainTab[7].sign === "" && mainTab[7].hovered,
          redNotHover_bottom:
            userSign === 1 && mainTab[7].sign === "" && !mainTab[7].hovered,
          red_O_bottom: mainTab[7].sign === "O",
          clickNone_bottom: mainTab[7].sign !== "" || wallEndGame[5].end,
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
        className={classNames("bottomWallContainer__middleUp", {
          blue_X_bottom_win: wallEndGame.some((item) =>
            item.winWallX.some((item) => item === 14)
          ),
          blueHover_bottom:
            userSign === 0 && mainTab[14].sign === "" && mainTab[14].hovered,
          blueNotHover_bottom:
            userSign === 0 && mainTab[14].sign === "" && !mainTab[14].hovered,
          blue_X_bottom: mainTab[14].sign === "X",

          red_O_bottom_win: wallEndGame.some((item) =>
            item.winWallO.some((item) => item === 14)
          ),
          redHover_bottom:
            userSign === 1 && mainTab[14].sign === "" && mainTab[14].hovered,
          redNotHover_bottom:
            userSign === 1 && mainTab[14].sign === "" && !mainTab[14].hovered,
          red_O_bottom: mainTab[14].sign === "O",
          clickNone_bottom: mainTab[14].sign !== "" || wallEndGame[5].end,
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
        className={classNames("bottomWallContainer__rightUpCorner", {
          blue_X_bottom_win: wallEndGame.some((item) =>
            item.winWallX.some((item) => item === 23)
          ),
          blueHover_bottom:
            userSign === 0 && mainTab[23].sign === "" && mainTab[23].hovered,
          blueNotHover_bottom:
            userSign === 0 && mainTab[23].sign === "" && !mainTab[23].hovered,
          blue_X_bottom: mainTab[23].sign === "X",

          red_O_bottom_win: wallEndGame.some((item) =>
            item.winWallO.some((item) => item === 23)
          ),
          redHover_bottom:
            userSign === 1 && mainTab[23].sign === "" && mainTab[23].hovered,
          redNotHover_bottom:
            userSign === 1 && mainTab[23].sign === "" && !mainTab[23].hovered,
          red_O_bottom: mainTab[23].sign === "O",
          clickNone_bottom: mainTab[23].sign !== "" || wallEndGame[5].end,
        })}
        onMouseEnter={() => hoverBox(23, true)}
        onMouseLeave={() => hoverBox(23, false)}
        onClick={() => {
          clickBox(23);
        }}
      >
        <p>{mainTab[23].sign}</p>
      </div>

      <div
        className={classNames("bottomWallContainer__leftCenterCorner", {
          blue_X_bottom_win: wallEndGame.some((item) =>
            item.winWallX.some((item) => item === 24)
          ),
          blueHover_bottom:
            userSign === 0 && mainTab[24].sign === "" && mainTab[24].hovered,
          blueNotHover_bottom:
            userSign === 0 && mainTab[24].sign === "" && !mainTab[24].hovered,
          blue_X_bottom: mainTab[24].sign === "X",

          red_O_bottom_win: wallEndGame.some((item) =>
            item.winWallO.some((item) => item === 24)
          ),
          redHover_bottom:
            userSign === 1 && mainTab[24].sign === "" && mainTab[24].hovered,
          redNotHover_bottom:
            userSign === 1 && mainTab[24].sign === "" && !mainTab[24].hovered,
          red_O_bottom: mainTab[24].sign === "O",
          clickNone_bottom: mainTab[24].sign !== "" || wallEndGame[5].end,
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
        className={classNames("bottomWallContainer__middleCenterUp", {
          blue_X_bottom_win: wallEndGame.some((item) =>
            item.winWallX.some((item) => item === 0)
          ),
          blueHover_bottom:
            userSign === 0 && mainTab[0].sign === "" && mainTab[0].hovered,
          blueNotHover_bottom:
            userSign === 0 && mainTab[0].sign === "" && !mainTab[0].hovered,
          blue_X_bottom: mainTab[0].sign === "X",

          red_O_bottom_win: wallEndGame.some((item) =>
            item.winWallO.some((item) => item === 0)
          ),
          redHover_bottom:
            userSign === 1 && mainTab[0].sign === "" && mainTab[0].hovered,
          redNotHover_bottom:
            userSign === 1 && mainTab[0].sign === "" && !mainTab[0].hovered,
          red_O_bottom: mainTab[0].sign === "O",
          clickNone_bottom: mainTab[0].sign !== "" || wallEndGame[5].end,
        })}
        onMouseEnter={() => hoverBox(0, true)}
        onMouseLeave={() => hoverBox(0, false)}
        onClick={() => {
          clickBox(0);
        }}
      >
        <p>{mainTab[0].sign}</p>
      </div>
      <div
        className={classNames("bottomWallContainer__rightCenterorner", {
          blue_X_bottom_win: wallEndGame.some((item) =>
            item.winWallX.some((item) => item === 22)
          ),
          blueHover_bottom:
            userSign === 0 && mainTab[22].sign === "" && mainTab[22].hovered,
          blueNotHover_bottom:
            userSign === 0 && mainTab[22].sign === "" && !mainTab[22].hovered,
          blue_X_bottom: mainTab[22].sign === "X",

          red_O_bottom_win: wallEndGame.some((item) =>
            item.winWallO.some((item) => item === 22)
          ),
          redHover_bottom:
            userSign === 1 && mainTab[22].sign === "" && mainTab[22].hovered,
          redNotHover_bottom:
            userSign === 1 && mainTab[22].sign === "" && !mainTab[22].hovered,
          red_O_bottom: mainTab[22].sign === "O",
          clickNone_bottom: mainTab[22].sign !== "" || wallEndGame[5].end,
        })}
        onMouseEnter={() => hoverBox(22, true)}
        onMouseLeave={() => hoverBox(22, false)}
        onClick={() => {
          clickBox(22);
        }}
      >
        <p>{mainTab[22].sign}</p>
      </div>

      <div
        className={classNames("bottomWallContainer__leftDownCorner", {
          blue_X_bottom_win: wallEndGame.some((item) =>
            item.winWallX.some((item) => item === 1)
          ),
          blueHover_bottom:
            userSign === 0 && mainTab[1].sign === "" && mainTab[1].hovered,
          blueNotHover_bottom:
            userSign === 0 && mainTab[1].sign === "" && !mainTab[1].hovered,
          blue_X_bottom: mainTab[1].sign === "X",

          red_O_bottom_win: wallEndGame.some((item) =>
            item.winWallO.some((item) => item === 1)
          ),
          redHover_bottom:
            userSign === 1 && mainTab[1].sign === "" && mainTab[1].hovered,
          redNotHover_bottom:
            userSign === 1 && mainTab[1].sign === "" && !mainTab[1].hovered,
          red_O_bottom: mainTab[1].sign === "O",
          clickNone_bottom: mainTab[1].sign !== "" || wallEndGame[5].end,
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
        className={classNames("bottomWallContainer__middleDown", {
          blue_X_bottom_win: wallEndGame.some((item) =>
            item.winWallX.some((item) => item === 8)
          ),
          blueHover_bottom:
            userSign === 0 && mainTab[8].sign === "" && mainTab[8].hovered,
          blueNotHover_bottom:
            userSign === 0 && mainTab[8].sign === "" && !mainTab[8].hovered,
          blue_X_bottom: mainTab[8].sign === "X",

          red_O_bottom_win: wallEndGame.some((item) =>
            item.winWallO.some((item) => item === 8)
          ),
          redHover_bottom:
            userSign === 1 && mainTab[8].sign === "" && mainTab[8].hovered,
          redNotHover_bottom:
            userSign === 1 && mainTab[8].sign === "" && !mainTab[8].hovered,
          red_O_bottom: mainTab[8].sign === "O",
          clickNone_bottom: mainTab[8].sign !== "" || wallEndGame[5].end,
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
        className={classNames("bottomWallContainer__rightDownCorner", {
          blue_X_bottom_win: wallEndGame.some((item) =>
            item.winWallX.some((item) => item === 21)
          ),
          blueHover_bottom:
            userSign === 0 && mainTab[21].sign === "" && mainTab[21].hovered,
          blueNotHover_bottom:
            userSign === 0 && mainTab[21].sign === "" && !mainTab[21].hovered,
          blue_X_bottom: mainTab[21].sign === "X",

          red_O_bottom_win: wallEndGame.some((item) =>
            item.winWallO.some((item) => item === 21)
          ),
          redHover_bottom:
            userSign === 1 && mainTab[21].sign === "" && mainTab[21].hovered,
          redNotHover_bottom:
            userSign === 1 && mainTab[21].sign === "" && !mainTab[21].hovered,
          red_O_bottom: mainTab[21].sign === "O",
          clickNone_bottom: mainTab[21].sign !== "" || wallEndGame[5].end,
        })}
        onMouseEnter={() => hoverBox(21, true)}
        onMouseLeave={() => hoverBox(21, false)}
        onClick={() => {
          clickBox(21);
        }}
      >
        <p>{mainTab[21].sign}</p>
      </div>
    </div>
  );
}
