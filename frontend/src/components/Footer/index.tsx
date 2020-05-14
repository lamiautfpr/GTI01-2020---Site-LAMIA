import React from 'react';
import ReactDOM from 'react-dom';

import {
  FaSlack,
  FaGithubAlt,
  FaFacebook,
  FaStreetView,
  FaPhoneAlt,
  FaMobileAlt,
  FaMailBulk,
  FaCopyright,
} from 'react-icons/fa';

import { Contact } from './style';

const Footer: React.FC = () => {
  return (
    <Contact>
      <div>
        <section>
          <h2>Agradecimentos</h2>
          <p>Muito obrigado por acessar...</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem harum
            alias eius accusamus voluptatibus dolorum quod, consequuntur labore
            autem provident! Quos dolores, optio ipsa modi quasi unde iste
            voluptas ipsum?
          </p>
        </section>
        <section>
          <h2>Contato</h2>
          <span>
            <FaPhoneAlt size={16} />
            <strong>Telefone: </strong>
            (45) 3268 - 8800
          </span>
          <span>
            <FaMobileAlt size={16} />
            <strong>Celular: </strong>
            (45) 9826 - 9880
          </span>
          <span>
            <FaStreetView size={24} />
            <strong>Endereço: </strong>
            Prolongamento da Rua Cerejeira, s/n Bairro - São Luiz, Santa Helena
            - PR, 85892-000
          </span>
          <span>
            <FaMailBulk size={16} />
            <strong>Email: </strong>
            <a href="mailto:naves@utfpr.edu.br">naves@utfpr.edu.br</a>
          </span>
          <ul>
            <li>
              <a href="#">
                <FaSlack size={32} />
              </a>
            </li>
            <li>
              <a href="#">
                <FaFacebook size={32} />
              </a>
            </li>
            <li>
              <a href="#">
                <FaGithubAlt size={32} />
              </a>
            </li>
          </ul>
        </section>
      </div>
      <p>
        <FaCopyright size={20} />
        by Professor Xavier & Detective L
      </p>
    </Contact>
  );
};

export default Footer;
