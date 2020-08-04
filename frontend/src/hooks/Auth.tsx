import React, { createContext, useCallback, useContext, useState } from 'react';
import api from '../services/api';
import { ImageProps } from '../../myTypes/Images';
import { SelectItem } from '../../myTypes/SelectItem';

export interface IMembersProps {
  id: number;
  login: string;
  nameABNT: string;
  name: string;
  email: string;
  phone: string;
  description: string;
  office: SelectItem;
  avatar?: ImageProps;
  urlLikendin?: string;
  urlGithub?: string;
  urlLattes?: string;
}

interface IAuthState {
  token: string;
  member: IMembersProps;
}

interface ISignInCredentials {
  login: string;
  password: string;
}

interface IAuthProviderData {
  member: IMembersProps;
  signIn(credentials: ISignInCredentials): Promise<void>;
  signOut(): void;
}

export const officesPermitted: number[] = [1, 2, 3];
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
    const response = await api.post('sessions', {
      login,
      password,
    });

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
    throw new Error('Usou Auth sem a inicialização do AuthProvider');
  }

  return context;
}
