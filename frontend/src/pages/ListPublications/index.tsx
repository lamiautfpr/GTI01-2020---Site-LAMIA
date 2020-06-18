import React, { useState, useEffect, useCallback } from 'react';

import { Link } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';
import {
  FaChevronRight,
  FaUserNinja,
  FaRegClipboard,
  FaListUl,
} from 'react-icons/fa';

import api from '../../services/api';

import imgWorkDefault from '../../assets/imgDefault/work1.png';
import imgEmojiSad from '../../assets/imgWarning/emojiSad.png';
import { SelectItem } from '../../../myTypes/SelectItem';
import { WorkListProps } from '../../../myTypes/WorkListProps';
import {
  compareTitleASC,
  compareTitleDESC,
  compareDateASC,
  compareDateDESC,
} from '../../utils/orderArray';

import { listOrder } from '../ListMembers';

import { Main, Projects, SectionFilters, CardWarning } from './style';
import Header from '../../components/Header';
import NavBar from '../../components/NavBar';
import Separator from '../../components/Separator';
import Footer from '../../components/Footer';
import SelectBox from '../../components/SelectBox';

interface CategoryProps {
  name: string;
  description: string | null;
  types: SelectItem[];
}

const page = 'Publicações';

const ListPublications: React.FC = () => {
  // database
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
  const changeWorkList = useCallback(
    (area: SelectItem, types: SelectItem[]): void => {
      if (!area.value) {
        const defaultArea: SelectItem = {
          value: 0,
          label: 'Todas',
          description: null,
        };
        // eslint-disable-next-line no-param-reassign
        area = defaultArea;
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
              // Filter Area
              return work.areaExpertise.some((a) => a.value === area.value);
            })
            .filter((work) => {
              // Filter TypesWorks
              return work.types.some((t) =>
                types.some((tSelected) => tSelected.value === t.value),
              );
            }),
        );
      }
    },
    [allWorks],
  );

  const setTypeWorks = useCallback(
    (itemsSelected: SelectItem[]): void => {
      if (!itemsSelected || itemsSelected.length < 1) {
        setTypeSelected([]);
        changeWorkList(areaSelected, []);
      } else {
        setTypeSelected(itemsSelected);
        changeWorkList(areaSelected, itemsSelected);
      }
    },
    [areaSelected, changeWorkList],
  );

  const setAreaExpensive = useCallback(
    (item: SelectItem): void => {
      setAreaSelected(item);
      changeWorkList(item, typeSelected);
    },
    [changeWorkList, typeSelected],
  );

  const checkOrder = useCallback(
    (order: SelectItem): void => {
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
    },
    [allWorks, works],
  );

  // Functions for get list works
  useEffect(() => {
    api.get(`category-works/${page}`).then((response) => {
      setCategory(response.data);
      setAllWorks(response.data.works.sort(compareTitleASC));
      setWorks(response.data.works.sort(compareTitleASC));
    });

    api.get(`area-expertises`).then((response) => {
      const defaultArea: SelectItem = {
        value: 0,
        label: 'Todas',
        description: null,
      };

      setAreas([...response.data.concat(defaultArea)]);
    });
  }, []);

  const workWithTransitions = useTransition(works, (work) => work.id, {
    from: { opacity: 0, transform: 'translate3d(-40px,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0,0px,0)' },
    leave: { opacity: 0, transform: 'translate3d(+40px,0,0)' },
  });

  return (
    <>
      <Header title="LAMIA - Projetos" />

      <NavBar />

      <Main>
        <SectionFilters name="">
          <div className="areaExpensive">
            <SelectBox
              label="Áreas de Pesquisa"
              options={areas}
              placeholder="Selecione..."
              width={250}
              onChange={setAreaExpensive}
              defaultValue={areas[0]}
            />
          </div>
          <div className="typeWorks">
            <SelectBox
              label={`${page}`}
              options={category.types}
              placeholder="Selecione..."
              width={550}
              isMulti
              onChange={setTypeWorks}
              defaultValue={null}
            />
          </div>
          <div className="order">
            {/* // eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <SelectBox
              label="Ordenação"
              options={listOrder}
              placeholder="Selecione..."
              onChange={checkOrder}
              defaultValue={listOrder[0]}
            />
          </div>
        </SectionFilters>

        <Separator />

        <Projects>
          {works.length > 0 ? (
            workWithTransitions.map(({ item, key, props }) => (
              <animated.div key={key} style={props}>
                <Link to={`/work/${item.id}`}>
                  <img
                    src={
                      item.pictures?.length > 0
                        ? item.pictures[0].src
                        : imgWorkDefault
                    }
                    alt={
                      item.pictures?.length > 0
                        ? item.pictures[0].name
                        : 'Capa do Projeto'
                    }
                  />

                  <strong>
                    {item.title}
                    <span>
                      <FaUserNinja size={14} />
                      {item.worksMember.map(({ memberData }) => (
                        <span key={memberData.login}>
                          {`${memberData.nameABNT}; `}
                        </span>
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
            ))
          ) : (
            <CardWarning>
              <h2>
                <strong>POXA !!!</strong>
                <br />
                Ainda não temos o que você procura...
              </h2>
              <img src={imgEmojiSad} alt="Triste" />
            </CardWarning>
          )}
        </Projects>
      </Main>

      <Footer />
    </>
  );
};

export default ListPublications;
