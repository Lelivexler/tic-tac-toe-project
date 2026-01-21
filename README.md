# 🎮 Tic-Tac-Toe React Project

A modern, functional game built with **React**, focusing on efficient state management and clean UI.

### 🔗 [Click here for Live Demo](https://lelivexler.github.io/tic-tac-toe-project/)

---

## 🚀 Key Features
* **Dynamic Names:** Edit and save player names in real-time.
* **Turn Highlighting:** Visual indicator for the active player.
* **Smart Game Log:** History of every move made.
* **Auto-Detection:** Instant calculation of **Win** or **Draw** states.
* **Rematch:** Quick reset to start a new game instantly.

---

## ⚙️ Architecture & Logic
The project uses a **"Single Source of Truth"** pattern for optimized performance:

* **Derived State:** Instead of multiple states, we use the `gameTurns` array to calculate the **Board**, the **Winner**, and the **Active Player** on the fly.
* **Immutability:** State is updated using deep copies to prevent bugs and ensure React detects changes correctly.

---

## 📂 Project Structure
* **`App.jsx`** – Core logic and main state management.
* **`Player.jsx`** – Individual player info and edit logic.
* **`GameBoard.jsx`** – Interactive 3x3 grid rendering.
* **`GameOver.jsx`** – Win/Draw overlay and rematch trigger.
* **`Log.jsx`** – Move-by-move history display.
