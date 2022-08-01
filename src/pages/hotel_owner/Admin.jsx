import React, { useEffect, useState } from "react";
// ant design styles
import { Layout, Menu, Avatar, Space, Popover, Button, Typography, message } from "antd";
import "antd/dist/antd.css";
import { Link, Routes, Route, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { db } from "../../actions/auth";
import { query, collection, getDocs, where } from "firebase/firestore";

// ant design icons
import {
  UserOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  BarsOutlined,
  PlusOutlined,
  AppstoreAddOutlined
} from "@ant-design/icons";

import ShowMenu from "./menu/ShowMenu";
import CreateMenu from "./menu/CreateMenu";
import EditMenu from "./menu/EditMenu";
import CreateHotelProfile from "./CreateHotelProfile";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { loginSuccess } from "../../utils/messages";

const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography;
const text = (
  <Title level={4} style={{ textAlign: "center" }}>
    Profile
  </Title>
);

const Admin = () => {
  const [collapsed, setCollapsed] = useState(false);
  const auth = getAuth();
  const [user, setUser] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
       setUser(user);
      } else {
        navigate("/login");
      }
    });
  },[auth, navigate, user])

  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();

      console.log(data);
    } catch (err) {
      console.error(err);
      // alert("An error occured while fetching user data");
    }
  };

  useEffect(() => {
    fetchUserName();
  }, [user]);

  const handleLogout = () => {
    signOut(auth);
  };

  console.log("User:", user)
  const content = (
    <Space direction="vertical" style={{ textAlign: "center", width: "100%" }}>
      <Title level={5}>Maung Maung</Title>
      <Button danger onClick={handleLogout} size="small">
        Logout
      </Button>
    </Space>
  );

  const menuIconStyle = { color: "#1890ff" };
  const { pathname } = useLocation();
  let selectedKey;
  switch (pathname) {
    case "/admin/show-menu":
      selectedKey = "MenuList";
      break;
    case "/admin/create-menu":
      selectedKey = "AddNewMenu";
      break;
    case "/admin/create-hotel-profile":
      selectedKey = "BuildHotelProfile";
      break;

    default:
      selectedKey = "Dashboard";
  }
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
       setUser(user);
      } else {
        // navigate("/login");
      }
    });
  },[auth, navigate, user])
  
 
  useEffect(() => {
    if (user) {
      message.success(loginSuccess);
      navigate("/admin");
    }
    return () => user;
  }, [user, navigate]);
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
            { style: { color: "#ffffff" } }
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
            <Menu.Item
              key="MenuList"
              icon={<BarsOutlined style={menuIconStyle} />}
            >
              <Link to="/admin/show-menu">Menu List</Link>
            </Menu.Item>
            <Menu.Item
              key="AddNewMenu"
              icon={<PlusOutlined style={menuIconStyle} />}
            >
              <Link to="/admin/create-menu">Add New Menu</Link>
            </Menu.Item>
            <Menu.Item
              key="BuildHotelProfile"
              icon={<AppstoreAddOutlined style={menuIconStyle}/> }
            >
              <Link to="/admin/create-hotel-profile">Build Hotel Profile</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Content style={{ minHeight: "520px" }}>
            <Routes>
              <Route path="show-menu" element={<ShowMenu />} />
              <Route path="create-menu" element={<CreateMenu />} />
              <Route path="edit-menu/:id" element={<EditMenu />} />
              <Route
                path="create-hotel-profile"
                element={<CreateHotelProfile />}
              />
            </Routes>
          </Content>
          <Footer
            style={{
              backgroundColor: "var(--white-color)",
              textAlign: "center",
              fontWeight: "bold",
              color: "var(--primary-color)",
            }}
          ></Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Admin;
