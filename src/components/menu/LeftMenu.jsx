import classNames from "classnames";
import { useContext } from "react";
import { Context } from "../../App";
import "./LeftMenu.css";

export default function LeftMenu(props) {
  const { hoverBox, mainTab } = props;
  const [gameRules, setGameRules] = useContext(Context);
  return (
    <div className="leftMenuContainer">
      <div
        className={classNames({
          leftMenuContainer__leftUpCorner_blue: gameRules.Board === "About",
          leftMenuContainer__leftUpCorner: gameRules.Board !== "About",
        })}
      ></div>
      <div
        className={classNames({
          leftMenuContainer__middleUp_blue: gameRules.Board === "About",
          leftMenuContainer__middleUp: gameRules.Board !== "About",
        })}
      ></div>
      <div
        className={classNames({
          leftMenuContainer__righttUpCorner_blue: gameRules.Board === "About",
          leftMenuContainer__righttUpCorner: gameRules.Board !== "About",
        })}
      ></div>
      <div className="leftMenuContainer__leftCenter"></div>
      <div className="leftMenuContainer__middleCenter"></div>
      <div className="leftMenuContainer__rightCenter"></div>
      <div
        className={classNames("leftMenuContainer__leftdownCorner", {
          leftMenu_pointerEventsNone: gameRules.Player === "PlayerVsPlayer",
          leftMenuContainer__GreenGameMode:
            gameRules.Player === "PlayerVsPC" && gameRules.Level === "Easy",
          leftMenuContainer__GreenHover: mainTab[7].hovered,
          leftMenuContainer__GreenNotHover: !mainTab[7].hovered,
          whiteLoad_LeftMenu: gameRules.Load,
        })}
        onMouseEnter={() => hoverBox(7, true)}
        onMouseLeave={() => hoverBox(7, false)}
        onClick={() =>
          setGameRules((prev) => {
            return { ...prev, Level: "Easy" };
          })
        }
      ></div>
      <div
        className={classNames("leftMenuContainer__centerDownCorner", {
          mainMenuContainer__BlueGameMode:
            gameRules.Player === "PlayerVsPlayer",
          mainMenuContainer__BlueHover: mainTab[6].hovered,
          mainMenuContainer__BlueNotHover: !mainTab[6].hovered,
          whiteLoad_LeftMenu: gameRules.Load,
        })}
        onMouseEnter={() => hoverBox(6, true)}
        onMouseLeave={() => hoverBox(6, false)}
        onClick={() =>
          setGameRules((prev) => {
            return { ...prev, Player: "PlayerVsPlayer" };
          })
        }
      ></div>
      <div
        className={classNames("leftMenuContainer__rightDownCorner", {
          leftMenuContainer__RedGameMode: gameRules.GameMode === "FreeForAll",
          leftMenuContainer__RedHover: mainTab[5].hovered,
          leftMenuContainer__RedNotHover: !mainTab[5].hovered,
          whiteLoad_LeftMenu: gameRules.Load,
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
        className={classNames({
          leftScoreBoard: gameRules.Board === "ScoreBoard",
          leftScoreBoard_Off: gameRules.Board !== "ScoreBoard",
        })}
      ></div>
    </div>
  );
}
