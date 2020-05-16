import styled, { css } from 'styled-components';

import Select from 'react-select';

import { secondaryColor } from '../../styles/paletsColores';

interface ContainerProps {
  width?: number;
}

export const Container = styled(Select)<ContainerProps>`
  font-size: 20px;
  line-height: 30px;
  font-weight: bold;

  width: 100%;
  ${(props) =>
    css`
      max-width: ${props.width}px;
    `}
  min-width:150px;
  margin-top: 0px;

  > div {
    padding: 4px;

    div {
      border-radius: 8px;
    }
  }

  > div:first-child {
    border-radius: 50px;
  }
`;

export const Label = styled.label`
  font-size: 24px;
  line-height: 34px;
  font-weight: bold;
  color: ${secondaryColor};
  margin-left: 20px;
`;
