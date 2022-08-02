import React, { useEffect, useState } from "react";
import { Typography, Space, Button, Form , message} from "antd";
import Layout from "antd/lib/layout/layout";
import { SaveOutlined } from "@ant-design/icons";
import UploadImages from "./UploadImages";
import TextArea from "antd/lib/input/TextArea";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { createSuccess } from "../../utils/messages";
import { getAuth, onAuthStateChanged } from "firebase/auth";


const { Title } = Typography;

const CreateHotelProfile = () => {
  const [form] = Form.useForm();
  const [imageList, setImageList] = useState([]);
  const [uid, setUid] = useState();
  const [user, setUser] = useState();
  const auth = getAuth();
  
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUid(user.uid)
      }
    });
  }, [auth, user]);
  console.log("uid: ", uid)


  const onFinish = async (values) => {
    const data = {
      ...values,
      imageList,
      uid
    };

    try {
      const docRef = await addDoc(collection(db, "hotels"), data);
      message.success(createSuccess);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <Layout style={{ margin: "20px 40px" }}>
      <Space direction="vertical" size="middle">
        <Title level={4}>Upload Photos</Title>
        <UploadImages imageList={imageList} setImageList={setImageList} />
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
            name="description"
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
