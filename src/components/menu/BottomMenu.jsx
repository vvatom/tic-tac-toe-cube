import classNames from "classnames";
import "./BottomMenu.css";
import { useContext } from "react";
import { Context } from "../../App";

export default function BottomMenu(props) {
  const { hoverBox, mainTab } = props;
  const [gameRules, setGameRules] = useContext(Context);

  return (
    <div className={classNames("bottomMenuContainer")}>
      <div
        className={classNames("bottomMenuContainer__leftUpCorner", {
          bottomMenu_pointerEventsNone: gameRules.Player === "PlayerVsPlayer",
          bottomMenuContainer__GreenGameMode:
            gameRules.Player === "PlayerVsPC" && gameRules.Level === "Easy",
          bottomMenuContainer__GreenHover: mainTab[7].hovered,
          bottomMenuContainer__GreenNotHover: !mainTab[7].hovered,
          whiteLoad_BottomMenu: gameRules.Load,
        })}
        onMouseEnter={() => hoverBox(7, true)}
        onMouseLeave={() => hoverBox(7, false)}
        onClick={() =>
          setGameRules((prev) => {
            return { ...prev, Level: "Easy" };
          })
        }
      />
      <div
        className={classNames("bottomMenuContainer__middleUp", {
          bottomMenu_pointerEventsNone: gameRules.Player === "PlayerVsPlayer",
          bottomMenuContainer__OrangeGameMode:
            gameRules.Player === "PlayerVsPC" && gameRules.Level === "Medium",
          bottomMenuContainer__OrangeHover: mainTab[14].hovered,
          bottomMenuContainer__OrangeNotHover: !mainTab[14].hovered,
          whiteLoad_BottomMenu: gameRules.Load,
        })}
        onMouseEnter={() => hoverBox(14, true)}
        onMouseLeave={() => hoverBox(14, false)}
        onClick={() =>
          setGameRules((prev) => {
            return { ...prev, Level: "Medium" };
          })
        }
      />
      <div
        className={classNames("bottomMenuContainer__righttUpCorner", {
          bottomMenu_pointerEventsNone: gameRules.Player === "PlayerVsPlayer",
          bottomMenuContainer__RedGameMode:
            gameRules.Player === "PlayerVsPC" && gameRules.Level === "Hard",
          bottomMenuContainer__RedHover: mainTab[23].hovered,
          bottomMenuContainer__RedNotHover: !mainTab[23].hovered,
          whiteLoad_BottomMenu: gameRules.Load,
        })}
        onMouseEnter={() => hoverBox(23, true)}
        onMouseLeave={() => hoverBox(23, false)}
        onClick={() =>
          setGameRules((prev) => {
            return { ...prev, Level: "Hard" };
          })
        }
      />
      <div className={classNames("bottomMenuContainer__leftCenter")} />
      <div className={classNames("bottomMenuContainer__middleCenter")} />
      <div
        className={classNames("bottomMenuContainer__rightCenter", {
          bottomMenuContainer__FirebrickHover: mainTab[22].hovered,
          bottomMenuContainer__FirebrickNotHover: !mainTab[22].hovered,
          whiteLoad_BottomMenu: gameRules.Load,
        })}
        onMouseEnter={() => hoverBox(22, true)}
        onMouseLeave={() => hoverBox(22, false)}
        onClick={() => {}}
      />
      <div className={classNames("bottomMenuContainer__leftdownCorner")} />
      <div className={classNames("bottomMenuContainer__centerDownCorner")} />
      <div
        className={classNames("bottomMenuContainer__rightDownCorner", {
          bottomMenuContainer__BlueGameMode: gameRules.Board === "About",
          bottomMenuContainer__BlueHover: mainTab[21].hovered,
          bottomMenuContainer__BlueNotHover: !mainTab[21].hovered,
          whiteLoad_BottomMenu: gameRules.Load,
        })}
        onMouseEnter={() => hoverBox(21, true)}
        onMouseLeave={() => hoverBox(21, false)}
        onClick={() => {
          setGameRules((prev) => {
            return { ...prev, Board: "About" };
          });
        }}
      />
    </div>
  );
}
