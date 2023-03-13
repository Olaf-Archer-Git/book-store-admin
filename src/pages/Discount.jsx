import { React, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Row, Col } from "antd";
import AdminIntup from "../components/AdminIntup";
import ComponentBtn from "../components/ComponentBtn";
import { useFormik } from "formik";
import * as yup from "yup";
import {
  getAllDiscounts,
  createDiscount,
} from "../features/discount/discountSlice";
import "../style/pageStyle.css";

const Discount = () => {
  const dispatch = useDispatch();
  // const discountState = useSelector((state) => state.discount.discounts);
  let schema = yup.object().shape({
    name: yup.string().required("Name is Required"),
    expiry: yup.date().required("Expiry Date is Required"),
    discount: yup.number().required("Discount Percentage is Required"),
  });

  useEffect(() => {
    dispatch(getAllDiscounts());
  }, [dispatch]);

  const formik = useFormik({
    initialValues: {
      name: "",
      expiry: "",
      discount: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(createDiscount(values));
      // formik.resetForm();
    },
  });
  return (
    <>
      <Row style={{ margin: "25px 0" }} gutter={10}>
        <h3 style={{ fontSize: "30px", margin: "20px" }}>Discount</h3>
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
              type="date"
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
              type="number"
              id="id-title"
              placeholder="discount"
              name="discount"
              onChange={formik.handleChange("discount")}
              onBlur={formik.handleBlur("discount")}
              value={formik.values.discount}
            />
            <div style={{ color: "red" }}>
              {formik.touched.discount && formik.errors.discount}
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
