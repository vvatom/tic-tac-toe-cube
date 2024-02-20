import classNames from "classnames";
import { useContext } from "react";
import { Context } from "../../App";
import "./BackMenu.css";

export default function BackMenu(props) {
  const { hoverBox, mainTab } = props;
  const [gameRules, setGameRules] = useContext(Context);
  console.log(gameRules.Board);
  return (
    <div className="backMenuContainer">
      <div
        className={classNames("backMenuContainer__leftUpCorner", {
          backMenuContainer__BlueGameMode: gameRules.Board === "ScoreBoard",
          backMenuContainer__BlueHover: mainTab[15].hovered,
          backMenuContainer__BlueNotHover: !mainTab[15].hovered,
          whiteLoad_BackMenu: gameRules.Load,
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
          }

          setGameRules((prev) => {
            return { ...prev, Board: "ScoreBoard" };
          });
        }}
      >
        {gameRules.Board === "ScoreBoard" ? "◄" : "SCORE BOARD"}
      </div>
      <div className="backMenuContainer__middleUp"></div>
      <div className="backMenuContainer__righttUpCorner"></div>
      <div
        className={classNames("backMenuContainer__leftCenter", {
          backMenuContainer__BlueHover: mainTab[18].hovered,
          backMenuContainer__BlueNotHover: !mainTab[18].hovered,
          whiteLoad_BackMenu: gameRules.Load,
        })}
        onMouseEnter={() => hoverBox(18, true)}
        onMouseLeave={() => hoverBox(18, false)}
        onClick={() => {}}
      >
        MY PROJECTS
      </div>
      <div className="backMenuContainer__middleCenter"></div>
      <div className="backMenuContainer__rightCenter"></div>
      <div
        className={classNames("backMenuContainer__leftdownCorner", {
          backMenuContainer__BlueGameMode: gameRules.Board === "About",
          backMenuContainer__BlueHover: mainTab[21].hovered,
          backMenuContainer__BlueNotHover: !mainTab[21].hovered,
          whiteLoad_BackMenu: gameRules.Load,
        })}
        onMouseEnter={() => hoverBox(21, true)}
        onMouseLeave={() => hoverBox(21, false)}
        onClick={() => {
          if (gameRules.Board === "About") {
            setGameRules((prev) => {
              return {
                ...prev,
                Camera: `rotateX(15deg) rotateY(-45deg)`,
                Board: "",
              };
            });
          }
          setGameRules((prev) => {
            return { ...prev, Board: "About" };
          });
        }}
      >
        {gameRules.Board === "About" ? "◄" : "ABOUT"}
      </div>
      <div className="backMenuContainer__centerDownCorner"></div>
      <div className="backMenuContainer__rightDownCorner"></div>
    </div>
  );
}
