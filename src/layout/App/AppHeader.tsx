import defaultAvatar from "@/assets/image/avatar.png";
import { MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Dropdown, MenuProps } from "antd";
import { Header } from "antd/es/layout/layout";
import { memo } from "react";
import { useNavigate } from "react-router-dom";
import HeaderWapper from "./style/HeaderWapper";
interface AppHeaderProps {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
  colorBgContainer: string;
}
const items: MenuProps["items"] = [
  {
    label: "登出",
    key: "Login",
  },
  {
    label: "2nd menu item",
    key: "2",
  },
  {
    label: "3rd menu item",
    key: "3",
  },
];

const AppHeader = memo(({ collapsed, setCollapsed }: AppHeaderProps) => {
  const navigate = useNavigate();
  const meunItemHandler: MenuProps["onClick"] = ({ key }) => {
    if (key === "Login") {
      navigate("/login");
    }
  };
  return (
    <HeaderWapper>
      <Header>
        <div className="header-left">
          <Button
            className="collapsed-Btn"
            size="large"
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuUnfoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{ fontSize: "16px", width: 60, height: 64 }}
          />
        </div>
        <div className="header-center"></div>
        <div className="header-right">
          <Dropdown menu={{ items, onClick: meunItemHandler }}>
            <div className="userInfo">
              <div className="avatar">
                <img src={defaultAvatar} alt="" />
              </div>
              <div className="name">xiaozhang</div>
            </div>
          </Dropdown>
        </div>
      </Header>
    </HeaderWapper>
  );
});

export default AppHeader;
