import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  text-align: center;

  span {
    color: #fff;
    font-weight: bold;
    font-size: 15px;
  }

  div {
    display: flex;

    margin: 5px;

    svg {
      display: flex;
      flex: 1;
      margin: 10px;
    }
  }
`;
