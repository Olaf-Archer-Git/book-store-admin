import React, { useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { Layout, Menu, theme, Col, Row, Typography } from "antd";
import {
  MdOutlineDashboard,
  MdPlaylistAddCheck,
  MdOutlineCategory,
  MdQueryStats,
} from "react-icons/md";
import {
  HiOutlineUsers,
  HiOutlineBookmark,
  HiOutlineBookOpen,
  HiOutlineClipboardList,
} from "react-icons/hi";
import { SiBlogger, SiBloglovin } from "react-icons/si";
import { TfiLayoutListPost } from "react-icons/tfi";
import HeaderComponent from "./HeaderComponent";
import "../style/componentStyle.css";

const MainLayout = () => {
  const { Sider, Content } = Layout;
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const { Title } = Typography;

  const navigate = useNavigate();

  return (
    <Row justify="center">
      <Col span={24}>
        <Layout style={{ minHeight: "100vh" }}>
          <Sider trigger={null} collapsible collapsed={collapsed}>
            <Title
              style={{
                color: "#ffff",
                textAlign: "center",
                margin: "20px 0",
              }}
              level={2}
            >
              Book Store
            </Title>
            <Menu
              theme="dark"
              mode="inline"
              onClick={({ key }) => {
                if (key !== "signOut") return navigate(key);
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
                      key: "books-list",
                      icon: <MdPlaylistAddCheck />,
                      label: "Books List",
                    },
                  ],
                },
                {
                  key: "orders",
                  icon: <HiOutlineClipboardList />,
                  label: "Orders",
                },
                {
                  key: "blogs",
                  icon: <SiBlogger />,
                  label: "Blogs",
                  children: [
                    {
                      key: "blog",
                      icon: <SiBloglovin />,
                      label: "Add Blog",
                    },
                    {
                      key: "blog-list",
                      icon: <TfiLayoutListPost />,
                      label: "Blog List",
                    },
                  ],
                },
                {
                  key: "category",
                  icon: <MdOutlineCategory />,
                  label: "Category",
                },
                {
                  key: "queries",
                  icon: <MdQueryStats />,
                  label: "Queries",
                },
              ]}
            />
          </Sider>
          <Layout className="site-layout">
            <HeaderComponent
              collapsed={collapsed}
              setCollapsed={setCollapsed}
            />
            <Content
              style={{
                margin: "24px 16px",
                padding: 24,
                minHeight: 280,
                background: colorBgContainer,
              }}
            >
              <Outlet />
            </Content>
          </Layout>
        </Layout>
      </Col>
    </Row>
  );
};

export default MainLayout;
