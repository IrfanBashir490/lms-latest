import DateFnsUtils from '@date-io/date-fns';
import IconButton from '@material-ui/core/IconButton';
import { KeyboardDatePicker, KeyboardTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { Multiselect } from 'multiselect-react-dropdown';
import { useSnackbar } from 'notistack';
import React, { Fragment, useState, useEffect, useRef } from 'react';
import { Col, Row, Dropdown } from 'react-bootstrap';
import files from '../../../assests/images/files@3x.png';
import hide from '../../../assests/images/icons-8-hide.png';
import left from '../../../assests/images/icons-8-left.png';
import left2x from '../../../assests/images/icons-8-left@2x.png';
import left3x from '../../../assests/images/icons-8-left@3x.png';
import trash from '../../../assests/images/delete.png';
import trash2x from '../../../assests/images/delete@2x.png';
import trash3x from '../../../assests/images/delete@3x.png';
import womenImg from '../../../assests/images/icons-8-women-age-group-3-filled-white.png';
import profileicon from '../../../assests/images/profile-icon.png';
import view from '../../../assests/images/view-blue.png';
import BaseLayoutWrapper from "../../../components/baselayout/BaseLayout";
import StudyCircleElement from '../../studycircle/StudyCircleElement';
import './CreateAssignment.css';
import { useHistory } from 'react-router-dom';
import { useAppContextState } from '../../../services/context';
import { CourseService } from '../../../services/course-service';
import { ConceptService } from '../../../services/concept-service';
import { AssignmentService } from '../../../services/assignment-service';
import { StudyCircleService } from '../../../services/studycircle-service';
import { SubjectService } from '../../../services/subject-service';
import { TopicService } from '../../../services/topic-service';

const Createassignment = (props) => {

    /*********************** */
    // STATES
    /*********************** */
    const { enqueueSnackbar } = useSnackbar()
    const history = useHistory()
    const [appglobal, setAppGlobal] = useAppContextState()
    const uiInitial = {
        selectedCourseName: "Select Course",
        selectedSubjectName: "Select Subject",
        selectedTopicName: "Select Topic"
    }
    const assignInitial = {
        hide: true,
        title: "",
        description: "",
        releaseDate: new Date(),
        dueDate: new Date(),
        assignmentTime: ""
    }
    const [newassign, setNewAssign] = useState(assignInitial)
    const [uipagestate, setUiPageState] = useState(uiInitial)
    const [selectedcircles, setSelectedCircles] = useState([])
    const refCircleSelect = useRef(null)
    const refConceptSelect = useRef(null)

    const [studycircles, setStudyCircles] = useState([])
    const [courses, setCourses] = useState([])
    const [subjects, setSubjects] = useState([])
    const [topics, setTopics] = useState([])
    const [concepts, setConcepts] = useState([])

    useEffect(() => {
        appglobal.pagetitle = "Create Assignment"

        StudyCircleService.getUserStudyCircle().then(res => setStudyCircles(res))
        CourseService.getAllByUser(1, 10).then(res => setCourses(res))
        SubjectService.getAllByUser(1, 10).then(res => setSubjects(res))
        TopicService.getAllByUser(1, 10).then(res => setTopics(res))
        ConceptService.getAllByUser(1, 10).then(res => setConcepts(res))
    }, [])

    /************************** */
    // EVENTS
    /************************* */
    const handleNewAssignment = (e, ref) => {
        var tVal = e.target.value
        setNewAssign({ ...newassign, [ref]: tVal })
    }

    const handleDateChange = (date, ref) => {
        setNewAssign({ ...newassign, [ref]: date })
    }

    const handleCourseSelect = (e, item) => {
        setUiPageState({ ...uipagestate, selectedCourseName: item.name })
        setNewAssign({ ...newassign, courseId: item.id })
    }

    const handleSubjectSelect = (e, item) => {
        setUiPageState({ ...uipagestate, selectedSubjectName: item.name })
        setNewAssign({ ...newassign, subjectId: item.id })
    }

    const handleTopicSelect = (e, item) => {
        setUiPageState({ ...uipagestate, selectedTopicName: item.name })
        setNewAssign({ ...newassign, topicId: item.id })
    }

    const handleCircleSelect = (selectedList, selectedItem) => {
        setSelectedCircles(selectedList)
        setNewAssign({ ...newassign, studycircles: selectedList.map(i => i.id) })
    }

    const handleCircleRemove = (selectedList, selectedItem) => {
        setSelectedCircles(selectedList)
        setNewAssign({ ...newassign, studycircles: selectedList.map(i => i.id) })
    }

    const handleConceptSelect = (selectedList, selectedItem) => {
        setNewAssign({ ...newassign, concepts: selectedList.map(i => i.id) })
    }

    const handleConceptRemove = (selectedList, removedItem) => {
        setNewAssign({ ...newassign, concepts: selectedList.map(i => i.id) })
    }

    const onCancel = () => {
        setSelectedCircles([])
        setUiPageState(uiInitial)
        setNewAssign(assignInitial)
        refCircleSelect.current.resetSelectedValues()
        refConceptSelect.current.resetSelectedValues()
    }

    const onCreate = () => {
        AssignmentService.create(newassign).then(() => {
            enqueueSnackbar('Assignment Successfully Created!', { variant: "success" })
        })
    }

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <BaseLayoutWrapper>
                <div className="assignment_create">
                    <div className="assignment_create_row">
                        <button className="icons8-left" onClick={history.goBack}>
                            <img
                                src={left}
                                srcSet={`${left2x} 2x, ${left3x} 3x`}
                                alt='left' />
                        </button>
                        <span className="assignmentCreateStyling">Assignment Create</span>
                    </div>
                    <hr />

                    <div style={{ display: 'flex', alignItems: 'center', marginTop: '13px' }}>
                        <span className="assignment-holder" style={{ marginLeft: '60px' }}>
                            <span className="assignment-Title">Discussion Title</span>
                            <input type="text" className='assignment-select'
                                value={newassign.title}
                                onChange={(e) => handleNewAssignment(e, "title")}
                                style={{ outline: 'none' }}
                            />
                        </span>
                        <span className="assignment-holder" style={{ marginLeft: '95px' }}>
                            <span className="assignment-Title">Description</span>
                            <textarea rows="5" type="text" className='assignment-select'
                                value={newassign.description}
                                onChange={(e) => handleNewAssignment(e, "description")}
                                style={{ resize: 'none', outline: 'none' }} />
                        </span>
                    </div>


                    <div style={{ display: 'flex', alignItems: 'center', marginTop: '33px', height: '66px' }}>
                        <div style={{ marginLeft: '60px', display: 'flex', flexDirection: 'column' }}>
                            <label className="image-uploading">
                                <img className="Files" src={files} />
                            </label>
                            <input type="file" id="file-input" className="form-control" />
                        </div>
                        <div style={{ marginLeft: '95px' }}>
                            <Multiselect
                                ref={refCircleSelect}
                                options={studycircles}
                                displayValue="name"
                                onSelect={handleCircleSelect}
                                onRemove={handleCircleRemove}
                                showCheckbox={true}
                                avoidHighlightFirstOption={true}
                                placeholder="Study Circle (click to select)"
                                style={{
                                    chips: {
                                        backgroundColor: '#f2f5f9',
                                        fontSize: '14px',
                                        fontWeight: '600',
                                        fontStretch: 'normal',
                                        lineHeight: 'normal',
                                        letterSpacing: 'normal',
                                        color: '#4332a6'
                                    },
                                    searchBox: {
                                        border: 'none',
                                        width: '400px',
                                        borderBottom: '1px solid #d8d4ee',
                                        color: '#4332a6'
                                    },
                                    optionContainer: {
                                        fontSize: '12px',
                                        fontWeight: '600',
                                        fontStretch: 'normal',
                                        fontStyle: 'normal',
                                        lineHeight: 'normal',
                                        letterSpacing: 'normal',
                                        color: '#4332a6',
                                    }
                                }}
                            />
                        </div>
                    </div>

                    <div style={{ display: 'flex', marginTop: '30px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '60px' }}>
                            <label className='drop-name'>Course</label>
                            <Dropdown id="assignment_create_dropdown_crs">
                                <Dropdown.Toggle className="assignment_create_dropdown">
                                    {uipagestate.selectedCourseName}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {courses.map((item, index) => (
                                        <Fragment key={index}>
                                            <Dropdown.Item onClick={(e) => handleCourseSelect(e, item)}
                                                className="assignment_create_dropdown_item">
                                                {item.name}
                                            </Dropdown.Item>
                                        </Fragment>
                                    ))}
                                </Dropdown.Menu>
                            </Dropdown>
                            <label className='drop-name' style={{ marginTop: '42px' }}>Subject</label>
                            <Dropdown id="assignment_create_dropdown_sub">
                                <Dropdown.Toggle className="assignment_create_dropdown">
                                    {uipagestate.selectedSubjectName}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {subjects.map((item, index) => (
                                        <Fragment key={index}>
                                            <Dropdown.Item onClick={(e) => handleSubjectSelect(e, item)}
                                                className="assignment_create_dropdown_item">
                                                {item.name}
                                            </Dropdown.Item>
                                        </Fragment>
                                    ))}
                                </Dropdown.Menu>
                            </Dropdown>
                            <label className='drop-name' style={{ marginTop: '42px' }}>Topic</label>
                            <Dropdown id="assignment_create_dropdown_top">
                                <Dropdown.Toggle className="assignment_create_dropdown">
                                    {uipagestate.selectedTopicName}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {topics.map((item, index) => (
                                        <Fragment key={index}>
                                            <Dropdown.Item onClick={(e) => handleTopicSelect(e, item)}
                                                className="assignment_create_dropdown_item">
                                                {item.name}
                                            </Dropdown.Item>
                                        </Fragment>
                                    ))}
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>

                        <div className='circle-holder'>
                            {selectedcircles.map((item, index) => (
                                <StudyCircleElement
                                    key={index}
                                    circlename={item.name}
                                    profile={item.uid.avatar.url}
                                    value={item.students.length}
                                    type={item.scType}
                                />
                            ))}
                        </div>
                    </div>

                    <div style={{ marginTop: '32px', display: 'flex' }}>
                        <span className="concept-holder" >
                            <span className="Concept">Concept</span>
                            <span className='select-container'>
                                <Multiselect
                                    ref={refConceptSelect}
                                    options={concepts}
                                    displayValue="name"
                                    onSelect={handleConceptSelect}
                                    onRemove={handleConceptRemove}
                                    showCheckbox={true}
                                    avoidHighlightFirstOption={true}
                                    placeholder="Type"
                                    selectionLimit={5}
                                    style={{
                                        chips: {
                                            backgroundColor: '#ffdeb6',
                                            fontSize: '14px',
                                            fontWeight: '600',
                                            fontStretch: 'normal',
                                            fontStyle: 'italic',
                                            lineHeight: 'normal',
                                            letterSpacing: 'normal',
                                            color: '#28282c'
                                        },
                                        searchBox: {
                                            border: 'none',
                                            width: '400px',
                                            borderBottom: '1px solid #d8d4ee'
                                        },
                                        optionContainer: {
                                            fontSize: '12px',
                                            fontWeight: '600',
                                            fontStretch: 'normal',
                                            fontStyle: 'normal',
                                            lineHeight: 'normal',
                                            letterSpacing: 'normal',
                                            color: '#4332a6',
                                        }
                                    }}
                                />
                            </span>
                        </span>
                        <div style={{ marginLeft: '555px' }} className="linebreak"></div>

                        <div style={{ marginLeft: '95px', marginTop: '55px', display: 'flex' }}>
                            <button className={newassign.hide ? "view_button" : "hide_button"}
                                onClick={() => handleNewAssignment({ target: { value: false } }, "hide")}>
                                <span style={{ display: 'flex', alignItems: 'center' }}>
                                    <img className="viewPngStyling" src={view}></img>
                                    <span className={newassign.hide ? "view-text" : "hide-text"}>View</span>
                                </span>
                            </button>
                            <span style={{ width: "20px" }}></span>
                            <button className={newassign.hide ? "hide_button" : "view_button"}
                                onClick={() => handleNewAssignment({ target: { value: true } }, "hide")}>
                                <span style={{ display: 'flex', alignItems: 'center' }}>
                                    <img className="viewPngStyling" src={hide}></img>
                                    <span className={newassign.hide ? "hide-text" : "view-text"} >Hide</span>
                                </span>
                            </button>
                        </div>
                    </div>

                    <div className="assignment_create_row" style={{ marginTop: '35px', marginLeft: '60px' }}>
                        <div className="assignment_create_col" 
                                style={{ width: "400px" }}>
                            <label className='drop-name'>Assignment Time</label>
                            <input type="text" className='assignment-select'
                                value={newassign.assignmentTime}
                                placeholder="Ex: 1hr 45mins"
                                onChange={(e) => handleNewAssignment(e, "assignmentTime")}
                                style={{ outline: 'none' }}
                            />
                        </div>
                        <div className="assignment_create_col" style={{ marginLeft: '90px' }}>
                            <div className="assignment_create_row">
                                <input type="checkbox" id="addtoday" />
                                <label class="textstyle" for="addtoday">Add to Day Learning </label>
                            </div>
                        </div>
                    </div>
                    <div className="assignment_create_row" style={{ marginTop: '35px', marginLeft: '60px' }}>
                        <div className="assignment_create_col">
                            <label className='drop-name'>Due Date</label>
                            <KeyboardDatePicker
                                margin="normal"
                                style={{ width: "400px" }}
                                id="assign-create-date-picker-dialog-due"
                                placeholder="DD/MM/YYYY"
                                format="dd/MM/yyyy"
                                value={newassign.dueDate}
                                onChange={(e) => handleDateChange(e, "dueDate")}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                        </div>
                        <div className="assignment_create_col" style={{ marginLeft: '90px' }}>
                            <label className='drop-name'>Release</label>
                            <KeyboardDatePicker
                                margin="normal"
                                style={{ width: "400px" }}
                                id="assign-create-date-picker-dialog-release"
                                placeholder="DD/MM/YYYY"
                                format="dd/MM/yyyy"
                                value={newassign.releaseDate}
                                onChange={(e) => handleDateChange(e, "releaseDate")}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                        </div>
                    </div>
                    <hr style={{ marginTop: '25px' }}></hr>

                    <span style={{ display: 'flex', alignItems: 'center', marginTop: '30px' }}>
                        <span className='trash-holder'>
                            <img
                                src={trash}
                                srcSet={`${trash2x} 2x, ${trash3x} 3x`}
                                className="icons8-trash" /> </span>
                        <span className='Delete-assignment'> Delete assignment </span>
                        <button className="cancel_button border-0 mt-1"
                            onClick={onCancel}>Cancel</button>
                        <button className="create_button border-0 mt-1"
                            onClick={onCreate}>Create</button>
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', height: "50px" }}></span>
                </div>
            </BaseLayoutWrapper>
        </MuiPickersUtilsProvider>
    )
}

export default Createassignment;