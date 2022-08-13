import React, { useEffect, useState } from 'react';
import search from "../../../assests/images/icons-8-search-copy.png";
import search2x from "../../../assests/images/icons-8-search-copy@2x.png";
import search3x from "../../../assests/images/icons-8-search-copy@3x.png";
import { default as studentlogo } from '../../../assests/images/profile-icon.png';
import { AssignmentService } from '../../../services/assignment-service';
import AssignmentCompleted from './AssignmentCompleted';
import AssignmentDropdown from './AssignmentDropdown';
import AssignmentElement from './AssignmentElement';
import './MyAssignment.css';

const MyAssignment = (props) => {
    const listnames = [
        {
            names: "Eyan Crasta", val: "Today 11:25am",
            assingmnetnotes: "Discovery of Electron, Proton and Neutron, atomic number,",
            studenticon: studentlogo,
        },
        {
            names: "Ninad Aghanashini", val: "Today 11:25am",
            assingmnetnotes: "Isotopes and isobars. Thomson's model and its limitations.",
            studenticon: studentlogo,
        },
        {
            names: "Uday Shetty", val: "Today 11:25am",
            assingmnetnotes: "Concepts of coordinate geometry, graphs of linear equations.",
            studenticon: studentlogo,
        },
        {
            names: "Chandan kumar Shanbhag", val: "Today 11:25am",
            assingmnetnotes: "Problems based on areas and perimeter / circumference of the ….",
            studenticon: studentlogo,
        },
        {
            names: "Aradnya shetty", val: "Today 11:25am",
            assingmnetnotes: "Motivate the area of a circle; area of sectors and segments of a circle. ",
            studenticon: studentlogo,
        },
        {
            names: "Umesh Naik", val: "Today 11:25am",
            assingmnetnotes: "Model and its limitations, concept of shells and subshells, ",
            studenticon: studentlogo,
        }
    ]

    /*********************** */
    // STATES
    /*********************** */
    const [assignments, setAssignments] = useState([])

    useEffect(() => {
        AssignmentService.getAllByUser(1, 10).then(res => setAssignments(res))
    }, [])

    /************************** */
    // EVENTS
    /************************* */

    return (
        <div className="assign_subcontainer_row">
            <div className="assign_subContainer">
                <div className="assignment_row">
                    <AssignmentDropdown items={assignments} />
                </div>

                <div className="assign_backgroundwrapper">
                    {assignments.map((item, idx) => (
                        <AssignmentElement
                            key={idx}
                            refItem={item}
                            title={item.title}
                            avatar={item.uid.avatar.url}
                            time={item.assignmentTime}
                            assignDate={item.releaseDate}
                            dueDate={item.dueDate}
                            description={item.description}
                            worksNo={item.worksNo}
                            likes={item.likes}
                            hide={item.hide}
                            handleClick={props.handleAssignmentItem}
                            index={idx + 1}
                        />
                    ))}
                </div>
            </div>
            <div className="assign_chat_list">
                <div className="searchlist">
                    <span className="assign_search">
                        <img alt="search"
                            width={16}
                            height={16}
                            src={search}
                            srcSet={`${search2x} 2x, ${search3x} 3x`} /></span>
                    <span className="assign_textlabel">Search</span>
                </div>
                <div className="assignment_col" style={{ marginTop: "27px" }}>
                    {listnames.map((item, index) => (
                        <AssignmentCompleted
                            key={index}
                            names={item.names}
                            val={item.val}
                            assingmnetnotes={item.assingmnetnotes}
                            linebreak={item.linebreak}
                            studenticon={item.studenticon}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MyAssignment