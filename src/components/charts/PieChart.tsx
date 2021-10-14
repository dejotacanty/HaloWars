import { useState } from 'react';
import { PieChart, Pie, Sector, ResponsiveContainer, Cell } from 'recharts';
import { PieChartData } from '../../interfaces/Chart';


export const HaloPieChart = ({data, label, height, chartSetting}: {data: PieChartData[], label: string, height: number, chartSetting: string}) => {

  const pieChartSettings: {[key: string]: any} = {
    leader: {
      paddingAngle: 5,
      startAngle: 90,
      endAngle: -270,
      colours: ['#43bbef', '#0f7ab3', '#91d642', '#8741a2']
    },
    rank: {
      paddingAngle: 0,
      startAngle:90,
      endAngle: -270,
      colours: ['#0a090a', '#ffffff']
    },
    winLoss: {
      paddingAngle: 0,
      startAngle:180,
      endAngle: 0,
      colours: ['#43bbef', '#ffffff']
    }
  }

  return (
    
    <ResponsiveContainer width="100%" height={height}>
      <PieChart>
        <Pie dataKey="value" data={data} innerRadius="94%" outerRadius="100%" fill="#ff0000" paddingAngle={pieChartSettings[chartSetting].paddingAngle}
          startAngle={pieChartSettings[chartSetting].startAngle}
          endAngle={pieChartSettings[chartSetting].endAngle}
          >
        {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={pieChartSettings[chartSetting].colours[index % pieChartSettings[chartSetting].colours.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}