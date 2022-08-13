import { InputBase } from "@material-ui/core";
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import React, { Fragment, useEffect, useState } from 'react';
import { Button, Col, Dropdown, Modal, Row } from 'react-bootstrap';
import StackGrid from "react-stack-grid";
import iconcancel from '../../../assests/images/icons-8-delete-sign.png';
import iconcancel2x from '../../../assests/images/icons-8-delete-sign@2x.png';
import iconcancel3x from '../../../assests/images/icons-8-delete-sign@3x.png';
import searchIcon from "../../../assests/images/search.svg";
import { StudentService } from "../../../services/student-service";
import './StudentsModalList.css';

const StudentSelectedView = (props) => {

    const [hover, setHover] = useState(false)

    return (
        <div className="modal_row student_check_view" style={{ marginBottom: "10px" }}
            onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <img
                style={{ marginLeft: "5px", marginRight: "5px" }}
                width={36} height={36}
                src={props.profile_url} alt="student icon" />
            <span className={`student_name_sel ${hover ? `select_view` : null}`}>{props.name}</span>
            {hover ?
                <button className="border-0" style={{ backgroundColor: "transparent" }}>
                    <img
                        src={iconcancel}
                        srcSet={`${iconcancel2x} 2x, ${iconcancel3x} 3x`}
                        alt="cancel" />
                </button>
                : null}
        </div>
    )
}

const StudentCheckView = (props) => {
    return (
        <div className="student_check_view">
            <FormControlLabel
                control={
                    <Checkbox
                        checked={props.student.uicheck}
                        onChange={(e) => props.studentcheckchange(props.student)}
                        name="checkstudent"
                        style={{
                            color: "#4332a6",
                        }}
                    />
                }
                label={
                    <Fragment>
                        <img
                            style={{ marginLeft: "5px", marginRight: "5px" }}
                            width={36} height={36}
                            src={props.student.uid.avatar.url}
                            alt="student icon" />
                        <span className="student_name">{props.student.dName}</span>
                    </Fragment>
                }
            />
        </div>
    )
}

