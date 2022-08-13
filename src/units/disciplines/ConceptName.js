import { InputBase } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { useSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
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
import { ConceptService } from '../../services/concept-service';
import { useAppContextState } from "../../services/context";
import "./SectionDetails.css";

const ConceptName = (props) => {

  /************************************** */
  //STATES
  /*************************************** */
  const history = useHistory()
  const { enqueueSnackbar } = useSnackbar()
  const [appglobal, setAppGlobal] = useAppContextState()
  const [search, setSearch] = useState()
  const [concepts, setConcepts] = useState([])
  const [uistate, setUiState] = useState({
    create: "new", selDerivedSectionName: "Select Derived Concept",
  })
  const [newsectionobj, setNewSectionObj] = useState({ access: "" })

  useEffect(() => {
    appglobal.pagetitle = "Concept Details"
    ConceptService.getAllByUser(1, 10).then(res => setConcepts(res))
    setSearch("")
  }, [])

  /************************************************** */
  // EVENTS
  /************************************************** */
  const handleNewSection = (e, ref) => {
    var tVal = e.target.value;
    setNewSectionObj({ ...newsectionobj, [ref]: tVal })
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
      text: "Concept",
      filter: textFilter({
        defaultValue: search
      }),
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
      text: 'All', value: concepts.length
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
          <span className="textstyle">Concept Name</span>
        </Row>
        <hr className="line" />
        <div className="section_wrapper">
          <div className="input_spacing">
            <Row className="text-left">
              <Col>
                <label className="labels d-block">Concept Name </label>
                <TextField id="section-standard-basic" style={{ width: "461px" }} />
              </Col>
              <Col className="offset-1">
                <label className="labels d-block">Topic name</label>
                <TextField id="section-standard-basic" />
              </Col>
            </Row>
          </div>
          <div className="input_spacing">
            <Row className="text-left">
              <Col>
                <label className="labels d-block">Thumbnail</label>
                <ImageUpload style={{ padding: "33px" }} />
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
            <Col className="text-right">
              <Link to="preliminary">
                <button className="add_section_btn">
                  + Preliminary Concepts
                </button>
              </Link>
            </Col>
          </Row>
        </div>
        {concepts ? (
          <div className="pr-3 mt-4">
            <BootstrapTable
              bootstrap4
              id="section_boot_table"
              keyField="id"
              data={concepts}
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
        <div style={{ height: "50px" }}></div>
        {/* <hr />
        <div className="d-flex">
          <div className=" text-left" style={{ flex: "1" }}>
            <button className="cancel_button">Cancel</button>
          </div>
          <div className=" text-right" style={{ flex: "1" }}>
            <button className="create__button">Create Course</button>
          </div>
        </div> */}
      </Container>
    </BaseLayoutWrapper>
  );
};

export default ConceptName;
