import classNames from "classnames";
import "./RightMenu.css";
import gitHubLogo from "../../assets/github_ico.png";
import linkedinLogo from "../../assets/linkedin_ico.png";
import mailLogo from "../../assets/mail_ico.png";
import { useContext, useState } from "react";
import { Context } from "../../App";

export default function RightMenu(props) {
  const { hoverBox, mainTab } = props;
  const [gameRules, setGameRules] = useContext(Context);

  return (
    <div className="secondMenuContainer">
      <div
        className={classNames("secondMenuContainer__leftUpCorner", {
          secondMenuContainer__BlueGameMode: gameRules.Board === "ScoreBoard",
          secondMenuContainer__BlueHover: mainTab[15].hovered,
          secondMenuContainer__BlueNotHover: !mainTab[15].hovered,
          whiteLoad_RightMenu: gameRules.Load,
        })}
        onMouseEnter={() => hoverBox(15, true)}
        onMouseLeave={() => hoverBox(15, false)}
        onClick={() => {
          setGameRules((prev) => {
            return { ...prev, Camera: `rotateX(365deg) rotateY(-195deg)` };
          });
          setGameRules((prev) => {
            return { ...prev, Board: "ScoreBoard" };
          });
        }}
      >
        SCORE BOARD
      </div>
      <div
        className={classNames("secondMenuContainer__middleUp", {
          secondMenuContainer__BlueHover: mainTab[18].hovered,
          secondMenuContainer__BlueNotHover: !mainTab[18].hovered,
          whiteLoad_RightMenu: gameRules.Load,
        })}
        onMouseEnter={() => hoverBox(18, true)}
        onMouseLeave={() => hoverBox(18, false)}
        onClick={() => {}}
      >
        <a
          href="https://vvatom.github.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          MY PROJECTS
        </a>
      </div>
      <div
        className={classNames("secondMenuContainer__righttUpCorner", {
          secondMenuContainer__BlueGameMode: gameRules.Board === "About",
          secondMenuContainer__BlueHover: mainTab[21].hovered,
          secondMenuContainer__BlueNotHover: !mainTab[21].hovered,
          whiteLoad_RightMenu: gameRules.Load,
        })}
        onMouseEnter={() => hoverBox(21, true)}
        onMouseLeave={() => hoverBox(21, false)}
        onClick={() => {
          setGameRules((prev) => {
            return { ...prev, Camera: `rotateX(-5deg) rotateY(-555deg)` };
          });
          setGameRules((prev) => {
            return { ...prev, Board: "About" };
          });
        }}
      >
        ABOUT
      </div>
      <div
        className={classNames("secondMenuContainer__leftCenter", {
          secondMenuContainer__RoyalblueHover: mainTab[16].hovered,
          secondMenuContainer__RoyalblueNotHover: !mainTab[16].hovered,
          whiteLoad_RightMenu: gameRules.Load,
        })}
        onMouseEnter={() => hoverBox(16, true)}
        onMouseLeave={() => hoverBox(16, false)}
        onClick={() => {}}
      >
        <a
          href="https://www.linkedin.com/in/damian-drzewiecki-0a6167246/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className={classNames("imgMenu", { whiteLoad_img: gameRules.Load })}
            src={linkedinLogo}
            alt="Linkedin_logo"
          />
        </a>
      </div>
      <div
        className={classNames("secondMenuContainer__middleCenter", {
          secondMenuContainer__MidnightblueHover: mainTab[19].hovered,
          secondMenuContainer__MidnightblueNotHover: !mainTab[19].hovered,
          whiteLoad_RightMenu: gameRules.Load,
        })}
        onMouseEnter={() => hoverBox(19, true)}
        onMouseLeave={() => hoverBox(19, false)}
        onClick={() => {}}
      >
        <a
          href="https://github.com/vvatom"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className={classNames("imgMenu", { whiteLoad_img: gameRules.Load })}
            src={gitHubLogo}
            alt="GitHub_logo"
          />
        </a>
      </div>
      <div
        className={classNames("secondMenuContainer__rightCenter", {
          secondMenuContainer__FirebrickHover: mainTab[22].hovered,
          secondMenuContainer__FirebrickNotHover: !mainTab[22].hovered,
          whiteLoad_RightMenu: gameRules.Load,
        })}
        onMouseEnter={() => hoverBox(22, true)}
        onMouseLeave={() => hoverBox(22, false)}
        onClick={() => {}}
      >
        <a href="mailto:drzewiecki.damian96@gmail.com">
          <img
            className={classNames("imgMenu", { whiteLoad_img: gameRules.Load })}
            src={mailLogo}
            alt="Mail_logo"
          />
        </a>
      </div>
      <div
        className={classNames("secondMenuContainer__leftdownCorner", {
          secondMenuContainer__RedGameMode:
            gameRules.GameMode === "MegaTicTacToe",
          secondMenuContainer__RedHover: mainTab[17].hovered,
          secondMenuContainer__RedNotHover: !mainTab[17].hovered,
          whiteLoad_RightMenu: gameRules.Load,
        })}
        onClick={() =>
          setGameRules((prev) => {
            prev.GameMode = "CubeTicTacToe";
            return { ...prev, GameMode: "MegaTicTacToe" };
          })
        }
        onMouseEnter={() => hoverBox(17, true)}
        onMouseLeave={() => hoverBox(17, false)}
      ></div>
      <div
        className={classNames("secondMenuContainer__centerDownCorner", {
          secondMenuContainer__BlueGameMode: gameRules.Player === "PlayerVsPC",
          secondMenuContainer__BlueHover: mainTab[20].hovered,
          secondMenuContainer__BlueNotHover: !mainTab[20].hovered,
          whiteLoad_RightMenu: gameRules.Load,
        })}
        onMouseEnter={() => hoverBox(20, true)}
        onMouseLeave={() => hoverBox(20, false)}
        onClick={() =>
          setGameRules((prev) => {
            return { ...prev, Player: "PlayerVsPC" };
          })
        }
      ></div>
      <div
        className={classNames("secondMenuContainer__rightDownCorner", {
          secondPointerEventsNone: gameRules.Player === "PlayerVsPlayer",
          secondMenuContainer__RedGameMode:
            gameRules.Player === "PlayerVsPC" && gameRules.Level === "Hard",
          secondMenuContainer__RedHover: mainTab[23].hovered,
          secondMenuContainer__RedNotHover: !mainTab[23].hovered,
          whiteLoad_RightMenu: gameRules.Load,
        })}
        onMouseEnter={() => hoverBox(23, true)}
        onMouseLeave={() => hoverBox(23, false)}
        onClick={() =>
          setGameRules((prev) => {
            return { ...prev, Level: "Hard" };
          })
        }
      ></div>
    </div>
  );
}
