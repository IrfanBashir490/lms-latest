import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Switch from '@material-ui/core/Switch';
import { useSnackbar } from 'notistack';
import { Multiselect } from 'multiselect-react-dropdown';
import React, { Fragment, useState, useEffect, useRef } from 'react';
import { Dropdown } from "react-bootstrap";
import left from '../../../assests/images/icons-8-left.png';
import left2x from '../../../assests/images/icons-8-left@2x.png';
import left3x from '../../../assests/images/icons-8-left@3x.png';
import { Link, useHistory } from 'react-router-dom';
import files from '../../../assests/images/files@3x.png';
import hide from '../../../assests/images/icons-8-hide.png';
import trash from '../../../assests/images/delete.png';
import trash2x from '../../../assests/images/delete@2x.png';
import trash3x from '../../../assests/images/delete@3x.png';
import womenImg from '../../../assests/images/icons-8-women-age-group-3-filled-white.png';
import profileicon from '../../../assests/images/profile-icon.png';
import view from '../../../assests/images/view-blue.png';
import BaseLayoutWrapper from "../../../components/baselayout/BaseLayout";
import StudyCircleElement from '../../studycircle/StudyCircleElement';
import './CreateDiscussion.css';
import { useAppContextState } from '../../../services/context';
import { CourseService } from '../../../services/course-service';
import { ConceptService } from '../../../services/concept-service';
import { DiscussionService } from '../../../services/discussion-service';
import { StudyCircleService } from '../../../services/studycircle-service';
import { SubjectService } from '../../../services/subject-service';
import { TopicService } from '../../../services/topic-service';

