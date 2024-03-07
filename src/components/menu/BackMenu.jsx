import classNames from "classnames";
import { useContext } from "react";
import { Context } from "../../App";
import "./BackMenu.css";
import ScoreBoard from "./ScoreBoard";

export default function BackMenu(props) {
  const { hoverBox, mainTab, endGame } = props;
  const [gameRules, setGameRules] = useContext(Context);

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
          } else {
            setGameRules((prev) => {
              return { ...prev, Board: "ScoreBoard" };
            });
          }
        }}
      >
        {gameRules.Board === "ScoreBoard" ? "<" : "SCORE BOARD"}
      </div>

      <div className="backMenuContainer__middleUp"></div>
      <div className="backMenuContainer__righttUpCorner"></div>

      <div
        className={classNames("backMenuContainer__leftCenter", {
          backMenuContainer__BlueGameMode: gameRules.Board === "Styles",
          backMenuContainer__BlueHover: mainTab[18].hovered,
          backMenuContainer__BlueNotHover: !mainTab[18].hovered,
          whiteLoad_BackMenu: gameRules.Load,
        })}
        onMouseEnter={() => hoverBox(18, true)}
        onMouseLeave={() => hoverBox(18, false)}
        onClick={() => {
          if (gameRules.Board === "Styles") {
            setGameRules((prev) => {
              return {
                ...prev,
                Camera: `rotateX(15deg) rotateY(-45deg)`,
                Board: "",
              };
            });
          } else {
            setGameRules((prev) => {
              return { ...prev, Board: "Styles" };
            });
          }
        }}
      >
        {gameRules.Board === "Styles" ? "<" : "STYLES"}
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
          } else {
            setGameRules((prev) => {
              return { ...prev, Board: "About" };
            });
          }
        }}
      >
        {gameRules.Board === "About" ? "<" : "ABOUT"}
      </div>
      <div className="backMenuContainer__centerDownCorner"></div>
      <div className="backMenuContainer__rightDownCorner"></div>

      <div
        className={classNames({
          aboutContent_Container: gameRules.Board === "About",
          aboutContent_Container_Off: gameRules.Board !== "About",
        })}
      >
        <div className="aboutContent_Container_Free">
          <br />
          FREE FOR ALL
          <br />
          rotate cube and place
          <br /> signs wherever you want
        </div>
        <div className="aboutContent_Container_Cube">
          <br />
          CUBE TIC TAC TOE
          <br />
          complete one wall <br />
          at a time
        </div>
        <div className="aboutContent_Container_Mega">
          <br />
          MEGA TIC TAC TOE
          <br />
          place sign on the wall <br />
          one at a time
        </div>
      </div>
      <div
        className={classNames({
          scoreBoardContainer: gameRules.Board === "ScoreBoard",
          scoreBoardContainer_Off: gameRules.Board !== "ScoreBoard",
        })}
      >
        <ScoreBoard endGame={endGame} />
      </div>

      <div
        className={classNames({
          styleContent_Container: gameRules.Board === "Styles",
          // styleContent_Container_Off: gameRules.Board !== "Styles",
        })}
      >
        <div className="leftUp_Theme"></div>
        <div className="rightUp_Theme"></div>
        <div className="leftMiddle_Theme"></div>
        <div className="rightMiddle_Theme"></div>
        <div className="leftDown_Theme"></div>
        <div className="rightDown_Theme"></div>
      </div>
    </div>
  );
}
