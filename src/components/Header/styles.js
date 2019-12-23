import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  background: linear-gradient(90deg, #1e3c72, #2a5298);
  display: flex;
  height: 100px;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  overflow: scroll;
  padding-right: 30px;
  padding-left: 30px;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: row;

  a {
    margin-right: 30px;
  }
`;

export const Right = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  button {
    cursor: pointer;
    color: #fff;
    font-weight: bold;
    font-size: 14px;
  }

  div {
    display: flex;
    flex-direction: row;
    height: 70%;

    button {
      border: none;
      background: none;

      margin: 10px;
      justify-content: center;
    }
  }
`;

export const SignIn = styled(Link)`
  display: flex;
  background-color: rgb(93, 195, 246);
  justify-content: center;
  justify-items: center;
  align-items: center;
  align-content: center;

  color: #fff;

  width: 100px;
  height: 50px;
  margin-left: 30px;
  border-radius: 10px;
  box-shadow: 1px 1px 1px rgba(93, 195, 246, 0.3);
`;
