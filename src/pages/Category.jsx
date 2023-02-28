import React from "react";
import { Row, Col } from "antd";
import AdminIntup from "../components/AdminIntup";
import ComponentBtn from "../components/ComponentBtn";

const Category = () => {
  return (
    <>
      <Row style={{ margin: "25px 0" }}>
        <h3 style={{ fontSize: "30px", margin: "20px 0" }}>Add Category</h3>
      </Row>

      <Row>
        <Col span={18}>
          <AdminIntup
            type="text"
            id="id-category"
            placeholder="category title"
          />
        </Col>
        <Col span={18}>
          <ComponentBtn type="submit" name="Add Category" class="blog-btn" />
        </Col>
      </Row>
    </>
  );
};

export default Category;
