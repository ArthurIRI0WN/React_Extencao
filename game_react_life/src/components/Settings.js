// src/components/Settings.js
import React from 'react';

function Settings({ setBgColor }) {
  const handleColorChange = (color) => {
    setBgColor(color); // Chama a função para mudar a cor de fundo
  };

  return (
    <div>
      <h2>Configurações</h2>
      <p>Aqui você pode ajustar suas preferências.</p>
      <div>
        <button onClick={() => handleColorChange('#1a3f2a')}>Verde Padrão</button>
        <button onClick={() => handleColorChange('#add8e6')}>Azul Claro</button>
      </div>
    </div>
  );
}

export default Settings;
