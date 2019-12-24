import styled from 'styled-components';

export const Container = styled.body.attrs({ className: 'container' })`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  background: none;

  span {
    color: #fff;
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;

    a {
      color: rgb(93, 195, 246);
    }

    button {
      color: #ccc;
    }
  }
`;
