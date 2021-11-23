import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import utilService from '../services/utilService';

export default class MainChart extends PureComponent {

    render() {
        let { data } = this.props;
        let reverseData = utilService.reverseArr(data);

        return (
            <ResponsiveContainer width="99%" height={350}>
              <AreaChart
                width="100%"
                height={350}
                data={reverseData}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="20 10" />
                <XAxis tickMargin="10" dataKey="name" />
                <YAxis tickMargin="10" />
                <Tooltip />
                <Area activeDot={{r:4}} type="monotone" dataKey="uv" stroke="#fff" fill="#fff" />
              </AreaChart>
            </ResponsiveContainer>
          );
    }
}
