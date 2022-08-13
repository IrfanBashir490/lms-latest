import Badge from '@material-ui/core/Badge';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import React from 'react';
import iconarrow from '../../../assests/images/icons-8-expand-arrow.png';
import iconarrow2x from '../../../assests/images/icons-8-expand-arrow@2x.png';
import iconarrow3x from '../../../assests/images/icons-8-expand-arrow@3x.png';
import ChatAvatar from '../../../components/chatting/ChatAvatar';
import './DashChatElement.css';

const DashChatElement = (props) => {
    return (
        <button
            className="select_chat"
            onClick={() => props.dialog(props.refitem)}>
            <div className="chatitem">
                <ChatAvatar profile_url={props.profile_url} />
                <div className="item_state">
                    <span className="name_student">{props.name}</span>
                    <span className="last_active_time">{props.time}</span>
                </div>
                {props.refitem.ping ? (
                    <Badge color="secondary" variant="dot">
                        <ChatBubbleIcon />
                    </Badge>
                ) : (null)}
                <span className="arrow_image">
                    <img
                        className="image_chat"
                        src={iconarrow}
                        srcSet={`${iconarrow2x} 2x, ${iconarrow3x} 3x`}
                        alt="icon arrow"
                    />
                </span>
            </div>
        </button>
    );
};

export default DashChatElement;