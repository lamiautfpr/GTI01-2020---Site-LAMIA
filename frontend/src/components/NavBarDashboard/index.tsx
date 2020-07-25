import React, { ButtonHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import { FaMedal } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';

import { Container, Header, ItemMenu, Footer } from './styles';
import Button from '../Button';
import imgTeste from '../../assets/logo.jpg';

interface IMenuBurgerProps {
  name?: string;
  page?:
    | 'members'
    | 'products'
    | 'projects'
    | 'publications'
    | 'phrases'
    | 'administrative';
}

const NavBarDashboard: React.FC<IMenuBurgerProps> = ({
  name = 'Jonh Doe',
  page,
}) => {
  return (
    <Container>
      <Header>
        <div>
          <img src={imgTeste} alt={name} />
          <div>
            Bem Vindo,
            <span>{name}</span>
          </div>
        </div>
        <span>
          <FaMedal size={32} />
          Orientador
        </span>
        <div className="bar" />
      </Header>

      <ul>
        <ItemMenu active={page === 'members'}>
          <Link to="to">Integrantes</Link>
        </ItemMenu>
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
        <ItemMenu active={page === 'administrative'}>
          <Link to="to">Geral</Link>
        </ItemMenu>
      </ul>

      <Footer>
        <div className="bar" />
        <Button>
          Sair
          <FiLogOut size={24} />
        </Button>
      </Footer>
    </Container>
  );
};

export default NavBarDashboard;
