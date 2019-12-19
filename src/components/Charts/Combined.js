import React from 'react';

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { combined } from './chartOptions';

export default function Combined() {
  return <HighchartsReact options={combined} highcharts={Highcharts} />;
}
