import React from "react";
import { Row, Col, Popover, Button, Card } from "antd";
import { BiDotsVerticalRounded } from "react-icons/bi";

const CardComponent = (props) => {
  return (
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
          <h2>{`$${props.sales}`}</h2>
        </Col>
        <Col span={8} style={{ textAlign: "end" }}>
          <p style={{ color: "#09a43f", fontWeight: "bold" }}>
            {`%${props.compare}`}
          </p>
          <p style={{ color: "#a3a3a3", fontSize: "12px" }}>compared</p>
        </Col>
      </Row>
    </Card>
  );
};

export default CardComponent;
