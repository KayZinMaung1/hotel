import React, { useCallback, useEffect, useState } from "react";
import { Typography, Space, Button, Form, message, Input, Spin } from "antd";
import Layout from "antd/lib/layout/layout";
import { SaveOutlined } from "@ant-design/icons";
import UploadImages from "./UploadImages";
import TextArea from "antd/lib/input/TextArea";
import { collection, addDoc, query, where, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { createSuccess } from "../../utils/messages";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

const CreateHotelProfile = () => {
  const [form] = Form.useForm();
  const [imageList, setImageList] = useState([]);
  const [uid, setUid] = useState();
  const [user] = useState();
  const auth = getAuth();
  const [hotelId, setHotelId] = useState();
  const [hotel, setHotel] = useState();
  const [isSuccess, setIsSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUid(user.uid)
      }
    });
  }, [auth, user]);
  console.log("uid: ", uid)

  useEffect(() => {
    if (isSuccess) {
      message.success(createSuccess)
      fetchHotelId();
    }
  }, [isSuccess])

  console.log("Hotel id: ", hotelId)
  useEffect(() => {
    if (hotelId !== undefined) {
      navigate(`/admin/hotels/${hotelId}`);
    }
  }, [hotelId])

  // const tokenHotelId = localStorage.getItem(`${uid}`);
  // useEffect(() => {
  //   if (localStorage.getItem(`${uid}`)) {
     
  //     navigate(`/admin/hotels/${tokenHotelId}`)
  //   }
  //   else {
  //     navigate("/admin/create-hotel-profile");
  //   }
  // },[tokenHotelId])

  // useEffect(() => {
  //   fetchData()
  // }, [fetchData]);
  // // console.log("Hotel Details: ", hotel)

  const fetchHotelId = async () => {
    try {
      const q = query(collection(db, "hotels"), where("uid", "==", uid));
      const doc = await getDocs(q);
      const id = doc.docs[0].id;
      setHotelId(id);
    } catch (err) {
      console.error(err);
    }
  };

  const onFinish = async (values) => {
    setLoading(true);
    const data = {
      ...values,
      imageList,
      uid
    };

    try {
      await addDoc(collection(db, "hotels"), data);
      setIsSuccess(true);
    } catch (e) {
      console.error("Error adding document: ", e);
    }

    setLoading(false);
  };

  return (
    <Spin spinning={loading}>
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
            name="name"
            rules={[
              {
                required: true,
                message: "Please enter name",
              },
            ]}
          >
            <Input
              placeholder="Enter name"
              style={{ borderRadius: "10px" }}
              size="large"
            />
          </Form.Item>
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
    </Spin>
   
  );
};

export default CreateHotelProfile;
