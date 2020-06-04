import React, { useState, useEffect, useLayoutEffect } from 'react';

import { Link, useRouteMatch } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';
import {
  FaChevronRight,
  FaUserNinja,
  FaRegClipboard,
  FaListUl,
} from 'react-icons/fa';

import api from '../../services/api';

import imgTeste from '../../assets/Teste.jpg';
import { SelectItem } from '../../../myTypes/SelectItem';
import { TypeWork } from '../../../myTypes/TypeWork';
import { compareTitleASC, compareTitleDESC } from '../../utils/orderArray';

import { Main, Projects, SectionFilters } from './style';
import Header from '../../components/Header';
import NavBar from '../../components/NavBar';
import Separator from '../../components/Separator';
import Footer from '../../components/Footer';
import SelectBox from '../../components/SelectBox';
import Member from '../Member';

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

const listOrder = [
  { value: 0, description: null, label: 'A-Z' },
  { value: 1, description: null, label: 'Z-A' },
  // { value: description: null, '2', label: ' + Antigas' },
  // { value: description: null, '3', label: '+ Recentes' },
];

interface CategoryParams {
  category: string;
}

interface CategoryProps {
  name: string;
  description: string | null;
  types: SelectItem[];
}

const ListProjects: React.FC = () => {
  const { params } = useRouteMatch<CategoryParams>();

  // datas data base
  const [allWorks, setAllWorks] = useState<TypeWork[]>([]);
  const [works, setWorks] = useState<TypeWork[]>([]);

  const [category, setCategory] = useState<CategoryProps>({} as CategoryProps);
  const [areas, setAreas] = useState<SelectItem[]>([]);

  // filters
  const [orderSelected, setOrderSelected] = useState<number>(0);
  const [areaSelected, setAreaSelected] = useState<number>(0);
  const [typeSelected, setTypeSelected] = useState<number[]>([]);

  // Functions for list works
  const changeWorkList = (area: number, types: number[]): void => {
    if (area === 0 && types.length < 1) {
      // there is no filter
      setWorks(allWorks);
    } else if (area === 0 && types) {
      // only type filter exists
      setWorks(
        allWorks.filter(function (work) {
          return work.typeWorks.some((t) => types.includes(t));
        }),
      );
    } else if (area !== 0 && types.length < 1) {
      // only area filter exists
      setWorks(
        allWorks.filter(function (work) {
          return work.areaExpensive.includes(area);
        }),
      );
    } else {
      // All filter exists
      setWorks(
        allWorks
          .filter(function (work) {
            // Filtro das Area
            return work.areaExpensive.includes(area);
          })
          .filter(function (work) {
            // Filtro dos TypesWorks
            return work.typeWorks.some((t) => types.includes(t));
          }),
      );
    }
  };

  const setTypeWorks = (itemsSelected: SelectItem[]): void => {
    if (!itemsSelected || itemsSelected.length < 1) {
      setTypeSelected([]);
      changeWorkList(areaSelected, []);
    } else {
      const types: number[] = [];
      itemsSelected.forEach((item) => {
        types.push(item.value);
      });
      setTypeSelected([]);
      changeWorkList(areaSelected, types);
    }
  };

  const setAreaExpensive = ({ value }: SelectItem): void => {
    setAreaSelected(value);
    changeWorkList(value, typeSelected);
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

  // Functions for get list works
  useEffect(() => {
    api.get(`category-works/${params.category}`).then((response) => {
      setCategory(response.data);
    });

    if (params.category !== 'members') {
      api.get(`area-expertises`).then((response) => {
        setAreas(response.data);
      });
    }
  }, [params.category]);

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
        <SectionFilters isMembers={params.category === 'members'}>
          <div className="areaExpensive">
            <SelectBox
              label="Áreas de Pesquisa"
              options={areas}
              placeholder="Selecione..."
              width={250}
              onChange={setAreaExpensive}
            />
          </div>
          <div className="typeWorks">
            <SelectBox
              label={`${params.category
                .charAt(0)
                .toUpperCase()}${params.category.slice(1)}`}
              options={category.types}
              placeholder="Selecione..."
              width={550}
              isMulti
              onChange={setTypeWorks}
              // value={null}
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
        </SectionFilters>

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

export default ListProjects;
