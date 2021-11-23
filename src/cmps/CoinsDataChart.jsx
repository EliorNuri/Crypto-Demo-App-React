import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default class CoinsDataChart extends PureComponent {

  render() {
    const {data} = this.props;

    return (
      <ResponsiveContainer width="99%" height="80%">
        <AreaChart
          width="100%"
          height={200}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#bbb" fill="#bbb" />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}
