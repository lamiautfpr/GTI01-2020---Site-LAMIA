import styled, { css } from 'styled-components';

export const Title = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 80px 80px 16px 80px;

  h1 {
    margin: 4px 0 8px 0;
    font-size: 48px;
    color: #fff;
    font-weight: 300;
  }

  p {
    display: flex;
    flex-direction: column;
    align-items: center;

    color: #fff;
    font-size: 24px;
    font-weight: 300;

    span {
      display: block;
      margin-top: 4px;

      font-size: 20px;
    }
  }
`;
