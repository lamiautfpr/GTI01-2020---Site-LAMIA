import React from 'react';
import ReactDOM from 'react-dom';

import { Nav } from './style';

const NavBar: React.FC = () => {
  return (
    <Nav>
      <ul>
        <li>
          <a href="#intro">Home</a>
          <ul>
            <li>
              <a href="#Noticias">Noticias</a>
            </li>
            <li>
              <a href="#UltimasPlublicações">Ultimas publicações </a>
            </li>
            <li>
              <a href="#Historia">Historia </a>
            </li>
            <li>
              <a href="#Atuacao">Áreas de Atuação</a>
            </li>
            <li>
              <a href="#Orientadores">Orientadores </a>
            </li>
            <li>
              <a href="#Parceiros">Parceiros</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#first">Projetos</a>
          <ul>
            <li>
              <a href="#">Pesquisa</a>
            </li>
            <li>
              <a href="#">Pós Graduação</a>
            </li>
            <li>
              <a href="#">Iniciação</a>
            </li>
            <li>
              <a href="#">Extensão</a>
            </li>
            <li>
              <a href="#">TCC</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#second">Publicações</a>
          <ul>
            <li>
              <a href="#">Livros e Parte de Livros</a>
            </li>
            <li>
              <a href="#">Periódicos</a>
            </li>
            <li>
              <a href="#">Conferencias</a>
            </li>
            <li>
              <a href="#">Congresso</a>
            </li>
            <li>
              <a href="#">Relatório</a>
            </li>
            <li>
              <a href="#">TCC</a>
            </li>
            <li>
              <a href="#">Tese</a>
            </li>
            <li>
              <a href="#">Dissertação</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#cta">Produtos</a>
          <ul>
            <li>
              <a href="#">Patentes</a>
            </li>
            <li>
              <a href="#">Softwares</a>
            </li>
            <li>
              <a href="#">Consultoria</a>
            </li>
            <li>
              <a href="#">Materiais</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#cta">Integrantes</a>
          <ul>
            <li>
              <a href="#">Todos</a>
            </li>
            <li>
              <a href="#">Orientador</a>
            </li>
            <li>
              <a href="#">Colaborador</a>
            </li>
            <li>
              <a href="#">Visitante</a>
            </li>
            <li>
              <a href="#">Ex-aluno</a>
            </li>
          </ul>
        </li>
      </ul>
    </Nav>
  );
};

export default NavBar;
