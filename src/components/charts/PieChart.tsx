import { PieChart, Pie, ResponsiveContainer, Cell } from 'recharts';
import { PieChartData } from '../../interfaces/Chart';
import { designationToColourMap } from '../../utils/helpers';


export const HaloPieChart = ({data, label, height, chartSetting, designation}: {data: PieChartData[], label: string, height: number, chartSetting: string, designation?: number}) => {

  const pieChartSettings: {[key: string]: any} = {
    leader: {
      paddingAngle: 2,
      startAngle: 90,
      endAngle: -270,
      colours: ['#43bbef', '#0f7ab3', '#91d642', '#8741a2']
    },
    rank: {
      paddingAngle: 0,
      startAngle:90,
      endAngle: -270,
      colours: [designation ? designationToColourMap(designation) : 1, '#eee']
    },
    winLoss: {
      paddingAngle: 0,
      startAngle:180,
      endAngle: 0,
      colours: ['#43bbef', '#eee']
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