import React from 'react';

import imgLogo from '../../assets/logo.svg';
import { Header } from './style';
import Menu from '../../components/Nav';

const Home: React.FC = () => {
  return (
    <>
      <Header>
        <span>
          <img src={imgLogo} alt="" />
        </span>
        <h1>LAMIA</h1>
        <p>
          LABORATÓRIO DE APRENDIZADO DE MÁQUINA E IMAGENS APLICADOS À INDÚSTRIA
          <span>UTFPR Santa Helena</span>
        </p>
      </Header>
      <Menu />
    </>
  );
};

export default Home;
