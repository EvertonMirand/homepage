import styled from 'styled-components';

export const Container = styled.div`
  form {
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    justify-items: center;
    align-items: center;

    input {
      background: 'rgba(0, 0, 0, 0.1)';
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: '#fff';
      margin: 0 0 10px;
      width: 50%;
      max-width: 555px;

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
