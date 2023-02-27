import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import "../style/componentStyle.css";

const data = [
  {
    type: "Jan",
    sales: 380,
  },
  {
    type: "Feb",
    sales: 990,
  },
  {
    type: "Mar",
    sales: 610,
  },
  {
    type: "Apr",
    sales: 450,
  },
  {
    type: "May",
    sales: 880,
  },
  {
    type: "Jun",
    sales: 950,
  },
  {
    type: "July",
    sales: 650,
  },
  {
    type: "Aug",
    sales: 850,
  },
  {
    type: "Sept",
    sales: 800,
  },
  {
    type: "Oct",
    sales: 900,
  },
  {
    type: "Nov",
    sales: 538,
  },
  {
    type: "Dec",
    sales: 750,
  },
];

const Chart = () => {
  return (
    <ResponsiveContainer width={"100%"} height={450}>
      <BarChart
        width={800}
        height={450}
        data={data}
        margin={{ top: 5, right: 10, left: 0, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="4 4" />
        <XAxis dataKey="type" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="sales" fill="#44b97d" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Chart;
