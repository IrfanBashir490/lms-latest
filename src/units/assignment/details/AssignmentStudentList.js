import React from 'react';
import './AssignmentStudentList.css';

const AssignmentStudentList = (props) => {

    return (
        <button
            className="select_chat">
            <div className="list_row studentList_view" style={{ marginBottom: "10px" }}>
                <img className="chatlist-icondiscussion"
                    width={36} height={36}
                    src={props.profile_url} alt="student icon" />
                <div className="chatlist_state">
                    <span className="student_name_sel">{props.name}</span>
                    <span className="student_assignment_submit">{props.submit}</span>
                </div>
            </div>
        </button>
    )
}

export default AssignmentStudentList;