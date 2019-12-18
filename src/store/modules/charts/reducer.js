import produce from 'immer';

import { SELECT_CHART } from './types';
import { Line, Combined, Network } from '~/components/Charts';

const charts = [
  {
    chart: Line,
    title: 'Spline',
  },
  {
    chart: Combined,
    title: 'Combined',
  },
  {
    chart: Network,
    title: 'Network',
  },
];

const INITIAL_STATE = {
  charts,
  selectedChart: charts[0].chart,
};

export default function chart(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    const { payload, type } = action;
    switch (type) {
      case SELECT_CHART:
        draft.selectedChart = charts[payload.index].chart;
        break;
      default:
    }
  });
}
