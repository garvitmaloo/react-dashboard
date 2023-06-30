import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

import { PieGraphProps } from "../../types/prop_types";

function graphDetails(
  colors: string[],
  graphData: any[]
): { color: string; title: string }[] {
  return colors.map((color, index) => ({
    color,
    title: graphData[index].title
  }));
}

export default function PieGraph({
  colors,
  graphData,
  nameKey,
  dataKey,
  graphHeight = 160,
  graphWidth = "100%"
}: PieGraphProps): JSX.Element {
  return (
    <div className="flex justify-evenly gap-3">
      <ResponsiveContainer width={graphWidth} height={graphHeight}>
        <PieChart>
          <Pie
            data={graphData}
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            nameKey={nameKey}
            dataKey={dataKey}
          >
            {graphData.map((entry, index) => (
              <Cell
                key={`cell-${entry.type}`}
                stroke="none"
                fill={colors[index % colors.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
      <div className="min-w-[125px]">
        {graphDetails(colors, graphData).map((item) => (
          <div key={item.title}>
            <span
              className="inline-block h-[10px] w-[10px] me-3 rounded-md"
              style={{ backgroundColor: item.color }}
            />
            <span>{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
