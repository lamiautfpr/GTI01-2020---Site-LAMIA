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

import imgLogo from '../../assets/logo.svg';
import emojiSad from '../../assets/emojiSad.png';
import { SelectItem } from '../../../myTypes/SelectItem';
import { ImageProps } from '../../../myTypes/Images';
import {
  compareTitleASC,
  compareTitleDESC,
  compareDateASC,
  compareDateDESC,
} from '../../utils/orderArray';

import { Main, Projects, SectionFilters, CardWarning } from './style';
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

interface MembersListProps {
  id: number;
  login: string;
  name: string;
  email: string;
  description: string;
  office: SelectItem;
  avatar: ImageProps;
}

const ListProjects: React.FC = () => {
  // datas data base
  const [allMembers, setAllMembers] = useState<MembersListProps[]>([]);
  const [members, setMembers] = useState<MembersListProps[]>([]);
  const [offices, setOffices] = useState<SelectItem[]>([]);

  // filters
  const [officesSelected, setOfficesSelected] = useState<SelectItem[]>([]);

  // Functions for list works
  const changeWorkList = (itemsSelected: SelectItem[]): void => {
    alert(itemsSelected);
  };

  const checkOrder = (order: SelectItem): void => {
    // alert(`Order selected is ${value}`);
    if (order.value === 0) {
      const sorted = [...members].sort();
      setMembers(sorted);

      setAllMembers(allMembers.sort());
    } else if (order.value === 1) {
      const sorted = [...members].sort();
      setMembers(sorted);

      setAllMembers(allMembers.sort());
    } else if (order.value === 2) {
      const sorted = [...members].sort();
      setMembers(sorted);

      setAllMembers(allMembers.sort());
    } else {
      const sorted = [...members].sort();
      setMembers(sorted);

      setAllMembers(allMembers.sort());
    }
  };

  // Functions for get list works
  useEffect(() => {
    api.get(`members/`).then((response) => {
      setMembers(response.data);
    });

    api.get(`type-members`).then((response) => {
      // setOffices([...response.data]);
    });
  }, []);

  const workWithTrasitions = useTransition(members, (member) => member.id, {
    from: { opacity: 0, transform: 'translate3d(0,-40px,0)' },
    enter: { opacity: 1, transform: 'translate3d(0,0px,0)' },
    leave: { opacity: 0, transform: 'translate3d(0,-40px,0)' },
  });

  return (
    <>
      <Header title="LAMIA - Projetos" />

      <NavBar />

      <Main>
        <SectionFilters>
          <div className="typeWorks">
            <SelectBox
              label="Integrantes"
              options={offices}
              placeholder="Selecione..."
              width={550}
              isMulti
              onChange={changeWorkList}
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
          {members.length > 0 ? (
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            workWithTrasitions.map(({ item, key, props }) => (
              <animated.div key={item.id} style={props}>
                <Link to={`/${item.login}`}>
                  <img src={imgLogo} alt="TESTE" />

                  <strong>
                    {item.name}
                    <span>
                      <FaUserNinja size={14} />
                    </span>
                    <span>
                      <FaRegClipboard size={14} />
                    </span>
                  </strong>
                  <p>{item.description}</p>
                  <div>
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
              <img src={emojiSad} alt="Triste" />
            </CardWarning>
          )}
        </Projects>
      </Main>

      <Footer />
    </>
  );
};

export default ListProjects;
