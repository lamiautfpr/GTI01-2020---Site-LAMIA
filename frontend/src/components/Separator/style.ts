import styled, { css } from 'styled-components';

import { primaryColor, secondaryColor } from '../../styles/paletsColores';

interface HrProps {
  width?: number;
}

export const Hr = styled.div<HrProps>`
  ${(props) =>
    props.width
      ? css`
          width: 10px;
        `
      : css`
          width: props.width 'px';
        `}

  height: 1px;
  background-image: -webkit-linear-gradient(
    180deg,
    #fff,
    ${primaryColor},
    ${secondaryColor},
    ${primaryColor},
    #fff
  );
`;
