import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';
import {
  FaChevronRight,
  FaUserNinja,
  FaRegClipboard,
  FaListUl,
} from 'react-icons/fa';
import imgTeste from '../../assets/Teste.jpg';
import { SelectItem } from '../../../myTypes/SelectItem';
import { TypeWork } from '../../../myTypes/TypeWork';
import { compareTitleASC, compareTitleDESC } from '../../utils/orderArray';

import { Main, Projects, Headline, Title, Shelf, Card } from './style';
import Header from '../../components/Header';
import NavBar from '../../components/NavBar';
import Separator from '../../components/Separator';
import Footer from '../../components/Footer';
import SelectBox from '../../components/SelectBox';

const listWorks = [
  {
    id: 1,
    title: 'Teste 1',
    objective:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Blanditiis a natus labore suscipit, ad ratione quod praesentiumarchitecto et minima hic accusantium provident quia sequi dolorum dicta officiis doloribus perspiciatis.',
    typeWorks: [1, 2, 3],
    areaExpensive: [1],
  },
  {
    id: 2,
    title: 'Teste 2',
    objective:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Blanditiis a natus labore suscipit, ad ratione quod praesentiumarchitecto et minima hic accusantium provident quia sequi dolorum dicta officiis doloribus perspiciatis.',
    typeWorks: [4],
    areaExpensive: [1],
  },
  {
    id: 3,
    title: 'Teste 3',
    objective:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Blanditiis a natus labore suscipit, ad ratione quod praesentiumarchitecto et minima hic accusantium provident quia sequi dolorum dicta officiis doloribus perspiciatis.',
    typeWorks: [3, 4],
    areaExpensive: [2],
  },
  {
    id: 4,
    title: 'Teste 4',
    objective:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Blanditiis a natus labore suscipit, ad ratione quod praesentiumarchitecto et minima hic accusantium provident quia sequi dolorum dicta officiis doloribus perspiciatis.',
    typeWorks: [5],
    areaExpensive: [2, 1],
  },
];

const areaExpensives = [
  { value: '0', label: 'Todas' },
  { value: '1', label: 'Ciência de Dados' },
  { value: '2', label: 'Visão Computacional' },
  { value: '3', label: 'Games' },
];

const listOrder = [
  { value: '0', label: 'A-Z' },
  { value: '1', label: 'Z-A' },
  // { value: '2', label: ' + Antigas' },
  // { value: '3', label: '+ Recentes' },
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
      <Header title="LAMIA - Teste 1" />

      <NavBar />

      <Main>
        <section>
          {/* <h1>Teste 1</h1>
          <div className="infomation">
            <FaUserNinja />
            <span>Jecé Xavier - Rafael Lechesque</span>
            <span>Visão Computacional</span>
            <span>TCC</span>
          </div> */}
        </section>

        <Projects>
          {/* {workWithTrasitions.map(({ item, key, props }) => (
            <animated.div key={item.id} style={props}>
              <Link to={`/projects/${item.id}`}>
                <img src={imgTeste} alt="Teste" />

                <strong>
                  {item.title}
                  <span>
                    <FaUserNinja size={14} />
                    Jecé Xavier - Rafael Lechesque
                  </span>
                  <span>
                    <FaRegClipboard size={14} /> */}
          {/* Pesquisa & Pos-Graduação */}
          {/* {item.typeWorks}
                  </span>
                  <span>
                    <FaListUl size={14} />
                    {item.areaExpensive}
                  </span>
                </strong>
                <p>{item.objective}</p>

                <FaChevronRight size={20} />
              </Link>
            </animated.div>
          ))} */}
        </Projects>

        <Headline>
          <div className="basicInfo">
            <h1>Alunos</h1>
            <div>
              <h1>Rafael Lechensque</h1>
              <h1> Jece Xavier</h1>
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
                <button> Saiba menos </button>
              </div>
            </div>
            <div className="informationsContainer">
              <h2 className="title"> Não sei</h2>
              <p className="subTitle">
                tanto faz so tem q preenche o vazio com qual que coisa
              </p>
              <div className="moreInformation">
                a parte que vai subir buitinho Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Beatae accusantium repellat neque
                optio, necessitatibus mollitia architecto deserunt
              </div>
            </div>
          </Card>
          <Card>sei la2</Card>
          <Card>sei la3</Card>
          <Card>sei la4</Card>
          <Card>sei la5</Card>
        </Shelf>
      </Main>

      <Footer />
    </>
  );
};

export default Home;
