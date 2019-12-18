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
    120deg,
    rgba(50, 98, 244, 1),
    rgba(50, 98, 244, 0.6)
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
