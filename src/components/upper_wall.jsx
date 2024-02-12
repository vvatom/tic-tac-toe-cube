import classNames from "classnames";
import "./upper_wall.css";

// 3  10 15
// 4  11 16
// 5  12 17

export default function UpperWall(props) {
  const { mainTab, clickBox, userSign } = props;

  return (
    <div className="upperWallContainer">
      <div
        className={classNames("upperWallContainer__leftUpCorner", {
          blueHover: userSign === 0 && mainTab[3].sign === "",
          blue_X: mainTab[3].sign === "X",
          redHover: userSign === 1 && mainTab[3].sign === "",
          red_O: mainTab[3].sign === "O",
        })}
        onClick={() => {
          clickBox(3);
        }}
      >
        <p>{mainTab[3].sign}</p>
      </div>
      <div
        className={classNames("upperWallContainer__middleUp", {
          blueHover: userSign === 0 && mainTab[10].sign === "",
          blue_X: mainTab[10].sign === "X",
          redHover: userSign === 1 && mainTab[10].sign === "",
          red_O: mainTab[10].sign === "O",
        })}
        onClick={() => {
          clickBox(10);
        }}
      >
        <p>{mainTab[10].sign}</p>
      </div>
      <div
        className={classNames("upperWallContainer__rightUpCorner", {
          blueHover: userSign === 0 && mainTab[15].sign === "",
          blue_X: mainTab[15].sign === "X",
          redHover: userSign === 1 && mainTab[15].sign === "",
          red_O: mainTab[15].sign === "O",
        })}
        onClick={() => {
          clickBox(15);
        }}
      >
        <p>{mainTab[15].sign}</p>
      </div>

      <div
        className={classNames("upperWallContainer__leftCenterCorner", {
          blueHover: userSign === 0 && mainTab[4].sign === "",
          blue_X: mainTab[4].sign === "X",
          redHover: userSign === 1 && mainTab[4].sign === "",
          red_O: mainTab[4].sign === "O",
        })}
        onClick={() => {
          clickBox(4);
        }}
      >
        <p>{mainTab[4].sign}</p>
      </div>
      <div
        className={classNames("upperWallContainer__middleCenterUp", {
          blueHover: userSign === 0 && mainTab[11].sign === "",
          blue_X: mainTab[11].sign === "X",
          redHover: userSign === 1 && mainTab[11].sign === "",
          red_O: mainTab[11].sign === "O",
        })}
        onClick={() => {
          clickBox(11);
        }}
      >
        <p>{mainTab[11].sign}</p>
      </div>
      <div
        className={classNames("upperWallContainer__rightCenterorner", {
          blueHover: userSign === 0 && mainTab[16].sign === "",
          blue_X: mainTab[16].sign === "X",
          redHover: userSign === 1 && mainTab[16].sign === "",
          red_O: mainTab[16].sign === "O",
        })}
        onClick={() => {
          clickBox(16);
        }}
      >
        <p>{mainTab[16].sign}</p>
      </div>

      <div
        className={classNames("upperWallContainer__leftDownCorner", {
          blueHover: userSign === 0 && mainTab[5].sign === "",
          blue_X: mainTab[5].sign === "X",
          redHover: userSign === 1 && mainTab[5].sign === "",
          red_O: mainTab[5].sign === "O",
        })}
        onClick={() => {
          clickBox(5);
        }}
      >
        <p>{mainTab[5].sign}</p>
      </div>
      <div
        className={classNames("upperWallContainer__middleDown", {
          blueHover: userSign === 0 && mainTab[12].sign === "",
          blue_X: mainTab[12].sign === "X",
          redHover: userSign === 1 && mainTab[12].sign === "",
          red_O: mainTab[12].sign === "O",
        })}
        onClick={() => {
          clickBox(12);
        }}
      >
        <p>{mainTab[12].sign}</p>
      </div>
      <div
        className={classNames("upperWallContainer__rightDownCorner", {
          blueHover: userSign === 0 && mainTab[17].sign === "",
          blue_X: mainTab[17].sign === "X",
          redHover: userSign === 1 && mainTab[17].sign === "",
          red_O: mainTab[17].sign === "O",
        })}
        onClick={() => {
          clickBox(17);
        }}
      >
        <p>{mainTab[17].sign}</p>
      </div>
    </div>
  );
}
