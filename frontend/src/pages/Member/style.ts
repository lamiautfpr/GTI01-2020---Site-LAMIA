import styled from 'styled-components';

import { transparentize, shade } from 'polished';
import {
  secondaryBackground,
  primaryColor,
  secondaryColor,
  featuredColor,
  titleColor,
} from '../../styles/paletsColores';

export const Main = styled.main`
  background: #fff;
  padding: 12px;
  border-radius: 0 0 24px 24px;
  margin-bottom: 100px;
  /* border: 1px solid red; */
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
      font-size: 18px;
      color: #a8a8b3;
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;

export const Headline = styled.div`

  /* border: 1px solid green; */

  display: flex;
  flex-direction: column;
  /* flex-flow: row wrap; */
  /* justify-content: flex-start; */
  align-items: center;

  max-width: 1200px;
  height: auto;
  margin: 24px auto;
  margin-top: 64px;

  .basicInfo {
    background: ${featuredColor};
    height: 120px;
    width: 100%;
    border-radius: 24px;
    display:flex;
    justify-content: space-between;
    /* flex: 3 2 300px; */
    
    h1 {
      
      text-align: start;
      padding-top: 20px;
      padding-left: 42px;
      /* border: 1px solid blue; */

      color: white;
      font-size: 64px;
            
    }
    div{
      /* border: 1px solid red; */

      max-width: 500px;
      padding-right: 42px;
      
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      flex-basis: 100%;
      


      h1{
        font-size: 32px;

      }
    }
    
  }

  .imgBorde {
    background: white;
    /* border: 4px solid ${featuredColor}; */
    margin-top: -160px;
    height: 200px;
    width: 200px;
    border-radius: 50% 12px;
    transform: rotate(45deg);
    /* padding: 6px; */
    transition: 0.2s all;

    &:hover {
      -webkit-box-shadow: 10px 10px 64px -16px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 10px 10px 64px -16px rgba(0, 0, 0, 0.75);
      box-shadow: 10px 10px 64px -16px rgba(0, 0, 0, 0.75);

      transform: translateY(-10px) rotate(45deg);
    }

    div {
      /* border: 1px solid red; */
      border-radius: 50% 12px;
      padding: 12px;
      height: 100%;

      /* -webkit-box-shadow: inset 0px 0px 71px -23px rgba(0, 0, 0, 1);
      -moz-box-shadow: inset 0px 0px 71px -23px rgba(0, 0, 0, 1);
      box-shadow: inset 0px 0px 71px -23px rgba(0, 0, 0, 1); */
    }

    img {
      transform: rotate(-45deg);
      height: 176px;
      width: 176px;
      border-radius: 50%;
    }
  }
`;

export const Title = styled.div`
  max-width: 1200px;
  height: auto;
  margin: 24px auto;
  margin-top: 64px;

  header {
    margin: 4px 0 8px 0;

    font-size: 24px;
    color: ${titleColor};

    &::after {
      content: '';

      width: 224px;
      height: 2px;
      background-image: -webkit-linear-gradient(
        180deg,
        ${primaryColor} 15%,
        ${secondaryColor} 85%
      );

      position: absolute;
    }
  }
`;

export const Shelf = styled.div`
  max-width: 1200px;
  height: auto;
  margin: 24px auto;
  /* margin-top: 64px; */

  display: flex;
  flex-wrap: wrap;
  /* flex-direction: row; */
  justify-content: space-around;
`;

export const Card = styled.div`
  height: 400px;
  width: 200px;
  -webkit-border-radius: 16px;
  -moz-border-radius: 16px;
  border-radius: 16px;

  margin: 16px;
  margin-bottom: 30px;

  position: relative;
  display: flex;
  flex: 0 0 200px;
  flex-direction: column;

  background-position: center center;
  background-size: cover;

  -webkit-box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.75);

  overflow: hidden; /* pesquisa para saber */

  background-color: ${secondaryBackground};

  text-align: center;
  color: #0a4870;

  align-items: center;
  transition: 0.3s;

  img {
    width: 400px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    background: rgba(10, 72, 112, 0);

    transition: 0.3s;
  }

  .bookContainer {
    height: 16px;

    .content {
      position: relative;
      opacity: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 100%;

      transform: translateY(-328px);

      transition: 0.3s;

      button {
        border: 3px solid white;
        padding: 10px 15px;
        border-radius: 16px;

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

          color: ${transparentize(0, primaryColor)};
        }
      }
    }
  }

  .informationsContainer {
    flex: 1 0 auto;
    padding: 16px;
    background: #f0f0f0;
    transform: translateY(-72px);
    transition: 0.3s;
    height: 400px;

    .title {
      position: relative;
      padding-bottom: 8px;
      margin-bottom: 8px;
      font-weight: bold;
      font-size: 24px;

      &::after {
        /* linha de baixo do titulo */
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 4px;
        width: 50px;
        margin: auto;
        background: ${transparentize(0, primaryColor)};
      }
    }

    .primaryInformations {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      padding: 0 0 10px 0;

      span {
        display: flex;
        /* flex-direction: row; */
        margin-top: 4px;

        font-size: 16px;
        color: ${transparentize(0.35, primaryColor)};

        svg {
          margin-right: 4px;
          color: ${transparentize(0.35, primaryColor)};
        }
      }
    }

    .moreInfomation {
      opacity: 1;
      transition: 0.3s;
      width: 200px;

      .infoDateContainer {
        display: flex;
        /* border: 1px solid red; */

        a.box {
          cursor: pointer;
        }

        .box {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          flex: 1 0;
          height: 72px;
          width: 96px;

          /* padding: 2px; */
          /* margin: 2px; */
          margin-left: 8px;

          -webkit-border-radius: 16px;
          -moz-border-radius: 16px;
          border-radius: 16px;

          background: white;

          font-weight: bold;
          font-size: 2px;
          text-decoration: none;

          svg {
            margin: 0;
            padding: 0;
            margin-top: 8px;
            color: ${titleColor};
          }

          p {
            margin-right: 8px;
            font-size: 12px;
            color: ${titleColor};
            /* text-align: center; */
          }
        }
      }

      .box:first-child {
        margin-left: 8px;
      }

      .box:last-child {
        margin-right: 8px;
      }

      .objective {
        margin: 8px;

        p {
          font-size: 16px;
          text-align: left;
          color: #7d7d7d;
        }
      }
    }
  }
  &:hover::before {
    background: rgba(10, 72, 112, 0.6);
  }

  &:hover .bookContainer .content {
    opacity: 1;
    transform: translateY(-304px);
  }
  &:hover .informationsContainer {
    transform: translateY(-280px);
  }
  &:hover .informationsContainer .moreInfomation {
    opacity: 1;
  }
  &:hover {
    background: ${transparentize(0.00001, secondaryBackground)};

    -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.75);

    transform: translateY(8px);
  }
`;
