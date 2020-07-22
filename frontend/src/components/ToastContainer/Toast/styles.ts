import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

import {
  errorColor,
  successColor,
  warningColor,
  infoColor,
} from '../../../styles/paletsColorers';

interface IContainerProps {
  type?: 'error' | 'success' | 'info' | 'warning';
  hasDescription: boolean;
}

const toastTypeVariationsEnum = {
  error: css`
    background: #fddede;
    color: ${errorColor};
  `,
  success: css`
    background: #e6fffa;
    color: ${successColor};
  `,
  info: css`
    background: #ebf8ff;
    color: ${infoColor};
  `,
  warning: css`
    background: #fcf2d1;
    color: ${warningColor};
  `,
};

export const Container = styled(animated.div)<IContainerProps>`
  width: 304px;

  position: relative;
  padding: 16px 30px 16px 16px;
  margin-top: 12px;
  border-radius: 12px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  z-index: 1000;

  display: flex;
  align-items: inherit;

  ${(props) => toastTypeVariationsEnum[props.type || 'info']}

  > svg {
    margin-right: 12px;
  }

  div {
    flex: 1;
    font-family: 'Source Sans Pro';

    strong {
      font-size: 18px;
    }

    p {
      margin-top: 4px;
      font-size: 16px;
      opacity: 0.9;
      line-height: 20px;
    }
  }

  button {
    position: absolute;
    right: 16px;
    top: 19px;
    opacity: 0.6;
    border: 0;
    background: transparent;
    color: inherit;
    transition: 0.2s;

    &:hover {
      opacity: 1;
    }
  }

  ${(props) =>
    !props.hasDescription &&
    css`
      align-items: center;
    `}
`;
