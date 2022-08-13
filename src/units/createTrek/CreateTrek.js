import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TextField from "@material-ui/core/TextField";
import { useHistory } from "react-router-dom";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import RemoveIcon from "@material-ui/icons/Remove";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

import DragIcon from "../../assests/images/dragicon.svg";
import BaseLayoutWrapper from "../../components/baselayout/BaseLayout";
import left from "../../assests/images/icons-8-leftRed.png";
import left2x from "../../assests/images/icons-8-leftRed@2x.png";
import left3x from "../../assests/images/icons-8-leftRed@3x.png";
import Play from "../../assests/images/icons-8-play.png";
import Play2x from "../../assests/images/icons-8-play@2x.png";
import Play3x from "../../assests/images/icons-8-play@3x.png";
import delete1 from "../../assests/images/icons-8-deleteTableIcon.png";
import delete2x from "../../assests/images/icons-8-deleteTableIcon@2x.png";
import delete3x from "../../assests/images/icons-8-deleteTableIcon@3x.png";
import expand from "../../assests/images/icons-8-expand-arrowTable.png";
import expand2x from "../../assests/images/icons-8-expand-arrowTable@2x.png";
import expand3x from "../../assests/images/icons-8-expand-arrowTable@3x.png";
import collapse from "../../assests/images/icons-8-expand-arrow-copy.png";
import collapse2x from "../../assests/images/icons-8-expand-arrow-copy@2x.png";
import collapse3x from "../../assests/images/icons-8-expand-arrow-copy@3x.png";
import accordianArrow from "../../assests/images/icons-8-expand-arrow-copyAccordian.png";
import accordianArrow2x from "../../assests/images/icons-8-expand-arrow-copyAccordian@2x.png";
import accordianArrow3x from "../../assests/images/icons-8-expand-arrow-copyAccordian@3x.png";
import "./CreateTrek.css";
import { useAppContextState } from "../../services/context";

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

