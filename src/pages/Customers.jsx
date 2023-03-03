import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "antd";
import TableComponent from "../components/TableComponent";
import { getUsers } from "../features/customers/customerSlice";

import "../style/componentStyle.css";

const Customers = () => {
  const dispatch = useDispatch();

  const customerState = useSelector((state) => state.customer.customers);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const columns = [
    {
      title: "ID",
      dataIndex: "key",
    },
    {
      title: "Name",
      dataIndex: "name",
      sorter: (a, b) => (a.name > b.name ? 1 : -1),
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Mobile",
      dataIndex: "mobile",
    },
  ];

  const data = [];
  for (let i = 0; i < customerState.length; i++) {
    if (customerState[i].role !== "admin") {
      data.push({
        key: i + 1,
        name: `${customerState[i].firstName} ${customerState[i].lastName}`,
        email: customerState[i].email,
        mobile: customerState[i].mobile,
      });
    }
  }

  return (
    <Row style={{ margin: "25px 0" }} gutter={10}>
      <h3 style={{ fontSize: "30px", margin: "20px" }}>Customers</h3>
      <Col span={24}>
        <TableComponent columns={columns} data={data} />
      </Col>
    </Row>
  );
};
export default Customers;
