import styled from 'styled-components';

import { transparentize } from 'polished';
import { secondaryBackground } from '../../styles/paletsColorers';

export const Contact = styled.footer`
  max-width: 1200px;
  margin: 24px auto;
  padding: 24px;
  background: ${transparentize(0.95, '#fff')};
  border-radius: 24px;
  transition: 0.2s all;

  &:hover {
    background: ${transparentize(0.9, '#fff')};

    -webkit-box-shadow: 10px 10px 64px -16px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 10px 10px 64px -16px rgba(0, 0, 0, 0.75);
    box-shadow: 10px 10px 64px -16px rgba(0, 0, 0, 0.75);

    transform: translateY(-10px);
  }

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

            &:hover {
              color: ${transparentize(0.24, '#fff')};
            }
          }
        }
      }
    }
  }

  p {
    display: flex;
    align-items: center;

    font-weight: lighter;
    font-size: 20px;
    transition: transform 0.2s;

    svg {
      margin: 0 8px;
    }

    &:hover {
      transform: translateX(10px);
    }

    color: #fff;
  }

  .quote {
    p + p {
      border-top: 1px solid ${transparentize(0.5, '#f8f8ff')};
      padding-top: 12px;
    }
    p {
      margin: 8px 0;
      flex-direction: column;
      align-items: flex-end;
      font-weight: lighter;

      font-size: 20px;
      line-height: 30px;

      strong {
        margin-top: 8px;
      }
    }
  }
`;
