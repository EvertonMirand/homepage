import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-items: center;
  height: 700px;
  flex-direction: column;

  @media (max-width: 600px) {
    align-items: center;
    justify-content: center;

    .chart-container {
      height: 70%;
    }
  }
`;

export const ChartContainer = styled.div.attrs({
  className: 'chart-container',
})`
  display: flex;
  background: linear-gradient(90deg, #eee, #fff);
  width: 80%;
  height: 80%;
  justify-content: center;
  align-items: center;
  border-radius: 30px;

  highcharts-background {
    display: flex;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  button {
    margin: 10px;
    border: none;
    border-radius: 5px;
    padding: 10px;
    background: linear-gradient(90deg, #eee, #fff);
    color: #222;
    font-weight: bold;
    box-shadow: 1.2px 1.2px 2px #fff;
  }
`;
