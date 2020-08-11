import React, { ButtonHTMLAttributes, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaMedal } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';

import { Container, Header, ItemMenu, Footer } from './styles';
import { useAuth, officesPermitted } from '../../hooks/Auth';
import Button from '../Button';
<<<<<<< HEAD
import imgTeste from '../../assets/logo.jpg';
import { useAuth, IMembersProps } from '../../hooks/Auth';
=======
import imgMemberDefault from '../../assets/imgDefault/member.jpg';
>>>>>>> 09c2930e80a37cc1c2c67af5aad8d2f9f793e346

interface IMenuBurgerProps {
  page?:
    | 'members'
    | 'products'
    | 'projects'
    | 'publications'
    | 'phrases'
    | 'administrative';
}

<<<<<<< HEAD
const NavBarDashboard: React.FC<IMenuBurgerProps> = ({
  name = 'Jonh Doe',
  page,
}) => {
  const { member } = useAuth();
=======
const NavBarDashboard: React.FC<IMenuBurgerProps> = ({ page }) => {
  const { member, signOut } = useAuth();
  const history = useHistory();
  const [permitted, setPermitted] = useState(() => {
    const checkPermission = officesPermitted.find(
      (officePermitted) => officePermitted === member.office.value,
    );

    return !!checkPermission;
  });
>>>>>>> 09c2930e80a37cc1c2c67af5aad8d2f9f793e346

  return (
    <Container>
      <Header>
<<<<<<< HEAD
        <div>
          <img src={member.avatar?.src} alt={member.name} />
          <div>
            Bem Vindo,
            <span>{member.name}</span>
          </div>
        </div>
        <span>
          <FaMedal size={32} />
          {member.office.label}
        </span>
        <div className="bar" />
=======
        <Link to="/dashboard">
          <div>
            <img
              src={member.avatar ? member.avatar.src : imgMemberDefault}
              alt={member.name}
            />
            <div>
              Bem Vindo,
              <span>{member.name}</span>
            </div>
          </div>
          <span>
            <FaMedal size={32} />
            {member.office.label}
          </span>
          <div className="bar" />
        </Link>
>>>>>>> 09c2930e80a37cc1c2c67af5aad8d2f9f793e346
      </Header>

      <ul>
        {permitted && (
          <>
            <ItemMenu active={page === 'administrative'}>
              <Link to="to">Geral</Link>
            </ItemMenu>
            <ItemMenu active={page === 'members'}>
              <Link to="/dashboard/members">Integrantes</Link>
            </ItemMenu>
          </>
        )}
        <ItemMenu active={page === 'products'}>
          <Link to="to">Produtos</Link>
        </ItemMenu>
        <ItemMenu active={page === 'projects'}>
          <Link to="to">Projetos</Link>
        </ItemMenu>
        <ItemMenu active={page === 'publications'}>
          <Link to="to">Publicações</Link>
        </ItemMenu>
        <ItemMenu active={page === 'phrases'}>
          <Link to="to">Frases</Link>
        </ItemMenu>
      </ul>

      <Footer>
        <div className="bar" />
        <Button
          onClick={() => {
            history.push('/');
            signOut();
          }}
        >
          Sair
          <FiLogOut size={24} />
        </Button>
      </Footer>
    </Container>
  );
};

export default NavBarDashboard;
