import styled, { css } from 'styled-components';
import { transparentize } from 'polished';
import {
  primaryColor,
  secondaryColor,
  tertiaryColor,
  secondaryBackground,
} from '../../styles/paletsColorers';

interface IPropsItemMenu {
  active?: boolean;
}

export const Container = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-image: -webkit-linear-gradient(
    45deg,
    ${secondaryColor} 15%,
    ${primaryColor} 85%
  );
  width: 320px;
  padding: 16px;
  margin-right: 12px;

  color: #fff;

  -webkit-box-shadow: 4px 0px 12px -4px rgba(138, 138, 138, 1);
  -moz-box-shadow: 4px 0px 12px -4px rgba(138, 138, 138, 1);
  box-shadow: 4px 0px 12px -4px rgba(138, 138, 138, 1);

  .bar {
    width: 100%;
    height: 0.25px;
    margin: 16px 0;
    background: ${secondaryBackground};
  }

  ul {
    list-style: none;
    /* height: 80%; */

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Header = styled.header`
  a {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    text-decoration: none;
    color:#fff;

    width: 100%;

    > div {
      display: flex;
      justify-content: flex-start;
      align-items: center;

      img {
        width: 64px;
        height: 64px;
        border-radius: 50%;
        margin-right: 16px;
      }

      div {
        display: flex;
        flex-direction: column;

        font-family: 'Quicksand';
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 26px;

        span {
          /* color: ${tertiaryColor}; */
          font-weight: 700;
          font-size: 24px;
        }
      }
    }

    > span {
      display: flex;
      justify-content: flex-start;
      align-items: center;

      margin-top: 16px;
      padding-left: 16px;

      font-weight: 700;
      font-size: 24px;
      font-family: 'Quicksand';
      font-style: normal;
      font-size: 20px;
      line-height: 26px;

      svg {
        margin-right: 16px;
      }
    }
  }
`;

export const ItemMenu = styled.li<IPropsItemMenu>`
  width: 100%;
  /* height: 40px; */
  background: ${transparentize(0.75, '#fff')};

  ${(props) =>
    props.active &&
    css`
      background: ${transparentize(0.1, tertiaryColor)};
    `}

  padding: 8px;
  border-radius: 8px;

  & + li {
    margin-top: 16px;
  }

  a {
    display: flex;
    justify-content: center;

    width: 100%;
    text-decoration: none;
    color: white;

    font-family: 'Quicksand';
    font-size: 20px;
  }

  transition: 0.3s;
  &:hover {
    background: ${transparentize(0.1, tertiaryColor)};
  }
`;

export const Footer = styled.footer``;
