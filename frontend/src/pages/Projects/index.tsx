/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';
import {
  FaChevronRight,
  FaUserNinja,
  FaRegClipboard,
  FaListUl,
} from 'react-icons/fa';
import imgTeste from '../../assets/Teste.jpg';

import { Main, Projects } from './style';
import Header from '../../components/Header';
import NavBar from '../../components/NavBar';
import Separator from '../../components/Separator';
import Footer from '../../components/Footer';
import SelectBox from '../../components/SelectBox';

const areaExpensive = [
  { value: '0', label: 'Todas' },
  { value: '1', label: 'Ciência de Dados' },
  { value: '2', label: 'Visão Computacional' },
  { value: '3', label: 'Games' },
];

const Home: React.FC = () => {
  return (
    <>
      <Header title="LAMIA - Projetos" />

      <NavBar />

      <Main>
        <section>
          <div>
            {/* // eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <SelectBox
              label="Áreas de Pesquisa"
              options={areaExpensive}
              placeholder="Selecione..."
            />
          </div>
          <div>Type</div>
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
