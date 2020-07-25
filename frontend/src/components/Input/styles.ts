import styled, { css } from 'styled-components';

import { shade } from 'polished';
import Tooltip from '../Tooltip';

import { primaryColor, errorColor } from '../../styles/paletsColorers';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
  isFormGroup: boolean;
  width?: number;
  isHidden?: boolean;
  activeColor?: string;
}

export const Container = styled.div<ContainerProps>`
  background: white;
  border-radius: 8px;
  border: 2.1px solid white;
  padding: 8px 16px;
  width: 100%;

  display: flex;
  align-items: center;
  transition: 0.4s;

  &:first-child{
    ${(props) =>
      props.isFormGroup &&
      css`
        margin-right: 4px;
      `}
  }

  & + div {
    margin-top: 8px;

    ${(props) =>
      props.isFormGroup &&
      css`
        margin-top: 0;
        margin-left: 4px;
      `}
  }

  input {
    width:100%;
    flex: 1;

    background: transparent;
    border: 0;

    font-size: 24px;
    font-family: 'Source Sans Pro';
    font-style: oblique;
    font-weight: bold;

    &::placeholder {
      color: ${shade(0.2, '#E5E5E5')};
    }
  }

  svg {
    margin-right: 16px;
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: ${errorColor};
    `}

  ${(props) =>
    props.isFocused &&
    css`
      color: ${primaryColor};
      border-color: ${primaryColor};
    `}

  ${(props) =>
    props.isFocused &&
    props.activeColor &&
    css`
      color: ${props.activeColor};
      border-color: ${props.activeColor};
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: ${primaryColor};
      border-color: white;
    `}

    ${(props) =>
      props.width &&
      css`
        width: ${props.width}px;
      `}

  @media (max-width: 800px) {
    width:100%;

    &:first-child{
      ${(props) =>
        props.isFormGroup &&
        css`
          margin-right: 0px;
        `}
    }

    & + div {
      ${(props) =>
        props.isFormGroup &&
        css`
          margin-top: 8px;
          margin-left: 0;
        `}
    }
  }

  ${(props) =>
    props.isHidden &&
    css`
      display: none;
    `}

`;

export const Error = styled(Tooltip)`
  svg {
    margin-right: 0;
  }
  margin-left: 16px;

  span {
    background: ${errorColor};
    color: white;

    &::before {
      border-color: ${errorColor} transparent;
    }
  }
`;
