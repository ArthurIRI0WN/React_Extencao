// src/components/Dashboard.js
import React from 'react';

function Dashboard({ stars, experience, level, progress, resetLevels }) {
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Bem-vindo ao seu painel de controle! Aqui você verá suas atividades e conquistas.</p>
      <h3>Estrelas: {stars}</h3>
      <h3>Experiência: {experience}</h3>
      <h3>Nível: {level}</h3>
      <div style={{ backgroundColor: '#ccc', borderRadius: '5px', height: '20px', width: '100%' }}>
        <div
          style={{
            height: '100%',
            width: `${progress}%`,
            backgroundColor: '#4caf50',
            borderRadius: '5px',
          }}
        ></div>
      </div>
      <p>{Math.floor(progress)}% do próximo nível</p>
      <button onClick={resetLevels} style={{ backgroundColor: '#f44336', color: 'white', padding: '10px 15px', border: 'none', borderRadius: '5px' }}>
        Zerar Níveis
      </button>
    </div>
  );
}

export default Dashboard;
