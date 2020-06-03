import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

import CreateGlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <CreateGlobalStyle />
  </>
);

export default App;
