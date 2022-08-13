import React from 'react';
import womenImg from '../../assests/images/icons-8-women-age-group-3-filled-white.png';
import './StudyCircleElement.css';

const StudyCircleElement = (props) => {
    return (
        <div className="main-circle"
            style={props.type === "closed" ? { backgroundImage: "linear-gradient(to bottom, #5e5e5e, #c8c8c8)" } : null}>
            {props.profile ? <img src={props.profile} alt="Profile Icon" className="profile-icon" /> : null}
            <span className="circle-title">
                {props.circlename}
            </span>
            <span style={{ display: 'flex', alignItems: 'center' }}>
                <img src={womenImg} alt="Student Image" className="student-image" />
                <span className="circle-strength">
                    {props.value}
                </span>
            </span>
        </div>
    )
}
export default StudyCircleElement