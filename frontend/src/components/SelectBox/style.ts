import styled from 'styled-components';

import Select from 'react-select';

import { secondaryColor } from '../../styles/paletsColores';

export const Container = styled(Select)`
  min-width: 250px;
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
