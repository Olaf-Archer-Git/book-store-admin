import React from "react";
import AdminIntup from "../components/AdminIntup";
import ComponentBtn from "../components/ComponentBtn";
import { RiLockPasswordLine } from "react-icons/ri";

import "../App.css";
import "../style/pageStyle.css";

const ResetPassword = () => {
  return (
    <section className="login">
      <div className="login-container" style={{ background: "#df7760" }}>
        <h3 className="title">Reset Password</h3>
        <p className="small-text">enter email to reset password</p>
        <AdminIntup
          type="password"
          placeholder="new password"
          id="id-resetpassword"
          icon={<RiLockPasswordLine />}
        />
        <AdminIntup
          type="password"
          placeholder="confirm new password"
          id="id-confirmpassword"
          icon={<RiLockPasswordLine />}
        />

        <ComponentBtn type="submit" name="Reset Password" class="reset-btn" />
      </div>
    </section>
  );
};

export default ResetPassword;
