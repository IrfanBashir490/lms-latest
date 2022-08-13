import React from 'react';
import './MyAssignment.css';

const AssignmentCompleted = (props) => {
    return (
        <div className="assign_select_list">
            <img src={props.studenticon} className="assign_chat_studenticon_completed" alt="icon" style={{ marginLeft: "15px" }} />
            <div className="assign_chat_studentname">{props.names}</div><br />
            <span className="assign_chat_time_submitted">{props.val}</span><br></br>
            <span className="assign_note">{props.assingmnetnotes}</span>
            <div className="linebreak-right"></div>
        </div>
    )
}
export default AssignmentCompleted