import styled, { css } from 'styled-components';
import { transparentize, shade } from 'polished';
import {
  primaryColor,
  secondaryColor,
  tertiaryColor,
} from '../../styles/paletsColorers';

interface ContainerProps {
  width?: string;
  background?: string;
  color?: string;
}

export const Container = styled.button<ContainerProps>`
  width: 100%;
  height: 48px;
  margin: 4px 0;

  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 28px;
  color: white;
  font-family: 'Source Sans Pro';
  font-weight: 600;
  transition: 0.4s;

  border-radius: 40px;
  border: none;

  background: ${tertiaryColor};

  &:hover {
    background: ${shade(0.1, tertiaryColor)};
  }

  ${(props) =>
    props.width &&
    css`
      width: ${props.width};
    `}
  ${(props) =>
    props.background &&
    css`
      background: ${props.background};

      &:hover {
        background: ${shade(0.1, props.background)};
      }
    `}
  ${(props) =>
    props.color &&
    css`
      color: ${props.color};
    `}
`;
