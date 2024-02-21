import { createContext, useState } from 'react';
import './App.css';
import MainCube from './components/mainCube';
import classNames from 'classnames';

export const Context = createContext()

function App() {

  const [gameRules, setGameRules] = useState({
    GameMode: "FreeForAll",
    Player: "PlayerVsPlayer",
    Level: "Easy",
    Play: false,
    Board:"",
    Camera:`rotateX(15deg) rotateY(-45deg)`,
    Load: false,

  });

  return (
    <div className={classNames("App",{pointerEventsApp:gameRules.Load})}>
      <Context.Provider value={[gameRules, setGameRules]}>
      <MainCube></MainCube>
      </Context.Provider>
    </div>
  );
}

export default App;