const StudentsModalList = (props) => {

    /************************************** */
    // STATES
    /************************************* */
    const [show, setShow] = useState(false)
    const [uistatepage, setUiStatePage] = useState({ selectall: false })
    const [students, setStudents] = useState([])
    const [selectedstudents, setSelectedStudents] = useState([])
    useEffect(() => {
        StudentService.getAll().then(res => {
            const arr = res.map(item => ({ ...item, uicheck: false }))
            setStudents(arr)
        })
    }, [])

    /************************************** */
    // EVENTS HANDLER
    /************************************* */
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)


    const handleCircleSelect = (e, circle) => {

    }

    const handleStudentCheckSelect = (student) => {
        const newuicheck = student.uicheck ? false : true
        const index = students.findIndex(st => st.id === student.id)
        if (index === -1) {
            // handle error
        } else {
            setStudents([
                ...students.slice(0, index),
                Object.assign({}, students[index], { uicheck: newuicheck }),
                ...students.slice(index + 1)
            ])
        }

        if (newuicheck)
            selectedstudents.push(students[index])
        else
            setSelectedStudents(selectedstudents.filter(st => st.id !== student.id))
    }

    const toggleSelectAll = () => {
        if (uistatepage.selectall) {
            setStudents(students.map(item => ({ ...item, uicheck: false })))
            setUiStatePage({ ...uistatepage, selectall: false })
        } else {
            setStudents(students.map(item => ({ ...item, uicheck: true })))
            setUiStatePage({ ...uistatepage, selectall: true })
        }
    }

    const handleUnSelectAll = () => {
        setUiStatePage({ ...uistatepage, selectall: false })
    }

    const handleClearAll = () => {
        setUiStatePage({ ...uistatepage, selectall: false })
        setSelectedStudents([])
    }

    const handleImport = () => {

    }

    const handleFinish = () => {

    }

    const handleExport = () => {

    }

    return (
        <div>
            <Button style={{
                width: "110px", height: "40px", borderRadius: "10px", fontSize: "14px",
                fontWeight: "600", fontStretch: "normal", fontStyle: "normal", backgroundColor: "#4332a6"
            }} onClick={handleShow}>
                Add/Edit
            </Button>
            <Modal show={show} size="xl" dialogClassName="modal_view"
                onHide={handleClose}>
                <Modal.Header style={{ padding: "0" }}>
                    <div className="modal_row">
                        <div className="modal_col">
                            <div className="modal_row">
                                <FormControlLabel
                                    style={{ width: "120px", marginLeft: "15px" }}
                                    control={
                                        <Checkbox
                                            checked={uistatepage.selectall}
                                            onChange={toggleSelectAll}
                                            name="all"
                                            style={{
                                                color: "#4332a6",
                                            }}
                                        />
                                    }
                                    label={<span className="check_select_all">Select All</span>}
                                />
                                <Dropdown>
                                    <Dropdown.Toggle className="studycircle_dropdown_student_modal">
                                        Select Study Circle
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        {props.circles.map((item, index) => (
                                            <Fragment key={index}>
                                                <Dropdown.Item onClick={(e) => handleCircleSelect(e, item)}
                                                    className="studycircle_dropdown_student_item">
                                                    {item.name}
                                                </Dropdown.Item>
                                            </Fragment>
                                        ))}
                                    </Dropdown.Menu>
                                </Dropdown>

                                <div className="studycirclecreatemodal_search">
                                    <img style={{ marginLeft: "15px", marginRight: "15px" }}
                                        width={20} height={20} src={searchIcon} alt="search icon" />
                                    <InputBase id="standard-search" placeholder="search" />
                                </div>
                                <button className="btn_import" onClick={handleImport}>
                                    <img style={{ marginLeft: "15px", marginRight: "15px" }}
                                        width={20} height={20} src={searchIcon} alt="search icon" />Import</button>
                            </div>
                        </div>
                        <div className="modal_col selected_students_view">
                            <div className="modal_row selected_justified">
                                <span className="selected_text">Student Selected - {selectedstudents.length}</span>
                                <a href="#" className="alink">Clear All</a>
                            </div>
                        </div>
                    </div>
                </Modal.Header>
                <Modal.Body style={{ padding: "0" }}>
                    <Row>
                        <Col lg="auto" className="modal_body_left">
                            <div className="modal_row sub_text">
                                <span className="student_cout">Students - {students.length} </span>
                                <button className="student_cout" onClick={toggleSelectAll}>Select All</button>
                            </div>
                            <div>
                                <StackGrid
                                    columnWidth={250}>
                                    {students.map((item, index) => (
                                        <StudentCheckView
                                            key={index}
                                            student={item}
                                            studentcheckchange={(st) => handleStudentCheckSelect(st)}
                                        />
                                    ))}
                                </StackGrid>
                            </div>
                            <div style={{ height: "20px" }}></div>
                            <div className="modal_row sub_text">
                                <span className="student_cout">Selected - {selectedstudents.length} </span>
                                <button className="student_cout" onClick={handleUnSelectAll}>UnSelect All</button>
                            </div>
                            <div>
                                <StackGrid
                                    columnWidth={250}>
                                    {selectedstudents.map((item, index) => (
                                        <StudentCheckView
                                            key={index}
                                            student={item}
                                        />
                                    ))}
                                </StackGrid>
                            </div>
                        </Col>
                        <Col>
                            <div className="modal_body_right">
                                {students.map((item, index) => (
                                    <StudentSelectedView
                                        key={index}
                                        name={item.dName}
                                        profile_url={item.uid.avatar.url}
                                    />
                                ))}
                            </div>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer style={{ padding: "0" }}>
                    <button className="modal_cancel__button"
                        onClick={handleClose}>Cancel</button>
                    <button className="modal_save__button" style={{ marginRight: "200px" }}
                        onClick={handleFinish}>Finish</button>
                    <div className="export_view">
                        <button className="btn_export" onClick={handleExport}>
                            <img style={{ marginLeft: "15px", marginRight: "15px" }}
                                width={20} height={20} src={searchIcon} alt="search icon" />Export</button>
                    </div>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
export default StudentsModalList