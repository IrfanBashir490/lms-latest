import React, { useState } from 'react';
import deleteIcon from '../../../assests/images/delete-blue.png';
import deleteIcon2x from '../../../assests/images/delete-blue@2x.png';
import deleteIcon3x from '../../../assests/images/delete-blue@3x.png';
import forward from '../../../assests/images/forward.png';
import word from '../../../assests/images/icons-8-word-copy-5.png';
import reply from '../../../assests/images/reply.png';
import './AssignmentWorkChat.css';
import './DetailAssignment.css';

const AssignmentWorkChat = (props) => {

    const [showText, setShowText] = useState(false)
    const [showValue, setShowValue] = useState(false)

    return (
        <div>
            <div className="chatbox">
                <div className="chatinfo_label">
                    <div className="sentMessage_wrap">
                        <span className="sentmessage_style">{props.message}</span>
                    </div>
                    <img className="chatmessage-icon"
                        style={{ marginLeft: "5px", marginRight: "5px" }}
                        width={36} height={36}
                        src={props.profile_url} alt="studentchatselected icon" />
                </div>
                <div className="chatinfo_label">
                    <span className="chattimedetails">{props.timedetails}</span>
                </div>
            </div>
            <div className="chatbox">
                <div className="chatinfo_label">
                    <button className="showTextclass" onClick={() => setShowText(!showText)}>
                        <div className="info_wrapper">
                            <span className='doc-imgstyle'><img src={word} /></span>
                            <span className="info_style">{props.infotext}</span>
                        </div>
                    </button>
                </div>
            </div>
            {
                showText ?
                    <div className="iconshow-style">
                        <img src={reply} />
                        <img src={forward} style={{ marginLeft: '5px' }} />
                        <span className="send-to-board" style={{ marginLeft: '5px' }}>
                            <span className='send-to-boardtext'> Send to Board </span>
                        </span>
                        <img src={deleteIcon} srcSet={`${deleteIcon2x} 2x, ${deleteIcon3x} 3x`} style={{ marginLeft: '5px' }} />
                    </div> : null
            }
            <div className="chatbox">
                <div className="chatinfo_label_receive">
                    <img className="chatmessage-icon"
                        style={{ marginLeft: "5px", marginRight: "5px" }}
                        width={36} height={36}
                        src={props.profile_url} alt="studentchatselected icon" />
                    <button className="showTextclass" onClick={() => setShowValue(!showValue)}>
                        <div className="receivedMessage_wrap">
                            <span className="receivedmessage_style">{props.receivedmessage}</span>
                        </div>
                    </button>
                </div>
                <div className="chatinfo_label">
                    <span className="receivedtimedetails">{props.receivedtimedetails}</span>
                </div>
                {showValue &&
                    <div className="iconshow-stylereceived">
                        <img src={reply} />
                        <img src={forward} style={{ marginLeft: '5px' }} />
                        <span className="send-to-board" style={{ marginLeft: '5px' }}>
                            <span className='send-to-boardtext'> Send to Board </span>
                        </span>
                        <img src={deleteIcon} srcSet={`${deleteIcon2x} 2x, ${deleteIcon3x} 3x`} style={{ marginLeft: '5px' }} />
                    </div>
                }
            </div>
        </div>
    )
}

export default AssignmentWorkChat