import React from "react";
import "./TeacherInfo.css";
import { Link } from "react-router-dom";

const TeacherInfo = (props) => {
  return (
    <Link
      to={props.to}
      className="info"
      style={{ textDecoration: 'none' }}
    >
      <span className="teacher__info-value my-auto">
        <img src={props.src} alt={props.alt} className="teacher__info-item" />
        {props.value}
      </span>
    </Link>
  );
};

export default TeacherInfo;
