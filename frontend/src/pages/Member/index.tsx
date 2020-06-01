import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';
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
import imgTeste from '../../assets/Teste.jpg';

import iconLattes from '../../assets/icon_lattes.svg';

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

const Member: React.FC = () => {
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
              <div className="office">
                <FaMedal size={21} />
                <span>Veterano</span>
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
      </Main>

      <Footer />
    </>
  );
};

export default Member;
