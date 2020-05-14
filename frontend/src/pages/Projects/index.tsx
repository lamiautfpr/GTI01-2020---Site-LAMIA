import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';
import {
  FaChevronRight,
  FaUserNinja,
  FaRegClipboard,
  FaListUl,
} from 'react-icons/fa';
import imgLogo from '../../assets/logo.svg';
import imgTeste from '../../assets/Teste.jpg';

import { Header, Main, Projects } from './style';
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

        <Projects>
          <Link to="teste">
            <img src={imgTeste} alt="Teste" />

            <strong>
              Title Project
              <span>
                <FaUserNinja size={14} />
                Jecé Xavier - Rafael Lechesque
              </span>
              <span>
                <FaRegClipboard size={14} />
                Pesquisa & Pos-Graduação
              </span>
              <span>
                <FaListUl size={14} />
                Games
              </span>
            </strong>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Blanditiis a natus labore suscipit, ad ratione quod praesentium
              architecto et minima hic accusantium provident quia sequi dolorum
              dicta officiis doloribus perspiciatis.
            </p>

            <FaChevronRight size={20} />
          </Link>
          <Link to="teste">
            <img src={imgTeste} alt="Teste" />

            <strong>
              Title Project
              <span>
                <FaUserNinja size={14} />
                Jecé Xavier - Rafael Lechesque
              </span>
              <span>
                <FaRegClipboard size={14} />
                Pesquisa & Pos-Graduação
              </span>
              <span>
                <FaListUl size={14} />
                Games
              </span>
            </strong>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Blanditiis a natus labore suscipit, ad ratione quod praesentium
              architecto et minima hic accusantium provident quia sequi dolorum
              dicta officiis doloribus perspiciatis.
            </p>

            <FaChevronRight size={20} />
          </Link>
          <Link to="teste">
            <img src={imgTeste} alt="Teste" />

            <strong>
              Title Project
              <span>
                <FaUserNinja size={14} />
                Jecé Xavier - Rafael Lechesque
              </span>
              <span>
                <FaRegClipboard size={14} />
                Pesquisa & Pos-Graduação
              </span>
              <span>
                <FaListUl size={14} />
                Games
              </span>
            </strong>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Blanditiis a natus labore suscipit, ad ratione quod praesentium
              architecto et minima hic accusantium provident quia sequi dolorum
              dicta officiis doloribus perspiciatis.
            </p>

            <FaChevronRight size={20} />
          </Link>
          <Link to="teste">
            <img src={imgTeste} alt="Teste" />

            <strong>
              Title Project
              <span>
                <FaUserNinja size={14} />
                Jecé Xavier - Rafael Lechesque
              </span>
              <span>
                <FaRegClipboard size={14} />
                Pesquisa & Pos-Graduação
              </span>
              <span>
                <FaListUl size={14} />
                Games
              </span>
            </strong>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Blanditiis a natus labore suscipit, ad ratione quod praesentium
              architecto et minima hic accusantium provident quia sequi dolorum
              dicta officiis doloribus perspiciatis.
            </p>

            <FaChevronRight size={20} />
          </Link>
          <Link to="teste">
            <img src={imgTeste} alt="Teste" />

            <strong>
              Title Project
              <span>
                <FaUserNinja size={14} />
                Jecé Xavier - Rafael Lechesque
              </span>
              <span>
                <FaRegClipboard size={14} />
                Pesquisa & Pos-Graduação
              </span>
              <span>
                <FaListUl size={14} />
                Games
              </span>
            </strong>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Blanditiis a natus labore suscipit, ad ratione quod praesentium
              architecto et minima hic accusantium provident quia sequi dolorum
              dicta officiis doloribus perspiciatis.
            </p>

            <FaChevronRight size={20} />
          </Link>
          <Link to="teste">
            <img src={imgTeste} alt="Teste" />

            <strong>
              Title Project
              <span>
                <FaUserNinja size={14} />
                Jecé Xavier - Rafael Lechesque
              </span>
              <span>
                <FaRegClipboard size={14} />
                Pesquisa & Pos-Graduação
              </span>
              <span>
                <FaListUl size={14} />
                Games
              </span>
            </strong>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Blanditiis a natus labore suscipit, ad ratione quod praesentium
              architecto et minima hic accusantium provident quia sequi dolorum
              dicta officiis doloribus perspiciatis.
            </p>

            <FaChevronRight size={20} />
          </Link>
        </Projects>
      </Main>

      <Footer />
    </>
  );
};

export default Home;
