import styled from 'styled-components';

import { secondaryBackground } from '../../styles/paletsColores';

export const Nav = styled.nav`
  background-color: ${secondaryBackground};
  padding: 12px;
  margin-top: 16px;
  border-radius: 24px 24px 0 0;

  font-size: 18px;

  ul {
    max-width: 1200px;
    margin: 0 auto;

    list-style: none;

    display: flex;
    align-items: center;
    justify-content: space-between;

    li {
      padding: 12px;
      border-radius: 8px;

      &:hover {
        background-color: rgba(222, 222, 222, 0.75);

        ul {
          display: block;
        }
      }

      a {
        color: #636363;
        text-decoration: none;
      }

      ul {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        background: ${secondaryBackground};
        border-radius: 8px;
        box-shadow: 0 2px 0 0 rgba(0, 0, 0, 0.065), inset 0 -1px 0 0 #fff,
          inset 0 0 0 1px rgba(229, 229, 229, 0.5);
        padding: 8px;
        width: 200px;
        margin-top: 12px;
        display: none;
        position: absolute;
        z-index: 1;

        &:before {
          -moz-transform: rotate(45deg);
          -webkit-transform: rotate(45deg);
          -ms-transform: rotate(45deg);
          transform: rotate(45deg);
          background: ${secondaryBackground};
          border: solid 1px rgba(229, 229, 229, 0.5);
          border-bottom: 0;
          border-right: 0;
          box-shadow: -0.25em -0.125em 0.125em 0 rgba(0, 0, 0, 0.015);
          content: '';
          display: block;
          height: 8px;
          position: absolute;
          left: 16px;
          top: -5px;
          width:8px;
          z-index: 0;
      }
    }
  }
`;
