import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  background: rgb(15, 40, 90);
  text-align: center;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 1px 1px 1px rgba(15, 40, 90, 0.8);

  img {
    display: flex;
    justify-content: center;
    align-content: center;
  }
`;
