// src/components/Profile.js
import React from 'react';

function Profile() {
  const user = {
    name: 'Arthur',
    email: 'arthur@example.com',
  };

  return (
    <div>
      <h2>Perfil</h2>
      <p>Nome: {user.name}</p>
      <p>Email: {user.email}</p>
      {/* Adicione mais informações do perfil se necessário */}
    </div>
  );
}

export default Profile;