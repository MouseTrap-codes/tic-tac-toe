# Tic Tac Toe: Battle of Wits

A web-based, modular, and interactive Tic Tac Toe game. Built from scratch using vanilla JavaScript, HTML, and CSS.

---

## 🎮 Gameplay

* Two-player turn-based gameplay (Player One = "X", Player Two = "O")
* Grid-based 3x3 board
* Win detection for:

  * Full row
  * Full column
  * Diagonals
* Draw detection if all cells are filled with no winner
* Interactive UI with hover effects and animations
* Modal popup displays the result (win or draw)

---

## 🚀 Live Preview

Just open `(https://mousetrap-codes.github.io/tic-tac-toe/)` in your browser. No build step or server required.

---

## 🛠 Features

* **Modular Design:**

  * `Gameboard()` encapsulates the board state
  * `GameController()` manages player turns and win/draw conditions
  * `ScreenController()` handles DOM interactions
* **Responsive UI:** CSS grid layout, styled with transitions and accessible contrast
* **Reusable Modal:** Positioned directly beneath the board for seamless UX

---

## 📁 File Structure

```
├── index.html         # Game layout
├── styles.css         # Styling and animations
├── scripts.js         # Core game logic
```

---

## 📋 How to Play

1. Open `index.html` in a browser.
2. Click any empty cell to place your token.
3. Turns alternate between players.
4. The game ends when:

   * A player wins (row/column/diagonal match), or
   * The board is full (draw)
5. Click "Play Again" in the modal to restart.

---

## 🧠 Concepts Practiced

* Factory functions
* Encapsulation
* DOM event delegation
* State-driven UI updates
* CSS Grid + transitions

---

## ✅ TODO

* Add player name input
* Add win counter
* Add AI opponent mode

---

## 📜 License

MIT License. Free to use and adapt.
