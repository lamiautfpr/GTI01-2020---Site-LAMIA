import styled from 'styled-components';

import { secondaryBackground } from '../../styles/paletsColorers';

export const Container = styled.div`
  display: flex;

  background: ${secondaryBackground};
`;

export const Content = styled.div`
  width: 100%;
  height: 100vh;
`;
