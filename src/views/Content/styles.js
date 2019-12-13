import styled from 'styled-components';

export const Container = styled.div`
  height: 500px;
  background-color: rgb(50, 98, 244);
  display: flex;
  flex-direction: column;
  overflow: scroll;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;

  div {
    height: 100%;
    display: flex;
    flex-direction: row;
    padding: 30px;

    > left {
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
    }

    right {
      display: flex;
      flex: 1;
    }
  }
`;
