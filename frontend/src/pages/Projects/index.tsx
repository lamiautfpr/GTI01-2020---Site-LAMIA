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
  { value: 0, label: 'Todas' },
  { value: 1, label: 'Ciência de Dados' },
  { value: 2, label: 'Visão Computacional' },
  { value: 3, label: 'Games' },
];

const listOrder = [
  { value: 0, label: 'A-Z' },
  { value: 1, label: 'Z-A' },
  // { value: '2', label: ' + Antigas' },
  // { value: '3', label: '+ Recentes' },
];

const typeWorks = [
  { value: 1, label: 'TCC' },
  { value: 2, label: 'IC' },
  {
    value: 3,
    label: 'Partes de Livros e Livros',
  },
  { value: 4, label: 'Patentes' },
  { value: 5, label: 'Pesquisa' },
];

const Home: React.FC = () => {
  const [works, setWorks] = useState<TypeWork[]>(listWorks);
  const [allWorks, setAllWorks] = useState<TypeWork[]>(listWorks);
  const [orderSelected, setOrderSelected] = useState<number>(0);
  const [areaSelected, setAreaSelected] = useState<number>(0);
  const [typeSelected, setTypeSelected] = useState<number[] | null>(null);

  const setAreaExpensive = ({ value }: SelectItem): void => {
    if (value === 0) {
      if (!typeSelected) {
        setWorks(allWorks);
      } else {
        setWorks(
          allWorks.filter(function (work) {
            // Filtro dos TypesWorks
            return work.typeWorks.some((t) => typeSelected.includes(t));
          }),
        );
      }
    } else if (!typeSelected) {
      setWorks(
        allWorks.filter(function (work) {
          return work.areaExpensive.includes(value);
        }),
      );
    } else {
      setWorks(
        allWorks
          .filter(function (work) {
            // Filtro das Area
            return work.areaExpensive.includes(value);
          })
          .filter(function (work) {
            // Filtro dos TypesWorks
            return work.typeWorks.some((t) => typeSelected.includes(t));
          }),
      );
    }
    setAreaSelected(value);
  };

  const setTypeWorks = (typeWotks: SelectItem[]): void => {
    // Verificando se tem algum typeWord filtrado
    if (typeWotks) {
      if (typeWotks.length === 0) {
        if (areaSelected === 0) {
          setWorks(allWorks);
        } else {
          setWorks(
            allWorks.filter(function (work) {
              return work.areaExpensive.includes(areaSelected);
            }),
          );
        }
        setTypeSelected(null);
      } else {
        const types: number[] = [];
        typeWotks.forEach((type) => {
          types.push(type.value);
        });

        if (areaSelected === 0) {
          setWorks(
            allWorks.filter(function (work) {
              return work.typeWorks.some((value) => types.includes(value));
            }),
          );
        } else {
          setWorks(
            allWorks
              .filter(function (work) {
                // Filtro dos TypesWorks
                return work.typeWorks.some((value) => types.includes(value));
              })
              .filter(function (work) {
                // Filtro das Area
                return work.areaExpensive.includes(areaSelected);
              }),
          );
        }
        setTypeSelected(types);
      }
    } else if (areaSelected === 0) {
      setWorks(allWorks);
      setTypeSelected(null);
    } else {
      setWorks(
        allWorks.filter(function (work) {
          return work.areaExpensive.includes(areaSelected);
        }),
      );
      setTypeSelected(null);
    }
  };

  const checkOrder = ({ value }: SelectItem): void => {
    // alert(`Order selected is ${value}`);

    setOrderSelected(value);

    if (value === 0) {
      setWorks(works.sort(compareTitleASC));
      setAllWorks(allWorks.sort(compareTitleASC));
    } else if (value === 1) {
      setWorks(works.sort(compareTitleDESC));
      setAllWorks(allWorks.sort(compareTitleDESC));
    }
  };

  const workWithTrasitions = useTransition(works, (work) => work.id, {
    from: { opacity: 0, transform: 'translate3d(0,-40px,0)' },
    enter: { opacity: 1, transform: 'translate3d(0,0px,0)' },
    leave: { opacity: 0, transform: 'translate3d(0,-40px,0)' },
  });

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
              options={listOrder}
              placeholder="Selecione..."
              onChange={checkOrder}
            />
          </div>
        </section>

        <Separator />

        <Projects>
          {workWithTrasitions.map(({ item, key, props }) => (
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
                    <FaRegClipboard size={14} />
                    {/* Pesquisa & Pos-Graduação */}
                    {item.typeWorks}
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
          ))}
        </Projects>
      </Main>

      <Footer />
    </>
  );
};

export default Home;
