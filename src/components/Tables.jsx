import React from "react";
import { Table } from "antd";

const columns = [
  {
    title: "ID",
    dataIndex: "number",
  },
  {
    title: "name",
    dataIndex: "name",
  },
  {
    title: "product",
    dataIndex: "product",
  },
  {
    title: "status",
    dataIndex: "status",
  },
];

const data = [];
for (let i = 0; i < 35; i++) {
  data.push({
    key: i,
    number: i + 1,
    name: `Edward King ${i}`,
    product: 32,
    status: `London, Park Lane no. ${i}`,
  });
}

const Tables = () => {
  return <Table columns={columns} dataSource={data} />;
};

export default Tables;
