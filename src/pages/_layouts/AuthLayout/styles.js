import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  min-height: 100vh;
  overflow: auto;
  flex-direction: column;
  background: linear-gradient(90deg, #1e3c72, #2a5298);
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    margin-bottom: 10px;
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: 'rgba(0, 0, 0, 0.1)';
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: '#fff';
      margin: 0 0 10px;

      &::placeholder {
        color: 'rgba(255, 255, 255, 0.5)';
      }
    }

    span {
      color: '#fb6f91';
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    button {
      align-self: center;

      margin: 5px 0 0;
      height: 44px;
      font-weight: 600;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: backgroung 0.2s;
    }

    a {
      color: rgba(255, 255, 255, 0.6);
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
