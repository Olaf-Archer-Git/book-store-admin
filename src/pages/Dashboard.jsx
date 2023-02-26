import React from "react";
import { Col, Row, Card, Popover, Button } from "antd";
import { BiDotsVerticalRounded } from "react-icons/bi";
import Chart from "../components/Chart";
import Tables from "../components/Tables";

const Dashboard = () => {
  return (
    <>
      <Row>
        <Col span={24}>
          <h3 style={{ fontSize: "30px", margin: "20px" }}>Dashboard</h3>
        </Col>
      </Row>
      <Row justify="center" gutter={[12, 12]}>
        <Col md={4} lg={6} xl={8}>
          <Card
            style={{
              width: "100%",
            }}
          >
            <Row style={{ marginBottom: "20px" }} gutter={12}>
              <Col span={20}>Total Sels</Col>
              <Col span={4} style={{ textAlign: "end" }}>
                <Popover content="hello" placement="leftBottom" trigger="click">
                  <Button type="link">
                    <BiDotsVerticalRounded />
                  </Button>
                </Popover>
              </Col>
            </Row>
            <Row align="middle">
              <Col span={16}>
                <h2>$2500</h2>
              </Col>
              <Col span={8} style={{ textAlign: "end" }}>
                <p style={{ color: "#09a43f", fontWeight: "bold" }}>35%</p>
                <p style={{ color: "#a3a3a3", fontSize: "12px" }}>compared</p>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col md={4} lg={6} xl={8}>
          <Card
            style={{
              width: "100%",
            }}
          >
            <Row style={{ marginBottom: "20px" }} gutter={12}>
              <Col span={20}>Average Order Value</Col>
              <Col span={4} style={{ textAlign: "end" }}>
                <Popover content="hello" placement="leftBottom" trigger="click">
                  <Button type="link">
                    <BiDotsVerticalRounded />
                  </Button>
                </Popover>
              </Col>
            </Row>
            <Row align="middle">
              <Col span={16}>
                <h2>$2500</h2>
              </Col>
              <Col span={8} style={{ textAlign: "end" }}>
                <p style={{ color: "#09a43f", fontWeight: "bold" }}>35%</p>
                <p style={{ color: "#a3a3a3", fontSize: "12px" }}>compared</p>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col md={4} lg={6} xl={8}>
          <Card
            style={{
              width: "100%",
            }}
          >
            <Row style={{ marginBottom: "20px" }} gutter={12}>
              <Col span={20}>Total Orders</Col>
              <Col span={4} style={{ textAlign: "end" }}>
                <Popover content="hello" placement="leftBottom" trigger="click">
                  <Button type="link">
                    <BiDotsVerticalRounded />
                  </Button>
                </Popover>
              </Col>
            </Row>
            <Row align="middle">
              <Col span={16}>
                <h2>$2500</h2>
              </Col>
              <Col span={8} style={{ textAlign: "end" }}>
                <p style={{ color: "red", fontWeight: "bold" }}>35%</p>
                <p style={{ color: "#a3a3a3", fontSize: "12px" }}>compared</p>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      <Row style={{ margin: "25px 0" }} gutter={10}>
        <h3 style={{ fontSize: "30px", margin: "20px" }}>Income Statistic</h3>
        <Col span={24}>
          <Chart />
        </Col>
      </Row>

      <Row style={{ margin: "25px 0" }} gutter={10}>
        <h3 style={{ fontSize: "30px", margin: "20px" }}>Recent Orders</h3>
        <Col span={24}>
          <Tables />
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;
