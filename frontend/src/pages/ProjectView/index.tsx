import React, { useState, useCallback } from 'react';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
import { Link } from 'react-router-dom';

import {
  FaRegCalendarAlt,
  FaGithub,
  FaRegClipboard,
  FaListUl,
} from 'react-icons/fa';

import logoLar from '../../assets/logo_lar.png';
import logoStark from '../../assets/logo_stark.jpg';
import logoXavier from '../../assets/logo_xavier.jpg';
import logoRock from '../../assets/logo_rockStar.png';
import logoCyber from '../../assets/logo_cyber.jpg';
import logoLex from '../../assets/logo_lex.png';
import imgTeste from '../../assets/Teste.jpg';
import { photos } from '../../assets/photoGalleryTeste/photos';

import {
  Main,
  HeadTitle,
  SectionText,
  SectionColunm,
  HeaderSection,
  Aside,
  ShelfGallery,
  Content,
} from './style';
import Header from '../../components/Header';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

const ProjectView: React.FC = () => {
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
      <Header title="LAMIA - Teste 3" />

      <NavBar />
      <Main>
        <HeadTitle>
          <div className="info">
            <h1 className="hoverTitle">MDT01-2019---Reconhecimento-Facial</h1>
          </div>
          <div className="imgBorde hoverTitle">
            <div>
              <img src={imgTeste} alt="Teste" />
            </div>
          </div>
        </HeadTitle>

        <Content>
          <SectionText>
            <HeaderSection>Resumo</HeaderSection>
            <div className="text">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
                nulla est possimus vel itaque qui quam nesciunt temporibus!
                Iusto, voluptatum. Fuga nostrum laborum ducimus cumque vero
                ullam ipsa soluta quos.
              </p>

              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
                nulla est possimus vel itaque qui quam nesciunt temporibus!
                Iusto, voluptatum. Fuga nostrum laborum ducimus cumque vero
                ullam ipsa soluta quos.
              </p>

              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
                nulla est possimus vel itaque qui quam nesciunt temporibus!
                Iusto, voluptatum. Fuga nostrum laborum ducimus cumque vero
                ullam ipsa soluta quos.
              </p>
            </div>
            <HeaderSection>Objetivo</HeaderSection>
            <div className="text">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
                nulla est possimus vel itaque qui quam nesciunt temporibus!
                Iusto, voluptatum. Fuga nostrum laborum ducimus cumque vero
                ullam ipsa soluta quos.
              </p>

              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
                nulla est possimus vel itaque qui quam nesciunt temporibus!
                Iusto, voluptatum. Fuga nostrum laborum ducimus cumque vero
                ullam ipsa soluta quos.
              </p>

              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
                nulla est possimus vel itaque qui quam nesciunt temporibus!
                Iusto, voluptatum. Fuga nostrum laborum ducimus cumque vero
                ullam ipsa soluta quos.
              </p>
            </div>
          </SectionText>

          <SectionColunm>
            <div className="column">
              <Aside>
                <h1>Informações</h1>
                <div>
                  <span>
                    <FaListUl />
                    Visão Computacional
                  </span>
                </div>
                <div>
                  <span>
                    <FaRegClipboard />
                    Consutoria
                  </span>
                </div>
                <section>
                  <div className="box">
                    <a
                      href="https://github.com/lamia-utfpr/MDT01-2019---Reconhecimento-Facial"
                      target="bank"
                      className="box git"
                    >
                      <FaGithub />
                      <p>GitHub</p>
                    </a>
                  </div>
                  <div className="box">
                    <FaRegCalendarAlt />
                    <p>22/04/2020</p>
                  </div>
                </section>
              </Aside>
              <Aside>
                <h1>Integrantes</h1>
                <div>
                  <Link to="/member" target="bank">
                    <img src={imgTeste} alt="Teste" />
                  </Link>

                  <Link to="/member" target="bank">
                    <img src={imgTeste} alt="Teste" />
                  </Link>

                  <Link to="/member" target="bank">
                    <img src={imgTeste} alt="Teste" />
                  </Link>

                  <Link to="/member" target="bank">
                    <img src={imgTeste} alt="Teste" />
                  </Link>

                  <Link to="/member" target="bank">
                    <img src={imgTeste} alt="Teste" />
                  </Link>

                  <Link to="/member" target="bank">
                    <img src={imgTeste} alt="Teste" />
                  </Link>

                  <Link to="/member" target="bank">
                    <img src={imgTeste} alt="Teste" />
                  </Link>

                  <Link to="/member" target="bank">
                    <img src={imgTeste} alt="Teste" />
                  </Link>

                  <Link to="/member" target="bank">
                    <img src={imgTeste} alt="Teste" />
                  </Link>

                  <Link to="/member" target="bank">
                    <img src={imgTeste} alt="Teste" />
                  </Link>

                  <Link to="/member" target="bank">
                    <img src={imgTeste} alt="Teste" />
                  </Link>

                  <Link to="/member" target="bank">
                    <img src={imgTeste} alt="Teste" />
                  </Link>
                </div>
              </Aside>
              <Aside>
                <h1>Parceiros</h1>
                <ul>
                  <li>
                    <img src={logoLar} alt="LogoLar" />
                  </li>
                  <li>
                    <img src={logoLex} alt="LogoLex" />
                  </li>

                  <li>
                    <img src={logoStark} alt="LogoStark" />
                  </li>
                </ul>
              </Aside>
            </div>
          </SectionColunm>
        </Content>
        <HeaderSection>Galeria</HeaderSection>
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

      <Footer />
    </>
  );
};

export default ProjectView;
