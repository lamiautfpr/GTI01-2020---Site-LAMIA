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
        <section>
          Área de Pesquisa:
          <select name="areaExpensive" id="">
            <option value="All">Todas</option>
            <option value="DataScient">Ciência de Dados</option>
            <option value="VisionComputation">Visão Computacionar</option>
          </select>
        </section>
        <Separator />
        <section>Listagem</section>
      </Main>

      <Footer />
    </>
  );
};

export default Home;
