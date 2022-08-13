import React from 'react';
import { Row } from "react-bootstrap";
import profileIcon from '../../../assests/images/profile-icon.png';

const QuickChatElement = (props) => {
    return (
        <Row style={{ marginLeft: '0' }}>
            <span className="quick-chat-message-container">
                <img className='quick-chat-profile-icon' src={profileIcon} />
                <span className='message-info'>
                    <span className='quick-chat-details'>
                        <span className='profile-name'>  {props.name}</span>
                        <span className='quick-chat-time'> {props.time} </span>
                        <span className='quick-chat-message'> {props.message}</span>
                    </span>

                    {props.notification ?
                        <span className='message-notification'>
                            <span className='notification-number'> {props.notificationNumber} </span>
                        </span>
                        : null
                    }
                </span>
            </span>
            <hr style={{ width: '63%', marginLeft: '58px' }} />
        </Row>
    )
}

export default QuickChatElement