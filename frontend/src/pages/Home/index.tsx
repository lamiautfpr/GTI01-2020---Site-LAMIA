import React, { useState, useEffect } from 'react';
import { GoStar, GoRepo, GoGitCommit, GoGitBranch } from 'react-icons/go';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

import api from '../../services/api';

import imgTester from '../../assets/Tester.jpg';
import plusUltra from '../../assets/plus_ultra.gif';
import logoDemo from '../../assets/logo_demo.jpg';
import logo from '../../assets/logo.svg';
import orientation from '../../assets/orientation.jpg';
import disoriented from '../../assets/disoriented.jpg';
import { mission } from '../../assets/dataStatistic';

import logoLex from '../../assets/logo_lex.png';

import {
  Main,
  SectionLine,
  SectionColumn,
  SectionVip,
  SectionCards,
  HeaderSection,
  CardWarning,
} from './style';
import Header from '../../components/Header';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

import { WorkListProps } from '../../../myTypes/WorkListProps';
import { ImageProps } from '../../../myTypes/Images';

interface StatisticsProps {
  countRepositories: number;
  countCommits: number;
  countBranches: number;
  countStars: number;
}

interface AreasExpertiseProps {
  id: number;
  name: string;
  description?: string | null;
}

interface PartnerProps {
  id: number;
  name: string;
  logo?: string | null;
  linkPage?: string | null;
}

interface AdvisorsProps {
  id: number;
  name: string;
  description: string;
  avatar: ImageProps;
}

const Home: React.FC = () => {
  const [statistics, setStatistics] = useState<StatisticsProps>({
    countRepositories: 5,
    countCommits: 300,
    countBranches: 20,
    countStars: 10,
  } as StatisticsProps);

  const [areaExpertises, setAreaExpertises] = useState<AreasExpertiseProps[]>(
    [],
  );

  const [partners, setPartners] = useState<PartnerProps[]>([]);

  const [lastWork, setLastWork] = useState<WorkListProps[]>([]);

  const [advisors, setAdvisors] = useState<AdvisorsProps[]>([]);

  useEffect(() => {
    api.get<AreasExpertiseProps[]>(`area-expertises`).then((response) => {
      setAreaExpertises(response.data);
    });

    api.get<PartnerProps[]>(`partiners`).then((response) => {
      setPartners(response.data);
    });

    api.get<WorkListProps[]>(`last-work?limit=3`).then((response) => {
      setLastWork(response.data);
    });

    api.get<StatisticsProps>(`statistics`).then((response) => {
      setStatistics(response.data);
    });

    api.get<AdvisorsProps[]>(`members/Orientador`).then((response) => {
      setAdvisors(response.data);
    });
  }, []);

  return (
    <>
      <Header />

      <NavBar />

      <Main>
        {/* <SectionLine title="News" id="News">
          <HeaderSection>
            <h2>Notícias</h2>
          </HeaderSection>
          <div>
            <div>
              <header>
                <h2>Contrução de Site</h2>
              </header>
              <p>
                Sed lorem ipsum
              </p>
            </div>
            <img src={imgTester} alt="Tester" />
          </div>
          <Separator />
          <div>
            <img src={imgTester} alt="Tester" />
            <div>
              <header>
                <h2>Contrução de Site</h2>
              </header>
              <p>
                Sed lorem ipsum dolor
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
                Sed lorem ipsum dolor
              </p>
            </div>

            <img src={imgTester} alt="Tester" />
          </div>
        </SectionLine>
        <hr /> */}
        <SectionLine id="Mission">
          <HeaderSection>
            <h2>Missão</h2>
          </HeaderSection>
          <div>
            <div>
              <p>{mission}</p>
            </div>
            <img src={logoDemo} alt="Logo LAMIA" />
          </div>
        </SectionLine>
        <hr />
        <SectionColumn title="LatestPublications" id="LatestPublications">
          <HeaderSection>
            <h2>Ultimas Publicações</h2>
          </HeaderSection>
          {lastWork.length > 0 ? (
            <div>
              {lastWork.map((work) => (
                <div key={work.id}>
                  <img
                    src={
                      work.pictures?.length > 0 ? work.pictures[0].src : logo
                    }
                    alt={
                      work.pictures.length > 0
                        ? work.pictures[0].name
                        : 'Capa do Projeto'
                    }
                  />
                  <header>
                    <h2>{work.title}</h2>
                  </header>
                  <p>{work.objective.slice(0, 130)}</p>
                </div>
              ))}
            </div>
          ) : (
            <CardWarning>
              <img src={plusUltra} alt="plusUltra" />
              <h2>Estamos dando PLUS ULTRA para publiar nosso trabalho</h2>
            </CardWarning>
          )}
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
            {areaExpertises.map((area) => (
              <div key={area.id}>
                <img src={imgTester} alt={area.name} />
                <header>
                  <h2>{area.name}</h2>
                </header>
                <p>
                  {area.description
                    ? `${area.description.slice(0, 130)} ...`
                    : 'Lendo alguns artigos para definição perfeita da aplicação científica e industrial. Isso pode demorar um pouco...'}
                </p>
              </div>
            ))}
          </div>
        </SectionColumn>
        <hr />
        <SectionVip id="Partners">
          <header>
            <h2>Parceiros</h2>
            <button type="button">seja um parceiro</button>
          </header>
          <div>
            {partners.length > 0 ? (
              <ul>
                {partners.map((partner) => (
                  <li key={partner.id}>
                    <img
                      src={partner.logo ? `${partner.logo}` : logo}
                      alt={partner.name}
                    />
                    <h2>{partner.name}</h2>
                  </li>
                ))}
              </ul>
            ) : (
              <CardWarning textColor="#f0f0f0">
                <img src={logoLex} alt="logoLex" />
                <h2>Estamos sem uma parceria</h2>
              </CardWarning>
            )}
          </div>
        </SectionVip>
        <hr />
        <SectionColumn id="Advisors">
          <HeaderSection>
            <h2>Orientadores</h2>
          </HeaderSection>
          {advisors.length > 0 ? (
            <div>
              <>
                {advisors.map((advisor) => (
                  <div key={advisor.id}>
                    <img
                      src={advisor.avatar ? advisor.avatar.src : orientation}
                      alt={advisor.avatar ? advisor.avatar.name : 'sem imagem'}
                    />
                    <header>
                      <h2>{advisor.name}</h2>
                    </header>
                    <p>{advisor.description}</p>
                  </div>
                ))}
              </>
            </div>
          ) : (
            <CardWarning>
              <img src={disoriented} alt="sem orientador" />
              <h2>Estamos desorientados</h2>
            </CardWarning>
          )}
        </SectionColumn>
      </Main>

      <Footer />
    </>
  );
};

export default Home;
