import { SELECT_CHART } from './types';

export const selectChart = index => ({
  type: SELECT_CHART,
  payload: {
    index,
  },
});
