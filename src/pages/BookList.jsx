import React, { useEffect } from "react";
import { Row, Col } from "antd";
import { useDispatch, useSelector } from "react-redux";
import TableComponent from "../components/TableComponent";
import { getProducts } from "../features/product/productSlice";
import { Link } from "react-router-dom";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

const BookList = () => {
  const dispatch = useDispatch();
  const productState = useSelector((state) => state.product.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const columns = [
    {
      title: "Number",
      dataIndex: "key",
    },
    {
      title: "Title",
      dataIndex: "title",
      sorter: (a, b) => (a.title > b.title ? 1 : -1),
    },
    {
      title: "Author",
      dataIndex: "author",
    },
    {
      title: "Category",
      dataIndex: "category",
    },
    {
      title: "Price",
      dataIndex: "price",
      sorter: (a, b) => (a.price > b.price ? 1 : -1),
    },
    {
      title: "Action",
      dataIndex: "action",
    },
  ];

  const data = [];

  for (let i = 0; i < productState.length; i++) {
    data.push({
      key: i + 1,
      title: productState[i].title,
      author: productState[i].author,
      category: productState[i].category,
      price: `${productState[i].price} €`,
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
      <h3 style={{ fontSize: "30px", margin: "20px" }}>Books List</h3>
      <Col span={24}>
        <TableComponent columns={columns} data={data} />
      </Col>
    </Row>
  );
};

export default BookList;