const CreateTrek = (props) => {
  
  const history = useHistory()
  const [appglobal, setAppGlobal] = useAppContextState()

  useEffect(() => {
    appglobal.pagetitle = "Create Trek"
  }, [])

  return (
    <BaseLayoutWrapper>
      <Container className="create-_trek__card">
        <Row className="mt-4" style={{ marginLeft: "5px" }}>
          <img
            className="arrowstyle"
            src={left}
            srcSet={`${left2x} 2x, ${left3x} 3x`}
            alt="left"
            onClick={history.goBack}
          />
          <span className="trekHeading">My Study Circle</span>
        </Row>
        <hr className="line" />
        <div className="trek_wrapper">
          <Row className="text-left ">
            <Col className="d-flex ">
              <div style={{ flex: "1" }}>
                <label className="labels d-block"> Trek Display Name </label>
                <TextField id="standard-basic" />
              </div>
              <div style={{ flex: "1" }}>
                <label className="labels d-block">Description</label>
                <TextField id="standard-basic" />
              </div>
            </Col>
            <Col className="d-flex ml-4">
              <div>
                <label className="labels d-block">Subject</label>
              </div>
              <div style={{ marginLeft: "111px" }}>
                <label className="labels d-block">Topic Name</label>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="accordian_wrapper">
                <Accordion className="accordian_header" defaultExpanded>
                  <AccordionSummary
                    expandIcon={<RemoveIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>Concept - 26</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <FormControlLabel
                      aria-label="Acknowledge"
                      onClick={(event) => event.stopPropagation()}
                      onFocus={(event) => event.stopPropagation()}
                      control={<Checkbox />}
                      className="my-auto"
                    />
                    <Typography
                      style={{ fontSize: "12px", color: "#8f84b7" }}
                      className="my-auto"
                    >
                      Concept
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <FormControlLabel
                      aria-label="Acknowledge"
                      onClick={(event) => event.stopPropagation()}
                      onFocus={(event) => event.stopPropagation()}
                      control={<Checkbox />}
                      className="my-auto"
                    />
                    <div>
                      <Typography>Life Processes</Typography>
                      <Typography
                        style={{ fontSize: "12px", color: "#7eaa70" }}
                      >
                        CNB 2,CNB 5, CNB 6
                      </Typography>
                    </div>
                  </AccordionDetails>
                  <AccordionDetails>
                    <FormControlLabel
                      aria-label="Acknowledge"
                      onClick={(event) => event.stopPropagation()}
                      onFocus={(event) => event.stopPropagation()}
                      control={<Checkbox />}
                      className="my-auto"
                    />
                    <Typography>Control and Coordination</Typography>
                    <Typography>CNB 1</Typography>
                  </AccordionDetails>{" "}
                  <AccordionDetails>
                    <FormControlLabel
                      aria-label="Acknowledge"
                      onClick={(event) => event.stopPropagation()}
                      onFocus={(event) => event.stopPropagation()}
                      control={<Checkbox />}
                      className="my-auto"
                    />
                    <Typography>Life Processes</Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion className="accordian_header">
                  <AccordionSummary
                    expandIcon={<RemoveIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>Questions - 154</Typography>
                    <Typography style={{ marginLeft: "192px" }}>
                      All Objectives{" "}
                      <img
                        alt="drg"
                        src={accordianArrow}
                        srcSet={`${accordianArrow2x} 2x, ${accordianArrow3x} 3x`}
                        style={{ marginLeft: "10px" }}
                      />
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <FormControlLabel
                      aria-label="Acknowledge"
                      onClick={(event) => event.stopPropagation()}
                      onFocus={(event) => event.stopPropagation()}
                      control={<Checkbox />}
                      className="my-auto"
                    />
                    <Typography>concept</Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <FormControlLabel
                      aria-label="Acknowledge"
                      onClick={(event) => event.stopPropagation()}
                      onFocus={(event) => event.stopPropagation()}
                      control={<Checkbox />}
                      className="my-auto"
                    />
                    <Typography>concept</Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <FormControlLabel
                      aria-label="Acknowledge"
                      onClick={(event) => event.stopPropagation()}
                      onFocus={(event) => event.stopPropagation()}
                      control={<Checkbox />}
                      className="my-auto"
                    />
                    <Typography>concept</Typography>
                  </AccordionDetails>{" "}
                  <AccordionDetails>
                    <FormControlLabel
                      aria-label="Acknowledge"
                      onClick={(event) => event.stopPropagation()}
                      onFocus={(event) => event.stopPropagation()}
                      control={<Checkbox />}
                      className="my-auto"
                    />
                    <Typography>concept</Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion className="accordian_header">
                  <AccordionSummary
                    expandIcon={<RemoveIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>Content - 324</Typography>
                    <Typography style={{ marginLeft: "202px" }}>
                      All Objectives{" "}
                      <img
                        alt="drg"
                        src={accordianArrow}
                        srcSet={`${accordianArrow2x} 2x, ${accordianArrow3x} 3x`}
                        style={{ marginLeft: "10px" }}
                      />
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <FormControlLabel
                      aria-label="Acknowledge"
                      onClick={(event) => event.stopPropagation()}
                      onFocus={(event) => event.stopPropagation()}
                      control={<Checkbox />}
                      className="my-auto"
                    />
                    <Typography>concept</Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <FormControlLabel
                      aria-label="Acknowledge"
                      onClick={(event) => event.stopPropagation()}
                      onFocus={(event) => event.stopPropagation()}
                      control={<Checkbox />}
                      className="my-auto"
                    />
                    <Typography>concept</Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <FormControlLabel
                      aria-label="Acknowledge"
                      onClick={(event) => event.stopPropagation()}
                      onFocus={(event) => event.stopPropagation()}
                      control={<Checkbox />}
                      className="my-auto"
                    />
                    <Typography>Life Processes</Typography>
                    <Typography>CNB 2,CNB 5, CNB 6</Typography>
                  </AccordionDetails>{" "}
                  <AccordionDetails>
                    <FormControlLabel
                      aria-label="Acknowledge"
                      onClick={(event) => event.stopPropagation()}
                      onFocus={(event) => event.stopPropagation()}
                      control={<Checkbox />}
                      className="my-auto"
                    />
                    <Typography>concept</Typography>
                  </AccordionDetails>
                </Accordion>

                <hr className="line" />
                <Row>
                  <Col>
                    <button className="create_CNB_advanced">
                      + Create CNB (Advanced)
                    </button>
                    <button className="create_CNB_quick">
                      + Create CNB (Quick)
                    </button>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col>
              <div className="table_wrapper ">
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
                <hr className="line" />
                <div className="table_footer_content">
                  Total
                  <div className="timer_div">40 min</div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "#747373",
                      marginLeft: "18px",
                      paddingTop: "5px",
                    }}
                  >
                    58min
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "#747373",
                      marginLeft: "18px",
                      paddingTop: "5px",
                    }}
                  >
                    67min
                  </div>
                  <div className="timer_div" style={{ marginLeft: "18px" }}>
                    67min
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "#747373",
                      marginLeft: "18px",
                      paddingTop: "5px",
                    }}
                  >
                    17min
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <hr className="line" />
        <div className="d-flex">
          <div className=" text-left" style={{ flex: "1" }}>
            <button className="cancel_button">Cancel</button>
          </div>
          <div className="d-flex">
            <div className=" text-right position-relative">
              <button className="create__button">Preview</button>
              <img
                className="playIcon"
                src={Play}
                srcSet={`${Play2x} 2x, ${Play3x} 3x`}
                alt="left"
                onClick={history.goBack}
              />
            </div>
            <div className=" text-right">
              <button className="create__button">Save Trek</button>
            </div>
          </div>
        </div>
      </Container>
    </BaseLayoutWrapper>
  );
};

export default CreateTrek;
