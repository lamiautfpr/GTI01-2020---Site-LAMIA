import styled, { css } from 'styled-components';

import { transparentize, shade } from 'polished';
import {
  secondaryBackground,
  primaryColor,
  secondaryColor,
  titleColor,
  tertiaryColor,
} from '../../../styles/paletsColorers';

interface SectionProps {
  isOpen?: boolean;
}

export const Container = styled.div`
  display: flex;

  background: ${secondaryBackground};
`;

export const HeaderSection = styled.header`

    margin: 4px 0 8px 0;
    /* border-bottom: 1px solid ${titleColor}; */

    font-size: 32px;
    color: ${titleColor};

`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-around; */
  /* align-items: center; */
  padding: 16px;

  width: 100%;
  height: 100vh;
  overflow: auto;

  form {
    border-radius: 8px;

    background: #fff;
    padding: 16px;
    margin-bottom: 40px;

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

export const Section = styled.section<SectionProps>`
  /* border: 1px solid red; */
  border-radius: 8px;
  padding: 12px;

  & + section {
    margin-top: 24px;
  }

  header {
    display: flex;
    align-items: center;

    width: 100%;

    h2 {
      font-family: 'Source Sans Pro';
      font-size: 28px;
      min-width: fit-content;
      font-weight: 500;
    }

    .bar {
      width: 100%;
      margin: 0 12px;
    }
  }

  > div {
    transition: 0.3s all;

    display: flex;
    margin-top: 12px;
    /* border-top: 1px solid red; */
    height: 200px;
    overflow: hidden;

    ${(props) =>
      !props.isOpen &&
      css`
        height: 0;
      `}
  }
`;
