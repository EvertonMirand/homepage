import React from 'react';

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { spline } from './chartOptions';

export default function Line() {
  return <HighchartsReact options={spline} highcharts={Highcharts} />;
}
