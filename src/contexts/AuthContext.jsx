import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userType, setUserType] = useState(null);

  const login = (perfil) => {
    // Aceita qualquer login e define o perfil escolhido
    setUserType(perfil);
  };

  const logout = () => {
    setUserType(null);
  };

  return (
    <AuthContext.Provider value={{ userType, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

