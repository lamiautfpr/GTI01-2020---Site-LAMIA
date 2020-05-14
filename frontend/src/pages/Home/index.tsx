import React from 'react';
import ReactDOM from 'react-dom';

import imgLogo from '../../assets/logo.svg';
import imgTeste from '../../assets/Teste.jpg';

import logoLar from '../../assets/logo_lar.png';
import logoStark from '../../assets/logo_stark.jpg';
import logoXavier from '../../assets/logo_xavier.jpg';
import logoRock from '../../assets/logo_rockStar.png';
import logoCyber from '../../assets/logo_cyber.jpg';
import logoLex from '../../assets/logo_lex.png';

import { Header, Main, SectionLine, SectionColumn, SectionVip } from './style';
import NavBar from '../../components/NavBar';
import Separator from '../../components/Separator';
import Footer from '../../components/Footer';

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
        <SectionLine title="News" id="News">
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
        </SectionLine>
        <hr />
        <SectionColumn title="LatestPublications" id="LatestPublications">
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
        </SectionColumn>
        <hr />
        <SectionLine id="Histoty">
          <header>
            <h2>História</h2>
          </header>
          <div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus, cupiditate reprehenderit. Qui deserunt in pariatur.
                Saepe sunt dolor qui aliquam, quisquam quia quidem commodi odit
                debitis necessitatibus molestiae nesciunt nemo.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                veniam nihil libero placeat! Sunt amet earum veritatis expedita
                laboriosam? Voluptas consequatur, soluta neque sit omnis facere
                sapiente molestias odit provident?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus, cupiditate reprehenderit. Qui deserunt in pariatur.
                Saepe sunt dolor qui aliquam, quisquam quia quidem commodi odit
                debitis necessitatibus molestiae nesciunt nemo.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                veniam nihil libero placeat! Sunt amet earum veritatis expedita
                laboriosam? Voluptas consequatur, soluta neque sit omnis facere
                sapiente molestias odit provident?
              </p>
            </div>
            <img src={imgTeste} alt="Teste" />
          </div>
        </SectionLine>
        <hr />
        <SectionColumn id="AreasExpertise">
          <header>
            <h2>Área de Atuação</h2>
          </header>
          <div>
            <div>
              <img src={imgTeste} alt="Teste" />
              <header>
                <h2>Ciências de Dados</h2>
              </header>
              <p>
                Sed lorem ipsum dolor sit amet nullam consequat feugiat
                consequat magna adipiscing magna etiam amet veroeros...
              </p>
            </div>
            <div>
              <img src={imgTeste} alt="Teste" />
              <header>
                <h2>Visão Computacional</h2>
              </header>
              <p>
                Sed lorem ipsum dolor sit amet nullam consequat feugiat
                consequat magna adipiscing magna etiam amet veroeros...
              </p>
            </div>
            <div>
              <img src={imgTeste} alt="Teste" />
              <header>
                <h2>Games</h2>
              </header>
              <p>
                Sed lorem ipsum dolor sit amet nullam consequat feugiat
                consequat magna adipiscing magna etiam amet veroeros...
              </p>
            </div>
          </div>
        </SectionColumn>
        <hr />
        <SectionVip id="Partners">
          <header>
            <h2>Parceiros</h2>
          </header>
          <div>
            <ul>
              <li>
                <img src={logoLar} alt="Coperativa LAR" />
                <h2>Coperativa LAR</h2>
              </li>
              <li>
                <img src={logoStark} alt="Indústrias stark" />
                <h2>Indústrias stark</h2>
              </li>
              <li>
                <img src={logoXavier} alt="Instituto Xavier" />
                <h2>Instituto Xavier</h2>
              </li>
              <li>
                <img src={logoRock} alt="Rock Star Games" />
                <h2>Rock Star Games</h2>
              </li>
              <li>
                <img src={logoLex} alt="Lex Corporation" />
                <h2>Lex Corporation</h2>
              </li>
              <li>
                <img src={logoCyber} alt="Cyber Punk 2077" />
                <h2>Cyber Punk 2077</h2>
              </li>
            </ul>
          </div>
        </SectionVip>
        <hr />
        <SectionColumn id="Advisors">
          <header>
            <h2>Orientadores</h2>
          </header>
          <div>
            <div>
              <img src={imgTeste} alt="Teste" />
              <header>
                <h2>Anderson Brilhador</h2>
              </header>
              <p>
                Sed lorem ipsum dolor sit amet nullam consequat feugiat
                consequat magna adipiscing magna etiam amet veroeros...
              </p>
            </div>
            <div>
              <img src={imgTeste} alt="Teste" />
              <header>
                <h2>Arlete ?</h2>
              </header>
              <p>
                Sed lorem ipsum dolor sit amet nullam consequat feugiat
                consequat magna adipiscing magna etiam amet veroeros...
              </p>
            </div>
            <div>
              <img src={imgTeste} alt="Teste" />
              <header>
                <h2>Thiago Naves</h2>
              </header>
              <p>
                Sed lorem ipsum dolor sit amet nullam consequat feugiat
                consequat magna adipiscing magna etiam amet veroeros...
              </p>
            </div>
          </div>
        </SectionColumn>
      </Main>

      <Footer />
    </>
  );
};

export default Home;
