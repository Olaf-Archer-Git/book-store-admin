import React, { useEffect } from "react";
import { Row, Col } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import AdminIntup from "../components/AdminIntup";
import ComponentBtn from "../components/ComponentBtn";
import { useFormik } from "formik";
import * as yup from "yup";
import Dropzone from "react-dropzone";
import { useDispatch, useSelector } from "react-redux";
import { deleteImages, uploadImages } from "../features/upload/uploadSlice";
import { GrClose } from "react-icons/gr";
import {
  createBlog,
  resetState,
  getSingleBlog,
  updateBlog,
} from "../features/blogs/blogSlice";

import "../style/pageStyle.css";

const AddBlog = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const currentBlogID = location.pathname.split("/")[3];

  const imgState = useSelector((state) => state.uploadImg.images);

  useEffect(() => {
    if (currentBlogID !== undefined) {
      dispatch(getSingleBlog(currentBlogID));
    }
    if (currentBlogID === undefined) {
      dispatch(resetState());
    }
  }, [dispatch, currentBlogID]);

  let schema = yup.object().shape({
    title: yup.string().required("Title is Required"),
    description: yup.string().required("Description is Required"),
  });

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      images: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      if (currentBlogID !== undefined) {
        const blogData = { id: currentBlogID, data: values };
        dispatch(updateBlog(blogData));
      }
      if (currentBlogID === undefined) {
        dispatch(createBlog(values));
      }
      setTimeout(() => {
        formik.resetForm();
        navigate("/admin/blog-list");
      }, 2000);
    },
  });

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

  const blogBtnName = currentBlogID !== undefined ? "Edit" : "Add";

  return (
    <>
      <Row style={{ margin: "25px 0" }} gutter={10}>
        <h3 style={{ fontSize: "30px", margin: "20px 0" }}>
          {blogBtnName} Blog
        </h3>
      </Row>

      <form action="" onSubmit={formik.handleSubmit}>
        <Row gutter={[10, 20]}>
          <Col span={16}>
            <AdminIntup
              type="text"
              id="id-title"
              placeholder="blog title"
              name="title"
              onChange={formik.handleChange("title")}
              onBlur={formik.handleBlur("title")}
              value={formik.values.title}
            />
            <div style={{ color: "red" }}>
              {formik.touched.title && formik.errors.title}
            </div>
          </Col>

          <Col span={16}>
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
              <ComponentBtn
                type="submit"
                name={`${blogBtnName} Blog`}
                class="blog-btn"
              />

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

export default AddBlog;
