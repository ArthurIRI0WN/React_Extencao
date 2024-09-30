// src/components/Activities.js
import React from 'react';

function Activities() {
  const activities = ['Exercícios físicos', 'Leitura', 'Meditação', 'Tarefas domésticas'];

  return (
    <div>
      <h2>Atividades</h2>
      <ul>
        {activities.map((activity, index) => (
          <li key={index}>{activity}</li>
        ))}
      </ul>
    </div>
  );
}

export default Activities;

