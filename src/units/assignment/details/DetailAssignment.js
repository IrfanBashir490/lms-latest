import { format } from "date-fns";
import React, { Fragment, useEffect, useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import left from '../../../assests/images/icons-8-left.png';
import left2x from '../../../assests/images/icons-8-left@2x.png';
import left3x from '../../../assests/images/icons-8-left@3x.png';
import resumeicon from '../../../assests/images/icons-8-parse-resume.jpg';
import resumeicon2x from '../../../assests/images/icons-8-parse-resume@2x.jpg';
import resumeicon3x from '../../../assests/images/icons-8-parse-resume@3x.jpg';
import circle from '../../../assests/images/oval.png';
import circle2x from '../../../assests/images/oval@2x.png';
import circle3x from '../../../assests/images/oval@3x.png';
import profileicon from '../../../assests/images/profile-icon.png';
import send from '../../../assests/images/send.png';
import send2x from '../../../assests/images/send@2x.png';
import send3x from '../../../assests/images/send@3x.png';
import BaseLayoutWrapper from "../../../components/baselayout/BaseLayout";
import { AssignmentService } from '../../../services/assignment-service';
import { useAppContextState } from '../../../services/context';
import AssignmentStudentList from './AssignmentStudentList';
import AssignmentWorkChat from "./AssignmentWorkChat";
import './DetailAssignment.css';

const CustomAssignToggle = React.forwardRef(({ children, onClick }, ref) => (
    <div
        className="assign_details_dropdownchatwindow"
        ref={ref}
        onClick={(e) => {
            e.preventDefault();
            onClick(e);
        }}>
        {children}
      &#x25bc;
    </div>
));

const DetailAssignment = (props) => {

    /*********************** */
    // STATES
    /*********************** */
    const history = useHistory()
    const [appglobal, setAppGlobal] = useAppContextState()
    const [currassign, setCurrAssign] = useState({})
    const [standard, setStandard] = useState([])

    useEffect(() => {
        appglobal.pagetitle = "Assignment Details"
        if (props.match.params.idval)
            AssignmentService.getById(props.match.params.idval).then(res => setCurrAssign(res))
    }, [])

    /************************** */
    // EVENTS
    /************************* */
    const handleWorkchatSelect = (e, circle) => {

    }

    const links = [
        { name: "Nitin Shet", submit: "Submited: Today", profile_url: "https://source.unsplash.com/random" },
        { name: "Nithesh Kundapur", submit: "Completed: Today", profile_url: "https://source.unsplash.com/random" },
        { name: "Sharada poojary", submit: "Completed: Today", profile_url: "https://source.unsplash.com/random" },
        { name: "Keshava Adiga", submit: "Completed: Yesterday", profile_url: "https://source.unsplash.com/random" },
        { name: "Jayendra K", submit: "Completed: 4 Days ago", profile_url: "https://source.unsplash.com/random" },
        { name: "Manish devadiga", submit: "Completed: 8 Days ago", profile_url: "https://source.unsplash.com/random" },
        { name: "Shiva Gode", submit: "Completed: 12 Days ago", profile_url: "https://source.unsplash.com/random" },
        { name: "Deepesh Kamath", submit: "Completed: 12 Days ago", profile_url: "https://source.unsplash.com/random" }

    ];

    const chatselected = [
        {
            message: "The Act reorganises the State of Jammu and Kashmir into two Union Territories — Jammu and Kashmir and Ladakh. A fresh delimitation process will follow.",
            profile_url: "https://source.unsplash.com/random",
            timedetails: "18 Aug 2019 - 12:34 AM",
            receivedmessage: "The Act reorganises the State of Jammu and Kashmir into two Union Territories — Jammu and Kashmir and Ladakh. A fresh delimitation process will follow.",
            infotext: "It clarifies that Dr. Khan had inf…",
            receivedtimedetails: "18 Aug 2019 - 12:34 AM"
        },
        {
            message: "Both the Centre and the State government were issued notice by the Supreme Court in the main petition filed by advocate M.L. Sharma two months ago on August 28.",
            profile_url: "https://source.unsplash.com/random",
            timedetails: "18 Aug 2019 - 12:34 AM",
            receivedmessage: "The Act reorganises the State of Jammu and Kashmir into two Union Territories — Jammu and Kashmir and Ladakh. A fresh delimitation process will follow.",
            infotext: "It clarifies that Dr. Khan had inf…",
            receivedtimedetails: "18 Aug 2019 - 12:34 AM"
        }
    ];
    return (
        <BaseLayoutWrapper>
            <div className="assign_details_discussionWrapper">
                <div className="assign_details_discussion_row assign_details_discussion_header">
                    <button onClick={history.goBack} className="assign_detail_leftdiscussion" >
                        <img
                            src={left}
                            srcSet={`${left2x} 2x, ${left3x} 3x`}
                            alt='left' />
                    </button>
                    <span className="assignmentDisscussionstyling">Details &nbsp;&gt;&nbsp;{currassign.title}</span>
                </div>
                {currassign.title ?
                    <div className="assign_details_discussion_row">
                        <div className="assign_details_discussion_col assign_details_title_section">
                            <span className="assign_details_discussion_name">{currassign.title}</span>
                            <span className="assign_details_discussionchat_details">{currassign.description}</span>
                            <div className="assign_details_discussion_row">
                                <div className="assigned_date_box">
                                    <span className="assignedname_styling">Assigned</span>
                                    <span className="assigneddate_styling">{format(new Date(currassign.releaseDate), "dd MMM yyyy")}</span>
                                </div>
                                <div className="assigned_date_box">
                                    <span className="assignedname_styling">Due</span>
                                    <span className="assigneddate_styling">{format(new Date(currassign.dueDate), "dd MMM yyyy")}</span>
                                </div>
                                <div className="assigned_date_box">
                                    <span className="assignedname_styling">Assignment time</span>
                                    <span className="assigneddate_styling">{currassign.assignmentTime}</span>
                                </div>
                            </div>
                        </div>
                        <div className="assign_details_discussion_col">
                            <div className="assign_details_discussion_row">
                                <img src={currassign.uid.avatar.url} width={40} height={40} style={{ margin: "10px" }} />
                                <div className="assign_details_discussion_col">
                                    <span className="assign_details_username">{currassign.uid.fName + " " + currassign.uid.lName}</span>
                                    <span className="assign_details_role">{currassign.uid.role}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    : null}
                <hr />
                <div className="assign_details_discussion_row discussionchat_header">
                    <span className="chat-header">Students</span>
                    <span className="chat-rightside">Workbook and chat</span>
                    <Dropdown >
                        <Dropdown.Toggle as={CustomAssignToggle}>
                            9
                            </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {standard.map((item, index) => (
                                <Fragment key={index}>
                                    <Dropdown.Item onClick={(e) => handleWorkchatSelect(e, item)}
                                        className="chat_window_student_item">
                                        {item.name}
                                    </Dropdown.Item>
                                </Fragment>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                    <span className="resumeicon">
                        <img className='resumeicon-styling' src={resumeicon} srcSet={`${resumeicon2x} 2x, ${resumeicon3x} 3x`} />
                    </span>
                </div>

                <div className="assign_details_discussion_row" style={{ alignItems: "flex-start" }}>
                    <div className="assign_details_discussion_col chatside_bar">
                        {links.map((item, index) => (
                            <AssignmentStudentList
                                key={index}
                                name={item.name}
                                submit={item.submit}
                                profile_url={item.profile_url}
                            />
                        ))}
                    </div>
                    <div className="assign_details_discussion_col chat_selectwindow">
                        <div className="chatting_wrapper">
                            <div className="chatinfo_label">
                                <span className="chatinfo_window_label">Teacher remakrs on assignment </span>
                            </div>
                            <div className="chatinfo_label">
                                <span className="textinfo_chat">Also, these solutions are prepared as per the NCERT textbook guidelines.
                                All the exercise questions given in NCERT Solutions for class 10 science chapter 3 are there for you to revise the whole syllabus and score higher marks.</span>
                            </div>
                        </div>
                        {chatselected.map((link, index) => (
                            <AssignmentWorkChat
                                key={index}
                                message={link.message}
                                profile_url={link.profile_url}
                                timedetails={link.timedetails}
                                receivedmessage={link.receivedmessage}
                                infotext={link.infotext}
                                receivedtimedetails={link.receivedtimedetails}
                            />
                        ))}
                        <div className="assign_details_discussion_row sendmessage_box">
                            <img src={profileicon} className='sendmessage-profile-icon' />
                            <button className="fileselect_btn">
                                <img src={circle} srcSet={`${circle2x} 2x, ${circle3x} 3x`} />
                                <span style={{ marginLeft: "-20px", marginTop: "10px" }}>+</span>
                            </button>
                            <input type="text" className='bottom-messagesend'
                                placeholder="Quick Chat" id="assign-details-standard-basic" />
                            <img style={{ float: 'right' }} src={send} srcSet={`${send2x} 2x, ${send3x} 3x`} />
                        </div>
                    </div>
                </div>
            </div>
        </BaseLayoutWrapper>
    )
}
export default DetailAssignment