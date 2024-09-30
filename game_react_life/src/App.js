// src/components/Login.js
import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Simulação de credenciais de login
  const validEmail = 'arthur@example.com';
  const validPassword = 'senha123'; // Use senhas reais e seguras em produção

  const handleLogin = (e) => {
    e.preventDefault();

    // Verificação simples de autenticação
    if (email === validEmail && password === validPassword) {
      setIsLoggedIn(true);
      setError('');
      // Aqui você pode redirecionar para o dashboard ou outra página
      console.log("Usuário logado com sucesso");
    } else {
      setError('Email ou senha inválidos');
    }
  };

  if (isLoggedIn) {
    return (
      <div>
        <h2>Bem-vindo, {email}!</h2>
        <p>Você está logado.</p>
        {/* Aqui você pode redirecionar para o dashboard */}
      </div>
    );
  }

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

export default Login;