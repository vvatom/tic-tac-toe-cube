import { useEffect, useState, useContext } from "react";
import "./ScoreBoard.css";
import { Context } from "../../App";
import classNames from "classnames";

// id time x o gamemode

export default function ScoreBoard(props) {
  const { endGame } = props;
  const [gameRules, setGameRules] = useContext(Context);

  const [actualLocalStorage, setActualLocalStorage] = useState([]);

  useEffect(() => {
    let actualLocalStorageParse = JSON.parse(
      localStorage.getItem("scoreBoardArray")
    );
    setActualLocalStorage(actualLocalStorageParse);
  }, [endGame]);
  return (
    <div className="scoreBoardMainContainer">
      <div
        className={classNames("scoreBoardMainContainer_menu", {
          scoreBoardMainContainer_menu_off: actualLocalStorage.length === 0,
        })}
      >
        <div className="scoreBoardElement_id">No.</div>
        <div className="scoreBoardElement_time">TIME</div>
        <div className="scoreBoardElement_x">X</div>
        <div className="scoreBoardElement_o">O</div>
        <div className="scoreBoardElement_gamemode">MODE</div>
      </div>
      <div className="boardElements">
        {actualLocalStorage.length === 0 ? (
          <div className="emptyScoreBoard">FINISH ANY GAME</div>
        ) : (
          actualLocalStorage.map((element) => {
            return (
              <div className="scoreBoardElement">
                <div className="scoreBoardElement_id">
                  {element.id.toString().padStart(2, "0")}.
                </div>
                <div className="scoreBoardElement_time">{element.time}</div>
                <div className="scoreBoardElement_x">{element.X}</div>
                <div className="scoreBoardElement_o">{element.O}</div>
                <div className="scoreBoardElement_gamemode">
                  {element.gamemode === "FreeForAll"
                    ? "Free"
                    : "" || element.gamemode === "MegaTicTacToe"
                    ? "Mega"
                    : "" || element.gamemode === "CubeTicTacToe"
                    ? "Cube"
                    : ""}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
