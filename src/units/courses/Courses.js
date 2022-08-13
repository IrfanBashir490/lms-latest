import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import { Link, useHistory } from "react-router-dom";
import circle from "../../assests/images/circle.png";
import circle2x from "../../assests/images/circle@2x.png";
import circle3x from "../../assests/images/circle@3x.png";
import DragIcon from "../../assests/images/dragicon.svg";
import left from "../../assests/images/icons-8-left.png";
import left2x from "../../assests/images/icons-8-left@2x.png";
import left3x from "../../assests/images/icons-8-left@3x.png";
import women from "../../assests/images/icons-8-women-age-group-3-filled-copy.png";
import women2x from "../../assests/images/icons-8-women-age-group-3-filled-copy@2x.png";
import women3x from "../../assests/images/icons-8-women-age-group-3-filled-copy@3x.png";
import BaseLayoutWrapper from "../../components/baselayout/BaseLayout";
import { useAppContextState } from "../../services/context";
import { CourseService } from "../../services/course-service";
import CourseDropdown from "./CourseDropdown";
import "./Courses.css";


const CreateList = (props) => {

  /************************************** */
  //STATES
  /*************************************** */
  const history = useHistory();
  const [appglobal, setAppGlobal] = useAppContextState();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    appglobal.pagetitle = "Course List";
    CourseService.getAll(1, 10).then((res) => setCourses(res));
    console.log(courses);
  }, []);

  const dragIcon = (cell, row, rowIndex, formatExtraData) => {
    return <img alt="drg" src={DragIcon} />;
  };

  const indexer = (cell, row, rowIndex, formatExtraData) => {
    return <span>{rowIndex + 1}</span>;
  };

  const thumbnail = (cell, row, rowIndex, formatExtraData) => {
    return (
      <img
        alt="thumbnail"
        src={courses[rowIndex].thumbnail.url}
        width={22}
        height={22}
        style={{ borderRadius: "4px" }}
      />
    );
  };

  const circleIcon = (column, colIndex) => {
    return (
      <img alt="drg" src={circle} srcSet={`${circle2x} 2x, ${circle3x} 3x`} />
    );
  };

  const womenIcon = (column, colIndex) => {
    return (
      <img alt="drg" src={women} srcSet={`${women2x} 2x, ${women3x} 3x`} />
    );
  };

  const columns = [
    {
      dataField: "",
      formatter: dragIcon,
    },
    {
      dataField: "",
      formatter: thumbnail,
    },
    {
      dataField: "",
      text: "Sr.",
      formatter: indexer,
    },
    {
      dataField: "dName",
      text: "Display Name",
    },
    {
      dataField: "name",
      text: "Course Name",
    },
    {
      dataField: "subjectsNo",
      text: "Subjects",
    },
    {
      dataField: "uid.fName",
      text: "Created by",
    },
    {
      dataField: "contentsNo",
      text: "Contents",
    },
    {
      dataField: "name",
      text: "Derived Course",
    },
    {
      dataField: "scNo",
      headerFormatter: circleIcon,
    },
    {
      dataField: "studentsNo",
      headerFormatter: womenIcon,
    },
  ]

  const defaultSorted = [
    {
      dataField: "name",
      order: "desc",
    },
  ]

  /************************************************** */
  // EVENTS
  /************************************************** */

  return (
    <BaseLayoutWrapper>
      <Container className="mw-100">
        <div className="createList_wrapper card-body">
          <img
            className="leftArrow"
            src={left}
            srcSet={`${left2x} 2x, ${left3x} 3x`}
            alt="left"
            onClick={history.goBack}
          />
          <span className="course_title">Course List</span>
          <Link to="create">
            <button className="addCourse">+ Add Course</button>
          </Link>
          <CourseDropdown />
          {courses ? (
            <div className="pr-3 mt-4">
              <BootstrapTable
                bootstrap4
                id="course_boot_table"
                keyField="id"
                data={courses}
                columns={columns}
                defaultSorted={defaultSorted}
                striped
                hover
                condensed
                bordered={false}
                noDataIndication="Table is empty."
              />
            </div>
          ) : null}
        </div>
      </Container>
    </BaseLayoutWrapper>
  );
};

export default CreateList;
