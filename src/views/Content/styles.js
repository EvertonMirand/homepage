import styled from 'styled-components';

export const Container = styled.div`
  height: 500px;
  background: linear-gradient(90deg, rgb(50, 98, 244), rgb(80, 110, 230));
  display: flex;
  flex-direction: column;
  overflow: scroll;
  border-radius: 100% / 0 0 20% 20%;
  display: flex;
  flex-direction: row;
  padding: 30px;
`;

export const Left = styled.div`
  display: flex;
  height: 100%;
  width: 40%;
  padding: 10px;

  align-items: center;

  span {
    color: #fff;
    font-size: 30px;
    font-weight: bold;
  }
`;

export const Right = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  align-content: center;
  justify-content: center;

  div {
    display: flex;
    height: 100%;
    width: 80%;
    align-content: center;
    justify-content: center;

    img {
      display: flex;
      height: 80%;
    }
  }
`;
