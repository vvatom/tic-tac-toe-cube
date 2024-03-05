import classNames from "classnames";
import { useContext } from "react";
import { Context } from "../../App";
import "./UpperMenu.css";

export default function UpperMenu(props) {
  const { hoverBox, mainTab } = props;
  const [gameRules, setGameRules] = useContext(Context);

  return (
    <div className="upperMenuContainer">
      <div className="upperMenuContainer__leftUpCorner"></div>
      <div className="upperMenuContainer__middleUp"></div>
      <div
        className={classNames("upperMenuContainer__righttUpCorner", {
          upperMenuContainer__BlueGameMode: gameRules.Board === "ScoreBoard",
          upperMenuContainer__BlueHover: mainTab[15].hovered,
          upperMenuContainer__BlueNotHover: !mainTab[15].hovered,
          whiteLoad_UpperMenu: gameRules.Load,
        })}
        onMouseEnter={() => hoverBox(15, true)}
        onMouseLeave={() => hoverBox(15, false)}
        onClick={() => {
          if (gameRules.Board === "ScoreBoard") {
            setGameRules((prev) => {
              return {
                ...prev,
                Camera: `rotateX(15deg) rotateY(-45deg)`,
                Board: "",
              };
            });
          } else {
            setGameRules((prev) => {
              return { ...prev, Board: "ScoreBoard" };
            });
          }
        }}
      ></div>
      <div className="upperMenuContainer__leftCenter"></div>
      <div className="upperMenuContainer__middleCenter"></div>
      <div
        className={classNames("upperMenuContainer__rightCenter", {
          upperMenuContainer__RoyalblueHover: mainTab[16].hovered,
          upperMenuContainer__RoyalblueNotHover: !mainTab[16].hovered,
          whiteLoad_UpperMenu: gameRules.Load,
        })}
        onMouseEnter={() => hoverBox(16, true)}
        onMouseLeave={() => hoverBox(16, false)}
        onClick={() => {}}
      ></div>
      <div
        className={classNames("upperMenuContainer__leftdownCorner", {
          upperMenuContainer__RedGameMode: gameRules.GameMode === "FreeForAll",
          upperMenuContainer__RedHover: mainTab[5].hovered,
          upperMenuContainer__RedNotHover: !mainTab[5].hovered,
          whiteLoad_UpperMenu: gameRules.Load,
        })}
        onMouseEnter={() => hoverBox(5, true)}
        onMouseLeave={() => hoverBox(5, false)}
        onClick={() =>
          setGameRules((prev) => {
            return { ...prev, GameMode: "FreeForAll" };
          })
        }
      ></div>
      <div
        className={classNames("upperMenuContainer__centerDownCorner", {
          upperMenuContainer__RedGameMode:
            gameRules.GameMode === "CubeTicTacToe",
          upperMenuContainer__RedHover: mainTab[12].hovered,
          upperMenuContainer__RedNotHover: !mainTab[12].hovered,
          whiteLoad_UpperMenu: gameRules.Load,
        })}
        onMouseEnter={() => hoverBox(12, true)}
        onMouseLeave={() => hoverBox(12, false)}
        onClick={() =>
          setGameRules((prev) => {
            return { ...prev, GameMode: "CubeTicTacToe" };
          })
        }
      ></div>
      <div
        className={classNames("upperMenuContainer__rightDownCorner", {
          upperMenuContainer__RedGameMode:
            gameRules.GameMode === "MegaTicTacToe",
          upperMenuContainer__RedHover: mainTab[17].hovered,
          upperMenuContainer__RedNotHover: !mainTab[17].hovered,
          whiteLoad_UpperMenu: gameRules.Load,
        })}
        onMouseEnter={() => hoverBox(17, true)}
        onMouseLeave={() => hoverBox(17, false)}
        onClick={() =>
          setGameRules((prev) => {
            prev.GameMode = "CubeTicTacToe";
            return { ...prev, GameMode: "MegaTicTacToe" };
          })
        }
      ></div>
      <div
        className={classNames({
          upperAbout:
            gameRules.Board === "About" || gameRules.Board === "ScoreBoard",
          upperAbout_Off:
            gameRules.Board === "" || gameRules.Board === "Styles",
        })}
      ></div>
    </div>
  );
}
