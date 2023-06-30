import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

import { AreaGraphProps } from "../../types/prop_types";

export default function AreaGraph({
  graphData,
  areaFillColor,
  XAxisKey,
  YAxisKey,
  graphHeight = 400,
  graphWidth = "100%"
}: AreaGraphProps): JSX.Element {
  const gradientId = `gradient-${Math.random().toString(36).substring(2, 9)}`; // generates a new random gradient id

  const styles = {
    rechartsContainer: {
      zIndex: 1 // Set a lower z-index value
    }
  };

  return (
    <div style={styles.rechartsContainer}>
      <ResponsiveContainer width={graphWidth} height={graphHeight}>
        <AreaChart data={graphData} style={{ zIndex: 0 }}>
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={areaFillColor} stopOpacity={0.8} />
              <stop offset="95%" stopColor={areaFillColor} stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey={XAxisKey} />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey={YAxisKey}
            stroke={areaFillColor}
            strokeWidth={2}
            fill={`url(#${gradientId})`}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
