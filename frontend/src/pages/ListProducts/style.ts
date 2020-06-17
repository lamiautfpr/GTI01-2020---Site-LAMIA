import styled, { css } from 'styled-components';

import { transparentize } from 'polished';
import {
  secondaryBackground,
  primaryColor,
  secondaryColor,
} from '../../styles/paletsColorers';

interface FilterPros {
  name: string;
}

export const Main = styled.main`
  background: #fff;
  padding: 12px;
  border-radius: 0 0 24px 24px;
  margin-bottom: 100px;
`;

export const SectionFilters = styled.section<FilterPros>`
  max-width: 1200px;
  margin: 40px auto;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .areaExpensive {
    width: 250px;
  }
  .typeWorks {
    width: 550px;
  }
  .order {
    width: 150px;
  }
`;

export const Projects = styled.div`
  margin-top: 80px;
  max-width: 1200px;
  margin: 24px auto;

  div + div {
    margin-top: 16px;
  }

  a {
    background: ${secondaryBackground};

    border-radius: 8px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: all 0.2s;

    &:hover {
      background: ${transparentize(0.00001, secondaryBackground)};

      -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.75);
      box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.75);

      transform: translateX(8px);
    }

    img {
      min-width: 64px;
      min-height: 64px;
      max-width: 64px;
      max-height: 64px;
      border-radius: 50%;
      display: flex;
      flex-shrink: 1;
    }

    strong {
      min-width: 210px;
      margin: 0 16px;
      min-height: 88px;

      flex: 1;
      display: flex;
      flex-direction: column;

      align-items: baseline;

      font-size: 20px;
      color: ${primaryColor};

      span {
        margin-top: 4px;

        font-size: 14px;
        color: ${transparentize(0.35, primaryColor)};

        svg {
          margin-right: 4px;
          color: ${transparentize(0.35, primaryColor)};
        }
      }
    }

    p {
      margin-right: 16px;
      width: 100%;

      font-size: 18px;
      color: #a8a8b3;
    }

    div {
      min-height: 88px;

      display: flex;
      flex-direction: column;
      justify-content: center;

      span {
        margin-top: -20px;
        margin-bottom: 20px;
      }

      color: ${primaryColor};
      font-family: 'Dosis';
      font-weight: 200;
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;

export const CardWarning = styled.div`
  max-width: 1200px;

  display: flex;
  align-items: center;
  justify-content: center;

  h2 {
    font-size: 40px;
    font-family: 'Dosis';
    color: ${secondaryColor};
    /* text-transform: uppercase; */
  }

  img {
    border-radius: 50%;
    width: 120px;
    margin-left: 40px;
  }
`;
