import React from "react";
import { Typography, Space, Button, Form } from "antd";
import Layout from "antd/lib/layout/layout";
import { SaveOutlined } from "@ant-design/icons";
import UploadImages from "./UploadImages";
import TextArea from "antd/lib/input/TextArea";
const { Title } = Typography;

const CreateHotelProfile = () => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    // await dispatch(createExpenseName(values));
  };

  return (
    <Layout style={{ margin: "20px 40px" }}>
      <Space direction="vertical" size="middle">
        <Title level={4}>Upload Photos</Title>
        <UploadImages />
        <Title level={4}>Add Description</Title>
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
            rules={[
              {
                required: true,
                message: "Please enter description",
              },
            ]}
          >
            <TextArea rows={5} placeholder="Enter description" />
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
              <SaveOutlined />
              Save
            </Button>
          </Form.Item>
        </Form>
      </Space>
    </Layout>
  );
};

export default CreateHotelProfile;
