import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import AdminIntup from "../components/AdminIntup";
import ComponentBtn from "../components/ComponentBtn";
import { useFormik } from "formik";
import * as yup from "yup";
import Dropzone from "react-dropzone";
import { getAllCategories } from "../features/category/categorySlice";
import { deleteImages, uploadImages } from "../features/upload/uploadSlice";
import { GrClose } from "react-icons/gr";
import { createProduct } from "../features/product/productSlice";

import "../style/pageStyle.css";

const AddBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const categoryState = useSelector((state) => state.category.categories);
  const imgState = useSelector((state) => state.uploadImg.images);

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  const img = [];
  imgState.forEach((element) => {
    img.push({
      public_id: element.public_id,
      url: element.url,
    });
  });

  useEffect(() => {
    formik.values.images = img;
  });

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
      images: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(createProduct(values));
      formik.resetForm();
      setTimeout(() => {
        navigate("/admin/books-list");
      }, 3000);
    },
  });

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
            <div style={{ display: "flex", alignItems: "center" }}>
              <ComponentBtn type="submit" name="Add Book" class="blog-btn" />

              <Dropzone
                onDrop={(acceptedFiles) =>
                  dispatch(uploadImages(acceptedFiles))
                }
                style={{ cursor: "pointer" }}
              >
                {({ getRootProps, getInputProps }) => (
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <p className="upload">Upload Image</p>
                  </div>
                )}
              </Dropzone>
            </div>

            <div>
              {imgState.map((item) => {
                return (
                  <div key={item.public_id} style={{ position: "relative" }}>
                    <GrClose
                      className="upload-btn"
                      onClick={() => {
                        dispatch(deleteImages(item.public_id));
                      }}
                    />
                    <img className="upload-img" src={item.url} alt="#!" />
                  </div>
                );
              })}
            </div>
          </Col>
        </Row>
      </form>
    </>
  );
};

export default AddBook;
