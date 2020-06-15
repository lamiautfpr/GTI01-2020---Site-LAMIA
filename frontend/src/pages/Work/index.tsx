import React, { useCallback, useEffect, useState } from 'react';
import {
  FaGithub,
  FaListUl,
  FaRegCalendarAlt,
  FaRegClipboard,
} from 'react-icons/fa';
import { GiBookshelf } from 'react-icons/gi';
import Carousel, { Modal, ModalGateway } from 'react-images';
import Gallery from 'react-photo-gallery';
import { Link, useRouteMatch } from 'react-router-dom';

import { WorkListProps } from '../../../myTypes/WorkListProps';
import imgWorkDefault from '../../assets/imgWorkDefault.png';
import PulpFiction from '../../assets/Pulp_fiction.gif';
import imgUserDefault from '../../assets/userDefault.png';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import NavBar from '../../components/NavBar';
import api from '../../services/api';
import {
  Aside,
  CardWarning,
  Content,
  HeaderSection,
  HeadTitle,
  Main,
  SectionColumn,
  SectionText,
  ShelfGallery,
} from './style';

interface WorkParams {
  id: string;
}

const ProjectView: React.FC = () => {
  const { params } = useRouteMatch<WorkParams>();

  // Gallery
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  // Data
  const [work, setWork] = useState<WorkListProps | null>(null);

  useEffect(() => {
    api.get(`work/${params.id}`).then((response) => {
      setWork(response.data);
    });
  }, [params.id]);

  const openLightbox = useCallback((event, { index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = useCallback((): void => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  }, []);

  return (
    <>
      <Header title={work ? `LAMIA - ${work.title}` : 'LAMIA'} />

      <NavBar />

      <Main>
        {work ? (
          <>
            <HeadTitle>
              <div className="info">
                <h1 className="hoverTitle">{work.title}</h1>
              </div>
              <div className="imgBorde hoverTitle">
                <div>
                  <img
                    src={
                      work.pictures.length > 0
                        ? work.pictures[0].src
                        : imgWorkDefault
                    }
                    alt={work.title}
                  />
                </div>
              </div>
            </HeadTitle>

            <Content>
              <SectionText>
                <HeaderSection>Resumo</HeaderSection>
                <div className="text">
                  <p>{work.abstract}</p>
                </div>
                <HeaderSection>Objetivo</HeaderSection>
                <div className="text">
                  <p>{work.objective}</p>
                </div>
              </SectionText>

              <SectionColumn>
                <div className="column">
                  <Aside>
                    <h1>Informações</h1>
                    <div>
                      {work.categories.length > 0 && (
                        <span>
                          <GiBookshelf />
                          {work.categories.map(
                            (category) => `${category.name}; `,
                          )}
                        </span>
                      )}
                      {work.types.length > 0 && (
                        <span>
                          <FaRegClipboard />
                          {work.types.map((type) => `${type.label}; `)}
                        </span>
                      )}
                      {work.areaExpertise.length > 0 && (
                        <span>
                          <FaListUl />
                          {work.areaExpertise.map((area) => `${area.label}; `)}
                        </span>
                      )}
                    </div>
                    <section>
                      {work.urlGithub && (
                        <div className="box">
                          <a
                            href={work.urlGithub}
                            target="bank"
                            className="box git"
                          >
                            <FaGithub />
                            <p>Repositório</p>
                          </a>
                        </div>
                      )}
                      <div className="box">
                        <FaRegCalendarAlt />
                        <p>{work.dateBegin}</p>
                      </div>
                    </section>
                  </Aside>
                  <Aside>
                    <h1>Integrantes</h1>
                    <div>
                      {work.worksMember.map(({ memberData }) => (
                        <Link
                          key={memberData.login}
                          to={`/${memberData.login}`}
                        >
                          <img
                            src={
                              memberData.avatar
                                ? memberData.avatar.src
                                : imgUserDefault
                            }
                            alt={memberData.nameABNT}
                          />
                        </Link>
                      ))}
                    </div>
                  </Aside>
                  <Aside>
                    <h1>Parceiros</h1>
                    <ul>
                      {work.partner && (
                        <li>
                          <a href={work.partner.link_page}>
                            <img
                              src={work.partner.logo}
                              alt={work.partner.name}
                            />
                          </a>
                        </li>
                      )}
                      <Link to="/" className="BePartner">
                        seja um Parceiro
                      </Link>
                    </ul>
                  </Aside>
                </div>
              </SectionColumn>
            </Content>
            {work.pictures.length > 0 && (
              <>
                <HeaderSection>Galeria</HeaderSection>
                <ShelfGallery>
                  <Gallery photos={work.pictures} onClick={openLightbox} />
                  <ModalGateway>
                    {viewerIsOpen ? (
                      <Modal onClose={closeLightbox}>
                        <Carousel
                          currentIndex={currentImage}
                          views={work.pictures.map((x) => ({
                            ...x,
                            srcset: x.source,
                            caption: x.name,
                          }))}
                        />
                      </Modal>
                    ) : null}
                  </ModalGateway>
                </ShelfGallery>
              </>
            )}
          </>
        ) : (
          <CardWarning>
            <img src={PulpFiction} alt="Pulp fiction" />
            <h2>Esqueçeram de publicar de novo?</h2>
          </CardWarning>
        )}
      </Main>

      <Footer />
    </>
  );
};

export default ProjectView;
