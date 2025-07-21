// src/contexts/AuthContext.js
import React, { createContext, useContext, useState } from 'react';

// Criação do contexto de autenticação
const AuthContext = createContext();

// Componente provedor que envolve toda a aplicação
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // { nome, email, perfil }
  const [token, setToken] = useState(null); // token JWT de autenticação

  // Função chamada após login bem-sucedido
  const login = (data) => {
    const { nome, email, perfil, token } = data;

    // Verifica se o perfil é válido
    if (perfil !== 'professor' && perfil !== 'estudante') {
      console.warn('Perfil inválido:', perfil);
      return;
    }

    setUser({ nome, email, perfil });
    setToken(token);
  };

  // Logout limpa os dados armazenados
  const logout = () => {
    setUser(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook para uso em outros arquivos
export const useAuth = () => useContext(AuthContext);

