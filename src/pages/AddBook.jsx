import React, { useState } from "react";
import { Row, Col, message, Upload, Select } from "antd";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import AdminIntup from "../components/AdminIntup";
import ComponentBtn from "../components/ComponentBtn";
import { useFormik } from "formik";
import * as yup from "yup";

import "../style/pageStyle.css";

const AddBook = () => {
  const [value, setValue] = useState("");

  let schema = yup.object().shape({
    title: yup.string().required("Title is Required"),
    author: yup.string().required("Author is Required"),
    price: yup.number().required("Price is Required"),
    description: yup.string().required("Description is Required"),
  });

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      author: "",
      price: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });

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

      <form action="" onSubmit={formik.handleSubmit}>
        <Row gutter={10} style={{ padding: "0 5px" }}>
          <Col span={12}>
            <AdminIntup
              type="text"
              id="id-book"
              placeholder="book title"
              name="title"
              onChange={formik.handleChange("title")}
              onBlur={formik.handleBlur("title")}
              value={formik.values.title}
            />
            <div style={{ color: "red" }}>
              {formik.touched.title && formik.errors.title}
            </div>
          </Col>

          <Col span={12}>
            <AdminIntup
              type="text"
              id="id-author"
              placeholder="book's author"
              name="author"
              onChange={formik.handleChange("author")}
              onBlur={formik.handleBlur("author")}
              value={formik.values.author}
            />
            <div style={{ color: "red" }}>
              {formik.touched.author && formik.errors.author}
            </div>
          </Col>
        </Row>

        <Row gutter={10} style={{ margin: "20px 0" }}>
          <Col span={12}>
            <AdminIntup
              type="number"
              id="id-price"
              placeholder="book's price"
              name="price"
              onChange={formik.handleChange("price")}
              onBlur={formik.handleBlur("price")}
              value={formik.values.price}
            />
            <div style={{ color: "red" }}>
              {formik.touched.price && formik.errors.price}
            </div>
          </Col>

          <Col span={12}>
            <Select
              defaultValue="Book Category"
              style={{
                width: "100%",
                height: "auto",
                padding: "10px 0",
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
              value={formik.values.description}
              name="description"
              onChange={formik.handleChange("description")}
              onBlur={formik.handleBlur("description")}
              style={{
                height: "200px",
              }}
            />
            <div style={{ color: "red" }}>
              {formik.touched.description && formik.errors.description}
            </div>
            <ComponentBtn type="submit" name="Add Book" class="blog-btn" />
            <Upload {...props}>
              <ComponentBtn
                type="button"
                name="Add Image"
                class="blog-btn-img"
              />
            </Upload>
          </Col>
        </Row>
      </form>
    </>
  );
};

export default AddBook;
