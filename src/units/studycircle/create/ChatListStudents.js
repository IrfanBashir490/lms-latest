import React from 'react';
import iconarrow from '../../../assests/images/icons-8-expand-arrow.png';
import iconarrow2x from '../../../assests/images/icons-8-expand-arrow@2x.png';
import iconarrow3x from '../../../assests/images/icons-8-expand-arrow@3x.png';
import './ChatListStudents.css';


const ChatListStudents = (props) => {
    return (
        <button
            className="select_chat">
            <div className="chatitem_liststudents">
                <img
                    src={props.profile_url}
                    alt="student icon"
                    className="profile_img" />
                <div className="item_state_student">
                    <span className="name_student">{props.name}</span>
                </div>
                <img
                    className="image_chat"
                    src={iconarrow}
                    srcSet={`${iconarrow2x} 2x, ${iconarrow3x} 3x`}
                    alt="icon arrow"
                />
            </div>
        </button>
    );
};

export default ChatListStudents;