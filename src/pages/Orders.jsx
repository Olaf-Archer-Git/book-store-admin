import React, { useEffect } from "react";
import { Row, Col } from "antd";
import { useDispatch, useSelector } from "react-redux";
import TableComponent from "../components/TableComponent";
import { Link } from "react-router-dom";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { getAllOrders } from "../features/order/orderSlice";

const Orders = () => {
  const dispatch = useDispatch();
  const orderState = useSelector((state) => state.order.orders);

  useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch]);

  const columns = [
    {
      title: "Number",
      dataIndex: "key",
    },
    {
      title: "Ordered By",
      dataIndex: "name",
    },
    {
      title: "Product",
      dataIndex: "product",
    },
    {
      title: "Total Price",
      dataIndex: "price",
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
  for (let i = 0; i < orderState.length; i++) {
    data.push({
      key: i + 1,
      name: `${orderState[i].orderBy?.firstName} ${orderState[i].orderBy?.lastName}`,
      product: orderState[i].products[0]?.product.title,
      price: orderState[i].paymentIntent?.cost,
      status: orderState[i].paymentIntent.status,
      action: (
        <>
          <Link to="#!">
            <AiOutlineEdit
              style={{ fontSize: "21px", marginRight: "10px" }}
              title="edit"
            />
          </Link>
          <Link to="#!">
            <AiOutlineDelete style={{ fontSize: "21px" }} title="delete" />
          </Link>
        </>
      ),
    });
  }

  return (
    <Row style={{ margin: "25px 0" }} gutter={10}>
      <h3 style={{ fontSize: "30px", margin: "20px" }}>Orders</h3>
      <Col span={24}>
        <TableComponent columns={columns} data={data} />
      </Col>
    </Row>
  );
};

export default Orders;
