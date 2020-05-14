import styled, { css } from 'styled-components';

import { transparentize } from 'polished';
import {
  primaryColor,
  secondaryColor,
  secondaryBackground,
} from '../../styles/paletsColores';

export const Contact = styled.footer`
  max-width: 1200px;
  margin: 24px auto;
  padding: 24px;
  background: ${transparentize(0.95, '#fff')};
  border-radius: 24px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    color: ${secondaryBackground};

    section {
      display: flex;
      flex-direction: column;

      max-width: 50%;
      margin-right: 64px;

      h2 {
        margin-bottom: 8px;
      }

      span {
        display: flex;
        align-items: baseline;

        font-size: 16px;
        line-height: 26px;
        margin-bottom: 4px;

        svg {
          flex-shrink: 1;
        }

        strong {
          margin: 0 4px;
        }

        a {
          text-decoration: none;
          color: #fff;
        }
      }

      ul {
        margin-top: 8px;
        padding-top: 8px;
        border-top: 1px solid #fff;

        display: flex;
        justify-content: center;

        list-style: none;

        li {
          margin: 0 8px;

          a {
            text-decoration: none;
            color: #fff;
          }
        }
      }
    }
  }

  p {
    display: flex;
    align-items: center;

    svg {
      margin-right: 8px;
    }

    color: #fff;
  }
`;
