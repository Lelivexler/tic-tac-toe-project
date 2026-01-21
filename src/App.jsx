import { useState } from 'react';

import Player from './components/player.jsx';
import GameBoard from './components/GameBoard.jsx';
import Log from './components/Log.jsx';
import {WINNING_COMBINATIONS} from './winning-combinations.js'
import GameOver from './components/game-over.jsx';

const PLAYERS = {
      X: 'player 1',
      O: 'player 2 '
    };
const INITIAL_GAME_BOARD = [
    [null,null,null],
    [null,null,null],
    [null,null,null],
];

function deriveActivePlayer(gameTurns){
  let currentPlayer = 'X';

      if(gameTurns.length > 0 && gameTurns[0].player === 'X'){
        currentPlayer = 'O'   
      }

  return currentPlayer;
}

function derivedGameBoard(gameTurns){
  let gameBoard = [...INITIAL_GAME_BOARD.map(array => [...array])];

    for(const turn of gameTurns){
        const {squar, player} = turn;
        const {row, col} = squar;

        gameBoard[row][col] = player;
    }
  return gameBoard;
}

function deriveWinner(gameBoard, players){
  let winner = null;

  for(const combination of WINNING_COMBINATIONS){
    const firstSquarSymbole = gameBoard[combination[0].row][combination[0].column];
    const secondSquarSymbole = gameBoard[combination[1].row][combination[1].column];
    const thirdSquarSymbole = gameBoard[combination[2].row][combination[2].column];

    if(firstSquarSymbole && 
      firstSquarSymbole === secondSquarSymbole && 
      secondSquarSymbole ===thirdSquarSymbole){
        winner = players[firstSquarSymbole];
      }
  }
  return winner;
}

function App() {

  const[players, setPlayers] = useState(PLAYERS);

  {/*כל פעם שנבחר תור נוסיף את התור הזה למערך */}
  const[gameTurns, setGameTurns] = useState([]);

  const activePlayer =  deriveActivePlayer(gameTurns);

  const gameBoard = derivedGameBoard(gameTurns);

  const winner = deriveWinner(gameBoard, players);

  const hasDraw = gameTurns.length ===9 && !winner;

  function handleSelectSquar(rowIndex, colIndex){

    setGameTurns((prevTurns) =>{
      
      const currentPlayer =  deriveActivePlayer(prevTurns);

      const updatesTurns = [{squar: {row: rowIndex, col: colIndex}, player: currentPlayer},...prevTurns];

      return updatesTurns;
    });
  }

  function handleRematch(){
    setGameTurns([]);
  } 

  function handlePlayerNameChange(symbol, newName){
    setPlayers(prevPlayers =>{
      return {
        ...prevPlayers,
        [symbol]: newName,
      };
    });

  }
  
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName={PLAYERS.X} symbole="X" 
          isActive={activePlayer ==='X'} 
          onChangeName={handlePlayerNameChange} />
          <Player initialName={PLAYERS.O} symbole="O" 
          isActive={activePlayer ==='O'} 
          onChangeName={handlePlayerNameChange}/>
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} onRematch={handleRematch} />}
        <GameBoard onSelectSquar={handleSelectSquar} board={gameBoard} />
        
      </div>
      <Log turns={gameTurns} />
    </main>
  )
}

export default App
