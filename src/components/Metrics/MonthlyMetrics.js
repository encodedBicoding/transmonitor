import React from 'react';
import {AreaChart, Area, Tooltip } from 'recharts';

function createMonthlyMetrics(month, data) {
  return (
      <div className='monthly-map-container'>
          <h6 id='month'>{month}</h6>
          <div className='metrics-map '>
            <AreaChart
              width={93}
              height={220}
              data={data}
              margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
            >
              <defs>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="9%" stopColor="#0294FF" stopOpacity={0.2} />
                <stop offset="95%" stopColor="#0294FF" stopOpacity={0.8} />
              </linearGradient>
            </defs>
            <Tooltip />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#0294FF"
              fillOpacity={1}
              fill="url(#colorPv)"
            />
            </AreaChart>
          </div>
      </div>
  )
}

export default createMonthlyMetrics;