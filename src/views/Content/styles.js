import styled from 'styled-components';

export const Container = styled.div`
  height: 500px;
  background: linear-gradient(90deg, #1e3c72, #2a5298);
  display: flex;

  overflow: scroll;
  border-radius: 100% / 0 0 20% 20%;
  display: flex;
  flex-direction: row;
  padding: 30px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    height: 500px;
    padding: 10px;

    justify-content: center;
    align-items: center;
    .left {
      span {
        font-size: 25px;
      }
      padding: 0;
      flex: 2;
      width: 90%;
    }

    .right {
      flex: 1;
      img {
        height: 70%;
        width: 70%;
      }
    }
  }
`;

export const Left = styled.div.attrs({ className: 'left' })`
  display: flex;
  width: 50%;
  height: 100%;
  padding: 10px;

  align-items: center;

  span {
    color: #fff;
    font-size: 30px;
    font-weight: bold;
  }
`;

export const Right = styled.div.attrs({ className: 'right' })`
  display: flex;
  flex: 1;
  align-items: center;
  align-content: center;
  justify-content: center;

  div {
    display: flex;
    height: 90%;
    width: 90%;
    align-content: center;
    justify-content: center;

    img {
      display: flex;
      height: 100%;
      width: 100%;
    }
  }
`;
