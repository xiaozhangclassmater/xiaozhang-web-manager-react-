import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu, theme } from "antd";
import React, { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import AppHeader from "./App/AppHeader";
import AppLogo from "./App/AppLogo";
import { AppLayoutWapper } from "./LayoutStyle";
const { Content, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("首页", "/dashboard", <PieChartOutlined />),
  getItem("表格识别技术", "/tableRecognition", <DesktopOutlined />),
  getItem("User", "sub1", <UserOutlined />, [
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),
  getItem("Team", "sub2", <TeamOutlined />, [getItem("Team 1", "6"), getItem("Team 2", "8")]),
  getItem("Files", "9", <FileOutlined />),
];

const AppLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigareInstance = useNavigate();
  const locationInstance = useLocation();
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const jumpTabItemPage = (item: any) => {
    if (locationInstance.pathname === item.key) {
      return;
    }
    navigareInstance(item.key);
    console.log("跳转", item.key);
  };
  return (
    <AppLayoutWapper>
      <Layout>
        <Sider
          collapsible
          collapsed={collapsed}
          trigger={null}
          onCollapse={(value) => setCollapsed(value)}
        >
          <AppLogo collapsed={collapsed} />
          <Menu
            theme="dark"
            defaultSelectedKeys={["/dashboard"]}
            mode="inline"
            items={items}
            onClick={jumpTabItemPage}
          />
        </Sider>
        <Layout>
          <AppHeader
            collapsed={collapsed}
            setCollapsed={setCollapsed}
            colorBgContainer={colorBgContainer}
          />
          <Content style={{ margin: "0 16px" }}>
            {/* <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb> */}
            <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
              <Outlet />
            </div>
          </Content>
        </Layout>
      </Layout>
    </AppLayoutWapper>
  );
};

export default AppLayout;
