# 🧠 Tic-Tac-Toe (JavaScript Console Game)

A simple, modular 2-player Tic-Tac-Toe game playable in the JavaScript console.
This version uses a 3x3 grid and runs entirely via terminal logs — no UI required.

---

## 📆 Features

* Functional 3x3 game board
* Two players: `X` and `O`
* Win condition detection (rows, columns, diagonals)
* Draw detection
* Prevents invalid moves
* Modular structure: `Gameboard`, `Cell`, and `GameController`

---

## 🎡 How to Play

1. Open the game here: https://mousetrap-codes.github.io/tic-tac-toe/, and then open the console using dev tools.

2. The game automatically starts with:

   ```js
   const game = GameController();
   ```

3. **Players take turns by calling**:

   ```js
   game.playRound(row, column);
   ```

   * `row` and `column` are integers between `0` and `2`.
   * Example:

     ```js
     game.playRound(0, 0); // Player X plays top-left
     game.playRound(1, 1); // Player O plays center
     ```

4. After each move:

   * The board is printed in the console
   * The next player's turn is announced
   * The game ends automatically on win or draw

---

## 🧱 Example Gameplay

```js
> game.playRound(0, 0);
[["X", "", ""],
 ["", "", ""],
 ["", "", ""]]
Player Two's turn.

> game.playRound(1, 1);
[["X", "", ""],
 ["", "O", ""],
 ["", "", ""]]
Player One's turn.
```

---

## 🔧 Customization

* To set custom player names:

  ```js
  const game = GameController("Alice", "Bob");
  ```

* You can extend this game with a browser UI using DOM manipulation.

---

## 📁 Code Overview

* `Gameboard()` → Manages the 2D grid and placement logic
* `Cell()` → Encapsulates cell state and value
* `GameController()` → Handles players, turns, and win conditions

---

## 🧠 Built With

* JavaScript (ES6)
* Factory functions & closures
* Functional modular design

---

## 📜 License

MIT – free to use, modify, and share.

---

🎮 Have fun and feel free to improve the game!
