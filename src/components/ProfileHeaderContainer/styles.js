import styled from 'styled-components';

export const Container = styled.body.attrs({ className: 'container' })`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  background: none;

  span {
    color: #fff;
    font-size: 17px;
    font-weight: bold;
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;

    a,
    button {
      font-size: 13px;
    }

    a {
      color: #ccc;
    }

    button {
      color: #ff867c;
    }
  }
`;
