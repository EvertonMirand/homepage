import React from 'react';

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { spline } from '~/store/modules/charts/chartOptions';

export default function Line() {
  return <HighchartsReact options={spline} highcharts={Highcharts} />;
}
