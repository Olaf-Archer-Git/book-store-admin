import React from "react";
import { Layout, Col, Row } from "antd";
import { AiFillFolderOpen, AiFillFolder } from "react-icons/ai";
import { MdNotificationsNone } from "react-icons/md";
import icon from "../assets/man-avatar.png";

import "../style/componentStyle.css";

const HeaderComponent = (props) => {
  const { Header } = Layout;
  const { collapsed, setCollapsed } = props;

  return (
    <Header
      className="header"
      style={{
        padding: "0 15px",
        background: "#f7ffd2",
        height: "auto",
      }}
    >
      {React.createElement(collapsed ? AiFillFolder : AiFillFolderOpen, {
        className: "trigger",
        onClick: () => setCollapsed(!collapsed),
      })}
      <Row className="header-container" gutter={24} align="middle">
        <Col span={4} pull={2} className="header-icon">
          <MdNotificationsNone />
          <span>3</span>
        </Col>
        <Col span={4} pull={2}>
          <img style={{ maxWidth: "45px" }} src={icon} alt="#!" />
        </Col>
        <Col span={12}>
          <h4>John Doe</h4>
          <p>email@email.com</p>
        </Col>
      </Row>
    </Header>
  );
};

export default HeaderComponent;
