import styled from 'styled-components';

export const Title = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 40px 80px 16px 80px;

  img {
    max-width: 120px;
    max-height: 120px;
    min-width: 64px;
    min-height: 64px;
    border-radius: 50%;
  }

  h1 {
    margin: 4px 0 8px 0;
    font-size: 48px;
    color: #fff;
    font-weight: 300;
  }

  p {
    /* max-width: 600px; */
    font-size: 24px;
    text-align: center;
    font-weight: 300;
    /* margin: 60px auto; */
    color: #fff;

    ::after {
      content: '|';
      opacity: 1;
      margin-left: -12px;
      display: inline-block;
      animation: blink 0.7s infinite;
    }

    @keyframes blink {
      0%,
      100% {
        opacity: 1;
      }
      50% {
        opacity: 0;
      }
    }
  }

  span {
    color: #fff;
    font-weight: 300;

    display: block;
    margin-top: 4px;

    font-size: 20px;
  }
`;
