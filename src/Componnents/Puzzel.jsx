import React from 'react';

function Puzzle() {
  const puzzles = [
    { id: 1, title: "Puzzle 1", description: "Find the best move for white." },
    { id: 2, title: "Puzzle 2", description: "Mate in two moves." },
    { id: 3, title: "Puzzle 3", description: "White to move and win material." },
  ];

  return (
    <div className="puzzles-section p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md max-w-lg mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Chess Puzzles</h2>
      <ul className="space-y-4">
        {puzzles.map(puzzle => (
          <li key={puzzle.id} className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{puzzle.title}</h3>
            <p className="text-gray-600 dark:text-gray-400">{puzzle.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Puzzle
