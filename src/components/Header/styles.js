import styled from 'styled-components';

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
