import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import AdminIntup from "../components/AdminIntup";
import ComponentBtn from "../components/ComponentBtn";
import { UserOutlined } from "@ant-design/icons";
import { RiLockPasswordLine } from "react-icons/ri";

import "../App.css";
import "../style/pageStyle.css";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <section className="login">
      <div className="login-container" style={{ background: "#edd9d1" }}>
        <h3 className="title">Login</h3>
        <p className="small-text">login to your account</p>
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
          <AdminIntup
            type="password"
            placeholder="password"
            name="password"
            id="id-password"
            onChange={formik.handleChange("password")}
            value={formik.values.password}
            icon={<RiLockPasswordLine />}
          />

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
