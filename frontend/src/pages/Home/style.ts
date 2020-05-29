import styled from 'styled-components';

import { shade } from 'polished';
import {
  secondaryBackground,
  titleColor,
  primaryColor,
  secondaryColor,
  featuredColor,
} from '../../styles/paletsColores';

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

export const SectionColumn = styled.section`
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

export const SectionVip = styled.section`
  max-width: 1200px;
  margin: 24px auto;
  background: ${featuredColor};
  padding: 24px;
  border-radius: 16px;
  -webkit-box-shadow: 10px 10px 64px -16px rgba(0,0,0,0.75);
  -moz-box-shadow: 10px 10px 64px -16px rgba(0,0,0,0.75);
  box-shadow: 10px 10px 64px -16px rgba(0,0,0,0.75);

  display: flex;
  flex-direction: column;


  & > header {
    margin: 4px 0 32px 0;
    /* border-bottom: 1px solid ${titleColor}; */

    font-size: 32px;
    color: ${secondaryBackground};

    &::after{
      content: "";

      width: 224px;
      height: 2px;
      background-image: -webkit-linear-gradient(180deg, #fff 15%, ${secondaryBackground} 85%);

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

      &:hover{
        img{
          filter: none;
          transform: translateY(5px);
        }
      }

      img {
        width: 150px;
        height: 150px;
        border-radius: 35px;
        transition: .3s;

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
  /* flex-direction: column; */
  justify-content: space-between;

  .card {
    /* border: 1px solid red; */
    /* top: -100px; */
  }

  .card .icon {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${primaryColor};
    transition: 0.7s;
    z-index: 1;

    svg {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 80px;
      transition: 0.7s;
      color: #fff;
    }
  }

  .card .icon .fa {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 80px;
    transition: 0.7s;
    color: #fff;
  }

  .card .face {
    width: 300px;
    height: 150px;
    transition: 0.5s;
  }

  .card .face.face1 {
    position: relative;
    background: #333;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    transform: translateY(100px);
  }

  .card:hover .face.face1 {
    background: ${secondaryBackground};
    transform: translateY(0px);
  }

  .card .face.face1 .content {
    opacity: 1;
    transition: 0.5s;
  }

  .card:hover .face.face1 .content {
    opacity: 1;
  }

  .card .face.face2 {
    position: relative;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
    transform: translateY(-50px);

    /* box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8); */

    -webkit-box-shadow: 0px 20px 32px 0px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 0px 20px 32px 0px rgba(0, 0, 0, 0.5);
    box-shadow: 0px 20px 32px 0px rgba(0, 0, 0, 0.5);
  }

  .card:hover .face.face2 {
    transform: translateY(0);
  }

  .card .face.face2 .content h3 {
    margin: 0 0 10px 0;
    padding: 0;
    color: #fff;
    font-size: 24px;
    text-align: center;
    color: #414141;
    font-family: 'Dosis';
    font-weight: 200;
  }

  .card .face.face2 .content p {
    margin: 0;
    margin-top: 24px;
    padding: 0;
    text-align: center;
    color: #414141;
    font-size: 64px;
    font-family: 'Dosis';
    font-weight: 200;
  }
`;
