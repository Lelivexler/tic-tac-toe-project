import { useState } from 'react';

import Player from './components/player.jsx';
import GameBoard from './components/GameBoard.jsx';

function App() {
  const [activePlayer, setActivePlayer] = useState('X');

  function handleSelectSquar(){
    setActivePlayer((curActivePlayer) => curActivePlayer==='X' ? 'O' : 'X');
  }
  
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="player 1" symbole="X" isActive={activePlayer ==='X'}/>
          <Player initialName="player 2" symbole="O" isActive={activePlayer ==='O'}/>
        </ol>
        <GameBoard onSelectSquar={handleSelectSquar} activePlayerSymbole={activePlayer} />
        Game Bord
      </div>
      LOG
    </main>
  )
}

export default App
