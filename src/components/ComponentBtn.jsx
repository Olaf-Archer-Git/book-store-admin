import React from "react";

const ComponentBtn = (props) => {
  return (
    <button
      className={props.class}
      type={props.type}
      style={{
        padding: "8px 25px",
        borderRadius: "5px",
        fontWeight: "bold",
        textTransform: "capitalize",
      }}
    >
      {props.name}
    </button>
  );
};

export default ComponentBtn;
