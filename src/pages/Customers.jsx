import React, { useEffect } from "react";
import { Row, Col } from "antd";
import TableComponent from "../components/TableComponent";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../features/customers/customerSlice";

const Customers = () => {
  const dispatch = useDispatch();

  const customerState = useSelector((state) => state.customer);

  useEffect(() => {
    dispatch(getUser());
  }, []);

  const columns = [
    {
      title: "Number",
      dataIndex: "key",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Mobile",
      dataIndex: "mobile",
    },
    {
      title: "Status",
      dataIndex: "status",
    },

    {
      title: "Action",
      dataIndex: "action",
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
