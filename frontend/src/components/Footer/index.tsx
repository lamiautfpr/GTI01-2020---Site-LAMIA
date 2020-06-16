import React from 'react';

import {
  FaSlack,
  FaGithubAlt,
  FaFacebook,
  FaStreetView,
  FaPhoneAlt,
  FaMobileAlt,
  FaMailBulk,
  FaCopyright,
  FaQuoteLeft,
} from 'react-icons/fa';

import { Contact } from './style';

const Footer: React.FC = () => {
  return (
    <Contact>
      <div>
        <section className="quote">
          <FaQuoteLeft color="#f8f8ff" size={20} />
          <p>
            A imaginação é mais importante que a ciência, porque a ciência é
            limitada, ao passo que a imaginação abrange o mundo inteiro.
            <strong>Albert Einstein</strong>
          </p>
          <p>
            Se você não está fazendo da vida de alguém algo melhor, você está
            desperdiçando o seu tempo. Sua vida será melhor quando você fazer da
            vida de outras pessoas algo melhor.
            <strong>Will Smith</strong>
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
              <a href="https://lamia-utfpr.slack.com/" target="blank">
                <FaSlack size={32} />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/lamia-utfpr" target="blank">
                <FaFacebook size={32} />
              </a>
            </li>
            <li>
              <a href="https://github.com/lamia-utfpr" target="blank">
                <FaGithubAlt size={32} />
              </a>
            </li>
          </ul>
        </section>
      </div>
      <p>
        Jecé Xavier & Rafael Lechensque
        <FaCopyright size={20} />
        LAMIA 2020
      </p>
    </Contact>
  );
};

export default Footer;
