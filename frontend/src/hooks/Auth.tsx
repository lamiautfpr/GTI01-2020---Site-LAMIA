import React, { createContext, useCallback, useContext, useState } from 'react';
import api from '../services/api';

interface IAuthState {
  token: string;
  member: object;
}

interface ISignInCredentials {
  login: string;
  password: string;
}

interface IAuthProviderData {
  member: object;
  signIn(credentials: ISignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<IAuthProviderData>({} as IAuthProviderData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<IAuthState>(() => {
    const token = localStorage.getItem('@LAMIA:token');
    const member = localStorage.getItem('@LAMIA:member');

    if (token && member) {
      return { token, member: JSON.parse(member) };
    }

    return {} as IAuthState;
  });

  const signIn = useCallback(async ({ login, password }) => {
    const response = await api.post('sessions', { login, password });

    const { token, member } = response.data;

    localStorage.setItem('@LAMIA:token', token);
    localStorage.setItem('@LAMIA:member', JSON.stringify(member));

    setData({ token, member });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@LAMIA:token');
    localStorage.removeItem('@LAMIA:member');
  }, []);

  return (
    <AuthContext.Provider value={{ member: data.member, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): IAuthProviderData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('Usou Toast sem a inicialização do AuthProvider');
  }

  return context;
}
