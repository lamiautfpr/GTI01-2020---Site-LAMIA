import React from 'react';

import { useTransition } from 'react-spring';
import { IToastMessage } from '../../hooks/Toast';
import { Container } from './styles';
import Toast from './Toast';

interface IToastContainerProps {
  messages: IToastMessage[];
}

const ToastContainer: React.FC<IToastContainerProps> = ({ messages }) => {
  const messagesWithTransitions = useTransition(
    messages,
    (message) => message.id,
    {
      from: {
        opacity: 0,
        transform: 'translateX(40px)',
        filter: 'blur(4px)',
      },
      enter: {
        opacity: 1,
        transform: 'translateY(0px)',
        filter: 'blur(0px)',
      },
      leave: {
        opacity: 0,
        transform: 'translateX(40px)',
        filter: 'blur(4px)',
        overflow: 'hidden',
      },
    },
  );

  return (
    <Container>
      {messagesWithTransitions.reverse().map(({ item, key, props }) => (
        <Toast key={key} toast={item} style={props} />
      ))}
    </Container>
  );
};

export default ToastContainer;
