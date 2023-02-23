import React from "react";
import { Link } from "react-router-dom";
import AdminIntup from "../components/AdminIntup";
import ComponentBtn from "../components/ComponentBtn";
import { UserOutlined } from "@ant-design/icons";
import { RiLockPasswordLine } from "react-icons/ri";

import "../App.css";
import "../style/pageStyle.css";

const Login = () => {
  return (
    <section className="login">
      <div className="login-container" style={{ background: "#edd9d1" }}>
        <h3 className="title">Login</h3>
        <p className="small-text">login to your account</p>
        <AdminIntup
          type="email"
          placeholder="email"
          id="id-email"
          icon={<UserOutlined />}
        />
        <AdminIntup
          type="password"
          placeholder="password"
          id="id-password"
          icon={<RiLockPasswordLine />}
        />

        <Link to="/admin">
          <ComponentBtn type="submit" name="Login" class="login-btn" />
        </Link>

        <Link to="/forgot" className="small-text">
          forgot the password?
        </Link>
      </div>
    </section>
  );
};

export default Login;
