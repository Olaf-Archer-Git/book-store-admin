import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";
import TableComponent from "../components/TableComponent";
import { getBlogs } from "../features/blogs/blogSlice";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

const BlogList = () => {
  const dispatch = useDispatch();
  const blogState = useSelector((state) => state.blog.blogs);

  useEffect(() => {
    dispatch(getBlogs());
  }, [dispatch]);

  const columns = [
    {
      title: "Number",
      dataIndex: "key",
    },
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "Description",
      dataIndex: "description",
    },
    {
      title: "Action",
      dataIndex: "action",
    },
  ];

  const data = [];
  for (let i = 0; i < blogState.length; i++) {
    data.push({
      key: i + 1,
      title: blogState[i].title,
      description: blogState[i].description,
      action: (
        <>
          <Link to={`/admin/blog/${blogState[i]._id}`}>
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
      <h3 style={{ fontSize: "30px", margin: "20px 0" }}>Blog List</h3>
      <Col span={24}>
        <TableComponent columns={columns} data={data} />
      </Col>
    </Row>
  );
};

export default BlogList;
