import TextField from "@material-ui/core/TextField";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Select from "react-select";
import DragIcon from "../../assests/images/dragicon.svg";
import delete1 from "../../assests/images/icons-8-deleteTableIcon.png";
import delete2x from "../../assests/images/icons-8-deleteTableIcon@2x.png";
import delete3x from "../../assests/images/icons-8-deleteTableIcon@3x.png";
import collapse from "../../assests/images/icons-8-expand-arrow-copy.png";
import collapse2x from "../../assests/images/icons-8-expand-arrow-copy@2x.png";
import collapse3x from "../../assests/images/icons-8-expand-arrow-copy@3x.png";
import expand from "../../assests/images/icons-8-expand-arrowTable.png";
import expand2x from "../../assests/images/icons-8-expand-arrowTable@2x.png";
import expand3x from "../../assests/images/icons-8-expand-arrowTable@3x.png";
import left from "../../assests/images/icons-8-left.png";
import left2x from "../../assests/images/icons-8-left@2x.png";
import left3x from "../../assests/images/icons-8-left@3x.png";
import BaseLayoutWrapper from "../../components/baselayout/BaseLayout";
import { useAppContextState } from "../../services/context";
import "./DayLearning.css";

const dragIcon = (cell, row, rowIndex, formatExtraData) => {
  return <img alt="drg" src={DragIcon} />;
};

const deleteIcon = (cell, row, rowIndex, formatExtraData) => {
  return (
    <img alt="drg" src={delete1} srcSet={`${delete2x} 2x, ${delete3x} 3x`} />
  );
};

const expandRow = {
  renderer: (row) => (
    <div>
      <p>{`This Expand row is belong to rowKey ${row.id}`}</p>
      <p>
        You can render anything here, also you can add additional data on every
        row object
      </p>
      <p>expandRow.renderer callback will pass the origin row object to you</p>
    </div>
  ),
  showExpandColumn: true,
  expandByColumnOnly: true,
  expandColumnPosition: "right",
  expandHeaderColumnRenderer: ({ isAnyExpands }) => {
    if (isAnyExpands) {
      return <b>-</b>;
    }
    return <b>+</b>;
  },
  expandColumnRenderer: ({ expanded }) => {
    if (expanded) {
      return (
        <b>
          <img
            alt="expand"
            src={collapse}
            srcSet={`${collapse2x} 2x, ${collapse3x} 3x`}
          />
        </b>
      );
    }
    return (
      <b>
        {" "}
        <img
          alt="expand"
          src={expand}
          srcSet={`${expand2x} 2x, ${expand3x} 3x`}
        />
      </b>
    );
  },
};

const products = [
  { id: 1, name: "CNB 1", price: 1 },
  { id: 2, name: "CNB 1", price: 2 },
  { id: 3, name: "CNB 1", price: 3 },
  { id: 4, name: "CNB 1", price: 2 },
  { id: 5, name: "CNB 1", price: 1 },
  { id: 6, name: "CNB 1", price: 4 },
  { id: 7, name: "CNB 1", price: 1 },
  { id: 8, name: "CNB 1", price: 3 },
  { id: 9, name: "CNB 1", price: 3 },
];
const columns = [
  {
    dataField: "",
    formatter: dragIcon,
    headerStyle: {
      borderTopLeftRadius: "6px",
      borderBottomLeftRadius: "6px",
    },
  },
  {
    dataField: "id",
    text: "",
  },
  {
    dataField: "name",
    text: "CNB Name",
  },
  {
    dataField: "id",
    text: "Nodes",
  },
  {
    dataField: "id",
    text: "Weightage (%)",
  },
  {
    dataField: "id",
    text: "Min (mins)",
  },
  {
    dataField: "id",
    text: "Max (mins)",
  },
  {
    dataField: "id",
    text: "Study Time (mins)",
  },
  {
    dataField: "id",
    text: "Revision file (mins)",
  },
  {
    dataField: "id",
    formatter: deleteIcon,
  },
];
const defaultSorted = [
  {
    dataField: "name",
    order: "desc",
  },
];

