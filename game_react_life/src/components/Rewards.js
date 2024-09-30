// src/components/Rewards.js
import React from 'react';

function Rewards() {
  const rewards = ['Medalha de Ouro', 'Medalha de Prata', 'Medalha de Bronze'];

  return (
    <div>
      <h2>Recompensas</h2>
      <ul>
        {rewards.map((reward, index) => (
          <li key={index}>{reward}</li>
        ))}
      </ul>
    </div>
  );
}

export default Rewards;