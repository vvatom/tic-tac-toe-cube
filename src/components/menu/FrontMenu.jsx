import classNames from "classnames";
import "./FrontMenu.css";
import { useContext } from "react";
import { Context } from "../../App";

export default function FrontMenu(props) {
  const { hoverBox, mainTab, setActualWall } = props;
  const [gameRules, setGameRules] = useContext(Context);

  return (
    <div className="mainMenuContainer">
      <div
        className={classNames("mainMenuContainer__leftUpCorner", {
          mainMenuContainer__RedGameMode: gameRules.GameMode === "FreeForAll",
          mainMenuContainer__RedHover: mainTab[5].hovered,
          mainMenuContainer__RedNotHover: !mainTab[5].hovered,
          whiteLoad_FrontMenu: gameRules.Load,
        })}
        onMouseEnter={() => hoverBox(5, true)}
        onMouseLeave={() => hoverBox(5, false)}
        onClick={() =>
          setGameRules((prev) => {
            return { ...prev, GameMode: "FreeForAll" };
          })
        }
      >
        FREE FOR ALL
      </div>
      <div
        className={classNames("mainMenuContainer__middleUp", {
          mainMenuContainer__RedGameMode:
            gameRules.GameMode === "CubeTicTacToe",
          mainMenuContainer__RedHover: mainTab[12].hovered,
          mainMenuContainer__RedNotHover: !mainTab[12].hovered,
          whiteLoad_FrontMenu: gameRules.Load,
        })}
        onMouseEnter={() => hoverBox(12, true)}
        onMouseLeave={() => hoverBox(12, false)}
        onClick={() =>
          setGameRules((prev) => {
            return { ...prev, GameMode: "CubeTicTacToe" };
          })
        }
      >
        CUBE TIC TAC TOE
      </div>
      <div
        className={classNames("mainMenuContainer__righttUpCorner", {
          mainMenuContainer__RedGameMode:
            gameRules.GameMode === "MegaTicTacToe",
          mainMenuContainer__RedHover: mainTab[17].hovered,
          mainMenuContainer__RedNotHover: !mainTab[17].hovered,
          whiteLoad_FrontMenu: gameRules.Load,
        })}
        onMouseEnter={() => hoverBox(17, true)}
        onMouseLeave={() => hoverBox(17, false)}
        onClick={() =>
          setGameRules((prev) => {
            prev.GameMode = "CubeTicTacToe";
            return { ...prev, GameMode: "MegaTicTacToe" };
          })
        }
      >
        MEGA TIC TAC TOE
      </div>

      <div
        className={classNames("mainMenuContainer__leftCenter", {
          mainMenuContainer__BlueGameMode:
            gameRules.Player === "PlayerVsPlayer",
          mainMenuContainer__BlueHover: mainTab[6].hovered,
          mainMenuContainer__BlueNotHover: !mainTab[6].hovered,
          whiteLoad_FrontMenu: gameRules.Load,
        })}
        onMouseEnter={() => hoverBox(6, true)}
        onMouseLeave={() => hoverBox(6, false)}
        onClick={() =>
          setGameRules((prev) => {
            return { ...prev, Player: "PlayerVsPlayer" };
          })
        }
      >
        PLAYER
        <br />
        VS
        <br />
        PLAYER
      </div>

      <div
        className={classNames("mainMenuContainer__middleCenter", {
          mainMenuContainer__MagentaGameMode: gameRules.Play === true,
          mainMenuContainer__MagentaHover: mainTab[13].hovered,
          mainMenuContainer__MagentaNotHover: !mainTab[13].hovered,
          whiteLoad_FrontMenu: gameRules.Load,
        })}
        onMouseEnter={() => hoverBox(13, true)}
        onMouseLeave={() => hoverBox(13, false)}
        onClick={() => {
          if (gameRules.GameMode === "FreeForAll") {
            setGameRules((prev) => {
              return { ...prev, Camera: `rotateX(-45deg) rotateY(-1125deg)` };
            });
            setActualWall('Free')
          }

          if (gameRules.GameMode === "CubeTicTacToe") {
            setGameRules((prev) => {
              return { ...prev, Camera: `rotateX(-65deg) rotateY(-1160deg)` };
            });
            setActualWall('UpperWall')
          }

          if (gameRules.GameMode === "MegaTicTacToe") {
            setGameRules((prev) => {
              return { ...prev, Camera: `rotateX(-90deg) rotateY(1080deg)` };
            });
            setActualWall('UpperWall')
          }

          setGameRules((prev) => {
            return { ...prev, Load: true };
          });
          //TIMEOUT
          setTimeout(() => {
            if (gameRules.GameMode === "MegaTicTacToe") {
              setGameRules((prev) => {
                return { ...prev, Camera: `rotateX(-90deg) rotateY(0deg)` };
              });
            }
            if (gameRules.GameMode === "CubeTicTacToe") {
              setGameRules((prev) => {
                return { ...prev, Camera: `rotateX(-65deg) rotateY(-80deg)` };
              });
            }

            setGameRules((prev) => {
              return { ...prev, Play: true };
            });
            setGameRules((prev) => {
              return { ...prev, Load: false };
            });
          }, 800);
        }}
      >
        PLAY
      </div>

      <div
        className={classNames("mainMenuContainer__rightCenter", {
          mainMenuContainer__BlueGameMode: gameRules.Player === "PlayerVsPC",
          mainMenuContainer__BlueHover: mainTab[20].hovered,
          mainMenuContainer__BlueNotHover: !mainTab[20].hovered,
          whiteLoad_FrontMenu: gameRules.Load,
        })}
        onMouseEnter={() => hoverBox(20, true)}
        onMouseLeave={() => hoverBox(20, false)}
        onClick={() =>
          setGameRules((prev) => {
            return { ...prev, Player: "PlayerVsPC" };
          })
        }
      >
        PLAYER
        <br />
        VS
        <br />
        PC
      </div>
      <div
        className={classNames("mainMenuContainer__leftdownCorner", {
          mainMenu_pointerEventsNone: gameRules.Player === "PlayerVsPlayer",
          mainMenuContainer__GreenGameMode:
            gameRules.Player === "PlayerVsPC" && gameRules.Level === "Easy",
          mainMenuContainer__GreenHover: mainTab[7].hovered,
          mainMenuContainer__GreenNotHover: !mainTab[7].hovered,
          whiteLoad_FrontMenu: gameRules.Load,
        })}
        onMouseEnter={() => hoverBox(7, true)}
        onMouseLeave={() => hoverBox(7, false)}
        onClick={() =>
          setGameRules((prev) => {
            return { ...prev, Level: "Easy" };
          })
        }
      >
        EASY
      </div>
      <div
        className={classNames("mainMenuContainer__centerDownCorner", {
          mainMenu_pointerEventsNone: gameRules.Player === "PlayerVsPlayer",
          mainMenuContainer__OrangeGameMode:
            gameRules.Player === "PlayerVsPC" && gameRules.Level === "Medium",
          mainMenuContainer__OrangeHover: mainTab[14].hovered,
          mainMenuContainer__OrangeNotHover: !mainTab[14].hovered,
          whiteLoad_FrontMenu: gameRules.Load,
        })}
        onMouseEnter={() => hoverBox(14, true)}
        onMouseLeave={() => hoverBox(14, false)}
        onClick={() =>
          setGameRules((prev) => {
            return { ...prev, Level: "Medium" };
          })
        }
      >
        MEDIUM
      </div>
      <div
        className={classNames("mainMenuContainer__rightDownCorner", {
          mainMenu_pointerEventsNone: gameRules.Player === "PlayerVsPlayer",
          mainMenuContainer__RedGameMode:
            gameRules.Player === "PlayerVsPC" && gameRules.Level === "Hard",
          mainMenuContainer__RedHover: mainTab[23].hovered,
          mainMenuContainer__RedNotHover: !mainTab[23].hovered,
          whiteLoad_FrontMenu: gameRules.Load,
        })}
        onMouseEnter={() => hoverBox(23, true)}
        onMouseLeave={() => hoverBox(23, false)}
        onClick={() =>
          setGameRules((prev) => {
            return { ...prev, Level: "Hard" };
          })
        }
      >
        HARD
      </div>
    </div>
  );
}
