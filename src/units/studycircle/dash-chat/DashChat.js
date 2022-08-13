import { useSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from "react-router-dom";
import searchicon from '../../../assests/images/search.svg';
import ChatFloatWidget from '../../../components/chatting/ChatFloatWidget';
import { useAppContextState } from '../../../services/context';
import { UserService } from '../../../services/user-service';
import './DashChat.css';
import DashChatElement from './DashChatElement';

const DashChat = (props) => {

    /**************************************/
    // STATES
    /**************************************/
    const { enqueueSnackbar } = useSnackbar()
    const [students, setStudents] = useState([])
    const [faculties, setFaculties] = useState([])
    const [chatwidget, setChatWidgetObject] = useState({})
    const [appglobal, setAppGlobal] = useAppContextState()
    const [show, setShow] = useState(false)
    const [showFaculty, setShowFaculty] = useState(false)

    useEffect(() => {
        UserService.currentUser().then((cuser) => {
            if (cuser) {
                appglobal.user = cuser
                console.log("User Refreshed : " + appglobal.user.id)

                appglobal.refsocket.on(`chat-message-${appglobal.user.id}`, data => {
                    UserService.getById(data.from).then(res => appglobal.chatuser = res)
                        .then(() => {
                            setFaculties(faculties => faculties.map(item => {
                                if (item.id === data.from)
                                    item.ping = true
                                return item
                            }))
                        })
                })

                UserService.getUsersByRole('admin').then((res) => {
                    res.forEach(element => {
                        element.time = "ago"
                        element.ping = false
                    })
                    return res
                }).then(res => {
                    setFaculties(res.filter(it => it.id !== appglobal.user.id))
                })

                UserService.getUsersByRole('student').then((res) => {
                    res.forEach(element => {
                        element.time = "ago"
                        element.ping = false
                    })
                    return res
                }).then(res => {
                    setStudents(res.filter(it => it.id !== appglobal.user.id))
                })
            }
        });
    }, [])


    /******************************************/
    // EVENT HANDLER
    /******************************************/
    const handleClose = () => {
        setShow(false);
        setChatWidgetObject(null);
    };

    const handleOpen = () => {
        if (appglobal.user)
            setShow(true);
        else {
            enqueueSnackbar('Connecting to Chatserver failed, Try again!', { variant: "error" })
        }
    };

    const createChatDialog = (obj) => {
        setFaculties(faculties.map(item => {
            item.ping = false
            return item
        }))
        handleClose();
        setChatWidgetObject(obj);
        handleOpen();
    };

    return (
        <div>
            {show ? (
                <ChatFloatWidget
                    refid={chatwidget.id}
                    avatar={chatwidget.avatar.url}
                    name={chatwidget.fName + " " + chatwidget.lName}
                    close={handleClose}
                />
            ) : (null)
            }
            <Link to={"/study-circle/create"}>
                <Button className='addStudyCircle'>+ Add Study Circle</Button>
            </Link>
            <div className='chatinfo'>
                <div className='chattypes'>
                    <button onClick={() => setShowFaculty(false)}
                        className={`studentonline ${showFaculty ? 'toggle_light' : 'toggle_dark'}`}>
                        Student - {students.length}
                    </button>
                    <button onClick={() => setShowFaculty(true)}
                        className={`facultyonline ${showFaculty ? 'toggle_dark' : 'toggle_light'}`}>
                        Faculty - {faculties.length}
                    </button>
                </div>
                <div className="search_control">
                    <span className="search"><img style={{ margin: "10px" }} src={searchicon} /></span>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Control as="select" className="studycircle_list">
                            <option>All Study Circle</option>
                            <option>2</option>
                            <option>3</option>
                        </Form.Control>
                    </Form.Group>
                </div>
                <div className="chatline">
                    {showFaculty ?
                        (<>
                            {faculties.map((item, index) => (
                                <DashChatElement
                                    key={index}
                                    refitem={item}
                                    name={item.fName + " " + item.lName}
                                    profile_url={item.avatar.url}
                                    time={item.time}
                                    dialog={createChatDialog}
                                />
                            ))}
                        </>)
                        :
                        (<>
                            {
                                students.map((item, index) => (
                                    <DashChatElement
                                        key={index}
                                        refitem={item}
                                        name={item.fName + " " + item.lName}
                                        profile_url={item.avatar.url}
                                        time={item.time}
                                        dialog={createChatDialog}
                                    />
                                ))
                            }
                        </>)
                    }
                </div>
            </div>
        </div>
    );
};

export default DashChat