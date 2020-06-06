import styled, { css } from 'styled-components';

import { shade, transparentize } from 'polished';
import {
  secondaryBackground,
  titleColor,
  primaryColor,
  secondaryColor,
  featuredColor,
} from '../../styles/paletsColores';

interface WarningPros {
  textColor?: string;
}

export const HeaderSection = styled.header`

    margin: 4px 0 8px 0;
    /* border-bottom: 1px solid ${titleColor}; */

    font-size: 32px;
    color: ${titleColor};

    &::after{
      content: "";

      width: 224px;
      height: 2px;
      background-image: -webkit-linear-gradient(180deg, ${primaryColor} 15%, ${secondaryColor} 85%);

      position: absolute;
    }

`;

export const Main = styled.main`
  background: #fff;
  padding: 12px;
  border-radius: 0 0 24px 24px;
  margin-bottom: 100px;
`;

export const SectionLine = styled.section`
  max-width: 1200px;
  margin: 24px auto;

  display: flex;
  flex-direction: column;

  /* border-bottom: 2px solid ${shade(0.2, secondaryBackground)}; */

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 16px;
    margin-top: 16px;

    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      max-width: 950px;
      padding: 0 8px;

      header{
        margin-bottom: 8px;

        font-size: 24px;
        color: ${titleColor};
      }
    }

    img {
      flex-shrink: 0;

      height: 200px;
      width: 200px;
      border-radius: 50%;
      -webkit-box-shadow: 0px 0px 48px -24px rgba(0,0,0,0.75);
      -moz-box-shadow: 0px 0px 48px -24px rgba(0,0,0,0.75);
      box-shadow: 0px 0px 48px -24px rgba(0,0,0,0.75);
    }
  }
`;

export const SectionColumn = styled.section`
  max-width: 1200px;
  margin: 24px auto;
  display: flex;
  flex-direction: column;

  > div {
    margin-top: 32px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      max-width: 378px;
      margin-left: 0;

      & + div {
        margin-left: 24px;
      }

      img {
        flex-shrink: 0;

        height: 200px;
        width: 200px;
        border-radius: 50%;
        -webkit-box-shadow: 0px 0px 48px -24px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 0px 0px 48px -24px rgba(0, 0, 0, 0.75);
        box-shadow: 0px 0px 48px -24px rgba(0, 0, 0, 0.75);

        margin-bottom: 16px;
      }

      h2 {
        margin-bottom: 4px;
      }
    }
  }
`;

export const SectionVip = styled.section`
  max-width: 1200px;
  margin: 24px auto;
  background: ${featuredColor};
  padding: 24px;
  border-radius: 16px;
  -webkit-box-shadow: 10px 10px 64px -16px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 64px -16px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 64px -16px rgba(0, 0, 0, 0.75);

  display: flex;
  flex-direction: column;

  & > header {
    margin: 4px 0 32px 0;
    /* border-bottom: 1px solid ${titleColor}; */

    display: flex;
    flex-wrap: wrap-reverse;

    font-size: 32px;
    color: ${secondaryBackground};

    button{
      margin-left:64px;

      border: 3px solid white;
      padding: 10px 15px;
      border-radius: 24px;

      background: none;

      text-transform: uppercase;
      font-weight: bold;
      font-size: 16px;
      color: white;

      cursor: pointer;

      transition: 0.3s;

      &:hover {
        background: white;

        border: 0px solid white;

        transform: translateX(2px);

        color: ${transparentize(0, primaryColor)};
      }
    }

    &::after {
      content: '';

      width: 224px;
      height: 2px;
      background-image: -webkit-linear-gradient(
        180deg,
        #fff 15%,
        ${secondaryBackground} 85%
      );

      position: absolute;
    }
  }

  ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    flex-grow: 1;

    list-style: none;

    li {
      display: flex;
      flex-direction: column;
      flex-shrink: 0;
      align-items: center;

      margin-top: 24px;
      margin-left: 24px;

      &:hover {
        img {
          filter: none;
          transform: translateY(5px);
        }
      }

      img {
        width: 150px;
        height: 150px;
        border-radius: 35px;
        transition: 0.3s;

        filter: grayscale(100%);
      }

      h2 {
        color: #fff;
        margin-top: 4px;
      }
    }
  }
`;

export const SectionCards = styled.section`
  max-width: 1200px;
  min-height: 350px;
  margin: 24px auto;

  display: flex;
  flex-direction: column;

  > div {
    transition: 0.3s;
    margin: 32px 0px;

    -webkit-box-shadow: 0px 8px 12px 2px rgba(161, 159, 161, 1);
    -moz-box-shadow: 0px 8px 12px 2px rgba(161, 159, 161, 1);
    box-shadow: 0px 8px 12px 2px rgba(161, 159, 161, 1);
  }

  > div:hover {
    background: ${transparentize(0.00001, secondaryBackground)};

    -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.75);

    transform: translateY(8px);
  }

  div {
    display: flex;
    justify-content: space-between;

    div {
      /* border: 1px solid red; */

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      background: ${primaryColor};
      width: 300px;
      height: 250px;

      color: #fff;
      font-family: 'Dosis';

      h3 {
        font-size: 40px;
        margin-bottom: 12px;
        /* font-weight:200; */
      }

      div {
        /* border: 1px solid red; */
        margin: 0px;
        height: 50px;

        font-size: 56px;

        display: flex;
        flex-direction: row;

        svg {
          margin-right: 8px;
        }

        span {
          font-weight: 200;
          /* font-size: 40px; */
        }
      }
    }
  }
`;

export const CardWarning = styled.div<WarningPros>`
  max-width: 1200px;

  display: flex;
  align-items: center;
  justify-content: space-around;

  h2 {
    display: flex;
    /* flex-direction: column; */

    font-size: 40px;
    font-family: 'Dosis';
    color: ${secondaryColor};

    ${(props) =>
      props.textColor &&
      css`
        color: ${props.textColor};
      `}
  }

  img {
    border-radius: 50%;
    width: 200px;
    height: 200px;

    margin-left: 40px;
  }
`;
