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
import iconLattes from '../../assets/icon_lattes.svg';
import userDefault from '../../assets/userDefault.png';
import imgWorkDefault from '../../assets/imgWorkDefault.png';
import mano from '../../assets/mano.jpg';
import training from '../../assets/Training.gif';

import { Main, Headline, Title, Shelf, Card, CardWarning } from './style';
import Header from '../../components/Header';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

interface MembersParams {
  login: string;
}

interface WorkMemberProps {
  scholarship: boolean;
  workData: WorkListProps;
}

interface MembersProps {
  id: number;
  login: string;
  nameABNT: string;
  name: string;
  email: string;
  phone: string;
  description: string;
  office: SelectItem;
  avatar?: ImageProps;
  urlLikendin?: string;
  urlGithub?: string;
  urlLattes?: string;
  works: WorkMemberProps[];
}

const Member: React.FC = () => {
  const { params } = useRouteMatch<MembersParams>();

  const [member, setMember] = useState<MembersProps | null>(null);

  useEffect(() => {
    api.get<MembersProps>(`${params.login}`).then((response) => {
      setMember(response.data);
    });
  }, [params.login]);

  return (
    <>
      <Header title={member ? `LAMIA - ${member.nameABNT}` : 'LAMIA'} />

      <NavBar />

      {member ? (
        <Main>
          <Headline>
            <div className="basicInfo">
              <div className="leftInfo">
                <div className="column">
                  <div className="name">
                    <h1>{member.name}</h1>
                  </div>
                  <div className="row">
                    <div className="office">
                      <FaMedal size={21} />
                      <span>{member.office.label}</span>
                    </div>
                    <div className="icons">
                      {member.urlGithub && (
                        <a href={member.urlGithub} target="bank">
                          <FaGithubSquare size={24} />
                        </a>
                      )}
                      {member.urlLikendin && (
                        <a href={member.urlLikendin} target="bank">
                          <FaLinkedinIn size={24} />
                        </a>
                      )}
                      {member.urlLattes && (
                        <a href={member.urlLattes} target="bank">
                          <img src={iconLattes} alt="Lattes" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="leftInfo">
                <div className="description">
                  <span>Descrição: </span>
                  {member.description}
                </div>
                <div className="contact">
                  <span>
                    <FaEnvelope />
                    {member.email}
                  </span>
                  {member.phone && (
                    <span>
                      <FaPhoneAlt />
                      {member.phone}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="imgBorde">
              <div>
                <img
                  src={member.avatar ? member.avatar.src : userDefault}
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
                <Card key={member.id}>
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
                            <FaGithub size={32} />
                            <p>Repositório</p>
                          </a>
                        )}

                        <div className="box Date">
                          <FaRegCalendarAlt size={32} />
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
              <img src={training} alt="em treinamento" />
              <h2>Jovem padoã em treinamento</h2>
            </CardWarning>
          )}
        </Main>
      ) : (
        <Main>
          <CardWarning>
            <img src={mano} alt="membro errado" />
            <h2>
              Membro errado amigo.
              <br />
              Estava me testando?
            </h2>
          </CardWarning>
        </Main>
      )}

      <Footer />
    </>
  );
};

export default Member;
