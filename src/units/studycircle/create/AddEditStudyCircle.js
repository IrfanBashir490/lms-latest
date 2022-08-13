import { InputBase, Radio } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import { Multiselect } from 'multiselect-react-dropdown';
import { useSnackbar } from 'notistack';
import React, { Fragment, useEffect, useRef, useState } from 'react';
import { Col, Dropdown, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import arrow from "../../../assests/images/icons-8-expand-arrow-copy.png";
import arrow2x from "../../../assests/images/icons-8-expand-arrow-copy@2x.png";
import arrow3x from "../../../assests/images/icons-8-expand-arrow-copy@3x.png";
import left from '../../../assests/images/icons-8-left.png';
import left2x from '../../../assests/images/icons-8-left@2x.png';
import left3x from '../../../assests/images/icons-8-left@3x.png';
import searchIcon from "../../../assests/images/search.svg";
import student from '../../../assests/images/student.png';
import student2x from '../../../assests/images/student@2x.png';
import student3x from '../../../assests/images/student@3x.png';
import { useAppContextState } from "../../../services/context";
import { StudyCircleService } from "../../../services/studycircle-service";
import { UserService } from "../../../services/user-service";
import Modaldata from '../student-modal/StudentsModalList';
import './AddEditStudyCircle.css';
import AddStudyCircleCourseList from './AddStudyCircleCourseList';
import ChatListStudents from './ChatListStudents';

const removeByAttr = (arr, attr, value) => {
    var i = arr.length;
    while (i--) {
        if (arr[i]
            && arr[i].hasOwnProperty(attr)
            && (arr.length > 2 && arr[i][attr] === value)) {
            arr.splice(i, 1);
        }
    }
    return arr;
}

const ClassCircleListView = (props) => {
    return (
        <div className='class_list_view'>
            <span className='dot'></span>
            <span className='name'>{props.circlename}</span>
            <span className='count'>{props.circlestudentcount}</span>
        </div>
    )
}

const ClassCircleInfoView = (props) => {
    return (
        <div className='class_info_view'>
            <span className='name'>{props.name}</span>
            <span className='count'>{props.count}</span>
        </div>
    )
}

const AddStudyCircle = () => {
    const circlesinfo = [
        { name: "Study Circle", count: "9" },
        { name: "Students", count: "145" },
        { name: "Courses", count: "3" },
        { name: "Subject", count: "8" },
        { name: "Concepts", count: "6" },
        { name: "Multimedia", count: "9" },
        { name: "Readables", count: "7" },
        { name: "Questions", count: "8" },
        { name: "Modules", count: "10" },
        { name: "Raft", count: "35" },
        { name: "Trek", count: "35" }
    ];

    const chats = [
        { name: "Sandeep Shenoy", profile_url: "https://source.unsplash.com/random" },
        { name: "Parthiv Sharma", profile_url: "https://source.unsplash.com/random" },
        { name: "Naveen Naik", profile_url: "https://source.unsplash.com/random" },
        { name: "Nithin Pai", profile_url: "https://source.unsplash.com/random" },
        { name: "Joswin Crasta", profile_url: "https://source.unsplash.com/random" },
        { name: "Shyam Wadone", profile_url: "https://source.unsplash.com/random" },
        { name: "Eyan Every", profile_url: "https://source.unsplash.com/random" },
        { name: "Wilson Sharma", profile_url: "https://source.unsplash.com/random" },
        { name: "Deepak Mehta", profile_url: "https://source.unsplash.com/random" }
    ];



    /*************************************************** */
    // STATE MANAGEMENT
    /************************************************** */
    const { enqueueSnackbar } = useSnackbar()
    const history = useHistory()
    const [appglobal, setAppGlobal] = useAppContextState()
    const [uipagestate, setUiPageState] = useState({
        itemsToShow: 4, expanded: false, parentCircleName: "Select Parent Circle", selectedCircleName: "Select Study Circle", create: "new"
    });
    const [faculties, setFaculties] = useState([])
    const facultyselectRef = useRef()
    const [selectedfaculties, setSelectedFaculties] = useState([])
    const [headselectedfaculties, setHeadSelectedFaculties] = useState([])
    const headfacultyselectRef = useRef()
    const [newcircle, setNewCircle] = useState({ scType: "closed", isStudentChat: false, isStudentView: false })
    const [mycircles, setCircles] = useState([])

    useEffect(() => {
        appglobal.pagetitle = "My Study Circle"
        StudyCircleService.getUserStudyCircle().then((res) => setCircles(res))
        UserService.getUsersByRole('teacher').then((res) => {
            res.forEach(element => { element.name = element.fName + " " + element.lName });
            setFaculties(res)
        })
    }, [])

    /**************************************************** */
    // EVENT HANDLERS
    /**************************************************** */

    const handleParentScSelect = (e, item) => {
        e.preventDefault()
        setUiPageState({ ...uipagestate, parentCircleName: item.name })
        newcircle.scParent = item.id
    }

    const handleCourseAdded = (crsids) => {
        crsids.forEach(crsid => newcircle.courses.push(crsid))
    }

    const handleFacultySelect = (selectedList, selectedItem) => {
        if (!newcircle.faculties)
            newcircle.faculties = []
        newcircle.faculties.push(selectedItem)
    }

    const handleFacultyRemove = (selectedList, removedItem) => {
        removeByAttr(newcircle.faculties, 'id', removedItem.id)
    }

    const handleHeadFacultySelect = (selectedList, selectedItem) => {
        if (!newcircle.scHeads)
            newcircle.scHeads = []
        newcircle.scHeads.push(selectedItem)
    }

    const handleHeadFacultyRemove = (selectedList, removedItem) => {
        removeByAttr(newcircle.scHeads, 'id', removedItem.id)
    }

    const handleNewCircle = (e, ref) => {
        var tVal = e.target.value;
        if (tVal === 'true')
            tVal = true
        else if (tVal === 'false')
            tVal = false
        setNewCircle({ ...newcircle, [ref]: tVal })
    }

    const handleCircleSelect = (e, circle) => {
        e.preventDefault()
        setUiPageState({ ...uipagestate, selectedCircleName: circle.name, selectedCircle: circle, create: "import" })
        setNewCircle(circle)
        facultyselectRef.current.resetSelectedValues()
        headfacultyselectRef.current.resetSelectedValues()
        setHeadSelectedFaculties([])
        setSelectedFaculties([])
        if (faculties) {
            if (circle.scHeads && circle.scHeads.length > 0) {
                const scheadsSelected = [];
                circle.scHeads.forEach(sch => {
                    faculties.forEach(f => {
                        if (sch.id && f.id && sch.id === f.id)
                            scheadsSelected.push(f)
                    })
                })
                setHeadSelectedFaculties(scheadsSelected)
            }
            if (circle.faculties && circle.faculties.length > 0) {
                const facultiesSelected = [];
                circle.faculties.forEach(fac => {
                    faculties.forEach(f => {
                        if (fac.id && f.id && fac.id === f.id)
                            facultiesSelected.push(f)
                    })
                })
                setSelectedFaculties(facultiesSelected)
            }
        }
    }

    const showMore = () => {
        uipagestate.itemsToShow === 4 ?
            setUiPageState({ ...uipagestate, itemsToShow: mycircles.length, expanded: true })
            : setUiPageState({ ...uipagestate, itemsToShow: 4, expanded: false })
    }

    const onSaveStudyCircle = () => {
        if (uipagestate.create === "new") {
            //post create new
            StudyCircleService.postStudyCircle(newcircle).then(() => {
                enqueueSnackbar('Study Circle Successfully Created!', { variant: "success" })
                StudyCircleService.getUserStudyCircle().then((res) => setCircles(res))
            })
        } else {
            //update study circle
            StudyCircleService.update(newcircle).then(() => {
                enqueueSnackbar('Study Circle Updated!', { variant: "info" })
                StudyCircleService.getUserStudyCircle().then((res) => setCircles(res))
            })
        }
    }

    const onCancelPage = () => {
        enqueueSnackbar('Clearing text')
        facultyselectRef.current.resetSelectedValues()
        headfacultyselectRef.current.resetSelectedValues()
        setNewCircle({ name: '', description: '' })
        setUiPageState({ itemsToShow: 4, expanded: false, selectedCircleName: "Select Study Circle", create: "new" })
    }

    /*********************************************** */
    // UI RENDER
    /*********************************************** */
    return (
        <div className="studycircle_create">
            <div className="studycirlce_content">
                <button className="backclick border-0" onClick={history.goBack}>
                    <img
                        src={left}
                        srcSet={`${left2x} 2x, ${left3x} 3x`}
                        alt='left' />
                </button>
                <span className="studycircle_name">My Study Circle  &gt; {uipagestate.selectedCircleName}</span>
                <span className="studycircle_student_count">
                    Students - {uipagestate.selectedCircle ? uipagestate.selectedCircle.students.length : null}
                </span>
                <Modaldata circles={mycircles} />
            </div>
            <div className='content_detail'>
                <div className='sidebar_detail'>
                    <div className='oval_info'>
                        <span className='name_oval_info'>My Study Circle</span>
                        <div className='student_oval_info'>
                            <img
                                width={12} height={16} src={student}
                                srcSet={`${student2x} 2x, ${student3x} 3x`}
                                alt='student-icon' />
                            <span className='student_count'>{uipagestate.selectedCircle ? uipagestate.selectedCircle.students.length : null}</span>
                        </div>
                    </div>
                    <span className='sidebar_hor_line'></span>
                    <div className='sidebar_section'>
                        {mycircles.slice(0, uipagestate.itemsToShow).map((item, index) => (
                            <ClassCircleListView
                                key={index}
                                circlename={item.name}
                                circlestudentcount={item.students.length}
                            />
                        ))}
                        {mycircles.length > uipagestate.itemsToShow ?
                            (<button className='circlelist_more' onClick={showMore}>
                                +{mycircles.length - uipagestate.itemsToShow} More
                            </button>) : null
                        }
                    </div>
                    <span className='sidebar_hor_line'></span>
                    <div className='sidebar_section'>
                        {circlesinfo.map((item, index) => (
                            <ClassCircleInfoView
                                key={index}
                                name={item.name}
                                count={item.count}
                            />
                        ))}
                    </div>
                </div>
                <div className='mid_content'>
                    <Row>
                        <Col>
                            <label className="head_labels">Parent Circle</label><br />
                            <Dropdown>
                                <Dropdown.Toggle className="name_of_circle">
                                    {uipagestate.parentCircleName}
                                    <img src={arrow} srcSet={`${arrow2x} 2x, ${arrow3x} 3x`} alt="arrow" className="parent_arrow" />
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    {mycircles.map((item, index) => (
                                        <Fragment key={index}>
                                            <Dropdown.Item onClick={(e) => handleParentScSelect(e, item)}
                                                className="studycircle_dropdown_item">
                                                {item.name}
                                            </Dropdown.Item>
                                        </Fragment>
                                    ))}
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                        <Col>
                            <label className='head_labels'>Import From</label>
                            <Dropdown>
                                <Dropdown.Toggle className='studycircle_dropdown'>
                                    {uipagestate.selectedCircleName}
                                    <img src={arrow} srcSet={`${arrow2x} 2x, ${arrow3x} 3x`} alt="arrow" className="parent_arrow" />
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {mycircles.map((item, index) => (
                                        <Fragment key={index}>
                                            <Dropdown.Item onClick={(e) => handleCircleSelect(e, item)}
                                                className='studycircle_dropdown_item'>
                                                {item.name}
                                            </Dropdown.Item>
                                        </Fragment>
                                    ))}
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                    </Row>
                    <Row className='circle_name'>
                        <Col>
                            <label className="head_labels">Study Circle Name</label><br />
                            <TextField
                                style={{ minWidth: "400px" }}
                                value={newcircle.name}
                                onChange={(e) => handleNewCircle(e, "name")}
                                id="standard-basic" helperText="50 characters" />
                        </Col>
                    </Row>
                    <Row className='circle-description'>
                        <Col>
                            <label className="head_labels">Study Circle Description</label><br />
                            <TextField
                                style={{ minWidth: "400px" }}
                                value={newcircle.description}
                                onChange={(e) => handleNewCircle(e, "description")}
                                id="standard-basic"
                                multiline
                                helperText="250 characters" />
                        </Col>
                    </Row>
                    <Row><Col style={{ height: "30px" }}></Col></Row>
                    <Row>
                        <Col>
                            <label className='head_labels'>Select Faculty</label>
                            <Multiselect
                                ref={facultyselectRef}
                                selectedValues={selectedfaculties}
                                options={faculties}
                                onSelect={handleFacultySelect}
                                onRemove={handleFacultyRemove}
                                displayValue="name"
                                showCheckbox={true}
                                placeholder="click to select"
                                selectionLimit={3}
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
                        <Col>
                            <label className='head_labels'>Select Head Faculty</label>
                            <Multiselect
                                ref={headfacultyselectRef}
                                selectedValues={headselectedfaculties}
                                options={faculties}
                                onSelect={handleHeadFacultySelect}
                                onRemove={handleHeadFacultyRemove}
                                displayValue="name"
                                showCheckbox={true}
                                placeholder="click to select"
                                selectionLimit={3}
                                avoidHighlightFirstOption={true}
                                style={{
                                    chips: {
                                        marginBottom: '5px',
                                        backgroundColor: '#f2f5f9',
                                        width: '150px',
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
                    <Row><Col style={{ height: "20px" }}></Col></Row>
                    <Row>
                        <AddStudyCircleCourseList
                            courses={newcircle.courses}
                            updatedAddedCourses={handleCourseAdded} />
                    </Row>
                    <Row><Col style={{ height: "35px" }}></Col></Row>
                    <Row>
                        <Col>
                            <div className="studycircle_type">
                                <div className="studycircle_type_left">
                                    <span className="type_name">Study Circle Type</span><br />
                                    <span className="type_subtext">(Open For other Students to join)</span>
                                </div>
                                <div style={{ paddingTop: "10px", paddingBottom: "10px" }}>
                                    <div className="radio_section">
                                        <Radio
                                            checked={newcircle.scType === "open"}
                                            onChange={(e) => handleNewCircle(e, "scType")}
                                            value="open"
                                            color="primary"
                                            name="open"
                                            size="small"
                                        />
                                        <span style={{ color: "#4c40b3" }}>Open</span>
                                    </div>
                                    <div className="radio_section">
                                        <Radio
                                            checked={newcircle.scType === "closed"}
                                            onChange={(e) => handleNewCircle(e, "scType")}
                                            value="closed"
                                            color="primary"
                                            name="closed"
                                            size="small"
                                        />
                                        <span style={{ color: "#4c40b3" }}>Closed</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row><Col style={{ height: "20px" }}></Col></Row>
                    <Row>
                        <Col >
                            <div className="studycircle_student_info">
                                <span className="type_name">Student - Student View</span>
                                <span className="type_subtext">(Student can view each other)</span>
                                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", marginTop: "21px" }}>
                                    <div className="radio_section">
                                        <Radio
                                            checked={newcircle.isStudentView === true}
                                            onChange={(e) => handleNewCircle(e, "isStudentView")}
                                            value={true}
                                            color="primary"
                                            name="true"
                                            size="small"
                                        />
                                        <span style={{ color: "#4c40b3" }}>Enable</span>
                                    </div>
                                    <span style={{ width: "35px" }}></span>
                                    <div className="radio_section">
                                        <Radio
                                            checked={newcircle.isStudentView === false}
                                            onChange={(e) => handleNewCircle(e, "isStudentView")}
                                            value={false}
                                            color="primary"
                                            name="false"
                                            size="small"
                                        />
                                        <span style={{ color: "#4c40b3" }}>Disable</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col >
                            <div className="studycircle_student_info">
                                <span className="type_name">Student - Student chat</span>
                                <span className="type_subtext">(Student can chat with each other)</span>
                                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", marginTop: "21px" }}>
                                    <div className="radio_section">
                                        <Radio
                                            checked={newcircle.isStudentChat === true}
                                            onChange={(e) => handleNewCircle(e, "isStudentChat")}
                                            value={true}
                                            color="primary"
                                            name="true"
                                            size="small"
                                        />
                                        <span style={{ color: "#4c40b3" }}>Enable</span>
                                    </div>
                                    <span style={{ width: "35px" }}></span>
                                    <div className="radio_section">
                                        <Radio
                                            checked={newcircle.isStudentChat === false}
                                            onChange={(e) => handleNewCircle(e, "isStudentChat")}
                                            value={false}
                                            color="primary"
                                            name="false"
                                            size="small"
                                        />
                                        <span style={{ color: "#4c40b3" }}>Disable</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="content_chat">
                    <div className="studycirclecreate_search">
                        <img style={{ marginLeft: "15px", marginRight: "15px" }}
                            width={20} height={20} src={searchIcon} alt="search icon" />
                        <InputBase style={{ maxWidth: "180px" }} type="text" id="standard-basic" />
                    </div>
                    <div className="studycirclecreate_student_list">
                        {chats.map((item, index) => (
                            <ChatListStudents
                                key={index}
                                name={item.name}
                                studentlogo={item.studentlogo}
                                studentimg={item.studentimg}
                                selectbutton={item.selectbutton}
                                profile_url={item.profile_url}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className="content_foot">
                <Row>
                    <Col className="text-left">
                        <button className="cancel__button"
                            onClick={onCancelPage}>Reset</button>
                    </Col>
                    <Col className="text-right">
                        <button className="save__button"
                            onClick={onSaveStudyCircle}>Save</button>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default AddStudyCircle