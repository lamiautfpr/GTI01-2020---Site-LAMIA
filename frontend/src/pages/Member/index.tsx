import React, { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import {
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
  FaGithubSquare,
  FaRegCalendarAlt,
  FaGithub,
  FaRegClipboard,
  FaListUl,
  FaMedal,
} from 'react-icons/fa';
import { SelectItem } from '../../../myTypes/SelectItem';
import { ImageProps } from '../../../myTypes/Images';
import { WorkListProps } from '../../../myTypes/WorkListProps';

import api from '../../services/api';

import iconLattes from '../../assets/icons/lattes.svg';
import imgMemberDefault from '../../assets/imgDefault/member.jpg';
import imgWorkDefault from '../../assets/imgDefault/work1.png';

import imgDoubt from '../../assets/imgWarning/doubt.jpg';
import imgTraining from '../../assets/imgWarning/training.gif';

import { Main, Headline, Title, Shelf, Card, CardWarning } from './style';
import Header from '../../components/Header';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import { IMembersProps } from '../../hooks/Auth';

interface MembersParams {
  login: string;
}

interface WorkMemberProps {
  scholarship: boolean;
  workData: WorkListProps;
}

interface MembersPageProps extends IMembersProps {
  works: WorkMemberProps[];
}

const Member: React.FC = () => {
  const { params } = useRouteMatch<MembersParams>();
  const [getApi, setGetApi] = useState(false);

  const [member, setMember] = useState<MembersPageProps | null>(null);

  useEffect(() => {
    api.get<MembersPageProps>(`${params.login}`).then((response) => {
      setMember(response.data);
      setGetApi(true);
    });
  }, [params.login]);

  return (
    <>
      <Header
        title={member?.quoteName ? `LAMIA - ${member?.quoteName}` : 'LAMIA'}
      />

      <NavBar />
      <Main>
        {member ? (
          <>
            <Headline>
              <div className="basicInfo">
                <div className="leftInfo">
                  <div className="column">
                    <div className="name">
                      <h1>{member.name}</h1>
                    </div>
                    <div className="icons">
                      <div className="office">
                        <FaMedal size={21} />
                        <span>{member.office.label}</span>
                      </div>
                      {member.gitHub && (
                        <a
                          href={`https://github.com/${member.gitHub}`}
                          target="bank"
                        >
                          <FaGithubSquare size={26} />
                        </a>
                      )}
                      {member.linkedin && (
                        <a
                          href={`https://br.linkedin.com/public-profile/in/${member.linkedin}`}
                          target="bank"
                        >
                          <FaLinkedinIn size={26} />
                        </a>
                      )}
                      {member.lattes && (
                        <a
                          href={`http://lattes.cnpq.br/${member.lattes}`}
                          target="bank"
                        >
                          <img src={iconLattes} alt="Lattes" />
                        </a>
                      )}
                    </div>
                    <a href={`mailto:${member.email}`} className="contact">
                      <FaEnvelope size={20} />
                      {member.email}
                    </a>
                  </div>
                </div>
                <div className="leftInfo">
                  <div className="description">
                    <span>Descrição: </span>
                    {member.description}
                  </div>
                </div>
              </div>

              <div className="imgBorde">
                <div>
                  <img
                    src={member.avatar ? member.avatar.src : imgMemberDefault}
                    alt={member.name}
                  />
                </div>
              </div>
            </Headline>

            <Title>
              <header>
                <h2>Projetos</h2>
              </header>
            </Title>
            {member.works.length > 0 ? (
              <Shelf>
                {member.works.map(({ workData }) => (
                  <Card key={workData.id}>
                    <img
                      src={
                        workData.pictures.length > 0
                          ? workData.pictures[0].src
                          : imgWorkDefault
                      }
                      alt="Capa do Projeto"
                    />
                    {/* <div className="imgCase" /> */}
                    <div className="bookContainer">
                      <div className="content">
                        <Link to={`/work/${workData.id}`}>
                          <button type="button"> Saiba mais </button>
                        </Link>
                      </div>
                    </div>
                    <div className="informationContainer">
                      <h2 className="title">
                        {`${workData.title.slice(0, 25)}...`}
                      </h2>
                      <div className="primaryInformation">
                        {workData.areaExpertise.length > 0 && (
                          <span>
                            <FaListUl size={16} />
                            {workData.areaExpertise.map(
                              (area) => `${area.label}; `,
                            )}
                          </span>
                        )}
                        {workData.types.length > 0 && (
                          <span>
                            <FaRegClipboard size={16} />
                            {workData.types.map((type) => `${type.label}; `)}
                          </span>
                        )}
                      </div>

                      <div className="moreInformation">
                        <div className="infoDateContainer">
                          {workData.urlGithub && (
                            <a
                              href={workData.urlGithub}
                              target="bank"
                              className="box git"
                            >
                              <FaGithub size={24} />
                              <p>Repositório</p>
                            </a>
                          )}

                          <div className="box Date">
                            <FaRegCalendarAlt size={24} />
                            <p>{workData.dateBegin}</p>
                          </div>
                        </div>
                        <div className="objective">
                          <p>
                            {`${workData.objective.slice(0, 80)}`}
                            {workData.objective.length > 80 && '...'}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </Shelf>
            ) : (
              <CardWarning>
                <img src={imgTraining} alt="em treinamento" />
                <h2>Jovem padoã em treinamento</h2>
              </CardWarning>
            )}
          </>
        ) : (
          getApi && (
            <CardWarning>
              <img src={imgDoubt} alt="membro errado" />
              <h2>
                Membro errado amigo.
                <br />
                Estava me testando?
              </h2>
            </CardWarning>
          )
        )}
      </Main>
      <Footer />
    </>
  );
};

export default Member;
