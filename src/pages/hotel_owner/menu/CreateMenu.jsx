import React from "react";
import { Form, Typography, Space, Row, Col, Input, Button } from "antd";
import Layout from "antd/lib/layout/layout";
import { SaveOutlined } from "@ant-design/icons";

const { Title } = Typography;

const CreateMenu = () => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    // await dispatch(createExpenseName(values));
  };

  return (
    <Layout style={{ margin: "20px 40px" }}>
      <Space direction="vertical">
        <Title level={3}>Add New Menu</Title>

        <Row>
          <Col lg={{span: 8}} sm={{span: 24}}>
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
                  size="medium"
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
                <Input
                  placeholder="Enter sleeps"
                  style={{ borderRadius: "10px" }}
                  size="medium"
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
                <Input
                  placeholder="Enter price"
                  style={{ borderRadius: "10px" }}
                  size="medium"
                />
              </Form.Item>

              <Form.Item style={{ textAlign: "right" }}>
                <Button
                  style={{
                    backgroundColor: "var(--primary-color)",
                    color: "var(--white-color)",
                    borderRadius: "10px",
                  }}
                  size="medium"
                  htmlType="submit"
                >
                 <SaveOutlined/>
                 Save
                </Button>
              </Form.Item>
            </Form>
          </Col>

          
        </Row>
      </Space>
    </Layout>
  );
};

export default CreateMenu;
