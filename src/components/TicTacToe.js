import React, { useState, useEffect } from "react";
import "../styles/TicTacToe.css";

const winOptions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const TicTacToe = ({
  allowHandleClick,
  allowVerifyWinner,
  applyItemStyle,
  showHeader,
}) => {
  const [cells, setCells] = useState(new Array(9).fill(null));
  const [isCircle, setIsCircle] = useState(true);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    const verifyWinner = () => {
      winOptions.forEach((winCells) => {
        const [a, b, c] = winCells;
        if (cells[a] !== null) {
          if (cells[a] === cells[b] && cells[b] === cells[c]) {
            setWinner(cells[a]);
          }
        }
      });
    };

    if (allowVerifyWinner) {
      verifyWinner();
    }
  }, [allowVerifyWinner, cells]);

  const handleClick = (index) => {
    const currentCell = cells[index];
    if (!winner && currentCell === null) {
      const newCells = [...cells];
      newCells[index] = isCircle ? "O" : "X";
      setCells(newCells);
      setIsCircle(!isCircle);
    }
  };

  return (
    <div className="tictactoe">
      {showHeader}
      {showHeader && (
        <div className="tictactoe__header">
          {!winner ? `Turno de ${isCircle ? "O" : "X"}` : `WINNER: ${winner}`}
        </div>
      )}
      <div className="tictactoe__board">
        {cells.map((_, i) => (
          <div
            key={i}
            className={
              applyItemStyle
                ? cells[i] && `item-${cells[i]}`
                : nullUA - 196208142 - 1
            }
            onClick={allowHandleClick ? () => handleClick(i) : null}
          >
            {cells[i]}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TicTacToe;