const CreateDiscussion = (props) => {

    /*********************** */
    // STATES
    /*********************** */
    const { enqueueSnackbar } = useSnackbar()
    const history = useHistory()
    const [appglobal, setAppGlobal] = useAppContextState()
    const disInitial = {
        type: "discussion",
        attachFiles: false,
        hide: true,
        groupChat: false,
        title: "",
        description: ""
    }
    const uiInitial = {
        selectedCourseName: "Select Course",
        selectedSubjectName: "Select Subject",
        selectedTopicName: "Select Topic"
    }
    const [newdis, setNewDis] = useState(disInitial)
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
        appglobal.pagetitle = "Create Discussion"

        StudyCircleService.getUserStudyCircle().then(res => setStudyCircles(res))
        CourseService.getAllByUser(1, 10).then(res => setCourses(res))
        SubjectService.getAllByUser(1, 10).then(res => setSubjects(res))
        TopicService.getAllByUser(1, 10).then(res => setTopics(res))
        ConceptService.getAllByUser(1, 10).then(res => setConcepts(res))
    }, [])

    /************************** */
    // EVENTS
    /************************* */
    const handleNewDiscussion = (e, ref) => {
        var tVal = e.target.value;
        if ("checked" in e.target && (ref === "groupChat" || ref === "attachFiles"))
            tVal = e.target.checked
        setNewDis({ ...newdis, [ref]: tVal })
    }

    const handleCourseSelect = (e, item) => {
        setUiPageState({ ...uipagestate, selectedCourseName: item.name })
        setNewDis({ ...newdis, courseId: item.id })
    }

    const handleSubjectSelect = (e, item) => {
        setUiPageState({ ...uipagestate, selectedSubjectName: item.name })
        setNewDis({ ...newdis, subjectId: item.id })
    }

    const handleTopicSelect = (e, item) => {
        setUiPageState({ ...uipagestate, selectedTopicName: item.name })
        setNewDis({ ...newdis, topicId: item.id })
    }

    const handleCircleSelect = (selectedList, selectedItem) => {
        setSelectedCircles(selectedList)
        setNewDis({ ...newdis, studycircles: selectedList.map(i => i.id) })
    }

    const handleCircleRemove = (selectedList, selectedItem) => {
        setSelectedCircles(selectedList)
        setNewDis({ ...newdis, studycircles: selectedList.map(i => i.id) })
    }

    const handleConceptSelect = (selectedList, selectedItem) => {
        setNewDis({ ...newdis, concepts: selectedList.map(i => i.id) })
    }

    const handleConceptRemove = (selectedList, removedItem) => {
        setNewDis({ ...newdis, concepts: selectedList.map(i => i.id) })
    }

    const onCancel = () => {
        setSelectedCircles([])
        setUiPageState(uiInitial)
        setNewDis(disInitial)
        refCircleSelect.current.resetSelectedValues()
        refConceptSelect.current.resetSelectedValues()
    }

    const onCreate = () => {
        DiscussionService.create(newdis).then(() => {
            if (newdis.type === 'discussion')
                enqueueSnackbar('Discussion Successfully Created!', { variant: "success" })
            else
                enqueueSnackbar('Doubt Successfully Created!', { variant: "success" })
        })
    }

    return (
        <BaseLayoutWrapper>
            <div className="discussion_create">
                <div className="discussion_create_row">
                    <button className="icons8-left" onClick={history.goBack}>
                        <img
                            src={left}
                            srcSet={`${left2x} 2x, ${left3x} 3x`}
                            alt='left' />
                    </button>
                    <span className="discussionCreateStyling">Discussion Create</span>
                </div>
                <hr />

                <div>
                    <button className={newdis.type === "discussion" ? "dis-link" : "doubt-link"}
                        onClick={() => handleNewDiscussion({ target: { value: "discussion" } }, "type")}>
                        <span className={newdis.type === "discussion" ? "dis-text-styling" : "doubt-text-styling"}>
                            Discussion
                            </span>
                        {/* <span style={{ marginLeft: '20px' }}
                                className={newdis.type === "discussion" ? "dis-text-styling" : "doubt-text-styling"}>  {discussions.length} </span> */}
                    </button>
                    <button className={newdis.type === "doubt" ? "dis-link" : "doubt-link"} style={{ marginLeft: '10px' }}
                        onClick={() => handleNewDiscussion({ target: { value: "doubt" } }, "type")} >
                        <span className={newdis.type === "doubt" ? "dis-text-styling" : "doubt-text-styling"}>
                            Doubts
                            </span>
                        {/* <span style={{ marginLeft: '20px' }}
                                className={newdis.type === "doubt" ? "dis-text-styling" : "doubt-text-styling"}> {doubts.length} </span> */}
                    </button>
                </div>
                <hr />

                <div style={{ display: 'flex', alignItems: 'center', marginTop: '13px' }}>
                    <span className="discussion-holder" style={{ marginLeft: '60px' }}>
                        <span className="Discussion-Title">Discussion Title</span>
                        <input type="text" className='discussion-select'
                            value={newdis.title}
                            onChange={(e) => handleNewDiscussion(e, "title")}
                            style={{ outline: 'none' }}
                        />
                    </span>
                    <span className="discussion-holder" style={{ marginLeft: '95px' }}>
                        <span className="Discussion-Title">Description</span>
                        <textarea rows="5" type="text" className='discussion-select'
                            value={newdis.description}
                            onChange={(e) => handleNewDiscussion(e, "description")}
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
                        <Dropdown id="discussion_create_dropdown_crs">
                            <Dropdown.Toggle className="discussion_create_dropdown">
                                {uipagestate.selectedCourseName}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {courses.map((item, index) => (
                                    <Fragment key={index}>
                                        <Dropdown.Item onClick={(e) => handleCourseSelect(e, item)}
                                            className="discussion_create_dropdown_item">
                                            {item.name}
                                        </Dropdown.Item>
                                    </Fragment>
                                ))}
                            </Dropdown.Menu>
                        </Dropdown>
                        <label className='drop-name' style={{ marginTop: '42px' }}>Subject</label>
                        <Dropdown id="discussion_create_dropdown_sub">
                            <Dropdown.Toggle className="discussion_create_dropdown">
                                {uipagestate.selectedSubjectName}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {subjects.map((item, index) => (
                                    <Fragment key={index}>
                                        <Dropdown.Item onClick={(e) => handleSubjectSelect(e, item)}
                                            className="discussion_create_dropdown_item">
                                            {item.name}
                                        </Dropdown.Item>
                                    </Fragment>
                                ))}
                            </Dropdown.Menu>
                        </Dropdown>
                        <label className='drop-name' style={{ marginTop: '42px' }}>Topic</label>
                        <Dropdown id="discussion_create_dropdown_top">
                            <Dropdown.Toggle className="discussion_create_dropdown">
                                {uipagestate.selectedTopicName}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {topics.map((item, index) => (
                                    <Fragment key={index}>
                                        <Dropdown.Item onClick={(e) => handleTopicSelect(e, item)}
                                            className="discussion_create_dropdown_item">
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
                        <button className={newdis.hide ? "view_button" : "hide_button"}
                            onClick={() => handleNewDiscussion({ target: { value: false } }, "hide")}>
                            <span style={{ display: 'flex', alignItems: 'center' }}>
                                <img className="viewPngStyling" src={view}></img>
                                <span className={newdis.hide ? "view-text" : "hide-text"}>View</span>
                            </span>
                        </button>
                        <span style={{ width: "20px" }}></span>
                        <button className={newdis.hide ? "hide_button" : "view_button"}
                            onClick={() => handleNewDiscussion({ target: { value: true } }, "hide")}>
                            <span style={{ display: 'flex', alignItems: 'center' }}>
                                <img className="viewPngStyling" src={hide}></img>
                                <span className={newdis.hide ? "hide-text" : "view-text"} >Hide</span>
                            </span>
                        </button>
                    </div>
                </div>

                <div className="row">
                    <span className='linebreak' style={{ marginTop: '72px', marginLeft: '555px' }}></span>
                </div>
                <div style={{ display: 'flex', marginTop: '105px' }}>
                    <span style={{ display: 'flex' }}>
                        <span className='Group-Chats'> Group Chats </span>
                        <span className="switch-container" style={{ marginLeft: '21px' }}>
                            <Switch size="small" checked={newdis.groupChat}
                                onChange={(e) => handleNewDiscussion(e, "groupChat")}
                                name="groupChat"
                                color="primary" />
                        </span>
                    </span>
                    <span style={{ display: 'flex' }}>
                        <span className='Attaching-files'> Attaching Files </span>
                        <span className="switch-container" style={{ marginLeft: '33px' }}>
                            <Switch size="small" checked={newdis.attachFiles}
                                onChange={(e) => handleNewDiscussion(e, "attachFiles")}
                                name="attachFiles"
                                color="primary" />
                        </span>
                    </span>

                </div>
                <hr style={{ marginTop: '25px' }}></hr>

                <span style={{ display: 'flex', alignItems: 'center', marginTop: '30px' }}>
                    <span className='trash-holder'>
                        <img
                            src={trash}
                            srcSet={`${trash2x} 2x, ${trash3x} 3x`}
                            className="icons8-trash" /> </span>
                    <span className='Delete-Discussion'> Delete Discussion </span>
                    <button className="cancel_button border-0 mt-1"
                        onClick={onCancel}>Cancel</button>
                    <button className="create_button border-0 mt-1"
                        onClick={onCreate}>Create</button>
                </span>
                <span style={{ display: 'flex', alignItems: 'center', height: "50px" }}></span>
            </div>
        </BaseLayoutWrapper>
    )
}

export default CreateDiscussion;