const DayLearning = (props) => {
  const [selectedOption, setselectedOption] = useState("");
  const [date, setDate] = useState(new Date());
  const [appglobal, setAppGlobal] = useAppContextState()

  useEffect(() => {
    appglobal.pagetitle = "Day Learning"
  }, [])

  const onChange = (date) => {
    setDate(date);
    console.log(date);
  };
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const handleChange = (selectedOption) => {
    setselectedOption(selectedOption);
    console.log(`Option selected:`, selectedOption);
  };

  return (
    <BaseLayoutWrapper>
      <Container className="dayLearning__card">
        <Row>
          <Col>
            {" "}
            <div style={{ width: "200px" }}>
              <Select
                value={selectedOption}
                onChange={handleChange}
                options={options}
                placeholder="Study Circle"
              />
            </div>
          </Col>
          <Col>
            <button className="addDay__Learning">+ Add Day Learning</button>
          </Col>
        </Row>
        <Row className="text-left">
          <Col>
            <div className="inputsWrapper__div">
              <Row>
                <Col>
                  {" "}
                  <label className="labels "> Day 1 </label>
                  <p className="information_data">Hello</p>
                </Col>
                <Col>
                  {" "}
                  <label className="labels "> Lastest </label>
                  <p className="information_data">Hello</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  {" "}
                  <label className="labels "> Students </label>
                  <p className="information_data">Hello</p>
                </Col>
                <Col>
                  {" "}
                  <label className="labels "> Day learnings </label>
                  <p className="information_data">Hello</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  {" "}
                  <label className="labels "> Courses </label>
                  <p className="information_data">Hello</p>
                </Col>
                <Col>
                  <p className="information_data">Hello</p>
                </Col>
              </Row>
            </div>
            <Row>
              <Calendar onChange={onChange} value={date} />
            </Row>
          </Col>
          <Col>
            <div className="dayLearningTable_wrapper">
              <BootstrapTable
                bootstrap4
                keyField="id"
                data={products}
                columns={columns}
                defaultSorted={defaultSorted}
                striped
                hover
                condensed
                bordered={false}
                noDataIndication="Table is empty."
                expandRow={expandRow}
              />
              <div className="dayLearning_div float-right">
                <div>
                  <img
                    className="float-left"
                    src={left}
                    srcSet={`${left2x} 2x, ${left3x} 3x`}
                    alt="left"
                  />
                  Push Up
                </div>
                <div style={{ marginBottom: "15px" }}>
                  <img
                    className="float-left"
                    src={left}
                    srcSet={`${left2x} 2x, ${left3x} 3x`}
                    alt="left"
                  />
                  Push Down
                </div>
                <div>
                  <img
                    className="float-left"
                    src={left}
                    srcSet={`${left2x} 2x, ${left3x} 3x`}
                    alt="left"
                  />
                  Push To
                </div>
                <div>
                  <img
                    className="float-left"
                    src={left}
                    srcSet={`${left2x} 2x, ${left3x} 3x`}
                    alt="left"
                  />
                  Edit
                </div>
                <div style={{ marginBottom: "15px" }}>
                  <img
                    className="float-left"
                    src={left}
                    srcSet={`${left2x} 2x, ${left3x} 3x`}
                    alt="left"
                  />
                  Mark no class
                </div>
              </div>
              <div className="d-flex float-right">
                <div className="dayLearning_divText">
                  <img
                    className="float-left"
                    src={left}
                    srcSet={`${left2x} 2x, ${left3x} 3x`}
                    alt="left"
                  />
                  <TextField id="outlined-basic" variant="outlined" />
                  <button>Mark no class</button>
                </div>
                <div className="dayLearning_divText">
                  <img
                    className="float-left"
                    src={left}
                    srcSet={`${left2x} 2x, ${left3x} 3x`}
                    alt="left"
                  />
                  <TextField id="outlined-basic" variant="outlined" />
                  <button>Push</button>
                </div>
              </div>
            </div>
          </Col>
        </Row>{" "}
      </Container>
    </BaseLayoutWrapper>
  );
};

export default DayLearning;
