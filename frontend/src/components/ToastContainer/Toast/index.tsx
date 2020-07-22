import React, { useEffect } from 'react';
import {
  FiAlertCircle,
  FiCheckCircle,
  FiInfo,
  FiXCircle,
} from 'react-icons/fi';
import { TiWarning } from 'react-icons/ti';

import { IToastMessage, useToast } from '../../../hooks/Toast';
import { Container } from './styles';

interface IToastContainerProps {
  toast: IToastMessage;
  // eslint-disable-next-line @typescript-eslint/ban-types
  style: object;
}

const iconsEnum = {
  info: <FiInfo size={24} />,
  error: <FiAlertCircle size={24} />,
  success: <FiCheckCircle size={24} />,
  warning: <TiWarning size={24} />,
};

const Toast: React.FC<IToastContainerProps> = ({ toast, style }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(toast.id);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [removeToast, toast.id]);

  return (
    <Container
      style={style}
      type={toast.type}
      hasDescription={!!toast.description}
    >
      {iconsEnum[toast.type || 'info']}
      <div>
        <strong>{toast.title}</strong>

        {toast.description && <p>{toast.description}</p>}
      </div>

      <button onClick={() => removeToast(toast.id)} type="button">
        <FiXCircle size={20} />
      </button>
    </Container>
  );
};

export default Toast;
