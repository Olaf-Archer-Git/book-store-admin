import React, { useState } from "react";
import { Row, Col, Select } from "antd";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import AdminIntup from "../components/AdminIntup";
import ComponentBtn from "../components/ComponentBtn";

import "../style/pageStyle.css";

const AddBlog = () => {
  const [value, setValue] = useState("");

  return (
    <>
      <Row style={{ margin: "25px 0" }} gutter={10}>
        <h3 style={{ fontSize: "30px", margin: "20px" }}>Add Blog</h3>
      </Row>
      <Row gutter={[10, 20]}>
        <Col span={11}>
          <AdminIntup type="text" id="id-title" placeholder="blog title" />
        </Col>
        <Col span={5}>
          <Select
            defaultValue="Blog Category"
            style={{
              width: "100%",
            }}
            options={[
              {
                value: "jack",
                label: "Jack",
              },
              {
                value: "lucy",
                label: "Lucy",
              },
              {
                value: "antony",
                label: "Antony",
              },
            ]}
          />
        </Col>
        <Col span={16}>
          <ReactQuill
            theme="snow"
            value={value}
            onChange={(e) => {
              setValue(e);
            }}
            style={{ height: "150px" }}
          />
          <ComponentBtn type="submit" name="Add Blog" class="blog-btn" />
        </Col>
      </Row>
    </>
  );
};

export default AddBlog;
