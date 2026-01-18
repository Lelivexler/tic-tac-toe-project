import Player from './components/player.jsx'

function App() {
  
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="player 1" symbole="X"/>
          <Player initialName="player 2" symbole="O"/>
        </ol>
        Game Bord
      </div>
      LOG
    </main>
  )
}

export default App
