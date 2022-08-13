import { Radio } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { Multiselect } from "multiselect-react-dropdown";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { Col, Row } from "react-bootstrap";
import left from "../../../assests/images/icons-8-left.png";
import left2x from "../../../assests/images/icons-8-left@2x.png";
import left3x from "../../../assests/images/icons-8-left@3x.png";
import loading from "../../../assests/images/loading.png";
import BaseLayoutWrapper from "../../../components/baselayout/BaseLayout";
import { useAppContextState } from "../../../services/context";
import AdvancedModal from "./AdvancedModal";
import "./ContentUpload.css";
import { useHistory } from "react-router-dom";

const FileUploadContent = (props) => {
  return (
    <Fragment>
      <div className="uploading_file">
        <span className="fileadj">
          <img src={loading} alt="loading" />
        </span>
        <span className="titletext">
          Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
          Aenean imperdiet.
        </span>
        <span className="crossicon">X</span>
      </div>
      <div className="filestatus">
        <span>26 May 2019</span>
        <span style={{ marginLeft: "30px" }}>3.25 MB</span>
      </div>
    </Fragment>
  );
};

const ContentUpload = () => {

  const history = useHistory()
  const [concepts, setConcepts] = useState([])
  const conceptselectRef = useRef()
  const [selectedconcepts, setSelectedConcepts] = useState([])
  const [appglobal, setAppGlobal] = useAppContextState()

  useEffect(() => {
    appglobal.pagetitle = "Upload Repository"
  }, [])

  const handleconceptSelect = (selectedList, selectedItem) => { };
  const handleconceptRemove = (selectedList, selectedItem) => { };

  const handleAttachFile = (e) => {
    e.preventDefault();
    console.log("Attached files" + e.target.files);
  };

  const onCancelPage = () => { };
  const onSavePage = () => { };

  const items = [
    { name: "file_dummy_name_1" },
    { name: "file_dummy_name_2" },
    { name: "file_dummy_name_3" },
  ];

  return (
    <BaseLayoutWrapper>
      <div className="content_upload_main">
        <div className="upload_header">
          <img
            src={left}
            srcSet={`${left2x} 2x, ${left3x} 3x`}
            alt="left"
            style={{
              cursor: "pointer",
              marginLeft: "20px",
              marginRight: "22px",
            }}
            onClick={history.goBack}
          />
          <span>My Study Circle</span>
        </div>
        <div>
          <Row>
            <Col style={{ borderRight: "solid 1px #d8d4ee" }}>
              <div>
                <input
                  type="file"
                  multiple
                  className="custom-file-input1 file1"
                  onChange={handleAttachFile}
                />
              </div>
              <div className="linkadjust">Paste any weblink here</div>
              <div className="uploadtext">Uploading Files - (?)</div>
              <hr />
              {items.map((item, index) => (
                <FileUploadContent key={index} />
              ))}
              <hr />
              <button className="stopbtn">Stop</button>
              <button className="resumebtn">Resume</button>
              <hr />
            </Col>
            <Col style={{ textAlign: "left" }}>
              <button className="readablestyle">Readable</button>
              <button className="multistyle">Multimedia</button>
              <br />
              <div className="selectedcontstyle">
                <p className="selectedtextstyle">Selected Content</p>
                <span className="chapternmstyle">
                  Chapter 5 : Minerals and Energy Resources - Ncert Solutions
                  for Class 10 Geography CBSE
                </span>
              </div>
              <br />
              <label className="upload_head_labels">Content ID</label>
              <TextField className="contentStyle" id="standard-basic" />
              <br />
              <label className="upload_head_labels">Display Name</label>
              <TextField id="standard-basic" className="displaynamestyle" />
              <br />
              <span className="errorstyle">
                The Display name already exists!
              </span>
              <br />
              <label className="upload_head_labels">Description</label>
              <TextField
                id="standard-basic"
                multiline
                className="descriptionstyle"
              />
              <br />
              <label className="upload_head_labels">Course</label>
              <div className="dropdown dropdownstyle">
                <button
                  class="btn btn-primary dropdown-toggle dropdownboxstyle"
                  type="button"
                  data-toggle="dropdown"
                >
                  6th Class Study Circle<span class="caret"></span>
                </button>
                <ul class="dropdown-menu">
                  <li className="dropdownmenustyle">7th Class Study Circle</li>
                  <li className="dropdownmenustyle">8th Class Study Circle</li>
                  <li className="dropdownmenustyle">9th Class Study Circle</li>
                </ul>
              </div>

              <label className="upload_head_labels">Subject</label>
              <div className="dropdown dropdownstyle">
                <button
                  class="btn btn-primary dropdown-toggle dropdownboxstyle"
                  type="button"
                  data-toggle="dropdown"
                >
                  Text<span class="caret"></span>
                </button>
                <ul class="dropdown-menu">
                  <li className="dropdownmenustyle">Text1</li>
                  <li className="dropdownmenustyle">Text2</li>
                  <li className="dropdownmenustyle">Text3</li>
                </ul>
              </div>

              <label className="upload_head_labels">Topic</label>
              <div className="dropdown dropdownstyle">
                <button
                  class="btn btn-primary dropdown-toggle dropdownboxstyle"
                  type="button"
                  data-toggle="dropdown"
                >
                  Text<span class="caret"></span>
                </button>
                <ul class="dropdown-menu">
                  <li className="dropdownmenustyle">Text1</li>
                  <li className="dropdownmenustyle">Text2</li>
                  <li className="dropdownmenustyle">Text3</li>
                </ul>
              </div>

              <label className="upload_head_labels">Concept</label>
              <Multiselect
                ref={conceptselectRef}
                selectedValues={selectedconcepts}
                options={concepts}
                onSelect={handleconceptSelect}
                onRemove={handleconceptRemove}
                displayValue="name"
                showCheckbox={true}
                placeholder="click to select"
                selectionLimit={3}
                style={{
                  chips: {
                    marginBottom: "5px",
                    backgroundColor: "#f2f5f9",
                    minWidth: "150px",
                    fontSize: "14px",
                    fontWeight: "600",
                    fontStretch: "normal",
                    lineHeight: "normal",
                    letterSpacing: "normal",
                    color: "#4332a6",
                  },
                  searchBox: {
                    border: "none",
                    width: "200px",
                    marginLeft: "25px",
                    maxHeight: "200px",
                    fontSize: "14px",
                    fontWeight: "600",
                    fontStretch: "normal",
                    lineHeight: "normal",
                    letterSpacing: "normal",
                    color: "#4332a6",
                  },
                  optionContainer: {
                    fontSize: "12px",
                    fontWeight: "600",
                    fontStretch: "normal",
                    fontStyle: "normal",
                    lineHeight: "normal",
                    letterSpacing: "normal",
                    color: "#4332a6",
                  },
                }}
              />
              <br />
              <label className="upload_head_labels">Preliminary Concept</label>
              <Multiselect
                ref={conceptselectRef}
                selectedValues={selectedconcepts}
                options={concepts}
                onSelect={handleconceptSelect}
                onRemove={handleconceptRemove}
                displayValue="name"
                showCheckbox={true}
                placeholder="click to select"
                selectionLimit={3}
                style={{
                  chips: {
                    marginBottom: "5px",
                    backgroundColor: "#f2f5f9",
                    minWidth: "150px",
                    fontSize: "14px",
                    fontWeight: "600",
                    fontStretch: "normal",
                    lineHeight: "normal",
                    letterSpacing: "normal",
                    color: "#4332a6",
                  },
                  searchBox: {
                    border: "none",
                    width: "200px",
                    marginLeft: "25px",
                    maxHeight: "200px",
                    fontSize: "14px",
                    fontWeight: "600",
                    fontStretch: "normal",
                    lineHeight: "normal",
                    letterSpacing: "normal",
                    color: "#4332a6",
                  },
                  optionContainer: {
                    fontSize: "12px",
                    fontWeight: "600",
                    fontStretch: "normal",
                    fontStyle: "normal",
                    lineHeight: "normal",
                    letterSpacing: "normal",
                    color: "#4332a6",
                  },
                }}
              />
              <br />
              <label className="upload_head_labels">Objectives</label>
              <Multiselect
                ref={conceptselectRef}
                selectedValues={selectedconcepts}
                options={concepts}
                onSelect={handleconceptSelect}
                onRemove={handleconceptRemove}
                displayValue="name"
                showCheckbox={true}
                placeholder="click to select"
                selectionLimit={3}
                style={{
                  chips: {
                    marginBottom: "5px",
                    backgroundColor: "#f2f5f9",
                    minWidth: "150px",
                    fontSize: "14px",
                    fontWeight: "600",
                    fontStretch: "normal",
                    lineHeight: "normal",
                    letterSpacing: "normal",
                    color: "#4332a6",
                  },
                  searchBox: {
                    border: "none",
                    width: "200px",
                    marginLeft: "25px",
                    maxHeight: "200px",
                    fontSize: "14px",
                    fontWeight: "600",
                    fontStretch: "normal",
                    lineHeight: "normal",
                    letterSpacing: "normal",
                    color: "#4332a6",
                  },
                  optionContainer: {
                    fontSize: "12px",
                    fontWeight: "600",
                    fontStretch: "normal",
                    fontStyle: "normal",
                    lineHeight: "normal",
                    letterSpacing: "normal",
                    color: "#4332a6",
                  },
                }}
              />
              <br />
              <label className="upload_head_labels">Content Language</label>
              <div className="dropdown dropdownstyle">
                <button
                  class="btn btn-primary dropdown-toggle dropdownboxstyle1"
                  type="button"
                  data-toggle="dropdown"
                >
                  English<span class="caret"></span>
                </button>
                <ul class="dropdown-menu">
                  <li className="dropdownmenustyle">Hindi</li>
                  <li className="dropdownmenustyle">Telugu</li>
                  <li className="dropdownmenustyle">Kannada</li>
                </ul>
              </div>
              <br />
              <label className="upload_head_labels">Reading Time</label>
              <TextField id="standard-basic" className="readingstyle" />

              <br />
              <br />
              <label className="upload_head_labels">Availability</label>
              <Row style={{ marginLeft: "90px" }}>
                <div className="radio_style" style={{ width: "200px" }}>
                  <Radio
                    // checked={newcircle.scType === "global"}
                    // onChange={(e) => handleNewCircle(e, "isStudentChat")}
                    value="global"
                    color="primary"
                    name="global"
                    size="small"
                  />
                  Global
                </div>
                <div className="radio_style" style={{ width: "250px" }}>
                  <Radio
                    // checked={newcircle.scType === "global"}
                    // onChange={(e) => handleNewCircle(e, "isStudentChat")}
                    value="organization"
                    color="primary"
                    name="organization"
                    size="small"
                  />
                  Organization
                </div>
                <div className="radio_style" style={{ width: "200px" }}>
                  <Radio
                    // checked={newcircle.scType === "global"}
                    // onChange={(e) => handleNewCircle(e, "isStudentChat")}
                    value="private"
                    color="primary"
                    name="private"
                    size="small"
                  />
                  Private
                </div>
              </Row>
              <div className="checkbox_style">
                <input
                  type="checkbox"
                  style={{ marginTop: "11px", marginLeft: "25px" }}
                  id="vehicle1"
                  name="vehicle1"
                  value="repository"
                />
                <span className="repotextstyle">Only Repository</span>
              </div>
              <div className="smallcard">
                <span className="videotxtstyle">
                  Display priority (Only for Video)
                </span>
                <Row style={{ marginLeft: "90px" }}>
                  <div className="radio_style" style={{ width: "250px" }}>
                    <Radio
                      // checked={newcircle.scType === "global"}
                      // onChange={(e) => handleNewCircle(e, "isStudentChat")}
                      value="top"
                      color="primary"
                      name="top"
                      size="small"
                    />
                    Top
                  </div>
                  <div className="radio_style" style={{ width: "250px" }}>
                    <Radio
                      // checked={newcircle.scType === "global"}
                      // onChange={(e) => handleNewCircle(e, "isStudentChat")}
                      value="bottom"
                      color="primary"
                      name="bottom"
                      size="small"
                    />
                    Bottom
                  </div>
                </Row>
                <div>
                  <TextField
                    id="standard-basic"
                    label="Question ID"
                    style={{ color: "#4332a6" }}
                    className="smallcardtextfield"
                  />
                  <TextField
                    id="standard-basic"
                    label="Time"
                    style={{ color: "#4332a6", left: "47px" }}
                    className="smallcardtextfield"
                  />
                </div>
              </div>
            </Col>
          </Row>
          <hr />
          <Row>
            <button
              className="cancelbtnstyle cancel__button border-0"
              onClick={onCancelPage}
            >
              Reset
            </button>
            <AdvancedModal />
            <div
              className="cancelbtnstyle"
              style={{ paddingTop: "5px", border: "solid 1px #eaeaea" }}
            >
              <input type="checkbox" />
              <span className="keepfieldstyle">Keep Fields</span>
            </div>
            <button
              className="cancelbtnstyle save__button border-0"
              onClick={onSavePage}
            >
              Save
            </button>
          </Row>
        </div>
      </div>
    </BaseLayoutWrapper>
  );
};

export default ContentUpload;
