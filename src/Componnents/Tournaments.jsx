import React from 'react';

function Tournaments() {
  const players = [
    { name: 'Magnus Carlsen', rating: 2847, image: 'https://yt3.googleusercontent.com/oHmF1pFUKwRFGsUbzNYKkbhIJoaW4b-L_IZ0HZnmerBL_MdLwiVSaCg2YgNzj8LI8HXF59SYk8U=s900-c-k-c0x00ffffff-no-rj' },
    { name: 'Ian Nepomniachtchi', rating: 2795, image: 'https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/PedroPinhata/phpXyNdo9.jpeg' },
    { name: 'Ding Liren', rating: 2791, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1qe6D4Hv_7znvKXPCPWepkMqt8X5MzoDMoA&s' },
    { name: 'Fabiano Caruana', rating: 2783, image: 'https://static.standard.co.uk/s3fs-public/thumbnails/image/2018/11/08/14/fabianacaruana0811.jpg?width=1200&height=1200&fit=crop' },
    { name: 'Hikaru Nakamura', rating: 2775, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFscKY3fJp6nplvP4wMYWXLpzVl-9sCoDkTA&s' }
  ];

  return (
    <div className="tournaments-section">
      <h2 className="text-2xl font-bold mb-4">Top 5 Global Chess Players</h2>
      <ul className="space-y-4">
        {players.map((player, index) => (
          <li key={index} className="flex items-center space-x-4">
            <img src={player.image} alt={player.name} className="w-12 h-12 rounded-full" />
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
