import React from 'react';
import {AreaChart, Area } from 'recharts';

function MonthlyMetrics(month, data) {
  return (
    <React.memo>
      <h6>{month}</h6>
      <div className='metrics-map'>
          <AreaChart
            width={80}
            height={50}
            data={data}
            margin={{ top: 13, right: 15, left: 0, bottom: 0 }}
          >
            <defs>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="9%" stopColor="#0294FF" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#0294FF" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="amt"
            stroke="#0294FF"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
          </AreaChart>
        </div>
    </React.memo>
  )
}

export default MonthlyMetrics;