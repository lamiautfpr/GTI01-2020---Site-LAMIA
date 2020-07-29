import React from 'react';

import { ToastProvider } from './Toast';
import { AuthProvider } from './Auth';

const AppProvider: React.FC = ({ children }) => (
  <ToastProvider>
    <AuthProvider>{children}</AuthProvider>
  </ToastProvider>
);

export default AppProvider;
