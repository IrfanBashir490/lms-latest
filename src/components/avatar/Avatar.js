import React from "react";

import "./Avatar.css";
import { Link } from "react-router-dom";

const Avatar = (props) => {
  return (
    <Link
      to={props.to}
      className={`avatar ${props.className}`}
      style={props.style}
    >
      <img
        src={props.image}
        alt={props.alt}
        style={{
          width: props.width,
          height: props.width,
          border: props.border,
        }}
      />
    </Link>
  );
};

export default Avatar;
