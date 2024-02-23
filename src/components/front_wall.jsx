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

const wall = [5, 6, 7, 12, 13, 14, 17, 20, 23];

export default function FrontWall(props) {
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
    if (!wallEndGame[3].end) {
      const winningResultX = validateWall("X", mainTab, winningCombinations);
      if (winningResultX) {
        setWallEndGame((prev) => {
          return prev.map((item) => {
            if (item.name === "FrontWall") {
              return { ...item, winWallX: winningResultX };
            }
            return item;
          });
        });

        setXCount((prevCount) => prevCount + 1);
        setWallEndGame((prev) => {
          return prev.map((item) => {
            if (item.name === "FrontWall") {
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
            if (item.name === "FrontWall") {
              return { ...item, winWallO: winningResultO };
            }
            return item;
          });
        });

        setOCount((prevCount) => prevCount + 1);
        setWallEndGame((prev) => {
          return prev.map((item) => {
            if (item.name === "FrontWall") {
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
            if (item.name === "FrontWall") {
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
    wallEndGame.FrontWall,
    setOCount,
    setXCount,
    validateWall,
    setWallEndGame,
    fullWall,
  ]);

  return (
    <div className="frontWallContainer">
      <div
        className={classNames("frontWallContainer__leftUpCorner", {
          blue_X_front_win: wallEndGame.some((item) =>
            item.winWallX.some((item) => item === 5)
          ),
          blueHover_front:
            userSign === 0 && mainTab[5].sign === "" && mainTab[5].hovered,
          blueNotHover_front:
            userSign === 0 && mainTab[5].sign === "" && !mainTab[5].hovered,
          blue_X_front: mainTab[5].sign === "X",

          red_O_front_win: wallEndGame.some((item) =>
            item.winWallO.some((item) => item === 5)
          ),
          redHover_front:
            userSign === 1 && mainTab[5].sign === "" && mainTab[5].hovered,
          redNotHover_front:
            userSign === 1 && mainTab[5].sign === "" && !mainTab[5].hovered,
          red_O_front: mainTab[5].sign === "O",
          clickNone_front: mainTab[5].sign !== "" || wallEndGame[3].end,
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
          blue_X_front_win: wallEndGame.some((item) =>
            item.winWallX.some((item) => item === 12)
          ),
          blueHover_front:
            userSign === 0 && mainTab[12].sign === "" && mainTab[12].hovered,
          blueNotHover_front:
            userSign === 0 && mainTab[12].sign === "" && !mainTab[12].hovered,
          blue_X_front: mainTab[12].sign === "X",

          red_O_front_win: wallEndGame.some((item) =>
            item.winWallO.some((item) => item === 12)
          ),
          redHover_front:
            userSign === 1 && mainTab[12].sign === "" && mainTab[12].hovered,
          redNotHover_front:
            userSign === 1 && mainTab[12].sign === "" && !mainTab[12].hovered,
          red_O_front: mainTab[12].sign === "O",
          clickNone_front: mainTab[12].sign !== "" || wallEndGame[3].end,
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
          blue_X_front_win: wallEndGame.some((item) =>
            item.winWallX.some((item) => item === 17)
          ),
          blueHover_front:
            userSign === 0 && mainTab[17].sign === "" && mainTab[17].hovered,
          blueNotHover_front:
            userSign === 0 && mainTab[17].sign === "" && !mainTab[17].hovered,
          blue_X_front: mainTab[17].sign === "X",

          red_O_front_win: wallEndGame.some((item) =>
            item.winWallO.some((item) => item === 17)
          ),
          redHover_front:
            userSign === 1 && mainTab[17].sign === "" && mainTab[17].hovered,
          redNotHover_front:
            userSign === 1 && mainTab[17].sign === "" && !mainTab[17].hovered,
          red_O_front: mainTab[17].sign === "O",
          clickNone_front: mainTab[17].sign !== "" || wallEndGame[3].end,
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
          blue_X_front_win: wallEndGame.some((item) =>
            item.winWallX.some((item) => item === 6)
          ),
          blueHover_front:
            userSign === 0 && mainTab[6].sign === "" && mainTab[6].hovered,
          blueNotHover_front:
            userSign === 0 && mainTab[6].sign === "" && !mainTab[6].hovered,
          blue_X_front: mainTab[6].sign === "X",

          red_O_front_win: wallEndGame.some((item) =>
            item.winWallO.some((item) => item === 6)
          ),
          redHover_front:
            userSign === 1 && mainTab[6].sign === "" && mainTab[6].hovered,
          redNotHover_front:
            userSign === 1 && mainTab[6].sign === "" && !mainTab[6].hovered,
          red_O_front: mainTab[6].sign === "O",
          clickNone_front: mainTab[6].sign !== "" || wallEndGame[3].end,
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
          blue_X_front_win: wallEndGame.some((item) =>
            item.winWallX.some((item) => item === 13)
          ),
          blueHover_front:
            userSign === 0 && mainTab[13].sign === "" && mainTab[13].hovered,
          blueNotHover_front:
            userSign === 0 && mainTab[13].sign === "" && !mainTab[13].hovered,
          blue_X_front: mainTab[13].sign === "X",

          red_O_front_win: wallEndGame.some((item) =>
            item.winWallO.some((item) => item === 13)
          ),
          redHover_front:
            userSign === 1 && mainTab[13].sign === "" && mainTab[13].hovered,
          redNotHover_front:
            userSign === 1 && mainTab[13].sign === "" && !mainTab[13].hovered,
          red_O_front: mainTab[13].sign === "O",
          clickNone_front: mainTab[13].sign !== "" || wallEndGame[3].end,
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
          blue_X_front_win: wallEndGame.some((item) =>
            item.winWallX.some((item) => item === 20)
          ),
          blueHover_front:
            userSign === 0 && mainTab[20].sign === "" && mainTab[20].hovered,
          blueNotHover_front:
            userSign === 0 && mainTab[20].sign === "" && !mainTab[20].hovered,
          blue_X_front: mainTab[20].sign === "X",

          red_O_front_win: wallEndGame.some((item) =>
            item.winWallO.some((item) => item === 20)
          ),
          redHover_front:
            userSign === 1 && mainTab[20].sign === "" && mainTab[20].hovered,
          redNotHover_front:
            userSign === 1 && mainTab[20].sign === "" && !mainTab[20].hovered,
          red_O_front: mainTab[20].sign === "O",
          clickNone_front: mainTab[20].sign !== "" || wallEndGame[3].end,
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
          blue_X_front_win: wallEndGame.some((item) =>
            item.winWallX.some((item) => item === 7)
          ),
          blueHover_front:
            userSign === 0 && mainTab[7].sign === "" && mainTab[7].hovered,
          blueNotHover_front:
            userSign === 0 && mainTab[7].sign === "" && !mainTab[7].hovered,
          blue_X_front: mainTab[7].sign === "X",

          red_O_front_win: wallEndGame.some((item) =>
            item.winWallO.some((item) => item === 7)
          ),
          redHover_front:
            userSign === 1 && mainTab[7].sign === "" && mainTab[7].hovered,
          redNotHover_front:
            userSign === 1 && mainTab[7].sign === "" && !mainTab[7].hovered,
          red_O_front: mainTab[7].sign === "O",
          clickNone_front: mainTab[7].sign !== "" || wallEndGame[3].end,
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
          blue_X_front_win: wallEndGame.some((item) =>
            item.winWallX.some((item) => item === 14)
          ),
          blueHover_front:
            userSign === 0 && mainTab[14].sign === "" && mainTab[14].hovered,
          blueNotHover_front:
            userSign === 0 && mainTab[14].sign === "" && !mainTab[14].hovered,
          blue_X_front: mainTab[14].sign === "X",

          red_O_front_win: wallEndGame.some((item) =>
            item.winWallO.some((item) => item === 14)
          ),
          redHover_front:
            userSign === 1 && mainTab[14].sign === "" && mainTab[14].hovered,
          redNotHover_front:
            userSign === 1 && mainTab[14].sign === "" && !mainTab[14].hovered,
          red_O_front: mainTab[14].sign === "O",
          clickNone_front: mainTab[14].sign !== "" || wallEndGame[3].end,
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
          blue_X_front_win: wallEndGame.some((item) =>
            item.winWallX.some((item) => item === 23)
          ),
          blueHover_front:
            userSign === 0 && mainTab[23].sign === "" && mainTab[23].hovered,
          blueNotHover_front:
            userSign === 0 && mainTab[23].sign === "" && !mainTab[23].hovered,
          blue_X_front: mainTab[23].sign === "X",

          red_O_front_win: wallEndGame.some((item) =>
            item.winWallO.some((item) => item === 23)
          ),
          redHover_front:
            userSign === 1 && mainTab[23].sign === "" && mainTab[23].hovered,
          redNotHover_front:
            userSign === 1 && mainTab[23].sign === "" && !mainTab[23].hovered,
          red_O_front: mainTab[23].sign === "O",
          clickNone_front: mainTab[23].sign !== "" || wallEndGame[3].end,
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
