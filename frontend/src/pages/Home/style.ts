import styled from 'styled-components';

import { shade, transparentize } from 'polished';
import {
  secondaryBackground,
  titleColor,
  primaryColor,
  secondaryColor,
} from '../../styles/paletsColores';

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 80px 80px 16px 80px;

  h1 {
    margin: 4px 0 8px 0;
    font-size: 48px;
    color: #fff;
    font-weight: 300;
  }

  p {
    display: flex;
    flex-direction: column;
    align-items: center;

    color: #fff;
    font-size: 24px;
    font-weight: 300;

    span {
      display: block;
      margin-top: 4px;

      font-size: 20px;
    }
  }
`;

export const Main = styled.main`
  background: #fff;
  padding: 12px;
  border-radius: 0 0 24px 24px;
  margin-bottom: 100px;
`;

export const SectionNew = styled.section`
  max-width: 1200px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  /* border-bottom: 2px solid ${shade(0.2, secondaryBackground)}; */

  & > header {
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

  }

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

export const SectionLatestPublications = styled.section`
  max-width: 1200px;
  margin: 24px auto;
  display: flex;
  flex-direction: column;

  & > header {
    margin: 4px 0 32px 0;
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

  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    div{
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
        -webkit-box-shadow: 0px 0px 48px -24px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 0px 48px -24px rgba(0,0,0,0.75);
        box-shadow: 0px 0px 48px -24px rgba(0,0,0,0.75);

        margin-bottom: 16px;
      }

      h2 {
        margin-bottom: 4px;
      }

    }

  }
`;
