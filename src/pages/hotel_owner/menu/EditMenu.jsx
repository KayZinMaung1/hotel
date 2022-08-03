import React, { useCallback, useEffect, useState } from "react";
import { Form, Typography, Space, Row, Col, Input, Button, InputNumber, message, Spin} from "antd";
import Layout from "antd/lib/layout/layout";
import { SaveOutlined } from "@ant-design/icons";
import { useParams } from "react-router-dom";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import { editSuccess } from "../../../utils/messages";


const { Title } = Typography;
const EditMenu = () => {
  const [form] = Form.useForm();
  const params = useParams();
  const id = params.id;
  const [menu, setMenu] = useState();
  const [loading , setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      const docRef = doc(db, "menu", id);
      const docSnap = await getDoc(docRef);
      setMenu(docSnap.data());
    } catch (err) {
      console.log(err);
    }
  }, [id]);

  useEffect(() => {
    fetchData()
  }, [fetchData]);

  useEffect(() => {
    form.setFieldsValue({ type: menu?.type });
    form.setFieldsValue({ sleeps: menu?.sleeps });
    form.setFieldsValue({ price: menu?.price });
  }, [form, menu])

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const data = {
        ...values,
        hotelId: menu.hotelId,
        userId: menu.userId
      }
      const docRef = doc(db, "menu", id);
      await getDoc(docRef);
      setDoc(docRef, data)
        .then(docRef => {
          message.success(editSuccess);
        })
    } catch (error) {
      console.log(error);
    }
    setLoading(false);

  };


  return (
    <Spin spinning={loading}>
      <Layout style={{ margin: "20px 40px" }}>
      <Space direction="vertical">
        <Title level={3}>Edit Menu</Title>

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

export default EditMenu;
