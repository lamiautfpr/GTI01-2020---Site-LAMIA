import React, { useState, useEffect, useCallback } from 'react';

import { Link } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';
import { FaMedal, FaChevronRight, FaMailBulk } from 'react-icons/fa';

import api from '../../services/api';

import userDefault from '../../assets/userDefault.png';
import emojiSad from '../../assets/emojiSad.png';
import { SelectItem } from '../../../myTypes/SelectItem';
import { ImageProps } from '../../../myTypes/Images';
import {} from '../../utils/orderArray';

import { Main, Projects, SectionFilters, CardWarning } from './style';
import Header from '../../components/Header';
import NavBar from '../../components/NavBar';
import Separator from '../../components/Separator';
import Footer from '../../components/Footer';
import SelectBox from '../../components/SelectBox';

const listOrder = [
  { value: 0, description: null, label: 'A-Z' },
  { value: 1, description: null, label: 'Z-A' },
];

interface MembersListProps {
  id: number;
  login: string;
  name: string;
  email: string;
  description: string;
  office: SelectItem;
  avatar?: ImageProps;
}

const ListProjects: React.FC = () => {
  // database
  const [allMembers, setAllMembers] = useState<MembersListProps[]>([]);
  const [members, setMembers] = useState<MembersListProps[]>([]);
  const [offices, setOffices] = useState<SelectItem[]>([]);

  // Functions for list works
  const changeWorkList = useCallback(
    (itemsSelected: SelectItem[]): void => {
      if (!itemsSelected || itemsSelected.length < 1) {
        setMembers(allMembers);
      } else {
        setMembers(
          allMembers.filter((member) => {
            return itemsSelected.some((item) => {
              return item.value === member.office.value;
            });
          }),
        );
      }
    },
    [allMembers],
  );

  const checkOrder = useCallback(
    (order: SelectItem): void => {
      const compareNameASC = (
        member1: MembersListProps,
        member2: MembersListProps,
      ): number => {
        // a should come before b in the sorted order
        if (member1.name < member2.name) {
          return -1;
          // a should come after b in the sorted order
        }
        if (member1.name > member2.name) {
          return 1;
          // a and b are the same
        }
        return 0;
      };

      const compareNameDESC = (
        member1: MembersListProps,
        member2: MembersListProps,
      ): number => {
        // a should come before b in the sorted order
        if (member1.name > member2.name) {
          return -1;
          // a should come after b in the sorted order
        }
        if (member1.name < member2.name) {
          return 1;
          // a and b are the same
        }
        return 0;
      };

      if (order.value === 0) {
        const sorted = [...members].sort(compareNameASC);
        setMembers(sorted);

        setAllMembers(allMembers.sort(compareNameASC));
      } else if (order.value === 1) {
        const sorted = [...members].sort(compareNameDESC);
        setMembers(sorted);

        setAllMembers(allMembers.sort(compareNameDESC));
      } else if (order.value === 2) {
        const sorted = [...members].sort();
        setMembers(sorted);

        setAllMembers(allMembers.sort());
      } else {
        const sorted = [...members].sort();
        setMembers(sorted);

        setAllMembers(allMembers.sort());
      }
    },
    [allMembers, members],
  );

  // Functions for get list works
  useEffect(() => {
    api.get(`members/`).then((response) => {
      const compareNameASC = (
        member1: MembersListProps,
        member2: MembersListProps,
      ): number => {
        // a should come before b in the sorted order
        if (member1.name < member2.name) {
          return -1;
          // a should come after b in the sorted order
        }
        if (member1.name > member2.name) {
          return 1;
          // a and b are the same
        }
        return 0;
      };

      setOffices(response.data.officesMembers);
      setMembers(response.data.members.sort(compareNameASC));
      setAllMembers(response.data.members.sort(compareNameASC));
    });
  }, []);

  const workWithTransitions = useTransition(members, (member) => member.id, {
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
            workWithTransitions.map(({ item, key, props }) => (
              <animated.div key={item.id} style={props}>
                <Link to={`/${item.login}`}>
                  <img
                    src={item.avatar ? item.avatar.src : userDefault}
                    alt={item.avatar ? item.avatar.name : 'Member'}
                  />

                  <strong>
                    {item.name}
                    <span>
                      <FaMedal size={14} />
                      {item.office.label}
                    </span>
                    <span>
                      <FaMailBulk size={14} />
                      {item.email}
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
                <span>- Alguém devia estar aparecendo</span>
                <span>- Alguém neh</span>
                <span>- Alguém ...</span>
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
