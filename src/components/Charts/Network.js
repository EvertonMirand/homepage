import React from 'react';

import Highcharts from 'highcharts';
import networkgraph from 'highcharts/modules/networkgraph';
import HighchartsReact from 'highcharts-react-official';
import { networkOption } from './chartOptions';

networkgraph(Highcharts);

export default function Network() {
  return <HighchartsReact options={networkOption} highcharts={Highcharts} />;
}
