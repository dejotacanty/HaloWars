import { useState } from 'react';
import { PieChart, Pie, Sector, ResponsiveContainer, Cell } from 'recharts';
import { PieChartData } from '../../interfaces/Chart';


export const HaloPieChart = ({data, label, height}: {data: PieChartData[], label: string, height: number}) => {

  const [activeIndex, setActiveIndex] = useState(0);

  const onPieEnter = (_: any, index: number) => {
      setActiveIndex(index)
  };
  const COLORS = ['#43bbef', '#0f7ab3', '#91d642', '#8741a2', '#5407f9', '#c8fc16', 
  '#9f365c', '#cdc692', '#c1c42a', '#08dda3', '#baea91', '#804028', '#ae3c12'];
  
  return (
    
    <ResponsiveContainer width="100%" height={height}>
      <PieChart>
        <Pie dataKey="value" data={data} innerRadius="94%" outerRadius="100%" fill="#ff0000" paddingAngle={5}>
        {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}