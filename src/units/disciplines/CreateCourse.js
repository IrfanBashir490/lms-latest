import TextField from "@material-ui/core/TextField";
import React, { forwardRef, useEffect, useState } from "react";
import { Col, Container, Dropdown, Row } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
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
import { CourseService } from '../../services/course-service';
import { SubjectService } from '../../services/subject-service';
import "./SectionDetails.css";
import { Radio, InputBase } from "@material-ui/core";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import { useSnackbar } from "notistack";

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
));

const CreateCourse = (props) => {

  /************************************** */
  //STATES
  /*************************************** */
  const history = useHistory()
  const { enqueueSnackbar } = useSnackbar()
  const [appglobal, setAppGlobal] = useAppContextState()
  const [search, setSearch] = useState()
  const [courses, setCourses] = useState([])
  const [subjects, setSubjects] = useState([])
  const [uistate, setUiState] = useState({
    create: "new", selDerivedSectionName: "Select Derived Course",
  })
  const [newsectionobj, setNewSectionObj] = useState({ access: "" })

  useEffect(() => {
    appglobal.pagetitle = "Create Course"
    CourseService.getAllByUser(1, 10).then(res => setCourses(res))
    SubjectService.getAllByUser(1, 10).then(res => setSubjects(res))
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
      CourseService.create(newsectionobj).then(() => {
        enqueueSnackbar('Course Successfully Created!', { variant: "success" })
        CourseService.getAllByUser(1, 10).then(res => setCourses(res))
      })
    } else {
      CourseService.update(newsectionobj).then(() => {
        enqueueSnackbar('Course Successfully Updated!', { variant: "info" })
        CourseService.getAllByUser(1, 10).then(res => setCourses(res))
      })
    }
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
      text: "Display Name",
      filter: textFilter({
        defaultValue: search
      }),
    },
    {
      dataField: "name",
      text: "Subject Name",
    },
    {
      dataField: "name",
      text: "Language",
    },
    {
      dataField: "topics.length",
      text: "Topics",
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
      dataField: "name",
      text: "Board Subject",
    },
    {
      dataField: "name",
      text: "Board Course",
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
      text: 'All', value: subjects.length
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
          <span className="textstyle">Create Course</span>
        </Row>
        <hr className="line" />
        <div className="section_wrapper">
          <Row className="text-left">
            <Col>
              <label className="labels d-block">Derived Course</label>
              <Dropdown>
                <Dropdown.Toggle as={CustomToggle}>
                  {uistate.selDerivedSectionName}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {courses.map((item, index) => (
                    <Dropdown.Item
                      key={index}
                      onClick={(e) => handleDerivedSectionSelect(e, item)}
                      className="section_dropdown_item">
                      {item.dName}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col>
              <label className="labels d-block">Languages</label>
              <TextField id="section-standard-basic" />
            </Col>
          </Row>
          <div className="input_spacing">
            <Row className="text-left">
              <Col>
                <label className="labels d-block">Course Display Name</label>
                <TextField id="section-standard-basic"
                  value={newsectionobj.dName}
                  onChange={(e) => handleNewSection(e, "dName")} />
              </Col>
              <Col>
                <label className="labels  d-block">Course Name</label>
                <TextField id="section-standard-basic"
                  value={newsectionobj.name}
                  onChange={(e) => handleNewSection(e, "name")} />
              </Col>
            </Row>
          </div>
          <div className="input_spacing">
            <Row className="text-left">
              <Col>
                <label className="labels d-block">Description</label>
                <TextField id="section-standard-basic"
                  multiline
                  value={newsectionobj.description}
                  onChange={(e) => handleNewSection(e, "description")} />
              </Col>
              <Col>
                <label className="labels  d-block">Link all content</label>
                <TextField id="section-standard-basic" />
              </Col>
            </Row>
          </div>
          <label
            className="labels d-block text-left"
            style={{ marginTop: "40px" }}
          >
            Thumbnail
          </label>
          <ImageUpload style={{ padding: "33px" }} />
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
            <Col className="text-right">
              <Link to="subject">
                <button className="add_section_btn">+ Add Subject</button>
              </Link>
            </Col>
          </Row>
        </div>
        {subjects ? (
          <div className="pr-3 mt-4">
            <BootstrapTable
              bootstrap4
              id="section_boot_table"
              keyField="id"
              data={subjects}
              columns={columns}
              defaultSorted={defaultSorted}
              hover
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
        <div className="type__wrapper ">
          <label
            className="labels d-block text-justify"
            style={{ paddingBottom: "20px" }}
          >
            Type
          </label>
          <div className="type_box d-flex">
            <div className="radio_section">
              <Radio
                checked={newsectionobj.access === "private"}
                onChange={(e) => handleNewSection(e, "access")}
                value="private"
                color="primary"
                name="private"
                size="small"
              />
              <span style={{ color: "#4c40b3" }}>Private</span>
            </div>
            <span style={{ width: "35px" }}></span>
            <div className="radio_section">
              <Radio
                checked={newsectionobj.access === "organization"}
                onChange={(e) => handleNewSection(e, "access")}
                value="organization"
                color="primary"
                name="organization"
                size="small"
              />
              <span style={{ color: "#4c40b3" }}>Organization</span>
            </div>
          </div>
        </div>
        <hr />
        <div className="d-flex">
          <div className=" text-left" style={{ flex: "1" }}>
            <button className="cancel_button">Cancel</button>
          </div>
          <div className=" text-right" style={{ flex: "1" }}>
            <button className="create__button" onClick={onSaveSection}>Create</button>
          </div>
        </div>
      </Container>
    </BaseLayoutWrapper>
  );
};

export default CreateCourse;
