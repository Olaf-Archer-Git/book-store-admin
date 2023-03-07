import React, { useEffect } from "react";
import { Row, Col, message, Upload, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import AdminIntup from "../components/AdminIntup";
import ComponentBtn from "../components/ComponentBtn";
import { useFormik } from "formik";
import * as yup from "yup";
import { getAllCategories } from "../features/category/categorySlice";

import "../style/pageStyle.css";

const AddBook = () => {
  const dispatch = useDispatch();
  const categoryState = useSelector((state) => state.category.categories);

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  let schema = yup.object().shape({
    title: yup.string().required("Title is Required"),
    author: yup.string().required("Author is Required"),
    price: yup.number().required("Price is Required"),
    category: yup.string().required("Category is Required"),
    description: yup.string().required("Description is Required"),
  });

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      author: "",
      price: "",
      category: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });

  const props = {
    onChange(info) {
      if (info.file.status !== "uploading") {
        alert(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  const options = [];

  for (let i = 0; i < categoryState.length; i++) {
    options.push({
      value: categoryState[i].title,
      label: categoryState[i].title,
    });
  }

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
              // mode="multiple"
              defaultValue="Book Categories"
              onChange={formik.handleChange("category")}
              onBlur={formik.handleBlur("category")}
              name="category"
              style={{
                width: "100%",
                height: "auto",
                padding: "10px 0",
              }}
              options={options}
            />
            <div style={{ color: "red" }}>
              {formik.touched.category && formik.errors.category}
            </div>
          </Col>
        </Row>

        <Row style={{ margin: "10px 5px" }}>
          <Col span={24}>
            <ReactQuill
              theme="snow"
              value={formik.values.description}
              name="description"
              onChange={formik.handleChange("description")}
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
