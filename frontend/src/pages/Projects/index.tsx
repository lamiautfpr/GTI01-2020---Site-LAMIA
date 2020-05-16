/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
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
import { SelectItem } from '../../../myTypes/SelectItem';
import { TypeWork } from '../../../myTypes/TypeWork';

import { Main, Projects } from './style';
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
  const [works, setWorks] = useState<TypeWork[]>(listWorks);

  const setAreaExpensive = ({ value }: SelectItem): void => {
    alert(`AreaExpensive selected is ${value}`);

    if (value === '0') {
      setWorks(listWorks);
    } else {
      setWorks(
        listWorks.filter(function (work) {
          return work.areaExpensive.includes(parseInt(value));
        }),
      );
    }
  };

  const setTypeWorks = (typeWotks: SelectItem[]): void => {
    const types: string[] = [];
    typeWotks.forEach((type) => {
      types.push(type.value);
    });
    alert(`AreaExpensive selected is ${types}`);
  };

  const setOrder = ({ value }: SelectItem): void => {
    alert(`Order selected is ${value}`);
  };

  return (
    <>
      <Header title="LAMIA - Projetos" />

      <NavBar />

      <Main>
        <section>
          <div className="areaExpensive">
            <SelectBox
              label="Áreas de Pesquisa"
              options={areaExpensives}
              placeholder="Selecione..."
              width={250}
              onChange={setAreaExpensive}
            />
          </div>
          <div className="typeWorks">
            <SelectBox
              label="Tipo de Trabalho"
              options={typeWorks}
              placeholder="Selecione..."
              width={550}
              isMulti
              onChange={setTypeWorks}
            />
          </div>
          <div className="order">
            {/* // eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <SelectBox
              label="Ordenação"
              options={order}
              placeholder="Selecione..."
              onChange={setOrder}
            />
          </div>
        </section>

        <Separator />

        <Projects>
          {works.map((work) => (
            <Link key={work.id} to="teste">
              <img src={imgTeste} alt="Teste" />

              <strong>
                {work.title}
                <span>
                  <FaUserNinja size={14} />
                  Jecé Xavier - Rafael Lechesque
                </span>
                <span>
                  <FaRegClipboard size={14} />
                  {/* Pesquisa & Pos-Graduação */}
                  {work.typeWorks}
                </span>
                <span>
                  <FaListUl size={14} />
                  {work.areaExpensive}
                </span>
              </strong>
              <p>{work.objective}</p>

              <FaChevronRight size={20} />
            </Link>
          ))}
        </Projects>
      </Main>

      <Footer />
    </>
  );
};

export default Home;
