import React from "react";
import { Button, Col, Form, Input, Row } from "antd";
import axios from "axios";

function AddCustomer() {
  const submitForm = (values) => {
    console.log(values);
    axios
      .post("https://northwind.vercel.app/api/customers", values)
      .then((res) => {
        console.log("res", res.data);
      });
  };
  return (
    <>
      <Form onFinish={submitForm} layout="vertical">
        <Row gutter={24}>
          <Col span={12}>
            <Form.Item
              label="Company Name"
              name="companyName"
              rules={[
                { required: true, message: "Company name boş geçilmez" },
                { min: 3, message: "minimum 3" },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Contact Name" name="contactName">
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <Form.Item label="Contact Title" name="contactTitle">
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Button type="primary" htmlType="submit">
          Add
        </Button>
      </Form>
    </>
  );
}

export default AddCustomer;
