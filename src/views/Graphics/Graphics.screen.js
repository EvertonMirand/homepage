import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import Highcharts from 'highcharts';
import networkgraph from 'highcharts/modules/networkgraph';

import { Container, ChartContainer, ButtonsContainer } from './styles';
import { selectChart } from '~/store/modules/charts/actions';

networkgraph(Highcharts);

export default function Graphics({ forwardRef }) {
  const dispatch = useDispatch();
  const Chart = useSelector(({ chart }) => chart.selectedChart);
  const charts = useSelector(({ chart }) => chart.charts);

  const onClickButton = index => dispatch(selectChart(index));

  const Buttons = () =>
    charts.map((o, index) => (
      <button key={o.title} type="button" onClick={() => onClickButton(index)}>
        {o.title}
      </button>
    ));

  return (
    <Container ref={forwardRef}>
      <ChartContainer>
        <Chart />
      </ChartContainer>
      <ButtonsContainer>
        <Buttons />
      </ButtonsContainer>
    </Container>
  );
}
