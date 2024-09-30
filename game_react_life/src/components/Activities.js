// src/components/Activities.js
import React, { useState } from 'react';

function Activities({ setStars, setExperience, stars, experience }) {
  const [activities, setActivities] = useState([
    { id: 1, title: 'Caminhada', completed: false },
    { id: 2, title: 'Meditação', completed: false },
    { id: 3, title: 'Leitura', completed: false },
    { id: 4, title: 'Pintura', completed: false },
    { id: 5, title: 'Aprender algo novo', completed: false },
    { id: 6, title: 'Conectar-se com alguém', completed: false },
    { id: 7, title: 'Preparar uma refeição saudável', completed: false },
    { id: 8, title: 'Escrever um diário', completed: false },
    { id: 9, title: 'Desafio diário', completed: false },
    { id: 10, title: 'Higiene Bucal', completed: false },
    { id: 11, title: 'Banho', completed: false },
  ]);

  const handleCompleteActivity = (id) => {
    const updatedActivities = activities.map(activity =>
      activity.id === id ? { ...activity, completed: true } : activity
    );
    setActivities(updatedActivities);
    setStars(prevStars => prevStars + 1); // Adiciona 1 estrela por atividade completada
    setExperience(prevExperience => prevExperience + 10); // Adiciona 10 pontos de experiência
  };

  const handleClearActivities = () => {
    const clearedActivities = activities.map(activity => ({
      ...activity,
      completed: false, // Redefine todas as atividades para não completadas
    }));
    setActivities(clearedActivities);
    // A experiência permanece inalterada
  };

  return (
    <div>
      <h2>Atividades</h2>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id} style={{ textDecoration: activity.completed ? 'line-through' : 'none' }}>
            {activity.title}
            {!activity.completed && (
              <button onClick={() => handleCompleteActivity(activity.id)}>Completar</button>
            )}
          </li>
        ))}
      </ul>
      <button onClick={handleClearActivities}>Limpar Atividades</button>
    </div>
  );
}

export default Activities;
