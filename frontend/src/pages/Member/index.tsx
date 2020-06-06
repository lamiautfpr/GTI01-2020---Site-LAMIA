import React, { useState, useCallback, useEffect } from 'react';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
import { Link, useRouteMatch, Redirect } from 'react-router-dom';
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
import userPadrao from '../../assets/userPadrao.png';
import workPadrao from '../../assets/logo.svg';

import { Main, Headline, Title, Shelf, Card, ShelfGallery } from './style';
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

  // Galery
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  useEffect(() => {
    console.log('oi');

    api.get<MembersProps>(`${params.login}`).then((response) => {
      setMember(response.data);
    });
  }, [params.login]);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = (): void => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

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
                  src={member.avatar ? member.avatar.src : userPadrao}
                  alt="Teste"
                />
              </div>
            </div>
          </Headline>

          <Title>
            <header>
              <h2>Projetos Participado</h2>
            </header>
          </Title>
          {member.works.length > 0 ? (
            <Shelf>
              {member.works.map(({ workData }) => (
                <Card>
                  <img
                    src={
                      workData.pictures.length > 0
                        ? workData.pictures[0].src
                        : workPadrao
                    }
                    alt="Projeto"
                  />
                  <div className="bookContainer">
                    <div className="content">
                      <button> Saiba mais </button>
                    </div>
                  </div>
                  <div className="informationsContainer">
                    <h2 className="title">{workData.title}</h2>
                    <div className="primaryInformations">
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

                    <div className="moreInfomation">
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
                        <p>{workData.objective}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </Shelf>
          ) : (
            <h2>Jovem padoã ainda em treinamento</h2>
          )}
        </Main>
      ) : (
        <h2>OI</h2>
      )}

      <Footer />
    </>
  );
};

export default Member;
