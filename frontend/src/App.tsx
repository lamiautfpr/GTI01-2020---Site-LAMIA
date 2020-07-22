import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

import CreateGlobalStyle from './styles/global';

import AppProvider from './hooks';

const App: React.FC = () => (
  <>
    <AppProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <CreateGlobalStyle />
    </AppProvider>
  </>
);

export default App;
