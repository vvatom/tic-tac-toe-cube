import { useState, useEffect, useRef, useContext } from "react";
import { Context } from "../App";
import "./mainCube.css";

import BackWall from "./back_wall";
import BottomWall from "./bottom_wall";
import FrontWall from "./front_wall";
import LeftWall from "./left_wall";
import RightWall from "./right_wall";
import UpperWall from "./upper_wall";

import Counter from "./counter";

import FrontMenu from "./menu/FrontMenu";
import BottomMenu from "./menu/BottomMenu";
import RightMenu from "./menu/RightMenu";
import LeftMenu from "./menu/LeftMenu";
import BackMenu from "./menu/BackMenu";
import UpperMenu from "./menu/UpperMenu";
import classNames from "classnames";

const MAIN_ARRAY = [
  { id: 0, sign: "", hovered: false },
  { id: 1, sign: "", hovered: false },
  { id: 2, sign: "", hovered: false },
  { id: 3, sign: "", hovered: false },
  { id: 4, sign: "", hovered: false },
  { id: 5, sign: "", hovered: false },
  { id: 6, sign: "", hovered: false },
  { id: 7, sign: "", hovered: false },
  { id: 8, sign: "", hovered: false },
  { id: 9, sign: "", hovered: false },
  { id: 10, sign: "", hovered: false },
  { id: 11, sign: "", hovered: false },
  { id: 12, sign: "", hovered: false },
  { id: 13, sign: "", hovered: false },
  { id: 14, sign: "", hovered: false },
  { id: 15, sign: "", hovered: false },
  { id: 16, sign: "", hovered: false },
  { id: 17, sign: "", hovered: false },
  { id: 18, sign: "", hovered: false },
  { id: 19, sign: "", hovered: false },
  { id: 20, sign: "", hovered: false },
  { id: 21, sign: "", hovered: false },
  { id: 22, sign: "", hovered: false },
  { id: 23, sign: "", hovered: false },
  { id: 24, sign: "", hovered: false },
  { id: 25, sign: "", hovered: false },
];

const WALLS_GAME_STATE = [
  { name: "UpperWall", end: false, megaCam: "" },
  { name: "RightWall", end: false, megaCam: "" },
  { name: "LeftWall", end: false, megaCam: "" },
  { name: "FrontWall", end: false, megaCam: "" },
  { name: "BackWall", end: false, megaCam: "" },
  { name: "BottomWall", end: false, megaCam: "" },
];

