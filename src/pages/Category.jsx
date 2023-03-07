import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "antd";
import TableComponent from "../components/TableComponent";
import { Link } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";
import { getAllCategories } from "../features/category/categorySlice";

const Category = () => {
  const dispatch = useDispatch();
  const categoryState = useSelector((state) => state.category.categories);

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  const columns = [
    {
      title: "Number",
      dataIndex: "key",
    },
    {
      title: "Category",
      dataIndex: "category",
    },
    {
      title: "Action",
      dataIndex: "action",
    },
  ];
  const data = [];
  for (let i = 0; i < categoryState.length; i++) {
    data.push({
      key: i + 1,
      category: categoryState[i].title,
      action: (
        <>
          <Link to="#!">
            <AiOutlineDelete style={{ fontSize: "21px" }} title="delete" />
          </Link>
        </>
      ),
    });
  }

  return (
    <Row style={{ margin: "25px 0" }} gutter={10}>
      <h3 style={{ fontSize: "30px", margin: "20px" }}>Categories</h3>
      <Col span={24}>
        <TableComponent columns={columns} data={data} />
      </Col>
    </Row>
  );
};

export default Category;
