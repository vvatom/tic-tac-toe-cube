import "./counter.css";
import classNames from "classnames";
import { useContext } from "react";
import { Context } from "../App";

export default function Counter(props) {
  const { userSign, xCount, oCount, minutes, seconds } = props;
  const [gameRules, setGameRules] = useContext(Context);

  return (
    <div
      className={classNames("counterContainer", {
        counterOpacity: gameRules.Play,
      })}
    >
      <p className={classNames("counterX", { counterXselect: userSign === 0 })}>
          X : {xCount}/6  
      </p>
      <p className="counterTimer">  00:00:00  </p>
      <p className={classNames("counterO", { counterOselect: userSign === 1 })}>
          O : {oCount}/6  
      </p>
    </div>
  );
}
