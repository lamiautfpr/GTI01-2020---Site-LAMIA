import React, { useEffect, useState } from 'react';
import imgLogo from '../../assets/logo.svg';

import { Title } from './style';

interface HeaderProps {
  title?: string;
}

const Header: React.FC<HeaderProps> = ({ title = 'LAMIA' }) => {
  const [subTitle, setSubTitle] = useState(
    'LABORATÓRIO DE APRENDIZADO DE MÁQUINA E IMAGENS APLICADOS À INDÚSTRIA',
  );

  useEffect(() => {
    function type(): void {
      const string = subTitle;
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
      <span>
        <img
          src={imgLogo}
          alt="LABORATÓRIO DE APRENDIZADO DE MÁQUINA E IMAGENS APLICADOS À INDÚSTRIA"
        />
      </span>
      <h1>{title}</h1>
      <p>{subTitle}</p>
      <span>UTFPR Santa Helena</span>
    </Title>
  );
};

export default Header;
