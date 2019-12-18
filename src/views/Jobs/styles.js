import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin: 20px;
  overflow: scroll;
`;

export const Job = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(50, 90, 250, 1);
  height: 500px;
  width: 400px;
  padding: 20px;
  border-radius: 10px;
  overflow: scroll;

  color: #fff;

  div {
    margin-bottom: 5px;
  }
`;

export const Company = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  justify-items: center;
  align-items: center;

  img {
    height: 100px;
    width: 100px;
    margin-left: 10px;
  }

  span {
    font-weight: bold;
    color: #fff;
  }
`;
