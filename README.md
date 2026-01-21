Tic-Tac-Toe React Project
A modern, functional Tic-Tac-Toe game built with React. This project focuses on efficient state management using derived state and lifted state patterns.

🚀 Features
Dynamic Player Names: Edit and save player names during the game.

Active Player Highlighting: Visual indicator of whose turn it is.

Game Log: A real-time record of every move made during the match.

Win & Draw Detection: Automatically calculates game outcomes based on winning combinations.

Rematch Functionality: Reset the game state without refreshing the page.

Optimized Performance: Uses "Derived State" to minimize the number of useState hooks and prevent unnecessary re-renders.

🛠️ Technologies Used
React.js (Functional Components, Hooks)

CSS3 (Custom styling and layout)

JavaScript 

📂 Project Structure
App.jsx: The main controller component. Handles the core logic and state.

components/Player.jsx: Manages individual player data and the "Edit" mode.

components/GameBoard.jsx: Renders the 3x3 grid and handles user interactions.

components/GameOver.jsx: An overlay component triggered when the game ends.

components/Log.jsx: Lists the history of moves.

winning-combinations.js: A helper file containing all possible winning coordinate arrays.

🔗 Live Demo
Check out the live game here: https://lelivexler.github.io/tic-tac-toe-project/
