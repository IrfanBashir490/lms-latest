import { InputBase, Radio } from '@material-ui/core';
import React, { useEffect, useRef, useState, Fragment } from 'react';
import { Button, Col, Modal } from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import idelete from "../../../assests/images/icons-8-delete.png";
import idelete2x from "../../../assests/images/icons-8-delete@2x.png";
import idelete3x from "../../../assests/images/icons-8-delete@3x.png";
import { CourseService } from '../../../services/course-service';
import "../student-modal/StudentsModalList.css";

const CourseAddModalDialog = (props) => {

    const [show, setShow] = useState(false)
    const [search, setSearch] = useState()
    const refNode = useRef(null)
    const [courses, setCourses] = useState([])

    useEffect(() => {
        setSearch("")
        CourseService.getAllByUser(1, 50).then((res) => setCourses(res))
    }, [])

    const handleAddCourseConfirm = () => {
        const selcourses = []
        courses.forEach(crs => {
            refNode.current.selectionContext.selected.forEach(selid => {
                if (crs.id === selid)
                    selcourses.push(crs)
            })
        })
        props.retSelects(selcourses)
        setShow(false)
    }

    const columns = [
        {
            dataField: "dName",
            text: "Display Name",
            filter: textFilter({
                defaultValue: search
            }),
        },
        {
            dataField: "name",
            text: "Course Name",
        },
        {
            dataField: "subjectsNo",
            text: "Subjects",
        },
    ]

    const defaultSorted = [
        {
            dataField: "name",
            order: "desc",
        },
    ]


    return (
        <div>
            <Button style={{
                width: "150px", height: "40px", borderRadius: "10px", fontSize: "14px", fontWeight: "600",
                fontStretch: "normal", fontStyle: "normal", backgroundColor: "#4332a6"
            }}
                onClick={() => setShow(true)}>
                + Add Course
            </Button>
            <Modal show={show} size="lg" onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <div className="modal_row">
                        <span className="course_title" style={{ marginLeft: "32px" }}>Select Course</span>
                        <InputBase className="search_course_css" style={{ marginLeft: "125px", maxWidth: "180px" }} placeholder="search"
                            type="text" id="standard-basic"
                            value={search}
                            onChange={e => setSearch(e.target.value)} />
                    </div>
                </Modal.Header>
                <Modal.Body>
                    <div className="boot_add_course_table">
                        <BootstrapTable
                            ref={refNode}
                            id="add_course_boot_table"
                            bootstrap4={true}
                            keyField="id"
                            data={courses}
                            columns={columns}
                            defaultSorted={defaultSorted}
                            condensed
                            bordered={false}
                            filter={filterFactory()}
                            selectRow={{ mode: 'checkbox', clickToSelect: true }}
                            noDataIndication="Table is empty."
                        />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button style={{
                        width: "120px", height: "40px", borderRadius: "16px", fontSize: "14px", fontWeight: "600",
                        fontStretch: "normal", fontStyle: "normal", backgroundColor: "#489e2d", color: "white"
                    }}
                        onClick={handleAddCourseConfirm}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

const StudyCircleCouseShortDetail = (props) => {

    return (
        <div className="course_content">
            <div className="course_content_left">
                <div className="coursename">{props.course.dName}</div>
                {props.course.subjects ?
                    props.course.subjects.map((item, index) => (
                        <div key={index} className="subject_name">{item.dName}</div>
                    )) : null}
            </div>
            <div>
                <div className="radio_section">
                    <Radio
                        checked={props.course.status === "assign"}
                        onChange={(e) => props.updateStatus(props.course.id, e.target.value)}
                        value="assign"
                        color="primary"
                        name="assign"
                        size="small"
                    />
                    <span style={{ color: "#4c40b3" }}>Assign</span>
                </div>
                <div className="radio_section">
                    <Radio
                        checked={props.course.status === "recommend"}
                        onChange={(e) => props.updateStatus(props.course.id, e.target.value)}
                        value="recommend"
                        color="primary"
                        name="recommend"
                        size="small"
                    />
                    <span style={{ color: "#747373" }}>Recommend</span>
                </div>
                <button style={{ paddingLeft: "10px", marginTop: "5px", border: "0", background: "transparent" }}
                    onClick={() => props.deleteCourse(props.course.id)}>
                    <div className="radio_section">
                        <img width={16} height={16}
                            src={idelete}
                            srcSet={`${idelete2x} 2x, ${idelete3x} 3x`}
                            alt="Delete" />
                        <span style={{ width: "10px" }}></span>
                        <span style={{ color: "#f76f63" }}>Delete</span>
                    </div>
                </button>
            </div>
        </div>
    )
}

const AddStudyCircleCourseList = (props) => {

    /*********************************** 
     *  STATES
    ************************************/
    const [selectedCourses, setSelectedCourses] = useState([])
    const courseSelectRef = useRef()

    useEffect(() => {
        if (props.courses)
            setSelectedCourses(props.courses)
    }, [props.courses])

    /************************************
     * EVENT HANDLERS
     ************************************/
    const handleAddCourse = (items) => {
        setSelectedCourses(items)
    };

    const handleDeleteCourse = (delid) => {
        setSelectedCourses(selectedCourses.filter(item => item.id !== delid))
        props.updatedAddedCourses(selectedCourses)
    }

    const handleStatusCourse = (upid, val) => {
        setSelectedCourses(selectedCourses.map(item => {
            if (item.id === upid) {
                if ("status" in item) {
                    item.status = val
                    return item
                }
                return { ...item, status: val }
            }
            return item
        }))
        props.updatedAddedCourses(selectedCourses)
    }

    return (
        <Col>
            <label className="head_labels">Courses</label>
            <div className="course_list_section">
                {selectedCourses.map((item, index) => (
                    <StudyCircleCouseShortDetail
                        key={index}
                        course={item}
                        updateStatus={handleStatusCourse}
                        deleteCourse={handleDeleteCourse}
                    />
                ))}
            </div>
            <CourseAddModalDialog retSelects={handleAddCourse} />
        </Col>
    );
};

export default AddStudyCircleCourseList;