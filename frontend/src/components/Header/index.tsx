import React from 'react';
import ReactDOM from 'react-dom';

import imgLogo from '../../assets/logo.svg';

import { Title } from './style';

interface HeaderProps {
  title?: string;
}

const Header: React.FC<HeaderProps> = ({ title = 'LAMIA' }) => {
  return (
    <Title>
      <span>
        <img
          src={imgLogo}
          alt="LABORATÓRIO DE APRENDIZADO DE MÁQUINA E IMAGENS APLICADOS À INDÚSTRIA"
        />
      </span>
      <h1>{title}</h1>
      <p>
        LABORATÓRIO DE APRENDIZADO DE MÁQUINA E IMAGENS APLICADOS À INDÚSTRIA
        <span>UTFPR Santa Helena</span>
      </p>
    </Title>
  );
};

export default Header;
