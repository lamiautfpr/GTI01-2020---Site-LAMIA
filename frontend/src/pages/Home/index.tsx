import React, { useState, useEffect } from 'react';
import { GoStar, GoRepo, GoGitCommit, GoGitBranch } from 'react-icons/go';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

import api from '../../services/api';

import imgTeste from '../../assets/Teste.jpg';
import logoDemo from '../../assets/logo_demo.jpg';

import logoLar from '../../assets/logo_lar.png';
import logoStark from '../../assets/logo_stark.jpg';
import logoXavier from '../../assets/logo_xavier.jpg';
import logoRock from '../../assets/logo_rockStar.png';
import logoCyber from '../../assets/logo_cyber.jpg';
import logoLex from '../../assets/logo_lex.png';

import {
  Main,
  SectionLine,
  SectionColumn,
  SectionVip,
  SectionCards,
  HeaderSection,
} from './style';
import Header from '../../components/Header';
import NavBar from '../../components/NavBar';
import Separator from '../../components/Separator';
import Footer from '../../components/Footer';

interface StatisticsProps {
  countRepositories: number;
  countCommits: number;
  countBranches: number;
  countStars: number;
}

const Home: React.FC = () => {
  const [statistics, setStatistics] = useState<StatisticsProps>({
    countRepositories: 5,
    countCommits: 300,
    countBranches: 20,
    countStars: 10,
  } as StatisticsProps);

  useEffect(() => {
    // setStatistics(await getData());
    // console.log(`s2 ${statistics.count_commits}`);
    api.get<StatisticsProps>(`statistics`).then((response) => {
      setStatistics(response.data);
    });
  }, []);

  return (
    <>
      <Header />

      <NavBar />

      <Main>
        <SectionLine title="News" id="News">
          <HeaderSection>
            <h2>Notícias</h2>
          </HeaderSection>
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
        <SectionLine id="Histoty">
          <HeaderSection>
            <h2>Missão</h2>
          </HeaderSection>
          <div>
            <div>
              <p>
                A missão do LAMIA é produzir conhecimento acadêmico e soluções
                para a indústria através de pesquisas direcionadas na integração
                destas duas vertentes. As abordagens propostas utilizam de
                Ciência de Dados e Visão Computacional na criação de aplicações
                voltadas para as cadeias produtivas do oeste do Paraná e do
                restante do Brasil.
              </p>
            </div>
            <img src={logoDemo} alt="Teste" />
          </div>
        </SectionLine>
        <hr />
        <SectionColumn title="LatestPublications" id="LatestPublications">
          <HeaderSection>
            <h2>Ultimas Publicações</h2>
          </HeaderSection>
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
        <SectionCards title="Statistics" id="Statistics">
          <HeaderSection>
            <h2>Linhas de Códigos Produzidas</h2>
          </HeaderSection>
          <div>
            <div>
              <h3>Repositórios</h3>
              <div>
                <GoRepo />
                <CountUp
                  end={statistics.countRepositories}
                  duration={2.5}
                  delay={0.5}
                  redraw
                >
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
              </div>
            </div>
            <div>
              <h3>Commits</h3>
              <div>
                <GoGitCommit />
                <CountUp end={statistics.countCommits} duration={2.5} delay={2}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
              </div>
            </div>
            <div>
              <h3>Branches</h3>
              <div>
                <GoGitBranch />
                <CountUp
                  end={statistics.countBranches}
                  duration={2.5}
                  delay={2}
                  redraw
                >
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
              </div>
            </div>
            <div>
              <h3>Star</h3>
              <div>
                <GoStar />
                <CountUp
                  end={statistics.countStars}
                  duration={2.5}
                  delay={2.5}
                  redraw
                >
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
              </div>
            </div>
          </div>
        </SectionCards>
        <hr />
        <SectionColumn id="AreasExpertise">
          <HeaderSection>
            <h2>Área de Atuação</h2>
          </HeaderSection>
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
          <HeaderSection>
            <h2>Orientadores</h2>
          </HeaderSection>
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
