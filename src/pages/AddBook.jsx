import React, { useState } from "react";
import { Row, Col, message, Upload, Select } from "antd";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import AdminIntup from "../components/AdminIntup";
import ComponentBtn from "../components/ComponentBtn";

import "../style/pageStyle.css";

const AddBook = () => {
  const [value, setValue] = useState("");

  const props = {
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <>
      <Row style={{ margin: "25px 5px" }}>
        <h3 style={{ fontSize: "30px", margin: "20px 0" }}>Add Book</h3>
      </Row>

      <Row gutter={10} style={{ padding: "0 5px" }}>
        <Col span={12}>
          <AdminIntup type="text" id="id-book" placeholder="book title" />
        </Col>

        <Col span={12}>
          <AdminIntup type="text" id="id-author" placeholder="book's author" />
        </Col>
      </Row>

      <Row gutter={10} style={{ margin: "20px 0" }}>
        <Col span={12}>
          <AdminIntup type="number" id="id-price" placeholder="book's price'" />
        </Col>

        <Col span={12}>
          <Select
            defaultValue="Book Category"
            style={{
              width: "100%",
            }}
            options={[
              {
                value: "detective",
                label: "Detective",
              },
              {
                value: "history",
                label: "History",
              },
              {
                value: "novel",
                label: "Novel",
              },
            ]}
          />
        </Col>
      </Row>

      <Row style={{ margin: "10px 5px" }}>
        <Col span={24}>
          <ReactQuill
            theme="snow"
            value={value}
            onChange={(e) => {
              setValue(e);
            }}
            style={{
              height: "100%",
            }}
          />
          <ComponentBtn type="submit" name="Add Book" class="blog-btn" />
          <Upload {...props}>
            <ComponentBtn type="button" name="Add Image" class="blog-btn-img" />
          </Upload>
        </Col>
      </Row>
    </>
  );
};

export default AddBook;
