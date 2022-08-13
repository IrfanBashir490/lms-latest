import React, { useEffect, useRef, useState } from 'react';
import Moment from 'react-moment';
import { useAppContextState } from '../../services/context';
import ChatAvatar from './ChatAvatar';
import './ChatFloatWidget.css';
import { ChatService } from '../../services/chat-service';

const ChatFloatWidget = (props) => {

    const messagesEndRef = useRef(null);
    const [room, setRoom] = useState({});
    const [userMsg, setUserMsg] = useState("");
    const [conversations, setConversations] = useState([]);
    const [appglobal, setAppGlobal] = useAppContextState();

    // /********CHATTING******************* */
    useEffect(() => {
        if (appglobal.user)
            appglobal.refsocket.on(`chat-message-${appglobal.user.id}`, data => {
                console.log('received: ' + data.message);
                addMessage("client", data.message);
            });
        console.log(`chat-message-${appglobal.user.id}`);

    }, [appglobal.user])

    useEffect(() => {
        scrollToBottom();
    }, [conversations]);

    useEffect(() => {
        addMessage("client", `Welcome, Begin your awesome chat with - ${props.name}`)
        ChatService.getRoomByFromToUser(appglobal.user.id, props.refid).then(objs => {
            if (objs.length && objs.length > 0)
                return objs[0]
            else
                return objs
        }).then(rm => {
            setRoom(rm)
            ChatService.getAllChatForRoom(rm.id, 1, 10).then(res => {
                if (res.length > 0)
                    res.forEach(chat => {
                        if (chat.uid.id === appglobal.user.id) {
                            addMessage("user", chat.text)
                        } else {
                            addMessage("client", chat.text)
                        }
                    })
            })
        })
    }, [props.name]);

    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }

    const addMessage = (type, message) => {
        const msg = {
            text: message,
            type: type
        };
        setConversations(conversations => [...conversations, msg]);
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter')
            handleNewUserMessage(e)
    }

    const handleNewUserMessage = (e) => {
        console.log(`Sending message! ${userMsg} : ${props.refid}`);
        if (room)
            ChatService.createChat(room.id, {
                type: "peer",
                text: userMsg,
                starred: false
            }).then(() => {
                // Now send the message throught the backend API
                appglobal.refsocket.emit('send-chat-message', props.refid, { message: userMsg, from: appglobal.user.id });
                addMessage("user", userMsg)
                setUserMsg("");
            })
    };

    return (
        <div className="cfw-conversation-container" aria-live="polite">
            <div className="cfw-header">
                <ChatAvatar profile_url={props.avatar} />
                <div className="cfw-header-info">
                    <span className="cfw-title">{props.name}</span>
                    <span style={{ fontSize: "10px" }}>Student{props.nameType}</span>
                </div>
                <button className="cfw-close-button" onClick={() => props.close()}>
                    <svg className="cfw-close-svg" height="20px" width="20px" viewBox="-4 -4 24 24">
                        <line stroke="#f25244" strokeLinecap="round" strokeWidth="2" x1="2" x2="14" y1="2" y2="14"></line>
                        <line stroke="#f25244" strokeLinecap="round" strokeWidth="2" x1="2" x2="14" y1="14" y2="2"></line>
                    </svg>
                </button>
            </div>
            <div className="cfw-separator"></div>
            <div className="cfw-messages-container">
                {conversations.map((conversation, index) => {
                    return conversation.type == "client" ?
                        <div key={index} className="cfw-response">
                            <div className="cfw-message-text">
                                <p>{conversation.text}</p>
                            </div>
                            <span className="cfw-timestamp">
                                <Moment format="HH:mm">
                                    {new Date()}
                                </Moment>
                            </span>
                        </div>
                        :
                        <div key={index} className="cfw-client">
                            <div className="cfw-message-text">
                                <p>{conversation.text}</p>
                            </div>
                            <span className="cfw-timestamp">
                                <Moment format="HH:mm">
                                    {new Date()}
                                </Moment>
                            </span>
                        </div>
                })}
                <div ref={messagesEndRef} />
            </div>
            <div className="cfw-sender">
                <textarea
                    className="cfw-new-message"
                    placeholder="Type a message..."
                    value={userMsg}
                    onChange={(e) => setUserMsg(e.target.value)} autoComplete="off"
                    onKeyPress={(e) => handleKeyPress(e)} />
                <button onClick={(e) => handleNewUserMessage(e)} className="cfw-send">
                    <img width={15} height={15} src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSIwIDAgNTM1LjUgNTM1LjUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUzNS41IDUzNS41OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPGcgaWQ9InNlbmQiPgoJCTxwb2x5Z29uIHBvaW50cz0iMCw0OTcuMjUgNTM1LjUsMjY3Ljc1IDAsMzguMjUgMCwyMTYuNzUgMzgyLjUsMjY3Ljc1IDAsMzE4Ljc1ICAgIiBmaWxsPSIjY2JjYmNiIi8+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg=="
                        className="cfw-send-icon" alt="Send" />
                </button>
            </div>
        </div>
    );
};

export default ChatFloatWidget;