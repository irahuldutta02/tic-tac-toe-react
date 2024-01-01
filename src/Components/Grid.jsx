import { useState } from "react";
import { Card } from "./Card";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Grid() {
  const [turn, setTurn] = useState(true);
  const [board, setBoard] = useState(Array(9).fill(""));
  const [gameState, setGameState] = useState(true);

  // return winner symbol
  function isWinner(board, symbol) {
    if (
      (board[0] === symbol && board[1] === symbol && board[2] === symbol) ||
      (board[3] === symbol && board[4] === symbol && board[5] === symbol) ||
      (board[6] === symbol && board[7] === symbol && board[8] === symbol) ||
      (board[0] === symbol && board[3] === symbol && board[6] === symbol) ||
      (board[1] === symbol && board[4] === symbol && board[7] === symbol) ||
      (board[2] === symbol && board[5] === symbol && board[8] === symbol) ||
      (board[0] === symbol && board[4] === symbol && board[8] === symbol) ||
      (board[2] === symbol && board[4] === symbol && board[6] === symbol)
    ) {
      return true;
    }
    return "";
  }

  function play(index) {
    if (!gameState) {
      return;
    }
    if (board[index] !== "") {
      return;
    }
    setTurn(!turn);
    let newBoard = [...board];
    newBoard[index] = turn ? "O" : "X";
    setBoard(newBoard);
    let winner = isWinner(newBoard, turn ? "O" : "X");
    let draw = !newBoard.includes("");
    if (winner) {
      setGameState(false);
      setTimeout(() => {
        toast.success(`Game over 🎉 Winner is ${turn ? "Player-1 (O)" : "Player-2 (X)"}`, {
          position: "bottom-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: 0,
          theme: "light",
        });
        setBoard(Array(9).fill(""));
        setTurn(true);
        setGameState(true);
      }, 100);
    } else if (draw) {
      setGameState(false);
      setTimeout(() => {
        toast.warn(`Oho 😶‍🌫️ It's a draw`, {
          position: "bottom-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: 0,
          theme: "light",
        });
        setBoard(Array(9).fill(""));
        setTurn(true);
        setGameState(true);
      }, 100);
    }
  }

  return (
    <div className="gameBoard">
      <div className="gameInfo">
        <h3>
          Current Turn :{" "}
          <span className="current-turn">{turn ? "Player-1 (O)" : "Player-2 (X)"}</span>
        </h3>
      </div>
      <div className="grid">
        {/* Game Board */}
        {board.map((value, index) => {
          return (
            <Card onPlay={play} player={value} key={index} index={index} />
          );
        })}
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}
