import React, { useState, useCallback } from 'react';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
import { Link } from 'react-router-dom';

import {
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
  FaClipboard,
  FaGithubSquare,
  FaRegCalendarAlt,
  FaGithub,
  FaRegClipboard,
  FaListUl,
  FaMedal,
} from 'react-icons/fa';
import iconLattes from '../../assets/icon_lattes.svg';
import imgTeste from '../../assets/Teste.jpg';
import { photos } from '../../assets/photoGalleryTeste/photos';

import { Main, Headline, Title, Shelf, Card, ShelfGallery } from './style';
import Header from '../../components/Header';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

const images = [
  { source: 'path/to/image-1.jpg' },
  { source: 'path/to/image-2.jpg' },
];

const Member: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

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
      <Header title="LAMIA - Teste 1" />

      <NavBar />

      <Main>
        <Headline>
          <div className="basicInfo">
            <div className="leftInfo">
              <div className="name">
                <h1>Rafael Lechensque</h1>
                {/* <h2>Lechensque</h2> */}
              </div>
              <div className="office">
                <FaMedal size={21} />
                <span>Veterano</span>
              </div>
              <div className="icons">
                <a
                  href="https://github.com/RafaelLechensqueDeAquino"
                  target="bank"
                >
                  <FaGithubSquare size={24} />
                </a>
                <a
                  href="https://br.linkedin.com/in/rafael-lechensque-de-aquino-ba602a122"
                  target="bank"
                >
                  <FaLinkedinIn size={24} />
                </a>
                <a
                  href="http://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K2045004P0&tokenCaptchar=03AGdBq26Xy5vU7oZXdRd1zbGczYMW3vAWABWPHchfkYvL-hD5FaC_CJijFbdiKieCmq4H0PxJeOMgq3zA0annEyvH6v7g-xOwOQW00ja_DTDt-TUgmxg-wZ_ZyngcoH3V-RrAb4xLbPUL8QUZMGOeT4yEp6QG7NLlOfXJtox44RP9FgjEN83KJYi5iiUw_zATfO1_tufijSWOu_VXEEXBbawk0z3VJuSpSKjoBre83kIj1kUDR1uGleQR1EsghDKBAT-v9C4V3Oyx5eh_iKHNx5csYNhOawaT1kenwtyioiyOPTOf8phFD4L1f5pIkfxR1aMn4gqa_1FY7LpcRKCjjgQcstViloqX-VC3nisTXAgvI8HXil1_cUv6xAC2wdbijc3hjLJQcQp54ciY9qijpXlAr_TBFhmrMg"
                  target="bank"
                >
                  <img src={iconLattes} alt="Lattes" />
                </a>
              </div>
            </div>
            <div className="leftInfo">
              <div className="description">
                <span>Descrição: </span>
                Eu sou Rafael Uchiha. Eu odeio um monte de coisas, e eu
                particularmente não gosto de nada. Vou restaurar meu clã, e
                matar um certo alguém.
              </div>
              <div className="contact">
                <FaEnvelope />
                rafelaquino@alunso.utfpr.edu.br
                <p> </p>
                <FaPhoneAlt />
                (61) 98287-3563
              </div>
            </div>
          </div>

          <div className="imgBorde">
            <div>
              <img src={imgTeste} alt="Teste" />
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
            <img src={imgTeste} alt="Teste" />
            <div className="bookContainer">
              <div className="content">
                <button> Saiba mais </button>
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

          <Card>
            <img src={imgTeste} alt="Teste" />
            <div className="bookContainer">
              <div className="content">
                <button> Saiba mais </button>
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

          <Card>
            <img src={imgTeste} alt="Teste" />
            <div className="bookContainer">
              <div className="content">
                <button> Saiba mais </button>
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

          <Card>
            <img src={imgTeste} alt="Teste" />
            <div className="bookContainer">
              <div className="content">
                <button> Saiba mais </button>
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

          <Card>
            <img src={imgTeste} alt="Teste" />
            <div className="bookContainer">
              <div className="content">
                <button> Saiba mais </button>
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
                  views={photos.map((x) => ({
                    ...x,
                    srcset: x.src,
                    caption: x.title,
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway>
        </ShelfGallery>
      </Main>

      <Footer />
    </>
  );
};

export default Member;
