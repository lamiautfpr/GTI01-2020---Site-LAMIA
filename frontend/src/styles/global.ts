import styled, { createGlobalStyle } from 'styled-components';

import githubBackgroud from '../assets/githutb-background.svg';

import { primaryColor, secondaryColor } from './paletsColores';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body{
    background-image: -webkit-linear-gradient(45deg, ${secondaryColor} 15%, ${primaryColor} 85%);
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-size: 16px;
    font-family: 'Source Sans Pro', sans-serif;
  }

  p{
    font-size: 16px;
    text-indent: 16px;
    line-height: 26px;
    text-align: justify;
  }


  #root {
    max-width: 100%;
    margin: 0 auto;
  }

  button{
    cursor: pointer;
  }

`;
