import React from 'react';

function Tournaments() {
  const players = [
    { name: 'Magnus Carlsen', rating: 2847, image: 'https://yt3.googleusercontent.com/oHmF1pFUKwRFGsUbzNYKkbhIJoaW4b-L_IZ0HZnmerBL_MdLwiVSaCg2YgNzj8LI8HXF59SYk8U=s900-c-k-c0x00ffffff-no-rj' },
    { name: 'Ian Nepomniachtchi', rating: 2795, image: 'https://www.chessgames.com/f/54683.jpg' },
    { name: 'Ding Liren', rating: 2791, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1qe6D4Hv_7znvKXPCPWepkMqt8X5MzoDMoA&s' },
    { name: 'Fabiano Caruana', rating: 2783, image: 'https://static.standard.co.uk/s3fs-public/thumbnails/image/2018/11/08/14/fabianacaruana0811.jpg?width=1200&height=1200&fit=crop' },
    { name: 'Hikaru Nakamura', rating: 2775, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Nakamura_Hikaru_%2829290269410%29_%28cropped%29.jpg/220px-Nakamura_Hikaru_%2829290269410%29_%28cropped%29.jpg' }
  ];

  return (
    <div className="tournaments-section mx-5 ">
      <h2 className="text-2xl font-bold mb-4">Top 5 Global Chess Players</h2>
      <ul className="space-y-4 flex flex-col ">
        {players.map((player, index) => (
          <li key={index} className="flex items-center space-x-4">
            <img src={player.image} alt={player.name} className="h-12 w-12 bg-fit rounded-full" />
            <div>
              <h3 className="text-xl font-semibold">{player.name}</h3>
              <p className="text-gray-600">Rating: {player.rating}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tournaments;
