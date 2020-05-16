/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';
import {
  FaChevronRight,
  FaUserNinja,
  FaRegClipboard,
  FaListUl,
  FaSortAlphaDownAlt,
} from 'react-icons/fa';
import imgTeste from '../../assets/Teste.jpg';

import { Main, Projects } from './style';
import Header from '../../components/Header';
import NavBar from '../../components/NavBar';
import Separator from '../../components/Separator';
import Footer from '../../components/Footer';
import SelectBox from '../../components/SelectBox';

const areaExpensive = [
  { value: '0', icon: <FaSortAlphaDownAlt />, label: 'Todas' },
  { value: '1', icon: <FaSortAlphaDownAlt />, label: 'Ciência de Dados' },
  { value: '2', icon: <FaSortAlphaDownAlt />, label: 'Visão Computacional' },
  { value: '3', icon: <FaSortAlphaDownAlt />, label: 'Games' },
];

const order = [
  { value: '0', label: 'A-Z' },
  { value: '1', label: 'Z-A' },
  { value: '2', label: ' + Antigas' },
  { value: '3', label: '+ Recentes' },
];

const typeWorks = [
  { value: '0', label: 'Todos' },
  { value: '1', label: 'TCC' },
  { value: '2', label: 'IC' },
  {
    value: '3',
    label: 'Partes de Livros e Livros',
  },
  { value: '4', label: 'Patentes' },
  { value: '5', label: 'Pesquisa' },
];

const Home: React.FC = () => {
  return (
    <>
      <Header title="LAMIA - Projetos" />

      <NavBar />

      <Main>
        <section>
          <div className="areaExpensive">
            <SelectBox
              label="Áreas de Pesquisa"
              options={areaExpensive}
              placeholder="Selecione..."
              width={250}
            />
          </div>
          <div className="typeWorks">
            <SelectBox
              label="Tipo de Trabalho"
              options={typeWorks}
              placeholder="Selecione..."
              width={550}
              isMulti
            />
          </div>
          <div className="order">
            {/* // eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <SelectBox
              label="Ordenação"
              options={order}
              placeholder="Selecione..."
            />
          </div>
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
