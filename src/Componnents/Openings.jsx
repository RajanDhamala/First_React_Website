import React from 'react';

function Openings() {
  const openings = [
    {
      name: 'Ruy López',
      description: 'One of the oldest and most classic chess openings, known for its solid and strategic play.',
      imgSrc: 'https://www.chessable.com/blog/wp-content/uploads/2021/09/Ruy-Lopez-Opening.png',
    },
    {
      name: 'Sicilian Defense',
      description: 'A popular and aggressive response to 1.e4, aiming for an imbalanced and dynamic game.',
      imgSrc: 'https://chessklub.com/wp-content/uploads/2021/02/sicilian-defense.png',
    },
    {
      name: 'French Defense',
      description: 'A resilient defense that leads to a strong pawn structure and counter-attacking opportunities.',
      imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWLHu0HuTkn9Fwm1U4MPHgQq4ASB01aN3fZg&s',
    },
   
  ];

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg mt-10">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Chess Openings</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {openings.map((opening, index) => (
          <div key={index} className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md">
            <img
              src={opening.imgSrc}
              alt={opening.name}
              className="h-32 w-full object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{opening.name}</h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">{opening.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Openings;
