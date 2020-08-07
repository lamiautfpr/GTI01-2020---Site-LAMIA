import styled from 'styled-components';

import { transparentize, shade } from 'polished';
import {
  secondaryBackground,
  primaryColor,
  secondaryColor,
  titleColor,
  tertiaryColor,
} from '../../../styles/paletsColorers';

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
    border-radius: 8px;

    background: #fff;
    padding: 16px;

    header {
      width: 100%;
      font-size: 28px;
    }

    .input-form {
      -webkit-box-shadow: 0px 0px 2px 0px rgba(138, 138, 138, 1);
      -moz-box-shadow: 0px 0px 2px 0px rgba(138, 138, 138, 1);
      box-shadow: 0px 0px 2px 0px rgba(138, 138, 138, 1);
    }
  }
`;
