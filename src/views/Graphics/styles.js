import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-items: center;
  height: 700px;
`;

export const ChartContainer = styled.div`
  display: flex;
  background: linear-gradient(
    150deg,
    rgba(70, 160, 250, 1),
    rgba(70, 190, 250, 1)
  );
  width: 80%;
  height: 80%;
  justify-content: center;
  align-content: center;
  align-items: center;
  justify-items: center;
  border-radius: 30px;

  highcharts-background {
    display: flex;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  button {
    margin: 10px;
    border: none;
    border-radius: 5px;
    padding: 10px;
    background: linear-gradient(
      90deg,
      rgba(70, 200, 250, 1),
      rgba(70, 220, 250, 1)
    );
    color: #222;
    font-weight: bold;
    box-shadow: 1.2px 1.2px 2px rgba(70, 200, 250, 0.6);
  }
`;
