import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import icon_cinema from "../../assests/images/icons-8-cinema-film-play.svg";
import icon_question from "../../assests/images/icons-8-question.svg";
import icon_namaste from "../../assests/images/icons-8-namaste.svg";
import icon_student from "../../assests/images/icons-8-student.svg";
import Avatar from "../avatar/Avatar";
import "./HeaderContent.css";
import TeacherInfo from "./TeacherInfo";
import { TeacherService } from "../../services/teacher-service";

const HeaderContent = (props) => {

  const [avatar, setAvatar] = useState()
  const [name, setName] = useState()
  const [designation, setDesignation] = useState()

  useEffect(() => {
    TeacherService.getCurrentTeacher().then(res => {
      setAvatar(res.uid.avatar.url)
      setName(res.dName)
      setDesignation(res.designation)
    })
  }, [])

  return (
    <div className="teacher-item__content">
      <Link to={`/profile/${props.role}`} style={{ textDecoration: "none" }}>
        <div className="user-item__image">
          <Avatar
            image={avatar}
            alt={props.name}
            width="80px"
            height="80px"
            border="solid 4px #ffffff"
            to={`/profile/${props.role}`}
          />
        </div>
        <h2 className="teacher__name">{name}</h2>
        <h4 className="teacher__subject">{designation}</h4>
        <div className="teacher__info">
          <TeacherInfo
            to="/content"
            src={icon_cinema}
            alt="content"
            value="448"
          />
          <div className="teacher__info_gap"></div>
          <TeacherInfo
            to="/interaction"
            src={icon_question}
            alt="content"
            value="122"
          />
        </div>
        <div className="teacher__info">
          <TeacherInfo
            to="/course"
            src={icon_namaste}
            alt="content"
            value="45"
          />
          <div className="teacher__info_gap"></div>
          <TeacherInfo to="#" src={icon_student} alt="content" value="626" />
        </div>
      </Link>
    </div>
  );
};

export default HeaderContent;
