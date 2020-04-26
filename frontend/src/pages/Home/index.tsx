import React from 'react';
import ReactDOM from 'react-dom';

import imgLogo from '../../assets/logo.svg';
import imgTeste from '../../assets/Teste.jpg';

import { Header, Main, SectionNew, SectionLatestPublications } from './style';
import NavBar from '../../components/NavBar';
import Separator from '../../components/Separator';

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

      <NavBar />

      <Main>
        <SectionNew id="News">
          <header>
            <h2>Notícias</h2>
          </header>
          <div>
            <div>
              <header>
                <h2>Contrução de Site</h2>
              </header>
              <p>
                Sed lorem ipsum dolor sit amet nullam consequat feugiat
                consequat magna adipiscing magna etiam amet veroeros. Lorem
                ipsum dolor tempus sit cursus. Tempus nisl et nullam lorem ipsum
                dolor sit amet aliquam.
              </p>
            </div>
            <img src={imgTeste} alt="Teste" />
          </div>
          <Separator />
          <div>
            <img src={imgTeste} alt="Teste" />
            <div>
              <header>
                <h2>Contrução de Site</h2>
              </header>
              <p>
                Sed lorem ipsum dolor sit amet nullam consequat feugiat
                consequat magna adipiscing magna etiam amet veroeros. Lorem
                ipsum dolor tempus sit cursus. Tempus nisl et nullam lorem ipsum
                dolor sit amet aliquam.
              </p>
            </div>
          </div>

          <Separator />
          <div>
            <div>
              <header>
                <h2>Contrução de Site</h2>
              </header>
              <p>
                Sed lorem ipsum dolor sit amet nullam consequat feugiat
                consequat magna adipiscing magna etiam amet veroeros. Lorem
                ipsum dolor tempus sit cursus. Tempus nisl et nullam lorem ipsum
                dolor sit amet aliquam.
              </p>
            </div>

            <img src={imgTeste} alt="Teste" />
          </div>
        </SectionNew>
        <hr />
        <SectionLatestPublications id="LatestPublications">
          <header>
            <h2>Ultimas Publicações</h2>
          </header>
          <div>
            <div>
              <img src={imgTeste} alt="Teste" />
              <header>
                <h2>Publicação 1</h2>
              </header>
              <p>
                Sed lorem ipsum dolor sit amet nullam consequat feugiat
                consequat magna adipiscing magna etiam amet veroeros. Lorem
                ipsum dolor tempus sit cursus. Tempus nisl et nullam lorem ipsum
                dolor sit amet aliquam.
              </p>
            </div>
            <div>
              <img src={imgTeste} alt="Teste" />
              <header>
                <h2>Publicação 2</h2>
              </header>
              <p>
                Sed lorem ipsum dolor sit amet nullam consequat feugiat
                consequat magna adipiscing magna etiam amet veroeros. Lorem
                ipsum dolor tempus sit cursus. Tempus nisl et nullam lorem ipsum
                dolor sit amet aliquam.
              </p>
            </div>
            <div>
              <img src={imgTeste} alt="Teste" />
              <header>
                <h2>Publicação 3</h2>
              </header>
              <p>
                Sed lorem ipsum dolor sit amet nullam consequat feugiat
                consequat magna adipiscing magna etiam amet veroeros. Lorem
                ipsum dolor tempus sit cursus. Tempus nisl et nullam lorem ipsum
                dolor sit amet aliquam.
              </p>
            </div>
          </div>
        </SectionLatestPublications>
      </Main>
    </>
  );
};

export default Home;
