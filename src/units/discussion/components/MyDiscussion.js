import React, { Fragment, useEffect, useState } from 'react';
import { Dropdown, Row } from 'react-bootstrap';
import search from '../../../assests/images/icons-8-search-copy.png';
import search2x from '../../../assests/images/icons-8-search-copy@2x.png';
import search3x from '../../../assests/images/icons-8-search-copy@3x.png';
import sort from '../../../assests/images/icons-8-sorting-answers.png';
import sort2x from '../../../assests/images/icons-8-sorting-answers@2x.png';
import sort3x from '../../../assests/images/icons-8-sorting-answers@3x.png';
import { CourseService } from '../../../services/course-service';
import { DiscussionService } from '../../../services/discussion-service';
import { StudyCircleService } from '../../../services/studycircle-service';
import { SubjectService } from '../../../services/subject-service';
import { TopicService } from '../../../services/topic-service';
import './MyDiscussion.css';
import MyDiscussionElement from './MyDiscussionElement';
import QuickChatElement from './QuickChatElement';

const MyDiscussion = (props) => {

    const links = [
        { name: "Amaranarayana Swamy", time: "Today 11:25am", message: "Motivation for studying Arithmetic Progression", notification: false, notificationNumber: 0 },
        { name: "Brinda Kulkarni", time: "Today 11:25am", message: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.", notification: true, notificationNumber: "5" },
        { name: "Nitin Pai", time: "Today 11:25am", message: "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.", notification: false, notificationNumber: 0 },
        { name: "Shantanu Kale", time: "Today 11:25am", message: "Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.", notification: true, notificationNumber: "10" },
        { name: "Dileep Madisetty", time: "Today 11:25am", message: "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero ", notification: false, notificationNumber: 0 },
        { name: "Nolan Quadros", time: "Today 11:25am", message: "Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit ", notification: false, notificationNumber: 0 },
        { name: "Nolan Quadros", time: "Today 11:25am", message: "Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna", notification: false, notificationNumber: 0 },
    ]

    /******************************** */
    // STATES
    /******************************* */
    const [discussions, setDiscussions] = useState([])
    const [doubts, setDoubts] = useState([])

    const [studycircles, setStudyCircles] = useState([])
    const [courses, setCourses] = useState([])
    const [subjects, setSubjects] = useState([])
    const [topics, setTopics] = useState([])

    const [showMenu, setShowMenu] = useState(false);
    const [uipagestate, setUiPageState] = useState({
        selectedCircleName: "Study Circle",
        selectedCourseName: "Course",
        selectedSubjectName: "Subject",
        selectedTopicName: "Topic",
    })
    const [showDiscussion, setShowDiscussion] = useState(true)

    useEffect(() => {
        DiscussionService.getAllByUser(1, 10, "discussion").then(res => setDiscussions(res))
        DiscussionService.getAllByUser(1, 10, "doubt").then(res => setDoubts(res))

        StudyCircleService.getUserStudyCircle().then(res => setStudyCircles(res))
        CourseService.getAllByUser(1, 10).then(res => setCourses(res))
        SubjectService.getAllByUser(1, 10).then(res => setSubjects(res))
        TopicService.getAllByUser(1, 10).then(res => setTopics(res))
    }, [])

    /*********************************** */
    // EVENTS
    /********************************* */
    const showDropdownMenu = (event) => {
        event.preventDefault();
        if (showMenu == true)
            setShowMenu(showMenu => false)
        else if (showMenu == false)
            setShowMenu(showMenu => true)
    }
    const collapse = () => {
        setShowMenu(showMenu => false)
    }
    const handleCircleSelect = (e, option) => {
        e.preventDefault();
        setUiPageState({
            ...uipagestate, selectedCircleName: option.name,
        })
    }
    const handleCourseSelect = (e, option) => {
        e.preventDefault();
        setUiPageState({
            ...uipagestate, selectedCourseName: option.name,
        })
    }
    const handleSubjectSelect = (e, option) => {
        e.preventDefault();
        setUiPageState({
            ...uipagestate, selectedSubjectName: option.name,
        })
    }
    const handleTopicSelect = (e, option) => {
        e.preventDefault();
        setUiPageState({
            ...uipagestate, selectedTopicName: option.name,
        })
    }

    return (
        <div className="discussion_row">
            <div className="discussion_main">
                <div className="discussion_row head_dropdown_main">
                    <Dropdown id="discussion_dropdown_main_sc" style={{ marginLeft: "18px" }}>
                        <Dropdown.Toggle className="discussion_dropdown dis_main">
                            {uipagestate.selectedCircleName}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {studycircles.map((item, index) => (
                                <Fragment key={index}>
                                    <Dropdown.Item onClick={(e) => handleCircleSelect(e, item)}
                                        className="discussion_dropdown_item dis_main">
                                        {item.name}
                                    </Dropdown.Item>
                                </Fragment>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown id="discussion_dropdown_main_crs">
                        <Dropdown.Toggle className="discussion_dropdown dis_main">
                            {uipagestate.selectedCourseName}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {courses.map((item, index) => (
                                <Fragment key={index}>
                                    <Dropdown.Item onClick={(e) => handleCourseSelect(e, item)}
                                        className="discussion_dropdown_item dis_main">
                                        {item.name}
                                    </Dropdown.Item>
                                </Fragment>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown id="discussion_dropdown_main_sub">
                        <Dropdown.Toggle className="discussion_dropdown dis_main">
                            {uipagestate.selectedSubjectName}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {subjects.map((item, index) => (
                                <Fragment key={index}>
                                    <Dropdown.Item onClick={(e) => handleSubjectSelect(e, item)}
                                        className="discussion_dropdown_item dis_main">
                                        {item.name}
                                    </Dropdown.Item>
                                </Fragment>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown id="discussion_dropdown_main_top">
                        <Dropdown.Toggle className="discussion_dropdown dis_main">
                            {uipagestate.selectedTopicName}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {topics.map((item, index) => (
                                <Fragment key={index}>
                                    <Dropdown.Item onClick={(e) => handleTopicSelect(e, item)}
                                        className="discussion_dropdown_item dis_main">
                                        {item.name}
                                    </Dropdown.Item>
                                </Fragment>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>

                    <a className="searchOval" href="#" style={{ marginLeft: '50px', marginRight: '10px' }}>
                        <img src={search} srcSet={`${search2x} 2x, ${search3x} 3x`} className="icons8-search-copy"></img>
                    </a>
                    <a className="sortingAnswersIcon" href="#" tabIndex="0" onBlur={collapse} onClick={showDropdownMenu} >
                        <img src={sort} srcSet={`${sort2x} 2x, ${sort3x} 3x`} className="icons8-sorting-answers"></img>
                    </a>
                    {
                        showMenu
                            ? (
                                <div className="card filterdrop">
                                    <li className="liststyle">
                                        <input type="checkbox" id="filter1" name="filter1" value="Latest" /> &nbsp;&nbsp;Latest</li>
                                    <li className="liststyle">
                                        <input type="checkbox" id="filter2" name="filter2" value="Comments" />&nbsp;&nbsp;Comments</li>
                                    <li className="liststyle">
                                        <input type="checkbox" id="filter3" name="filter3" value="Date" />&nbsp;&nbsp;Date</li>
                                    <li className="liststyle">
                                        <input type="checkbox" id="filter4" name="filter4" value="Only imported" />&nbsp;&nbsp;Only imported</li>
                                    <li className="liststyle">
                                        <input type="checkbox" id="filter5" name="filter5" value="Show hidden" />&nbsp;&nbsp;Show hidden</li>
                                    <li className="liststyle">
                                        <input type="checkbox" id="filter6" name="filter6" value="Show View" />&nbsp;&nbsp;Show View</li>
                                    <li className="liststyle">
                                        <input type="checkbox" id="filter7" name="filter7" value="Language" />&nbsp;&nbsp;Language</li>
                                    <li className="liststyle">
                                        <input type="checkbox" id="filter8" name="filter8" value="Revision" />&nbsp;&nbsp;Revision</li>
                                </div>
                            )
                            : (
                                null
                            )
                    }
                </div>

                <div className="discussion_row">
                    <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px', marginLeft: '255px' }}>
                        <button className={showDiscussion ? "dis-link" : "doubt-link"} onClick={() => setShowDiscussion(true)}>
                            <span className={showDiscussion ? "dis-text-styling" : "doubt-text-styling"}>
                                Discussion
                        </span>
                            <span style={{ marginLeft: '20px' }}
                                className={showDiscussion ? "dis-text-styling" : "doubt-text-styling"}>  {discussions.length} </span>
                        </button>
                        <button className={showDiscussion ? "doubt-link" : "dis-link"} style={{ marginLeft: '10px' }}
                            onClick={() => setShowDiscussion(false)} >
                            <span className={showDiscussion ? "doubt-text-styling" : "dis-text-styling"}>
                                Doubts
                        </span>
                            <span style={{ marginLeft: '20px' }}
                                className={showDiscussion ? "doubt-text-styling" : "dis-text-styling"}> {doubts.length} </span>
                        </button>
                    </div>
                </div>

                {showDiscussion ?
                    discussions.map((item, idx) => (
                        <MyDiscussionElement
                            key={idx}
                            refItem={item}
                            title={item.title}
                            creator={item.uid.fName + " " + item.uid.lName}
                            author={item.uid.fName + " " + item.uid.lName}
                            discussedDate={item.updateDate}
                            createdDate={item.createDate}
                            listNumber={item.interactionNo}
                            authorProfile={item.uid.avatar.url}
                            creatorProfile={item.uid.avatar.url}
                            hide={item.hide}
                            handleClick={props.handleDiscussionItem}
                            // import={item.import}
                            index={idx + 1}
                        />
                    )) :
                    doubts.map((item, idx) => (
                        <MyDiscussionElement
                            key={idx}
                            refItem={item}
                            title={item.title}
                            creator={item.uid.fName + " " + item.uid.lName}
                            author={item.uid.fName + " " + item.uid.lName}
                            discussedDate={item.updateDate}
                            createdDate={item.createDate}
                            listNumber={item.interactionNo}
                            authorProfile={item.uid.avatar.url}
                            creatorProfile={item.uid.avatar.url}
                            hide={item.hide}
                            handleClick={props.handleDiscussionItem}
                            // import={item.import}
                            index={idx + 1}
                        />
                    ))
                }
            </div>

            <div className='quick-chat-container'>
                <Row style={{ marginLeft: '0' }}>
                    <span className='quick-chat-title'>
                        <span className='quick-chat-text'> Quick Chat </span>
                        <img className="quick-chat-search-icon" src={search} srcSet={`${search2x} 2x,${search3x} 3x`} alt="Search"></img>
                    </span>
                </Row>
                <span className='quick-chat-messages-container'>
                    {links.map((link, idx) => (
                        <QuickChatElement
                            key={idx}
                            name={link.name}
                            time={link.time}
                            message={link.message}
                            notification={link.notification}
                            notificationNumber={link.notificationNumber}
                        />
                    ))}
                </span>
            </div>
        </div>
    )
}

export default MyDiscussion;