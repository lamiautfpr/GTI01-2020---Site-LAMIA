import React, { useState, useEffect } from 'react';

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
import { WorkListProps } from '../../../myTypes/WorkListProps';
import {
  compareTitleASC,
  compareTitleDESC,
  compareDateASC,
  compareDateDESC,
} from '../../utils/orderArray';

import { Main, Projects, SectionFilters } from './style';
import Header from '../../components/Header';
import NavBar from '../../components/NavBar';
import Separator from '../../components/Separator';
import Footer from '../../components/Footer';
import SelectBox from '../../components/SelectBox';

const listOrder = [
  { value: 0, description: null, label: 'A-Z' },
  { value: 1, description: null, label: 'Z-A' },
  { value: 2, description: null, label: ' - Jovens' },
  { value: 3, description: null, label: '+ Jovens' },
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
  const [allWorks, setAllWorks] = useState<WorkListProps[]>([]);
  const [works, setWorks] = useState<WorkListProps[]>([]);

  const [category, setCategory] = useState<CategoryProps>({} as CategoryProps);
  const [areas, setAreas] = useState<SelectItem[]>([
    {
      value: 0,
      label: 'Todas',
      description: null,
    },
  ]);

  // filters
  const [areaSelected, setAreaSelected] = useState<SelectItem>(
    {} as SelectItem,
  );
  const [typeSelected, setTypeSelected] = useState<SelectItem[]>([]);

  // Functions for list works
  const changeWorkList = (area: SelectItem, types: SelectItem[]): void => {
    if (!area.value) {
      const dafaulArea: SelectItem = {
        value: 0,
        label: 'Todas',
        description: null,
      };
      area = dafaulArea;
      setAreaSelected(area);
    }

    if (area.value === 0 && types.length < 1) {
      // there is no filter
      setWorks(allWorks);
    } else if (area.value === 0 && types) {
      // only type filter exists
      setWorks(
        allWorks.filter((work) => {
          return work.types.some((t) =>
            types.some((tSelected) => tSelected.value === t.value),
          );
        }),
      );
    } else if (area.value !== 0 && types.length < 1) {
      // only area filter exists
      setWorks(
        allWorks.filter((work) => {
          return work.areaExpertise.some((a) => a.value === area.value);
        }),
      );
    } else {
      // All filter exists
      setWorks(
        allWorks
          .filter((work) => {
            // Filtro das Area
            return work.areaExpertise.some((a) => a.value === area.value);
          })
          .filter((work) => {
            // Filtro dos TypesWorks
            return work.types.some((t) =>
              types.some((tSelected) => tSelected.value === t.value),
            );
          }),
      );
    }
  };

  const setTypeWorks = (itemsSelected: SelectItem[]): void => {
    if (!itemsSelected || itemsSelected.length < 1) {
      setTypeSelected([]);
      changeWorkList(areaSelected, []);
    } else {
      setTypeSelected(itemsSelected);
      changeWorkList(areaSelected, itemsSelected);
    }
  };

  const setAreaExpensive = (item: SelectItem): void => {
    setAreaSelected(item);
    changeWorkList(item, typeSelected);
  };

  const checkOrder = (order: SelectItem): void => {
    // alert(`Order selected is ${value}`);
    if (order.value === 0) {
      const sorted = [...works].sort(compareTitleASC);
      setWorks(sorted);

      setAllWorks(allWorks.sort(compareTitleASC));
    } else if (order.value === 1) {
      const sorted = [...works].sort(compareTitleDESC);
      setWorks(sorted);

      setAllWorks(allWorks.sort(compareTitleDESC));
    } else if (order.value === 2) {
      const sorted = [...works].sort(compareDateDESC);
      setWorks(sorted);

      setAllWorks(allWorks.sort(compareDateDESC));
    } else {
      const sorted = [...works].sort(compareDateASC);
      setWorks(sorted);

      setAllWorks(allWorks.sort(compareDateASC));
    }
  };

  // Functions for get list works
  useEffect(() => {
    api.get(`category-works/${params.category}`).then((response) => {
      setCategory(response.data);
      setAllWorks(response.data.works.sort(compareTitleASC));
      setWorks(response.data.works.sort(compareTitleASC));
    });

    api.get(`area-expertises`).then((response) => {
      const dafaulArea: SelectItem = {
        value: 0,
        label: 'Todas',
        description: null,
      };

      setAreas([...response.data.concat(dafaulArea)]);
    });
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
              <Link to={`/work/${item.id}`}>
                <img src={imgTeste} alt="Teste" />

                <strong>
                  {item.title}
                  <span>
                    <FaUserNinja size={14} />
                    {item.worksMember.map((m) => (
                      <span key={m.id}>{`${m.member.nameABNT}; `}</span>
                    ))}
                  </span>
                  <span>
                    <FaRegClipboard size={14} />
                    {item.types.map((type) => (
                      <span key={type.value}>{`${type.label}; `}</span>
                    ))}
                  </span>
                  <span>
                    <FaListUl size={14} />
                    {item.areaExpertise.map((ae) => (
                      <span key={ae.value}>{`${ae.label}; `}</span>
                    ))}
                  </span>
                </strong>
                <p>{item.objective}</p>
                <div>
                  <span>{item.dateBegin}</span>
                  <FaChevronRight size={20} />
                </div>
              </Link>
            </animated.div>
          ))}

          <br />
          <br />
          <br />
          <br />
          <Link to="/projects/item.id">
            <img src={imgTeste} alt="Teste" />

            <strong>
              item.title
              <span>
                <FaUserNinja size={14} />
                Jecé Xavier - Rafael Lechesque
              </span>
              <span>
                <FaRegClipboard size={14} />
                {/* Pesquisa & Pos-Graduação */}
                item.typeWorks
              </span>
              <span>
                <FaListUl size={14} />
                item.areaExpensive
              </span>
            </strong>
            <p>item.objective</p>

            <FaChevronRight size={20} />
          </Link>
        </Projects>
      </Main>

      <Footer />
    </>
  );
};

export default ListProjects;
