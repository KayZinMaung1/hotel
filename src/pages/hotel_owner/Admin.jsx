import React, { useState } from "react";
// ant design styles
import { Layout, Menu, Avatar, Space, Popover, Button, Typography } from "antd";
import 'antd/dist/antd.css';
import {
    Link,
    Routes,
    Route,
    useLocation
} from "react-router-dom";

// ant design icons
import {
    UserOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    BarsOutlined,
    PlusOutlined
} from "@ant-design/icons";

import { useNavigate } from "react-router-dom";
import Availability from "../../components/show_hotel_details/Availability";
import { style } from "@mui/system";
import ShowMenu from "./menu/ShowMenu";
import CreateMenu from "./menu/CreateMenu";
import EditMenu from "./menu/EditMenu";


const { Header, Footer, Sider, Content } = Layout;
const { Title, Text } = Typography;
const text = (
    <Title level={4} style={{ textAlign: "center" }}>
        Profile
    </Title>
);

const Admin = () => {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();
    const handleLogout = () => {
        // dispatch(logout());
        // navigate("/auth/login", { replace: true });
    };
    const content = (
        <Space direction="vertical" style={{ textAlign: "center", width: "100%" }}>
            <Title level={5}>
                Maung Maung
            </Title>
            <Button danger onClick={handleLogout} size="small">
                Logout
            </Button>
        </Space>
    );


    const menuIconStyle = { color: "#1890ff" };
    const { pathname } = useLocation();
    let selectedKey;
    switch (pathname) {
        case "/admin/show-menu": selectedKey = "MenuList";
            break;
        case "/admin/create-menu": selectedKey = "AddNewMenu";
            break;

        default: selectedKey = "Dashboard";
    }

    return (
        <Layout>
            <Header
                style={{ paddingTop: "13px", backgroundColor: "var(--primary-color)" }}
            >
                <Button
                    style={{
                        float: "left",
                        backgroundColor: "var(--primary-color)",
                        color: "var(--white-color)",
                        marginRight: "3px",
                    }}
                    onClick={() => setCollapsed(!collapsed)}
                >
                    {React.createElement(
                        collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                        {style: {color: "#ffffff"}},
                    )}
                </Button>
                <Popover
                    placement="bottom"
                    content={content}
                    title={text}
                    trigger="click"
                    
                >
                    <Avatar
                        style={{ float: "right", backgroundColor: "var(--primary-color)" }}
                        icon={<UserOutlined />}
                        size="large"

                    />
                </Popover>
                <Title style={{ color: "#ffffff" }} level={3}>
                    HotelHub
                </Title>
            </Header>
            <Layout>
                <Sider
                    collapsed={collapsed}
                    style={{ backgroundColor: "var(--white-color)" }}
                >
                    <Menu mode="inline" defaultSelectedKeys={[selectedKey]}>
                        <Menu.Item key="MenuList" icon={<BarsOutlined style={menuIconStyle}/>}>
                            <Link to="/admin/show-menu">Menu List</Link>
                        </Menu.Item>
                        <Menu.Item key="AddNewMenu" icon={<PlusOutlined style={menuIconStyle}/>}>
                            <Link to="/admin/create-menu">Add New Menu</Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Content style={{ minHeight: "520px" }}>
                        <Routes>
                            <Route path="show-menu" element={<ShowMenu />} />
                            <Route path="create-menu" element={<CreateMenu />} />
                            <Route path="edit-menu/:id" element={<EditMenu />} />
                        </Routes>
                    </Content>
                    <Footer
                        style={{
                            backgroundColor: "var(--white-color)",
                            textAlign: "center",
                            fontWeight: "bold",
                            color: "var(--primary-color)",
                        }}
                    >

                    </Footer>
                </Layout>
            </Layout>
        </Layout>
    );
};

export default Admin;