export default function MainCube() {
  const [mainTab, setMainTab] = useState(MAIN_ARRAY);
  const [gameRules, setGameRules] = useContext(Context);

  const [userSign, setUserSign] = useState(0);
  const [xCount, setXCount] = useState(0);
  const [oCount, setOCount] = useState(0);
  const [endGame, setEndGame] = useState(false);

  const [camIteration, setCamIteration] = useState(0);
  const [wallEndGame, setWallEndGame] = useState(WALLS_GAME_STATE);
  const [idSetTimeout, setIdSetTimeout] = useState(false);
  const [globalDrag, setGlobalDrag] = useState(false);
  const [position, setPosition] = useState(gameRules.Camera);
  const divCube = useRef(null);

  //ROTATING CUBE
  useEffect(() => {
    let drag = false;
    let x0 = null;
    let y0 = null;

    function getE(ev) {
      return ev.touches ? ev.touches[0] : ev;
    }

    function lock(ev) {
      let e = getE(ev);
      setGlobalDrag(true);
      drag = true;
      x0 = e.clientX;
      y0 = e.clientY;
    }
    function rot(ev) {
      if (drag) {
        let e = getE(ev);
        let x = e.clientX;
        let y = e.clientY;
        let dx = x - x0;
        let dy = y - y0;
        let d = Math.hypot(dx, dy);

        if (d) {
          let i = +(-dy / d).toFixed(5);
          let j = +(dx / d).toFixed(5);
          let a = +(0.3 * d).toFixed(2);
          let c =
            `rotateX(${i * a}deg) rotateY(${j * a}deg)` +
            getComputedStyle(divCube.current).transform.replace("none", "");
          setPosition(c);
          x0 = x;
          y0 = y;
        }
      }
    }

    function rel(ev) {
      if (drag) {
        x0 = null;
        y0 = null;
        drag = false;
        setGlobalDrag(false);
      }
    }
    if (!endGame) {
      if (
        gameRules.Play === false ||
        (gameRules.GameMode === "FreeForAll" && gameRules.Play === false) ||
        (gameRules.GameMode === "CubeTicTacToe" && gameRules.Play === true) ||
        (gameRules.GameMode === "MegaTicTacToe" && gameRules.Play === true)
      ) {
        if (!drag) {
          clearTimeout(idSetTimeout);
          const id = setTimeout(() => {
            setPosition(gameRules.Camera);
          }, 750);
          setIdSetTimeout(id);
        }
      }
    }

    document.addEventListener("mousedown", lock, false);
    document.addEventListener("touchstart", lock, false);

    document.addEventListener("mousemove", rot, false);
    document.addEventListener("touchmove", rot, false);

    document.addEventListener("mouseup", rel, false);
    document.addEventListener("touchend", rel, false);
  }, [position, gameRules.Camera, setGlobalDrag, endGame]);

  //CHECK END GAME
  useEffect(() => {
    setEndGame(
      wallEndGame.every((item) => {
        return item.end === true;
      })
    );
  }, [wallEndGame]);

  //MEGA TIC TAC TOE
  useEffect(() => {
    if (gameRules.GameMode === "MegaTicTacToe" && gameRules.Play === true) {
      if (camIteration === 0) {
        setGameRules((prev) => {
          return { ...prev, Camera: `rotateX(-90deg) rotateY(0deg)` };
        });
      }
      if (camIteration === 1) {
        setGameRules((prev) => {
          return { ...prev, Camera: `rotateX(-180deg) rotateY(0deg)` };
        });
      }
      if (camIteration === 2) {
        setGameRules((prev) => {
          return { ...prev, Camera: `rotateX(-270deg) rotateY(0deg)` };
        });
      }
      if (camIteration === 3) {
        setGameRules((prev) => {
          return { ...prev, Camera: `rotateX(-360deg) rotateY(0deg)` };
        });
      }
      if (camIteration === 4) {
        setGameRules((prev) => {
          return { ...prev, Camera: `rotateX(0deg) rotateY(90deg)` };
        });
      }
      if (camIteration === 5) {
        setGameRules((prev) => {
          return { ...prev, Camera: `rotateX(0deg) rotateY(270deg)` };
        });
      }
      if (camIteration === 6) {
        setCamIteration(0);
      }
    }
  }, [camIteration, gameRules.GameMode, gameRules.Play, setGameRules]);

  //CUBE TIC TAC TOE
  useEffect(() => {
    if (gameRules.GameMode === "CubeTicTacToe" && gameRules.Play === true) {
      if (!wallEndGame[0].end) {
        setGameRules((prev) => {
          return { ...prev, Camera: `rotateX(-65deg) rotateY(-80deg)` };
        });
      }

      if (wallEndGame[0].end && !wallEndGame[1].end) {
        setGameRules((prev) => {
          return { ...prev, Camera: `rotateX(-25deg) rotateY(-70deg)` };
        });
      }

      if (wallEndGame[1].end && !wallEndGame[3].end) {
        setGameRules((prev) => {
          return { ...prev, Camera: `rotateX(-25deg) rotateY(20deg)` };
        });
      }

      if (wallEndGame[3].end && !wallEndGame[2].end) {
        setGameRules((prev) => {
          return { ...prev, Camera: `rotateX(15deg) rotateY(110deg)` };
        });
      }

      if (wallEndGame[2].end && !wallEndGame[4].end) {
        setGameRules((prev) => {
          return { ...prev, Camera: `rotateX(20deg) rotateY(170deg)` };
        });
      }

      if (wallEndGame[4].end && !wallEndGame[5].end) {
        setGameRules((prev) => {
          return { ...prev, Camera: `rotateX(90deg) rotateY(180deg)` };
        });
      }
    }
  }, [gameRules.GameMode, gameRules.Play, wallEndGame, setGameRules]);

  //FUNCTION CHECK WINNING COMBINATIONS
  function validateWall(sign, mainTab, combinations) {
    return combinations.some((item) => {
      return item.every((itemIndex) => {
        return mainTab[itemIndex].sign === sign;
      });
    });
  }

  //FUNCTION CHECK FULL WALL SIGNED
  function fullWall(signO, signX, mainTab, combinations) {
    return combinations.every((item) => {
      return mainTab[item].sign === signX || mainTab[item].sign === signO;
    });
  }

  //FUNCTION PLAYER X OR O
  function clickBox(id) {
    setCamIteration((prev) => {
      return prev + 1;
    });
    if (userSign === 0) {
      setUserSign(userSign + 1);
      setMainTab(
        mainTab.map((x) => {
          return { ...x, sign: x.id === id ? "X" : x.sign };
        })
      );
    } else {
      setUserSign(userSign - 1);
      setMainTab(
        mainTab.map((x) => {
          return { ...x, sign: x.id === id ? "O" : x.sign };
        })
      );
    }
  }

  //FUNCTION HOVER BOX
  function hoverBox(id, shouldHover) {
    setMainTab((prevMainTab) =>
      mainTab.map((x) => {
        return { ...x, hovered: x.id === id ? shouldHover : false };
      })
    );
  }

  //RETURN MAIN OBJECTS
  return (
    <div className="mainAppContainer">
      <div className="roateContainer"></div>
      {gameRules.Play ? (
        <div
          className={classNames("returnButton", {
            returnButtonOpacity: gameRules.Play,
          })}
          onClick={() => {
            setCamIteration(0);
            setXCount(0);
            setOCount(0);
            setUserSign(0);
            setGameRules((prev) => {
              return { ...prev, Camera: `rotateX(15deg) rotateY(-45deg)` };
            });
            setGameRules((prev) => {
              return { ...prev, Play: false };
            });
            setMainTab(MAIN_ARRAY);
            setWallEndGame(WALLS_GAME_STATE);
          }}
        >
          {"<"}
        </div>
      ) : (
        ""
      )}
      <div className="cubeContainer">
        {!endGame &&
        (gameRules.Play === false ||
          gameRules.GameMode === "CubeTicTacToe" ||
          gameRules.GameMode === "MegaTicTacToe") ? (
          <style>
            {`
          .cubeBackAnim{
            animation: mymove 0.8s;
          }
          
          @keyframes mymove {
              0%   {transform: ${position};
            }
              100% {transform: ${gameRules.Camera};
              }
          }
      `}
          </style>
        ) : (
          ""
        )}

        <div
          ref={divCube}
          className={classNames("cube", { cubeBackAnim: !globalDrag })}
          style={{ transform: position }}
        >
          <div className="cube_front">
            {gameRules.Play ? (
              <FrontWall
                fullWall={fullWall}
                wallEndGame={wallEndGame}
                setWallEndGame={setWallEndGame}
                hoverBox={hoverBox}
                mainTab={mainTab}
                clickBox={clickBox}
                userSign={userSign}
                validateWall={validateWall}
                setXCount={setXCount}
                setOCount={setOCount}
              />
            ) : (
              <FrontMenu hoverBox={hoverBox} mainTab={mainTab} />
            )}
          </div>
          <div className="cube_right">
            {gameRules.Play ? (
              <RightWall
                fullWall={fullWall}
                wallEndGame={wallEndGame}
                setWallEndGame={setWallEndGame}
                hoverBox={hoverBox}
                mainTab={mainTab}
                clickBox={clickBox}
                userSign={userSign}
                validateWall={validateWall}
                setXCount={setXCount}
                setOCount={setOCount}
              />
            ) : (
              <RightMenu hoverBox={hoverBox} mainTab={mainTab} />
            )}
          </div>
          <div className="cube_back">
            {gameRules.Play ? (
              <BackWall
                fullWall={fullWall}
                wallEndGame={wallEndGame}
                setWallEndGame={setWallEndGame}
                hoverBox={hoverBox}
                mainTab={mainTab}
                clickBox={clickBox}
                userSign={userSign}
                validateWall={validateWall}
                setXCount={setXCount}
                setOCount={setOCount}
              />
            ) : (
              <BackMenu hoverBox={hoverBox} mainTab={mainTab} />
            )}
          </div>
          <div className="cube_left">
            {gameRules.Play ? (
              <LeftWall
                fullWall={fullWall}
                wallEndGame={wallEndGame}
                setWallEndGame={setWallEndGame}
                hoverBox={hoverBox}
                mainTab={mainTab}
                clickBox={clickBox}
                userSign={userSign}
                validateWall={validateWall}
                setXCount={setXCount}
                setOCount={setOCount}
              />
            ) : (
              <LeftMenu hoverBox={hoverBox} mainTab={mainTab} />
            )}
          </div>
          <div className="cube_upper">
            {gameRules.Play ? (
              <UpperWall
                fullWall={fullWall}
                wallEndGame={wallEndGame}
                setWallEndGame={setWallEndGame}
                hoverBox={hoverBox}
                mainTab={mainTab}
                clickBox={clickBox}
                userSign={userSign}
                validateWall={validateWall}
                setXCount={setXCount}
                setOCount={setOCount}
              />
            ) : (
              <UpperMenu hoverBox={hoverBox} mainTab={mainTab} />
            )}
          </div>
          <div className="cube_bottom">
            {gameRules.Play ? (
              <BottomWall
                fullWall={fullWall}
                wallEndGame={wallEndGame}
                setWallEndGame={setWallEndGame}
                hoverBox={hoverBox}
                mainTab={mainTab}
                clickBox={clickBox}
                userSign={userSign}
                validateWall={validateWall}
                setXCount={setXCount}
                setOCount={setOCount}
              />
            ) : (
              <BottomMenu hoverBox={hoverBox} mainTab={mainTab} />
            )}
          </div>
        </div>
      </div>
      {gameRules.Play ? (
        <Counter
          endGame={endGame}
          userSign={userSign}
          xCount={xCount}
          oCount={oCount}
        />
      ) : (
        ""
      )}
    </div>
  );
}
