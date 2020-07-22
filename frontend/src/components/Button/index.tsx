import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  width?: string;
  background?: string;
  color?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  width,
  background,
  color,
  ...rest
}) => (
  <Container
    background={background}
    width={width}
    color={color}
    type="button"
    {...rest}
  >
    {children}
  </Container>
);

export default Button;
