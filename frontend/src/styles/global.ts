import { createGlobalStyle } from 'styled-components';

import { shade, transparentize } from 'polished';
import { primaryColor, secondaryColor } from './paletsColorers';

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

  body, input, button, label {
    font-size: 16px;
    font-family: 'Source Sans Pro', sans-serif;
  }

  p, label{
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

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${shade(0.2, primaryColor)};
    border-radius: 16px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${shade(0.1, primaryColor)};
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 16px;
  }

  ::-webkit-scrollbar-corner {
    background: transparent;
  }

`;
