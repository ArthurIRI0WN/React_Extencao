// src/App.js
import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import Activities from './components/Activities';
import Profile from './components/Profile';
import Rewards from './components/Rewards';
import Settings from './components/Settings';
import './App.css'; // Importando os estilos

function App() {
  const [currentComponent, setCurrentComponent] = useState('login');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [stars, setStars] = useState(0);
  const [experience, setExperience] = useState(0);
  const [bgColor, setBgColor] = useState('#1a3f2a'); // Cor de fundo padrão

  const getLevel = (experience) => {
    let level = 1; // Começa no nível 1
    let requiredExperience = 100; // Experiência necessária para o nível 2

    while (experience >= requiredExperience) {
      level++;
      experience -= requiredExperience;

      // Aumenta a experiência necessária a cada nível
      if (level < 100) {
        requiredExperience += 50 + (level - 1) * 50; // Aumenta 50 para cada nível
      }
    }

    return level;
  };

  const getExperienceToNextLevel = (level) => {
    let requiredExperience = 100; // Começa com 100 para o nível 2

    for (let i = 1; i < level; i++) {
      requiredExperience += 50 + (i - 1) * 50; // Aumenta 50 para cada nível
    }

    return requiredExperience; // Retorna a experiência necessária para o próximo nível
  };

  const level = getLevel(experience);
  const experienceToNextLevel = getExperienceToNextLevel(level + 1); // Próximo nível
  const progress = (experience / experienceToNextLevel) * 100; // Cálculo da porcentagem

  const resetLevels = () => {
    setExperience(0); // Reseta a experiência
    setStars(0); // Opcional: também pode zerar as estrelas se desejado
  };

  const renderComponent = () => {
    switch (currentComponent) {
      case 'dashboard':
        return (
          <Dashboard
            stars={stars}
            experience={experience}
            level={level}
            progress={progress}
            resetLevels={resetLevels} // Passa a função de resetar para o Dashboard
          />
        );
      case 'activities':
        return (
          <Activities
            setStars={setStars}
            setExperience={setExperience}
            stars={stars}
            experience={experience}
          />
        );
      case 'profile':
        return <Profile />; // Renderiza o componente de perfil aqui
      case 'settings':
        return <Settings setBgColor={setBgColor} />; // Passa a função para mudar a cor para Settings
      default:
        return <Login setCurrentComponent={setCurrentComponent} setIsLoggedIn={setIsLoggedIn} />;
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentComponent('login');
  };

  // Define a cor de fundo do body com base no estado bgColor
  document.body.style.backgroundColor = bgColor;

  return (
    <div className="container">
      {isLoggedIn && (
        <nav>
          <button onClick={() => setCurrentComponent('dashboard')}>Painel</button>
          <button onClick={() => setCurrentComponent('activities')}>Atividades</button>
          <button onClick={() => setCurrentComponent('profile')}>Perfil</button>
          <button onClick={() => setCurrentComponent('rewards')}>Recompensas</button>
          <button onClick={() => setCurrentComponent('settings')}>Configurações</button>
          <button onClick={handleLogout}>Sair</button>
        </nav>
      )}
      {renderComponent()}
    </div>
  );
}

function Login({ setCurrentComponent, setIsLoggedIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const validEmail = 'arthur@example.com';
  const validPassword = 'senha123';

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === validEmail && password === validPassword) {
      setIsLoggedIn(true);
      setError('');
      setCurrentComponent('dashboard');
    } else {
      setError('Email ou senha inválidos');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Senha:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Entrar</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
}

export default App;
