import { InputBase } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { Multiselect } from 'multiselect-react-dropdown';
import { useSnackbar } from "notistack";
import React, { forwardRef, useEffect, useRef, useState } from "react";
import { Col, Container, Dropdown, Row } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import paginationFactory from 'react-bootstrap-table2-paginator';
import { Link, useHistory } from "react-router-dom";
import delete1x from "../../assests/images/delete.png";
import delete2x from "../../assests/images/delete@2x.png";
import delete3x from "../../assests/images/delete@3x.png";
import dragIcon from "../../assests/images/dragicon.svg";
import left from "../../assests/images/icons-8-left.png";
import left2x from "../../assests/images/icons-8-left@2x.png";
import left3x from "../../assests/images/icons-8-left@3x.png";
import searchIcon from "../../assests/images/icons-8-search.svg";
import BaseLayoutWrapper from "../../components/baselayout/BaseLayout";
import ImageUpload from "../../components/imageUpload/imageUpload";
import { useAppContextState } from "../../services/context";
import { ObjectiveService } from '../../services/objective-service';
import { SubjectService } from '../../services/subject-service';
import { TopicService } from '../../services/topic-service';
import "./SectionDetails.css";

const CustomToggle = forwardRef(({ children, onClick }, ref) => (
  <div
    className="section_dropdown"
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}>
    {children}
    &#x25bc;
  </div>
))

