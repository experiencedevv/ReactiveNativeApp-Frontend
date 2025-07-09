import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [perfil, setPerfil] = useState(null);

  const login = async (newToken, perfilUsuario) => {
    setToken(newToken);
    setPerfil(perfilUsuario);
  };

  const logout = () => {
    setToken(null);
    setPerfil(null);
  };

  return (
    <AuthContext.Provider value={{ token, perfil, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
