import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { login } from "../features/auth/authSlice";
import AdminIntup from "../components/AdminIntup";
import ComponentBtn from "../components/ComponentBtn";
import { UserOutlined } from "@ant-design/icons";
import { RiLockPasswordLine } from "react-icons/ri";

import "../App.css";
import "../style/pageStyle.css";

const Login = () => {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  const navigate = useNavigate();

  let schema = yup.object().shape({
    email: yup
      .string()
      .email("Email should be valid")
      .required("Email is Required"),
    password: yup
      .string()
      .required("Password is Required")
      .min(5, "Must Contain At Least 5 Characters"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(login(values));
    },
  });

  const { user, isError, isSuccess, isLoading, message } = authState;

  useEffect(() => {
    isSuccess ? navigate("admin") : navigate("");
  }, [user, isError, isSuccess, isLoading, navigate]);

  return (
    <section className="login">
      <div className="login-container" style={{ background: "#edd9d1" }}>
        <h3 className="title">Login</h3>
        <p className="small-text">login to your account</p>
        <div className="input-error">
          {message.message === "Rejected" ? "You Are Not An Admin" : " "}
        </div>
        <form action="" onSubmit={formik.handleSubmit}>
          <AdminIntup
            type="email"
            placeholder="email"
            name="email"
            id="id-email"
            onChange={formik.handleChange("email")}
            value={formik.values.email}
            icon={<UserOutlined />}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="input-error">{formik.errors.email}</div>
          ) : null}
          <AdminIntup
            type="password"
            placeholder="password"
            name="password"
            id="id-password"
            onChange={formik.handleChange("password")}
            value={formik.values.password}
            icon={<RiLockPasswordLine />}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="input-error">{formik.errors.password}</div>
          ) : null}

          <ComponentBtn type="submit" name="Login" class="login-btn" />

          <Link to="/forgot" className="small-text">
            forgot the password?
          </Link>
        </form>
      </div>
    </section>
  );
};

export default Login;
