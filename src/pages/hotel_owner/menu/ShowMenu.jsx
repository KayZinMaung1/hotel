import React from "react";
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
const { Title } = Typography;

const ShowMenu = () => {
    const navigate = useNavigate();

  const handleDelete = async (id) => {
    // await dispatch(deleteExpenseName(id));
  };

  const data = [
    {
      id: 1,
      type: "Superior Twin Room",
      sleeps: 2,
      price: 148221,
    },
    {
      id: 2,
      type: "superior King Room",
      sleeps: 2,
      price: 155043,
    },
    {
      id: 3,
      type: "Deluxe Suite",
      sleeps: 2,
      price: 356599,
    },
    {
      id: 4,
      type: "Deluxe King Room ",
      sleeps: 2,
      price: 170547,
    },
    {
      id: 5,
      type: "Superior Twin Room",
      sleeps: 2,
      price: 148221,
    },
    {
      id: 6,
      type: "superior King Room",
      sleeps: 2,
      price: 155043,
    },
    {
      id: 7,
      type: "Deluxe Suite",
      sleeps: 2,
      price: 356599,
    },
    {
      id: 8,
      type: "Deluxe King Room ",
      sleeps: 2,
      price: 170547,
    },
  ];

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
          <IconButton sx={{ color: "#389e0d" }} aria-label="edit" size="small" onClick={()=>navigate(`/admin/edit-menu/${id}`)}>
            <EditIcon fontSize="small"/>
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
              <DeleteIcon fontSize="small"/>
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
              onClick={() => {navigate("/admin/create-menu")}}
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
