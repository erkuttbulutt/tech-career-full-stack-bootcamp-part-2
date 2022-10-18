import { Form, Row, Col, Select, Input, Checkbox, Button, message } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
const { Option } = Select;

function AddProduct() {
  const [categories, setcategories] = useState([]);
  const [suppliers, setsuppliers] = useState([]);

  const [form] = Form.useForm();

  useEffect(() => {
    axios
      .get("https://northwind.vercel.app/api/categories")
      .then((res) => setcategories(res.data));
    axios
      .get("https://northwind.vercel.app/api/suppliers")
      .then((res) => setsuppliers(res.data));
  }, []);

  const submit = (values) => {
    console.log("Values: ", values);
    axios
      .post("https://northwind.vercel.app/api/products", values)
      .then((res) => {
        console.log("success");
        form.resetFields()
        message.success("Başarılı");
      });
  };

  return (
    <>
      <Form onFinish={submit} form={form}>
        <Row gutter={24}>
          <Col span={12}>
            <Form.Item name="categoryId" label="Categories">
              <Select defaultValue="Lütfen bir kategori seçin">
                {categories.map((item) => {
                  return (
                    <Option key={item.id} value={item.id}>
                      {item.name}
                    </Option>
                  );
                })}
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="supplierId" label="Supplier">
              <Select defaultValue="Lütfen bir supplier seçin">
                {suppliers.map((item) => {
                  return (
                    <Option key={item.id} value={item.id}>
                      {item.companyName}
                    </Option>
                  );
                })}
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={12}>
            <Form.Item label="Product Name" name="productName">
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Unit Price" name="unitPrice">
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Item name="discontiuned" valuePropName="checked">
              <Checkbox>Discontiuned</Checkbox>
            </Form.Item>
          </Col>
        </Row>
        <Button type="primary" htmlType="submit">
          OK
        </Button>
      </Form>
    </>
  );
}

export default AddProduct;
