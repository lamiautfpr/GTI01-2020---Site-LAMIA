import styled from 'styled-components';

import { transparentize, shade } from 'polished';
import {
  secondaryBackground,
  primaryColor,
  secondaryColor,
  titleColor,
  tertiaryColor,
} from '../../styles/paletsColorers';
import { device } from '../../styles/device';

export const Container = styled.div`
  display: flex;

  background: ${secondaryBackground};
`;

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

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-around; */
  /* align-items: center; */
  padding: 16px;

  width: 100%;
  min-height: 100vh;
  height: 100%;

  form {
    section {
      display: flex;
      align-items: center;
      width: 100%;

      margin-bottom: 16px;

      .img {
        margin-right: 32px;
        position: relative;
        img {
          border-radius: 50%;
          width: 186px;
          height: 186px;
        }

        label {
          position: absolute;
          width: 48px;
          height: 48px;
          background: ${primaryColor};
          border-radius: 50%;
          right: 0;
          bottom: 0;
          border: 6px solid ${secondaryBackground};
          cursor: pointer;
          transition: 0.3s ease-in-out;

          display: flex;
          align-items: center;
          justify-content: center;

          input {
            display: none;
          }

          > svg {
            width: 20px;
            height: 20px;
            color: ${secondaryBackground};
          }

          &:hover {
            background: ${tertiaryColor};
          }
        }
      }
      .form {
        width: 100%;
        > div {
          margin: 16px 0;
        }
      }
      @media ${device.laptop} {
        flex-direction: column;
        .form {
          width: 100%;
          > div {
            margin: 8px 0;
          }
        }
      }
    }

    .password {
      margin-top: 40px;
      width: 100%;
    }
  }
`;
