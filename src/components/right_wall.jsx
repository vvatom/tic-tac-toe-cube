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
    <div className="rightWallContainer">
      <div
        className={classNames("rightWallContainer__leftUpCorner", {
          blueHover_right:
            userSign === 0 && mainTab[15].sign === "" && mainTab[15].hovered,
          blueNotHover_right:
            userSign === 0 && mainTab[15].sign === "" && !mainTab[15].hovered,
          blue_X_right: mainTab[15].sign === "X",
          redHover_right:
            userSign === 1 && mainTab[15].sign === "" && mainTab[15].hovered,
          redNotHover_right:
            userSign === 1 && mainTab[15].sign === "" && !mainTab[15].hovered,
          red_O_right: mainTab[15].sign === "O",
          clickNone_right: mainTab[15].sign !== "",
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
        className={classNames("rightWallContainer__middleUp", {
          blueHover_right:
            userSign === 0 && mainTab[18].sign === "" && mainTab[18].hovered,
          blueNotHover_right:
            userSign === 0 && mainTab[18].sign === "" && !mainTab[18].hovered,
          blue_X_right: mainTab[18].sign === "X",
          redHover_right:
            userSign === 1 && mainTab[18].sign === "" && mainTab[18].hovered,
          redNotHover_right:
            userSign === 1 && mainTab[18].sign === "" && !mainTab[18].hovered,
          red_O_right: mainTab[18].sign === "O",
          clickNone_right: mainTab[18].sign !== "",
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
        className={classNames("rightWallContainer__rightUpCorner", {
          blueHover_right:
            userSign === 0 && mainTab[21].sign === "" && mainTab[21].hovered,
          blueNotHover_right:
            userSign === 0 && mainTab[21].sign === "" && !mainTab[21].hovered,
          blue_X_right: mainTab[21].sign === "X",
          redHover_right:
            userSign === 1 && mainTab[21].sign === "" && mainTab[21].hovered,
          redNotHover_right:
            userSign === 1 && mainTab[21].sign === "" && !mainTab[21].hovered,
          red_O_right: mainTab[21].sign === "O",
          clickNone_right: mainTab[21].sign !== "",
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
        className={classNames("rightWallContainer__leftCenterCorner", {
          blueHover_right:
            userSign === 0 && mainTab[16].sign === "" && mainTab[16].hovered,
          blueNotHover_right:
            userSign === 0 && mainTab[16].sign === "" && !mainTab[16].hovered,
          blue_X_right: mainTab[16].sign === "X",
          redHover_right:
            userSign === 1 && mainTab[16].sign === "" && mainTab[16].hovered,
          redNotHover_right:
            userSign === 1 && mainTab[16].sign === "" && !mainTab[16].hovered,
          red_O_right: mainTab[16].sign === "O",
          clickNone_right: mainTab[16].sign !== "",
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
        className={classNames("rightWallContainer__middleCenterUp", {
          blueHover_right:
            userSign === 0 && mainTab[19].sign === "" && mainTab[19].hovered,
          blueNotHover_right:
            userSign === 0 && mainTab[19].sign === "" && !mainTab[19].hovered,
          blue_X_right: mainTab[19].sign === "X",
          redHover_right:
            userSign === 1 && mainTab[19].sign === "" && mainTab[19].hovered,
          redNotHover_right:
            userSign === 1 && mainTab[19].sign === "" && !mainTab[19].hovered,
          red_O_right: mainTab[19].sign === "O",
          clickNone_right: mainTab[19].sign !== "",
        })}
        onMouseEnter={() => hoverBox(19, true)}
        onMouseLeave={() => hoverBox(19, false)}
        onClick={() => {
          clickBox(19);
        }}
      >
        <p>{mainTab[19].sign}</p>
      </div>
      <div
        className={classNames("rightWallContainer__rightCenterorner", {
          blueHover_right:
            userSign === 0 && mainTab[22].sign === "" && mainTab[22].hovered,
          blueNotHover_right:
            userSign === 0 && mainTab[22].sign === "" && !mainTab[22].hovered,
          blue_X_right: mainTab[22].sign === "X",
          redHover_right:
            userSign === 1 && mainTab[22].sign === "" && mainTab[22].hovered,
          redNotHover_right:
            userSign === 1 && mainTab[22].sign === "" && !mainTab[22].hovered,
          red_O_right: mainTab[22].sign === "O",
          clickNone_right: mainTab[22].sign !== "",
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
        className={classNames("rightWallContainer__leftDownCorner", {
          blueHover_right:
            userSign === 0 && mainTab[17].sign === "" && mainTab[17].hovered,
          blueNotHover_right:
            userSign === 0 && mainTab[17].sign === "" && !mainTab[17].hovered,
          blue_X_right: mainTab[17].sign === "X",
          redHover_right:
            userSign === 1 && mainTab[17].sign === "" && mainTab[17].hovered,
          redNotHover_right:
            userSign === 1 && mainTab[17].sign === "" && !mainTab[17].hovered,
          red_O_right: mainTab[17].sign === "O",
          clickNone_right: mainTab[17].sign !== "",
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
        className={classNames("rightWallContainer__middleDown", {
          blueHover_right:
            userSign === 0 && mainTab[20].sign === "" && mainTab[20].hovered,
          blueNotHover_right:
            userSign === 0 && mainTab[20].sign === "" && !mainTab[20].hovered,
          blue_X_right: mainTab[20].sign === "X",
          redHover_right:
            userSign === 1 && mainTab[20].sign === "" && mainTab[20].hovered,
          redNotHover_right:
            userSign === 1 && mainTab[20].sign === "" && !mainTab[20].hovered,
          red_O_right: mainTab[20].sign === "O",
          clickNone_right: mainTab[20].sign !== "",
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
        className={classNames("rightWallContainer__rightDownCorner", {
          blueHover_right:
            userSign === 0 && mainTab[23].sign === "" && mainTab[23].hovered,
          blueNotHover_right:
            userSign === 0 && mainTab[23].sign === "" && !mainTab[23].hovered,
          blue_X_right: mainTab[23].sign === "X",
          redHover_right:
            userSign === 1 && mainTab[23].sign === "" && mainTab[23].hovered,
          redNotHover_right:
            userSign === 1 && mainTab[23].sign === "" && !mainTab[23].hovered,
          red_O_right: mainTab[23].sign === "O",
          clickNone_right: mainTab[23].sign !== "",
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
