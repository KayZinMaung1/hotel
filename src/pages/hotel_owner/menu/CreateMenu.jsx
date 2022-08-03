import React, { useEffect, useState } from "react";
import {
  Form,
  Typography,
  Space,
  Row,
  Col,
  Input,
  Button,
  InputNumber,
  message,
  Spin
} from "antd";
import Layout from "antd/lib/layout/layout";
import { SaveOutlined } from "@ant-design/icons";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { createSuccess } from "../../../utils/messages";

const { Title } = Typography;

const CreateMenu = () => {
  const [user, setUser] = useState();
  const auth = getAuth();
  const [form] = Form.useForm();
  const [hotelId, setHotelId] = useState();
  const [userId, setUserId] = useState();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setUserId(user.uid)
      } else {
        navigate("/login");
      }
    });
  }, [auth, navigate])

  useEffect(() => {
    fetchHotelId();
  })


  // console.log("Hotel Id: ", hotelId)

  const fetchHotelId = async () => {
    try {
      const q = query(collection(db, "hotels"), where("uid", "==", userId));
      const doc = await getDocs(q);
      const id = doc.docs[0]?.id;
      setHotelId(id);
    } catch (err) {
      console.error(err);
    }
  };


  const onFinish = async (values) => {
    setLoading(true);
    const data = {
      ...values,
      hotelId,
      userId
    }
    try {
     
      await addDoc(collection(db, "menu"), data);
      message.success(createSuccess);
      form.resetFields();
    } catch (e) {
      console.error("Error adding document: ", e);
      message.error("Please, create your hotel profile first!")
    }
    setLoading(false);
  };

  return (
    <Spin spinning={loading}>
      <Layout style={{ margin: "20px 40px" }}>
        <Space direction="vertical">
          <Title level={3}>Add New Menu</Title>

          <Row>
            <Col lg={{ span: 8 }} sm={{ span: 24 }}>
              <Form
                colon={false}
                labelCol={{
                  xl: {
                    span: 8,
                  },
                }}
                wrapperCol={{
                  xl: {
                    span: 24,
                  },
                }}
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
                form={form}
                layout={"vertical"}
              >
                <Form.Item
                  name="type"
                  label="Type"
                  rules={[
                    {
                      required: true,
                      message: "Please enter type",
                    },
                  ]}
                >
                  <Input
                    placeholder="Enter type"
                    style={{ borderRadius: "10px" }}
                    size="large"
                  />
                </Form.Item>
                <Form.Item
                  name="sleeps"
                  label="Sleeps"
                  rules={[
                    {
                      required: true,
                      message: "Please enter sleeps",
                    },
                  ]}
                >
                  <InputNumber
                    placeholder="Enter sleeps"
                    style={{ borderRadius: "10px", width: "100%" }}
                    size="large"
                  />
                </Form.Item>
                <Form.Item
                  name="price"
                  label="Price"
                  rules={[
                    {
                      required: true,
                      message: "Please enter price",
                    },
                  ]}
                >
                  <InputNumber
                    placeholder="Enter price"
                    style={{ borderRadius: "10px", width: "100%" }}
                    size="large"
                  />
                </Form.Item>

                <Form.Item style={{ textAlign: "right" }}>
                  <Button
                    style={{
                      backgroundColor: "var(--primary-color)",
                      color: "var(--white-color)",
                      borderRadius: "10px",
                    }}
                    size="large"
                    htmlType="submit"
                  >
                    <SaveOutlined />
                    Save
                  </Button>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </Space>
      </Layout>
    </Spin>

  );
};

export default CreateMenu;
