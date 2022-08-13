import React, { useEffect, useState } from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import { useHistory } from 'react-router-dom';
import addButton from '../../../assests/images/add-button.png';
import addButton2x from '../../../assests/images/add-button@2x.png';
import addButton3x from '../../../assests/images/add-button@3x.png';
import edit from '../../../assests/images/icons-8-edit.png';
import left from '../../../assests/images/icons-8-left.png';
import left2x from '../../../assests/images/icons-8-left@2x.png';
import left3x from '../../../assests/images/icons-8-left@3x.png';
import share from '../../../assests/images/icons-8-share.png';
import circle from '../../../assests/images/oval.png';
import circle2x from '../../../assests/images/oval@2x.png';
import circle3x from '../../../assests/images/oval@3x.png';
import profileicon from '../../../assests/images/profile-icon.png';
import send from '../../../assests/images/send.png';
import send2x from '../../../assests/images/send@2x.png';
import send3x from '../../../assests/images/send@3x.png';
import BaseLayoutWrapper from "../../../components/baselayout/BaseLayout";
import { useAppContextState } from '../../../services/context';
import { DiscussionService } from '../../../services/discussion-service';
import './DiscussionDetails.css';
import MessageElement from './MessageElement';

const DiscussionDetails = (props) => {

    /******************************* */
    // STATES
    /***************************** */
    const history = useHistory()
    const [appglobal, setAppGlobal] = useAppContextState()
    const [currdis, setCurrDis] = useState({})
    const [hidden, setHidden] = useState(true)
    const [index, setIndex] = useState()
    const [board, setBoard] = useState([])

    useEffect(() => {
        appglobal.pagetitle = "Discussion Details"
        if (props.match.params.idval)
            DiscussionService.getById(props.match.params.idval).then(res => setCurrDis(res))
    }, [])

    /***************************** */
    // EVENTS
    /***************************** */
    const toggleOptions = (index) => {
        setHidden((prev) => !prev)
        setIndex((prev) => index)
    }

    const moveToBoard = (index) => {
        setBoard(board => [...board, index])
    }

    const filterBoard = (board) => {
        return board.filter((x, i, a) => a.indexOf(x) == i)
    }
    
    const documents = [
        { name: "Unit II: Structure of Atom", type: "pdf", size: "2.3 MB" },
        { name: "States of Matter: Gases …", type: "pdf", size: "1.58 MB" },
        { name: "Unit VIII: Redox Reaction", type: "word", size: "10.89 MB" },
        { name: "Unit VI: Chemical Therm…", type: "pdf", size: "5.6 MB" }
    ]
    
    const links = [
        { message: "Unit III: Classification of Elements and Periodicity in Properties", status: true, reply: "false", left: true },
        { message: "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero ", status: true, reply: "false", left: true },
        { message: "Earlier, the RBI had imposed restrictions on the lender, like a bar on lending activities and cap on deposit withdrawal. On Tuesday, RBI said there was irregularities due to which the restrictions had to ne imposed.", status: true, reply: "false", left: true, docs: documents },
        { message: "The Directions were necessitated on account of major financial irregularities, failure of internal control and systems of the bank and wrong/under-reporting of its exposures under various Off-site Surveillance reports to RBI that came to the Reserve Bank’s notice recently, the RBI said adding the board of the bank has been superceded and an administrator has been appointed.", reply: "true", replyName: "Chinmay Bhat", replyMessage: "Earlier, the RBI had imposed restrictions on the lender, like a bar on lending activities and cap on deposit withdrawal. On Tuesday, …", left: true },
        { message: "The Reserve Bank of India has decided to increase the deposit withdrawal limit of PMC Bank to ₹10,000 from ₹1,000 earlier.", reply: "true", replyName: "Kiran Naik", replyMessage: "The Directions were necessitated on account of major financial irregularities, failure of internal control and systems of the bank and", left: true },
        {
            message: "Position of hydrogen in periodic table, occurrence, isotopes, preparation, properties and uses of hydrogen, hydrides-ionic covalent and interstitial; physical and chemical properties of water, heavy water, hydrogen peroxide -preparation, reactions and structure and use; hydrogen as a fuel.",
            reply: "false",
            image: circle,
            left: true
        },
    ]

    return (
        <BaseLayoutWrapper>
            <div className="details_main">
                <span style={{ display: 'flex', alignItems: 'center' }}>
                    <button className="icons8-left" onClick={history.goBack}>
                        <img
                            src={left}
                            srcSet={`${left2x} 2x, ${left3x} 3x`}
                            alt='left' />
                    </button>
                    {currdis.type ?
                        <span className='heading'>{String(currdis.type).charAt(0).toUpperCase() + String(currdis.type).slice(1)} &nbsp;&gt;&nbsp;
                             {currdis.title}</span> : null}
                </span>
                <hr></hr>

                <span className="header-conatiner" style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', width: '520px' }}>
                        <span style={{ display: 'flex' }}>
                            <span className="share-container">
                                <img src={share} className="icons8-share" />
                            </span>
                            <span className='topic'>{currdis.title}</span>
                        </span>

                        <span style={{ marginTop: '6px', display: 'flex' }}>
                            <span className="share-container">
                                <img src={edit} className="icons8-share" />
                            </span>
                            <span className='info-heading'>{currdis.description}</span>
                        </span>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', width: '180px' }}>
                        {currdis.uid ?
                            <span style={{ display: 'flex', alignItems: 'center' }}>
                                <img className='profile-top' src={currdis.uid.avatar.url} />
                                <span style={{ display: 'flex', flexDirection: 'column', marginLeft: '10px' }}>
                                    <span className='author-name'>{currdis.uid.fName + " " + currdis.uid.lName}</span>
                                    <span className='author-type'> (Editor)</span>
                                </span>
                            </span>
                            : null}

                        {currdis.uid ?
                            <span style={{ display: 'flex', alignItems: 'center', marginTop: "10px" }}>
                                <img className='profile-top' src={currdis.uid.avatar.url} />
                                <span style={{ display: 'flex', flexDirection: 'column', marginLeft: '10px' }}>
                                    <span className='author-name'> {currdis.uid.fName + " " + currdis.uid.lName} </span>
                                    <span className='author-type'> (Author)</span>
                                </span>
                            </span>
                            : null}
                    </div>
                    <div className='mask'>
                        <PieChart
                            data={[
                                { title: 'Participated', value: 14, color: '#489e2d' },
                                { title: 'Not Participated', value: 7, color: '#f2f5f9' },
                            ]}
                        />
                    </div>
                    <span style={{ marginLeft: '41px' }}>
                        <button className="participated border-0 mt-1">
                            <span className='participation-text'> Not Participated   &nbsp; &nbsp;<span style={{ fontSize: '12px' }}> 7 </span>  </span>
                        </button>
                        <button className="not-participated border-0 mt-1">
                            <span className='participation-text'> Participated   &nbsp; &nbsp;<span style={{ fontSize: '12px' }}> 14 </span>  </span>
                        </button>
                    </span>
                </span>
                <hr style={{ marginBottom: '0' }}></hr>


                <div style={{ display: 'flex' }}>
                    <div style={{ height: '1161px', width: '520px' }}>
                        <div>

                            {links.map((link, idx) => (
                                filterBoard(board).map((filter) =>
                                    (filter == idx) ?
                                        <MessageElement
                                            hidden={hidden}
                                            profileicon={profileicon}
                                            toggleOptions={toggleOptions}
                                            message={link.message}
                                            status={link.status}
                                            index={idx}
                                            state_index={index}
                                            moveToBoard={moveToBoard}
                                            board={board}
                                            reply={link.reply}
                                            replyName={link.replyName}
                                            replyMessage={link.replyMessage}
                                            docs={link.docs}
                                            image={link.image}
                                            left={link.left}
                                        />
                                        : null
                                )))
                            }



                        </div>
                    </div>
                    <div className="groupChat-container" >
                        <div style={{ height: '1068px' }}>
                            <span className='group-chats-heading' style={{ display: 'flex', alignItems: 'center' }}>
                                <span className='group-chats-heading-text'> Group Chats  </span>
                                <span className='group-chats-online'> </span>
                                <span className='group-chats-count'> {links.length} </span>
                            </span>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                {console.log(hidden, board, index)}
                                {links.map((link, idx) => (
                                    <MessageElement
                                        hidden={hidden}
                                        profileicon={profileicon}
                                        toggleOptions={toggleOptions}
                                        message={link.message}
                                        status={link.status}
                                        index={idx}
                                        state_index={index}
                                        moveToBoard={moveToBoard}
                                        board={false}
                                        reply={link.reply}
                                        replyName={link.replyName}
                                        replyMessage={link.replyMessage}
                                        docs={link.docs}
                                        image={link.image}
                                        left={link.left}
                                    />
                                ))}
                            </div>
                        </div>
                        <div style={{ height: '1px', backgroundColor: '#d8d4ee' }}></div>

                        <span className='bottom-bar'>

                            <img src={profileicon} className='bottom-message-profile-icon' style={{ marginTop: '0px' }} />
                            <span className='message-type'>
                                <img src={circle} srcSet={`${circle2x} 2x, ${circle3x} 3x`} />
                                <img src={addButton} srcSet={`${addButton2x} 2x, ${addButton3x} 3x`} />
                            </span>
                            <input type="text" className='bottom-message-type' placeholder='Group Chat' />
                            <img style={{ marginLeft: '12px' }} src={send} srcSet={`${send2x} 2x, ${send3x} 3x`} />
                        </span>
                    </div>
                </div>
                {/* <Row style={{height: '1161px' , paddingLeft: '20px' }}>
                        <Col xs="6">

                            { links.map((link , idx) => (
                                filterBoard(board).map(( filter ) => 
                                (filter == idx) ?
                                    <MessageElement
                                    hidden = {hidden}
                                    profileicon = {profileicon}
                                    toggleOptions = {toggleOptions}
                                    message = {link.message}
                                    status = { link.status}
                                    index = {idx}
                                    state_index = {index}
                                    moveToBoard = {moveToBoard}
                                    board = {board}
                                    reply = {link.reply}
                                    replyName = {link.replyName}
                                    replyMessage = {link.replyMessage}
                                    docs = {link.docs}
                                    image = {link.image}
                                    left = {link.left}
                                    />
                                : null
                                )))
                            } 
                            
                            
                                                        
                        </Col>    
                        <Col xs="6" style={{backgroundColor: '#f6f6f6', flex: '0 0 48.6%' , overflow: 'auto'}}>
                        <Row>
                            <span className='group-chats-heading'>
                                <span className='group-chats-heading-text'>
                                Group Chats <span className='group-chats-online'> &nbsp; </span>
                                </span>  
                                <span className='group-chats-count'> 45 </span>
                            </span>
                        </Row>
                        {console.log(hidden , board , index)}
                            {links.map((link , idx) => (
                                    <MessageElement
                                    hidden = {hidden}
                                    profileicon = {profileicon}
                                    toggleOptions = {toggleOptions}
                                    message = {link.message}
                                    status = { link.status}
                                    index = {idx}
                                    state_index = {index}
                                    moveToBoard = {moveToBoard}
                                    board = {false}
                                    reply = {link.reply}
                                    replyName = {link.replyName}
                                    replyMessage = {link.replyMessage}
                                    docs = {link.docs}
                                    image = {link.image}
                                    left = {link.left}
                                />
                            ))}
                            
                            <span className='bottom-bar'>
                            <hr/>
                            <span className='message-box'>
                                <img src={profileicon} className='bottom-message-profile-icon' style={{marginTop: '0px'}}/>
                                <span className='message-type'> 
                                    <img  src={circle} srcSet={`${circle2x} 2x, ${circle3x} 3x`} /> 
                                    <img style={{position: 'absolute', left: '11px' ,top: '11px'}} src={addButton} srcSet={`${addButton2x} 2x, ${addButton3x} 3x`} /> 
                                </span>
                                <input type="text" className='bottom-message-type'/>
                                <img style={{float: 'right' }}  src={send} srcSet={`${send2x} 2x, ${send3x} 3x`} /> 
                                </span>
                            </span>
                        </Col>    
                        

                    </Row> */}
                <br />
            </div>
        </BaseLayoutWrapper>
    )
}

export default DiscussionDetails