import { createContext, useState } from 'react';
import './App.css';
import MainCube from './components/mainCube';

export const Context = createContext()

function App() {

  const [gameRules, setGameRules] = useState({
    GameMode: "FreeForAll",
    Player: "PlayerVsPlayer",
    Level: "Easy",
    Play: false,
    Board:"",
  });

  return (
    <div className="App">
      <Context.Provider value={[gameRules, setGameRules]}>
      <MainCube></MainCube>
      </Context.Provider>
    </div>
  );
}

export default App;
