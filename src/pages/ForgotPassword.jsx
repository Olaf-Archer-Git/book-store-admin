import React from "react";
import AdminIntup from "../components/AdminIntup";
import ComponentBtn from "../components/ComponentBtn";
import { UserOutlined } from "@ant-design/icons";

import "../App.css";
import "../style/pageStyle.css";

const ForgotPassword = () => {
  return (
    <section className="login">
      <div className="login-container" style={{ background: "#bfa9da" }}>
        <h3 className="title">Forgot Password</h3>
        <p className="small-text">enter email to reset password</p>
        <AdminIntup
          type="email"
          placeholder="email"
          id="id-forgotpassword"
          icon={<UserOutlined />}
        />

        <ComponentBtn type="submit" name="Send Link" class="login-btn" />
      </div>
    </section>
  );
};

export default ForgotPassword;
