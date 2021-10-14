import React, { PureComponent, useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { PieChartData } from '../../interfaces/Chart';



export const SimpleBarChart = ({colour, data}:{colour: string, data: PieChartData[]}) => {

    
  
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }} width={150} height={40} data={data}>
          <Bar dataKey="value" fill={colour} />
        </BarChart>
      </ResponsiveContainer>
    );
  
}
