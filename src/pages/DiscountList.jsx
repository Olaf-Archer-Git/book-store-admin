import React, { useEffect } from "react";
import { Row, Col } from "antd";
import { useDispatch, useSelector } from "react-redux";
import TableComponent from "../components/TableComponent";
import { Link } from "react-router-dom";
import { getAllDiscounts } from "../features/discount/discountSlice";
import { AiOutlineDelete } from "react-icons/ai";

const DiscountList = () => {
  const dispatch = useDispatch();
  const discountState = useSelector((state) => state.discount.discounts);

  useEffect(() => {
    dispatch(getAllDiscounts());
  }, [dispatch]);

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
      title: "Expiry",
      dataIndex: "expiry",
    },
    {
      title: "Discount ",
      dataIndex: "discount",
    },
    {
      title: "Action",
      dataIndex: "action",
    },
  ];

  const data = [];
  for (let i = 0; i < discountState.length; i++) {
    data.push({
      key: i + 1,
      name: discountState[i].name,
      expiry: discountState[i].expiry,
      discount: discountState[i].discount,
      action: (
        <Link to="#!">
          <AiOutlineDelete style={{ fontSize: "21px" }} title="delete" />
        </Link>
      ),
    });
  }

  return (
    <Row style={{ margin: "25px 0" }} gutter={10}>
      <h3 style={{ fontSize: "30px", margin: "20px 0" }}>Discounts</h3>
      <Col span={24}>
        <TableComponent columns={columns} data={data} />
      </Col>
    </Row>
  );
};

export default DiscountList;
