import './App.css'
import { useState } from 'react';
import PlayGame from './components/Startgame/PlayGame';
import StartGame from './components/Startgame/StartGame';

function App() {
  
    const [ startGame, setStartGame ] = useState(false);

    const gamePlay = () => {

      setStartGame( (prev) => !prev )
    }

  return (
    <>
      { startGame ? <PlayGame/> : <StartGame game={gamePlay}/> }
    </>
  )
}

export default App
