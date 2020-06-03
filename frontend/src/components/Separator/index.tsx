import React from 'react';
import ReactDOM from 'react-dom';

import { Hr } from './style';

interface SeparatorProps {
  width?: number;
}

const Separator: React.FC = () => {
  return <Hr />;
};

export default Separator;
