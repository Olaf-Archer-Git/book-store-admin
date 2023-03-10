import React from "react";
import { Input } from "antd";

import "../style/componentStyle.css";

const AdminIntup = ({ type, id, placeholder, icon, name, value, onChange }) => {
  return (
    <Input
      style={{ margin: "5px 0", padding: "8px" }}
      type={type}
      id={id}
      placeholder={placeholder}
      prefix={icon}
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onChange}
    />
  );
};

export default AdminIntup;
