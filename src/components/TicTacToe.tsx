"use client";
import React from "react";

function Cell({
  value,
  onClick,
}: {
  value: string | null;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      className="w-24 h-24 border border-gray-400 flex items-center justify-center text-4xl font-bold"
      onClick={onClick}
    >
      {value}
    </button>
  );
}

// Main TicTacToe component
export default function TicTacToe() {
  const board = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]; // Placeholder board

  function handleCellClick(row: number, col: number) {
    console.log(`Cell clicked: (${row}, ${col})`);
    // Placeholder action
  }

  const status = "Game Start"; // Placeholder status

  return (
    <div className="flex flex-col items-center">
      <div className="mb-4 text-xl font-semibold">{status}</div>
      <div className="grid grid-cols-3 gap-1">
        {board.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <Cell
              value={cell}
              onClick={() => handleCellClick(rowIndex, colIndex)}
            />
          ))
        )}
      </div>
      {/* TODO: Add a reset button */}
    </div>
  );
}
