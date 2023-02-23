import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { Col, Row } from "antd";
import { MdOutlineDashboard, MdPlaylistAddCheck } from "react-icons/md";
import {
  HiOutlineUsers,
  HiOutlineBookmark,
  HiOutlineBookOpen,
} from "react-icons/hi";
import "../style/componentStyle.css";

const { Header, Sider, Content } = Layout;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const navigate = useNavigate();

  return (
    <Row justify="center">
      <Col span={23}>
        <Layout style={{ minHeight: "100vh" }}>
          <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="logo" />
            <h2
              style={{ textAlign: "center", color: "#fff", padding: "10px 0" }}
            >
              Book Store
            </h2>
            <Menu
              theme="dark"
              mode="inline"
              onClick={({ key }) => {
                if (key !== "signOut") return navigate(key);
                console.log(navigate(key));
              }}
              items={[
                {
                  key: "",
                  icon: <MdOutlineDashboard />,
                  label: "Dashboard",
                },
                {
                  key: "customers",
                  icon: <HiOutlineUsers />,
                  label: "Customers",
                },
                {
                  key: "catalog",
                  icon: <HiOutlineBookmark />,
                  label: "Catalog",
                  children: [
                    {
                      key: "book",
                      icon: <HiOutlineBookOpen />,
                      label: "Add Book",
                    },
                    {
                      key: "booksList",
                      icon: <MdPlaylistAddCheck />,
                      label: "Books List",
                    },
                  ],
                },
              ]}
            />
          </Sider>
          <Layout className="site-layout">
            <Header style={{ padding: 0, background: colorBgContainer }}>
              {React.createElement(
                collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: "trigger",
                  onClick: () => setCollapsed(!collapsed),
                }
              )}
            </Header>
            <Content
              style={{
                margin: "24px 16px",
                padding: 24,
                minHeight: 280,
                background: colorBgContainer,
              }}
            >
              Content
            </Content>
          </Layout>
        </Layout>
      </Col>
    </Row>
  );
};

export default MainLayout;
