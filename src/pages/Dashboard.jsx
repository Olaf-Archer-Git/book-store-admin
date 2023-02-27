import React from "react";
import { Col, Row } from "antd";
import ChartComponent from "../components/ChartComponent";
import TableComponent from "../components/TableComponent";
import CardComponent from "../components/CardComponent";

const Dashboard = () => {
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

  return (
    <>
      <Row>
        <Col span={24}>
          <h3 style={{ fontSize: "30px", margin: "20px" }}>Dashboard</h3>
        </Col>
      </Row>
      <Row justify="center" gutter={[12, 12]}>
        <Col md={4} lg={6} xl={8}>
          <CardComponent sales="2500" compare="32" />
        </Col>
        <Col md={4} lg={6} xl={8}>
          <CardComponent sales="5500" compare="12" />
        </Col>
        <Col md={4} lg={6} xl={8}>
          <CardComponent sales="3500" compare="35" />
        </Col>
      </Row>

      <Row style={{ margin: "25px 0" }} gutter={10}>
        <h3 style={{ fontSize: "30px", margin: "20px" }}>Income Statistic</h3>
        <Col span={24}>
          <ChartComponent />
        </Col>
      </Row>

      <Row style={{ margin: "25px 0" }} gutter={10}>
        <h3 style={{ fontSize: "30px", margin: "20px" }}>Recent Orders</h3>
        <Col span={24}>
          <TableComponent columns={columns} data={data} />
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;
