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
`;

export const JobGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 15px;
`;

export const Job = styled.li`
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    160deg,
    rgba(50, 90, 250, 1),
    rgba(50, 90, 250, 0.6)
  );
  height: 500px;
  width: 350px;
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
  color: 'rgba(50, 90, 250, 1)',
  height: 25,
  width: 25,
})`
  display: flex;
  justify-items: center;
  align-items: center;
  justify-content: center;
  margin: 10px;
`;