const CreateSubject = (props) => {

  /************************************** */
  //STATES
  /*************************************** */
  const history = useHistory()
  const { enqueueSnackbar } = useSnackbar()
  const [appglobal, setAppGlobal] = useAppContextState()
  const [search, setSearch] = useState()
  const [subjects, setSubjects] = useState([])
  const [topics, setTopics] = useState([])
  const [uistate, setUiState] = useState({
    create: "new", selDerivedSectionName: "Select Derived Subject",
  })
  const [newsectionobj, setNewSectionObj] = useState({ access: "" })

  const [objectives, setObjectives] = useState([])
  const [selectedobjectives, setSelectedObjectives] = useState([])
  const objectiveselectRef = useRef()

  useEffect(() => {
    appglobal.pagetitle = "Create Subject"
    ObjectiveService.getAllByUser(1, 10).then(res => setObjectives(res))
    SubjectService.getAllByUser(1, 10).then(res => setSubjects(res))
    TopicService.getAllByUser(1, 10).then(res => setTopics(res))
    setSearch("")
  }, [])

  /************************************************** */
  // EVENTS
  /************************************************** */
  const handleDerivedSectionSelect = (e, item) => {
    setUiState({ ...uistate, selDerivedSectionName: item.dName, create: "import" })
    setNewSectionObj(item)
  }

  const handleNewSection = (e, ref) => {
    var tVal = e.target.value;
    setNewSectionObj({ ...newsectionobj, [ref]: tVal })
  }

  const onSaveSection = () => {
    if (uistate.create === "new") {
      SubjectService.create(newsectionobj).then(() => {
        enqueueSnackbar('Subject Successfully Created!', { variant: "success" })
        SubjectService.getAllByUser(1, 10).then(res => setSubjects(res))
      })
    } else {
      SubjectService.update(newsectionobj).then(() => {
        enqueueSnackbar('Subject Successfully Updated!', { variant: "info" })
        SubjectService.getAllByUser(1, 10).then(res => setSubjects(res))
      })
    }
  }

  const handleObjectiveSelect = (selectedList, selectedItem) => {
    // if (!newcircle.faculties)
    //   newcircle.faculties = []
    // newcircle.faculties.push(selectedItem)
  }

  const handleObjectiveRemove = (selectedList, removedItem) => {
    // removeByAttr(newcircle.faculties, 'id', removedItem.id)
  }

  const dIcon = (cell, row, rowIndex, formatExtraData) => {
    return <img alt="drag" src={dragIcon} />;
  }

  const thumbnail = (cell, row, rowIndex, formatExtraData) => {
    return <img alt="thumbnail" src={row.thumbnail.url}
      width={22} height={22}
      style={{ borderRadius: "4px" }} />;
  }

  const selector = (cell, row, rowIndex, formatExtraData) => {
    return <input type="checkbox" />;
  }

  const deleteIcon = (cell, row, rowIndex, formatExtraData) => {
    return <img
      alt="Delete"
      src={delete1x}
      srcSet={`${delete2x} 2x, ${delete3x} 3x`}
    />
  }

  const customTotal = (from, to, size) => (
    <span className="pagination_text" style={{ marginTop: "15px" }}>
      {from} to { to} of { size}
    </span>
  )

  const pageButtonRenderer = ({
    page,
    active,
    disable,
    title,
    onPageChange
  }) => {
    const handleClick = (e) => {
      e.preventDefault();
      onPageChange(page);
    }
    const activeStyle = {
      padding: '5px',
      borderRadius: '250px'
    }
    if (active) {
      activeStyle.backgroundColor = '#4332a6';
      activeStyle.color = 'white';
    } else {
      activeStyle.backgroundColor = 'transparent';
      activeStyle.color = '#4332a6';
    }
    if (typeof page === 'string') {
      activeStyle.backgroundColor = 'transparent';
      activeStyle.color = '#4332a6';
    }
    return (
      <li className="pagination_no">
        <a href="#" onClick={handleClick} style={activeStyle}>{page}</a>
      </li>
    )
  }


  const columns = [
    {
      dataField: "",
      formatter: dIcon,
    },
    {
      dataField: "",
      formatter: thumbnail,
    },
    {
      dataField: "dName",
      text: "Topic Name",
      filter: textFilter({
        defaultValue: search
      }),
    },
    {
      dataField: "name",
      text: "Subject Name",
    },
    {
      dataField: "conceptsNo",
      text: "Concepts",
    },
    {
      dataField: "contentsNo",
      text: "Contents",
    },
    {
      dataField: "contentsNo",
      text: "Questions",
    },
    {
      dataField: "",
      text: "Select",
      formatter: selector,
    },
    {
      dataField: "",
      text: "Delete",
      formatter: deleteIcon,
    },
  ]

  const defaultSorted = [
    {
      dataField: "dName",
      order: "desc",
    },
  ]

  const rowClasses = (row, rowIndex) => {
    let classes = null;

    if (rowIndex % 2 === 0) {
      classes = 'section_boot_table_row_even';
    } else {
      classes = 'section_boot_table_row_odd';
    }

    return classes;
  }

  const options = {
    paginationSize: 4,
    pageStartIndex: 1,
    hideSizePerPage: true,
    firstPageText: '<<',
    prePageText: '<',
    nextPageText: '>',
    lastPageText: '>>',
    nextPageTitle: 'First page',
    prePageTitle: 'Pre page',
    firstPageTitle: 'Next page',
    lastPageTitle: 'Last page',
    showTotal: true,
    paginationTotalRenderer: customTotal,
    pageButtonRenderer: pageButtonRenderer,
    disablePageTitle: true,
    sizePerPageList: [{
      text: '5', value: 5
    }, {
      text: '10', value: 10
    }, {
      text: 'All', value: topics.length
    }]
  }

  return (
    <BaseLayoutWrapper>
      <Container className="section_detail_card">
        <Row className="mt-4" style={{ marginLeft: "5px" }}>
          <img
            className="arrowstyle"
            src={left}
            srcSet={`${left2x} 2x, ${left3x} 3x`}
            alt="left"
            onClick={history.goBack}
          />
          <span className="textstyle">Create Subject</span>
        </Row>
        <hr className="line" />
        <div className="section_wrapper">
          <Row className="text-left">
            <Col>
              <label className="labels d-block">Derived from subject</label>
              <Dropdown>
                <Dropdown.Toggle as={CustomToggle}>
                  {uistate.selDerivedSectionName}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {subjects.map((item, index) => (
                    <Dropdown.Item
                      key={index}
                      onClick={(e) => handleDerivedSectionSelect(e, item)}
                      className="section_dropdown_item">
                      {item.dName}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
              <label className="label__info">
                Subject also part of Course name
              </label>
            </Col>
            <Col className="offset-1">
              <label className="labels d-block">Contents available</label>
              <div className="d-flex">
                <div className="content__div">
                  <label
                    className="labels d-block"
                    style={{ paddingLeft: "12px", paddingTop: "12px" }}
                  >
                    Content
                  </label>
                </div>
                <div className="content__div">
                  <label
                    className="labels d-block"
                    style={{ paddingLeft: "12px", paddingTop: "12px" }}
                  >
                    Questions
                  </label>
                </div>
              </div>
            </Col>
          </Row>
          <div className="input_spacing">
            <Row className="text-left">
              <Col>
                <label className="labels d-block">Subject Display Name </label>
                <TextField id="section-standard-basic"
                  value={newsectionobj.dName}
                  onChange={(e) => handleNewSection(e, "dName")} />
              </Col>
              <Col className="offset-1">
                <label className="labels d-block text-left">
                  Subject thumbnail
                </label>
                <ImageUpload style={{ padding: "33px" }} />
              </Col>
            </Row>
          </div>
          <div className="input_spacing">
            <Row className="text-left">
              <Col>
                <label className="labels d-block">Subject Name</label>
                <TextField id="section-standard-basic"
                  value={newsectionobj.name}
                  onChange={(e) => handleNewSection(e, "name")}
                />
              </Col>
              <Col className="offset-1">
                <label className="labels d-block">Objectives</label>
                <Multiselect
                  ref={objectiveselectRef}
                  selectedValues={selectedobjectives}
                  options={objectives}
                  onSelect={handleObjectiveSelect}
                  onRemove={handleObjectiveRemove}
                  displayValue="name"
                  showCheckbox={true}
                  placeholder="click to select"
                  avoidHighlightFirstOption={true}
                  style={{
                    chips: {
                      marginBottom: '5px',
                      backgroundColor: '#f2f5f9',
                      minWidth: '150px',
                      fontSize: '14px',
                      fontWeight: '600',
                      fontStretch: 'normal',
                      lineHeight: 'normal',
                      letterSpacing: 'normal',
                      color: '#4332a6'
                    },
                    searchBox: {
                      border: 'none',
                      width: '200px',
                      maxHeight: '200px',
                      fontSize: '14px',
                      fontWeight: '600',
                      fontStretch: 'normal',
                      lineHeight: 'normal',
                      letterSpacing: 'normal',
                      color: '#4332a6'
                    },
                    optionContainer: {
                      fontSize: '12px',
                      fontWeight: '600',
                      fontStretch: 'normal',
                      fontStyle: 'normal',
                      lineHeight: 'normal',
                      letterSpacing: 'normal',
                      color: '#4332a6'
                    }
                  }}
                />
              </Col>
            </Row>
          </div>
          <div className="input_spacing">
            <Row className="text-left">
              <Col>
                <label className="labels d-block">Description</label>
                <TextField id="section-standard-basic" multiline
                  value={newsectionobj.description}
                  onChange={(e) => handleNewSection(e, "description")} />
              </Col>
              <Col className="offset-1">
                <label className="labels d-block">Language</label>
                <Dropdown>
                  <Dropdown.Toggle as={CustomToggle}>
                    {uistate.selDerivedSectionName}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {subjects.map((item, index) => (
                      <Dropdown.Item
                        key={index}
                        onClick={(e) => handleDerivedSectionSelect(e, item)}
                        className="section_dropdown_item section_color">
                        {item.dName}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
            </Row>
          </div>
          <div className="search_ui_css">
            <img style={{ marginLeft: "15px", marginRight: "15px" }}
              width={20} height={20} src={searchIcon} alt="search icon" />
            <InputBase className="search_section_css"
              style={{ marginLeft: "5px" }} placeholder="Search"
              type="text" id="section-standard-basic"
              value={search}
              onChange={e => setSearch(e.target.value)} />
          </div>
          <Row>
            {/* <Col className="text-left">
              <label className="labels  d-block">Select Topic</label>
            </Col> */}
            <Col className="text-right">
              <Link to="topic">
                <button className="add_section_btn">+ Add Topic</button>
              </Link>
            </Col>
          </Row>
        </div>
        {topics ? (
          <div className="pr-3 mt-4">
            <BootstrapTable
              bootstrap4
              id="section_boot_table"
              keyField="id"
              data={topics}
              columns={columns}
              defaultSorted={defaultSorted}
              striped
              hover
              condensed
              bordered={false}
              filter={filterFactory()}
              noDataIndication="Table is empty."
              pagination={paginationFactory(options)}
              rowClasses={rowClasses}
            />
          </div>
        ) : (null)}
        <div className="text-right">
          <button className="apply__button">Apply</button>
        </div>
        <hr />
        <div className="d-flex">
          <div className=" text-left" style={{ flex: "1" }}>
            <button className="cancel_button">Cancel</button>
          </div>
          <div className=" text-right" style={{ flex: "1" }}>
            <button className="create__button">Create</button>
          </div>
        </div>
      </Container>
    </BaseLayoutWrapper>
  )
}

export default CreateSubject
