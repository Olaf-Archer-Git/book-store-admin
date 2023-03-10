import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "antd";
import AdminIntup from "../components/AdminIntup";
import ComponentBtn from "../components/ComponentBtn";
import { useFormik } from "formik";
import * as yup from "yup";

import "../style/pageStyle.css";

const Discount = () => {
  const dispatch = useDispatch();
  let schema = yup.object().shape({
    name: yup.string().required("Name is Required"),
    expiry: yup.date().required("Expiry Date is Required"),
    coupon: yup.number().required("Coupon Percentage is Required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      expiry: "",
      coupon: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch();
      formik.resetForm();
    },
  });
  return (
    <>
      <Row style={{ margin: "25px 0" }} gutter={10}>
        <h3 style={{ fontSize: "30px", margin: "20px" }}>Add Blog</h3>
      </Row>

      <form action="" onSubmit={formik.handleSubmit}>
        <Row gutter={[10, 20]}>
          <Col span={16}>
            <AdminIntup
              type="text"
              id="id-title"
              placeholder="Name Of Book Discount"
              name="name"
              onChange={formik.handleChange("name")}
              onBlur={formik.handleBlur("name")}
              value={formik.values.name}
            />
            <div style={{ color: "red" }}>
              {formik.touched.name && formik.errors.name}
            </div>
          </Col>

          <Col span={16}>
            <AdminIntup
              type="text"
              id="id-title"
              placeholder="Expiry Of Discount"
              name="expiry"
              onChange={formik.handleChange("expiry")}
              onBlur={formik.handleBlur("expiry")}
              value={formik.values.expiry}
            />
            <div style={{ color: "red" }}>
              {formik.touched.expiry && formik.errors.expiry}
            </div>
          </Col>

          <Col span={16}>
            <AdminIntup
              type="text"
              id="id-title"
              placeholder="coupon"
              name="coupon"
              onChange={formik.handleChange("coupon")}
              onBlur={formik.handleBlur("coupon")}
              value={formik.values.coupon}
            />
            <div style={{ color: "red" }}>
              {formik.touched.coupon && formik.errors.coupon}
            </div>
          </Col>

          <Col span={16}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <ComponentBtn
                type="submit"
                name="Discount"
                class="discount-btn"
              />
            </div>
          </Col>
        </Row>
      </form>
    </>
  );
};

export default Discount;
