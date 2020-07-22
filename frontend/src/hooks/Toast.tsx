import React, { createContext, useCallback, useContext, useState } from 'react';

import { v4 as uuid } from 'uuid';
import ToastContainer from '../components/ToastContainer';

interface IToastContextData {
  addToast(message: Omit<IToastMessage, 'id'>): void;
  removeToast(id: string): void;
}

export interface IToastMessage {
  id: string;
  type?: 'error' | 'success' | 'info' | 'warning';
  title: string;
  description?: string;
}

const ToastContext = createContext<IToastContextData>({} as IToastContextData);

export const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<IToastMessage[]>([]);

  const addToast = useCallback(
    ({ type, title, description }: Omit<IToastMessage, 'id'>) => {
      const id = uuid();

      const toast = {
        id,
        type,
        title,
        description,
      };

      setMessages((oldMessages) => [...oldMessages, toast]);
    },
    [],
  );

  const removeToast = useCallback((id: string) => {
    setMessages((oldMessages) =>
      oldMessages.filter((oldMessage) => oldMessage.id !== id),
    );
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer messages={messages} />
    </ToastContext.Provider>
  );
};

export function useToast(): IToastContextData {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('Usou Toast sem a inicialização do ToastProvider');
  }

  return context;
}
