import React from "react";
import { Input } from "antd";

import "../style/componentStyle.css";

const AdminIntup = ({ type, id, placeholder, icon }) => {
  return (
    <div className="admin-input">
      <Input type={type} id={id} placeholder={placeholder} prefix={icon} />
    </div>
  );
};

export default AdminIntup;
