import { Button, Table, Modal } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ExclamationCircleOutlined } from "@ant-design/icons";
const { confirm } = Modal;

function Customers() {
  const [customers, setcustomers] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    getCustomers();
  }, []);

  const getCustomers = () => {
    axios.get("https://northwind.vercel.app/api/customers").then((res) => {
      setcustomers(res.data);
      setloading(false);
    });
  };

  let columns = [
    {
      title: "Id",
      dataIndex: "id",
    },
    {
      title: "Company Name",
      dataIndex: "companyName",
      sorter: (a, b) => a.companyName.localeCompare(b.companyName),
    },
    {
      title: "Contact Name",
      dataIndex: "contactName",
    },
    {
      title: "Contact Title",
      dataIndex: "contactTitle",
    },
    {
      title: "Delete",
      dataIndex: "id",
      render: (id) => (
        <Button
          type="primary-outline"
          danger
          onClick={() => deleteCustomer(id)}
        >
          Delete
        </Button>
      ),
    },
  ];

  const deleteCustomer = (id) => {
    confirm({
      title: "Silmek istiyor musun?",
      icon: <ExclamationCircleOutlined />,
      content: "Some descriptions",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        setloading(true);
        axios
          .delete(`https://northwind.vercel.app/api/customers/${id}`)
          .then((res) => {
            getCustomers();
          });
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  return (
    <>
      <Table
        bordered={true}
        columns={columns}
        dataSource={customers}
        loading={loading}
      ></Table>
    </>
  );
}

export default Customers;
