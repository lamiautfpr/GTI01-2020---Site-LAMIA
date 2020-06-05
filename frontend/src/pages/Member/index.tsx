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
import { containerCSS } from 'react-select/src/components/containers';
import { SelectItem } from '../../../myTypes/SelectItem';
import { ImageProps } from '../../../myTypes/Images';

import api from '../../services/api';
import iconLattes from '../../assets/icon_lattes.svg';
import userPadrao from '../../assets/userPadrao.png';
import { photos } from '../../assets/photoGalleryTeste/photos';

import { Main, Headline, Title, Shelf, Card, ShelfGallery } from './style';
import Header from '../../components/Header';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

interface MembersParams {
  login: string;
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

      {member && (
        <Main>
          <Headline>
            <div className="basicInfo">
              <div className="leftInfo">
                <div className="name">
                  <h1>{member.name}</h1>
                  {/* <h2>Lechensque</h2> */}
                </div>
                <div className="office-icons">
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
          <Shelf>
            <Card>
              <img src={userPadrao} alt="Teste" />
              <div className="bookContainer">
                <div className="content">
                  {/* <button> Saiba mais </button> */}
                </div>
              </div>
              <div className="informationsContainer">
                <h2 className="title"> Teste 1</h2>
                <div className="primaryInformations">
                  <span>
                    <FaListUl size={16} />
                    Visão computacional
                  </span>
                  <span>
                    <FaRegClipboard size={16} />
                    TCC
                  </span>
                </div>

                <div className="moreInfomation">
                  <div className="infoDateContainer">
                    <a
                      href="https://github.com/lamia-utfpr"
                      target="bank"
                      className="box git"
                    >
                      <FaGithub size={32} />
                      <p>repositorio</p>
                    </a>
                    <div className="box Date">
                      <FaRegCalendarAlt size={32} />
                      <p>28/05/2020</p>
                    </div>
                  </div>
                  <div className="objective">
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Quasi eveniet perferendis oie ...
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </Shelf>
          <Title>
            <header>
              <h2>Galeria</h2>
            </header>
          </Title>
          <ShelfGallery>
            <Gallery photos={photos} onClick={openLightbox} />
            <ModalGateway>
              {viewerIsOpen ? (
                <Modal onClose={closeLightbox}>
                  <Carousel
                    currentIndex={currentImage}
                    views={photos.map((x) => ({
                      ...x,
                      srcset: x.source,
                      caption: x.title,
                    }))}
                  />
                </Modal>
              ) : null}
            </ModalGateway>
          </ShelfGallery>
        </Main>
      )}

      <Footer />
    </>
  );
};

export default Member;
