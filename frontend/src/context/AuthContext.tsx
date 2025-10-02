import React, { useState } from 'react';
import { AuthCtx } from './AuthCtx';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);

  const login = (email: string, password: string) => {
    if (email && password) {
      setIsLogged(true);
      setUser({ name: email.split('@')[0], email });
      localStorage.setItem('session', JSON.stringify({ email }));
    }
  };

  const logout = () => {
    setIsLogged(false);
    setUser(null);
    localStorage.removeItem('session');
  };

  return (
    <AuthCtx.Provider value={{ isLogged, user, login, logout }}>
      {children}
    </AuthCtx.Provider>
  );
};