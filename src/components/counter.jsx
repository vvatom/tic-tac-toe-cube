import "./counter.css";
import classNames from "classnames";
import { useContext, useEffect, useState } from "react";
import { Context } from "../App";

export default function Counter(props) {
  const { userSign, xCount, oCount, endGame, milliseconds, minutes, seconds } =
    props;
  const [gameRules, setGameRules] = useContext(Context);

  return (
    <div
      className={classNames("counterContainer", {
        counterOpacity: gameRules.Play,
      })}
    >
      <p
        className={classNames("counterX", {
          counterEndGame: endGame,
          counterXselect: userSign === 0 && !endGame,
        })}
      >
          X : {xCount}/6  
      </p>
      <p
        className={classNames("counterTimer", { counterEndGame: endGame })}
      >{`  ${minutes.toString().padStart(2, "0")}:${seconds
        .toString()
        .padStart(2, "0")}:${milliseconds.toString().padStart(2, "0")}  `}</p>
      <p
        className={classNames("counterO", {
          counterEndGame: endGame,
          counterOselect: userSign === 1 && !endGame,
        })}
      >
          O : {oCount}/6  
      </p>
    </div>
  );
}
