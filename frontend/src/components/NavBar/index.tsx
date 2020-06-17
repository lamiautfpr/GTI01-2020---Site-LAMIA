import React from 'react';

import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import { Nav } from './style';

const NavBar: React.FC = () => {
  return (
    <Nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <ul className="DropDraw">
            <li>
              <HashLink smooth to="/#Statistics">
                Linhas de Códigos Produzidas
              </HashLink>
            </li>
            {/* <li>
              <HashLink smooth to="#News">
                Noticias
              </HashLink>
            </li> */}
            <li>
              <HashLink smooth to="/#Mission">
                Missão
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#LatestPublications">
                Ultimas publicações
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#AreasExpertise">
                Áreas de Atuação
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#Partners">
                Parceiros
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#Advisors">
                Orientadores
              </HashLink>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/works/products">Produtos</Link>
        </li>
        <li>
          <Link to="/works/projects">Projetos</Link>
        </li>
        <li>
          <Link to="/works/publications">Publicações</Link>
        </li>
        <li>
          <Link to="/members">Integrantes</Link>
        </li>
      </ul>
    </Nav>
  );
};

export default NavBar;
