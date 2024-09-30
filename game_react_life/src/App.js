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

  const renderComponent = () => {
    switch (currentComponent) {
      case 'dashboard':
        return <Dashboard stars={stars} experience={experience} />;
      case 'activities':
        return (
          <Activities 
            setStars={setStars} 
            setExperience={setExperience} 
            stars={stars} 
            experience={experience} 
          />
        );
      default:
        return <Login setCurrentComponent={setCurrentComponent} setIsLoggedIn={setIsLoggedIn} />;
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentComponent('login');
  };

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
