import React from "react";
import { Row, Col } from "antd";
import TableComponent from "../components/TableComponent";

const BlogList = () => {
  const columns = [
    {
      title: "Number",
      dataIndex: "key",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Mobile",
      dataIndex: "mobile",
    },
    {
      title: "Status",
      dataIndex: "status",
    },

    {
      title: "Action",
      dataIndex: "action",
    },
  ];

  const data = [];
  for (let i = 0; i < 35; i++) {
    data.push({
      key: i + 1,
      name: `Edward King ${i + 1}`,
      email: "demo@email.com",
      mobile: `050${Math.floor(Math.random() * (999 - 111)) + 111}1020`,
      status: "status",
      action: "action",
    });
  }

  return (
    <Row style={{ margin: "25px 0" }} gutter={10}>
      <h3 style={{ fontSize: "30px", margin: "20px" }}>Blog List</h3>
      <Col span={24}>
        <TableComponent columns={columns} data={data} />
      </Col>
    </Row>
  );
};

export default BlogList;
