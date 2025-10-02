import { createContext } from 'react';

export type AuthState = {
  isLogged: boolean;
  user: { name: string; email: string } | null;
  login: (email: string, password: string) => void;
  logout: () => void;
};

export const AuthCtx = createContext<AuthState | null>(null);