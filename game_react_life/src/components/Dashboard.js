// src/components/Dashboard.js
import React from 'react';

function Dashboard({ stars, experience }) {
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Bem-vindo ao seu painel de controle! Aqui você verá suas atividades e conquistas.</p>
      <h3>Estrelas: {stars}</h3>
      <h3>Experiência: {experience}</h3>
    </div>
  );
}

export default Dashboard;
