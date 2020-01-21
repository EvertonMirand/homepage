import styled from 'styled-components';
import Loader from 'react-loader-spinner';

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;

  margin: 20px;
  overflow: scroll;

  input {
    padding: 10px;
    width: 50%;
    margin-bottom: 10px;
    border: none;
    border-bottom: solid rgba(50, 90, 250, 1) 1px;
  }

  @media (max-width: 600px) {
  }
`;

export const JobGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 15px;
  justify-items: center;
  align-items: center;
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Job = styled.li`
  display: flex;
  flex-direction: column;
  background: #09203f;
  height: 500px;
  width: 350px;
  padding: 20px;
  border-radius: 10px;
  overflow: scroll;

  @media (max-width: 600px) {
    height: 400px;
    width: 90%;
  }

  color: #fff;

  box-shadow: 1px 1px 1px #09203f;

  a {
    color: #4fc3f7;
  }

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
    display: flex;
    height: 100px;
    width: 100px;
    margin-left: 10px;
    flex: 1;
  }

  span {
    justify-content: center;
    align-content: center;
    display: flex;
    font-weight: bold;
    color: #fff;
    flex: 1;
    text-align: center;
  }
`;

export const Spinner = styled(Loader).attrs({
  type: 'Oval',
  color: '#fff',
  height: 25,
  width: 25,
})`
  display: flex;
  justify-items: center;
  align-items: center;
  justify-content: center;
  margin: 10px;
`;
