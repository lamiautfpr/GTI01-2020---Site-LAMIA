import React, { useEffect, useState } from 'react';

import imgLogo from '../../assets/logo.jpg';

import { Title } from './style';

interface HeaderProps {
  title?: string;
}

const Header: React.FC<HeaderProps> = ({ title = 'LAMIA' }: HeaderProps) => {
  const [subTitle, setSubTitle] = useState('');

  useEffect(() => {
    function type(): void {
      const string =
        'LABORATÓRIO DE APRENDIZADO DE MÁQUINA E IMAGENS APLICADOS À INDÚSTRIA';
      let partialSubTitle = '';
      string.split('').forEach((letter, i) => {
        setTimeout(() => {
          partialSubTitle += letter;
          setSubTitle(partialSubTitle);
        }, 88 * i);
      });
    }
    type();
  }, []);

  return (
    <Title>
      {/* <img
        src={imgLogo}
        alt="LABORATÓRIO DE APRENDIZADO DE MÁQUINA E IMAGENS APLICADOS À INDÚSTRIA"
      /> */}
      <div className="img" />
      <h1>{title}</h1>
      <p>{subTitle}</p>
      <span>UTFPR Santa Helena</span>
    </Title>
  );
};

export default Header;
