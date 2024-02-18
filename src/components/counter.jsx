import "./counter.css";
import classNames from "classnames";
import { useEffect, useState } from "react";

export default function Counter(props) {
  const { userSign, xCount, oCount } = props;

  // state to store time
  const [time, setTime] = useState(0);

  // state to check stopwatch running or not
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      // setting time from 0 to 1 every 10 milisecond using javascript setInterval method
      intervalId = setInterval(() => setTime(time + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  // Minutes calculation
  const minutes = Math.floor((time % 360000) / 6000);

  // Seconds calculation
  const seconds = Math.floor((time % 6000) / 100);

  // Milliseconds calculation
  const milliseconds = time % 100;

  // Method to start and stop timer
  const startAndStop = () => {
    setIsRunning(true);
  };

  // Method to reset timer back to 0
  const reset = () => {
    setTime(0);
  };

  return (
    <div className="counterContainer" onClick={startAndStop}>
      <p className={classNames("counterX", { counterXselect: userSign === 0 })}>
          X : {xCount}/6  
      </p>
      <p className="counterTimer">
          {minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}:
        {milliseconds.toString().padStart(2, "0")}  
      </p>
      <p className={classNames("counterO", { counterOselect: userSign === 1 })}>
          O : {oCount}/6  
      </p>
    </div>
  );
}
