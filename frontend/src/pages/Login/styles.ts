import styled from 'styled-components';
import { transparentize, shade } from 'polished';

import {
  primaryColor,
  secondaryColor,
  tertiaryColor,
} from '../../styles/paletsColorers';
import capaLogin from '../../assets/capaLogin_1.jpg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100vh;
  background: url(${capaLogin});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;

  a {
    margin-left: 10px;

    display: flex;
    align-items: center;
    transition: 0.2s;

    text-decoration: none;
    color: #fff;
    font-size: 24px;
    /* font-weight: 700; */
    font-family: 'Source Sans Pro';

    &:hover {
      color: '#fff';
      transform: translateX(-10px);
    }

    svg {
      margin-right: 16px;
    }
  }
`;

export const Content = styled.div`
  margin: auto;
  width: 100%;
  max-width: 512px;

  /* background: ${transparentize(0.5, '#fff')};
  border-radius: 24px;
  transition: 0.2s all; */

  &:hover {
    /* background: ${transparentize(0.4, '#fff')};

    -webkit-box-shadow: 10px 10px 64px -16px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 10px 10px 64px -16px rgba(0, 0, 0, 0.75);
    box-shadow: 10px 10px 64px -16px rgba(0, 0, 0, 0.75);

    transform: translateY(-10px); */
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    max-height: 200px;
    border-radius: 50%;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    margin: 30px 0;
    padding: 0 8px;
    width: 100%;

    > div {
      margin: 12px 0;
    }

    div {
      display: flex;
      justify-content: center;
    }
  }
`;

export const Button = styled.button``;
