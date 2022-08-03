import React, { useEffect, useState } from "react";
import {
  Typography,
  Space,
  Row,
  Col,
  Table,
  Popconfirm,
  Button,
} from "antd";
import Layout from "antd/lib/layout/layout";
import {

  PlusSquareOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from '@mui/icons-material/Edit';
import { collection, deleteDoc, doc, getDocs, query, where } from "firebase/firestore";
import { auth, db } from "../../../firebase";
import { onAuthStateChanged } from "firebase/auth";
const { Title } = Typography;

const ShowMenu = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState();
  const [data, setData] = useState([]);
  const [user, setUser] = useState();
  
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "menu", id));
  };

  useEffect(() => {
    onAuthStateChanged(auth, (usr) => {
      if (usr) {
        setUser(usr);
        setUserId(usr.uid);
      } else {
        navigate("/login");
      }
    });
  }, [navigate])

  useEffect(()=>{
    if(user){
      fetchMenu();
    }
  },[user, data])

  const fetchMenu = async() => {
    try {
      let newData = [];
      const q = query(collection(db, "menu"), where("userId", "==", userId));
      const querySnapshot  = await getDocs(q);
      querySnapshot.forEach((doc) => {
        let transformedData = {
          ...doc.data(),
          id: doc.id,
          key: doc.id
        };
        newData = [...newData, transformedData];
      });
      setData(newData);
    } catch (err) {
      console.error(err);
    }
  }

  const columns = [
    {
      title: "Type",
      dataIndex: "type",
    },
    {
      title: "Sleeps",
      dataIndex: "sleeps",
    },
    {
      title: "Price",
      dataIndex: "price",
    },
    {
      title: "Actions",
      dataIndex: "id",
      render: (id) => (
        <Space direction="horizontal">
          <IconButton sx={{ color: "#389e0d" }} aria-label="edit" size="small" onClick={() => navigate(`/admin/edit-menu/${id}`)}>
            <EditIcon fontSize="small" />
          </IconButton>
          <Popconfirm
            title="Are you sure to delete?"
            okText="Yes"
            cancelText="No"
            onConfirm={() => {
              handleDelete(id);
            }}
          >
            <IconButton sx={{ color: "red" }} aria-label="delete" size="small">
              <DeleteIcon fontSize="small" />
            </IconButton>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <Layout style={{ margin: "20px 40px" }}>
      <Space direction="vertical" size="middle">
        <Row gutter={[16, 16]}>
          <Col xl={{ span: 21 }} md={{ span: 18 }}>
            <Title level={3}>Menu List</Title>
          </Col>
          <Col xl={{ span: 3 }} md={{ span: 6 }}>
            <Button
              style={{
                backgroundColor: "var(--primary-color)",
                color: "var(--white-color)",
                borderRadius: "5px",
              }}
              size="medium"
              onClick={() => { navigate("/admin/create-menu") }}
            >
              {<PlusSquareOutlined />}
              Add New
            </Button>
          </Col>
        </Row>

        <Table
          bordered
          columns={columns}
          pagination={{ defaultPageSize: 10 }}
          dataSource={data}
        />
      </Space>
    </Layout>
  );
};

export default ShowMenu;
