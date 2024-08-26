import React from "react";
import {
    PieChart as Chart,
    ResponsiveContainer,
    Pie,
    Tooltip,
    Cell,
    Legend,
} from "recharts";

// Define colors for the categories
const COLORS = ["#62a244", "#063437", "#98c455", " #09514c", "#28998b"];

const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
}) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 1.2;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text
            x={x}
            y={y}
            fill="black"
            textAnchor={x > cx ? "start" : "end"}
            dominantBaseline="central"
        >
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

function PieChart({ data }) {
    return (
        <ResponsiveContainer width="100%" height={400}>
            <Chart>
                <Pie
                    data={data}
                    dataKey="totalAmount"
                    nameKey="category"
                    cx="50%"
                    cy="50%"
                    outerRadius={120}
                    fill="#8884d8"
                    label={renderCustomizedLabel}
                >
                    {data.map((entry, index) => (
                        <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                        />
                    ))}
                </Pie>
                <Tooltip />
                <Legend />
            </Chart>
        </ResponsiveContainer>
    );
}

export default PieChart;
