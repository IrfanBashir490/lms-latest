import React from 'react';
import deleteIcon from '../../../assests/images/delete-blue.png';
import deleteIcon2x from '../../../assests/images/delete-blue@2x.png';
import deleteIcon3x from '../../../assests/images/delete-blue@3x.png';
import forward from '../../../assests/images/forward.png';
import forward2x from '../../../assests/images/forward@2x.png';
import forward3x from '../../../assests/images/forward@3x.png';
import editMessage from '../../../assests/images/icons-8-edit-copy.png';
import pdf from '../../../assests/images/icons-8-pdf-2-copy-5.png';
import star from '../../../assests/images/icons-8-star.png';
import word from '../../../assests/images/icons-8-word-copy-5.png';
import like from '../../../assests/images/like.png';
import reply from '../../../assests/images/reply.png';
import reply2x from '../../../assests/images/reply@2x.png';
import reply3x from '../../../assests/images/reply@3x.png';

const MessageElement = (props) => {
    return (
        <div style={{ display: 'flex' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ marginTop: '15px', display: 'flex' }}>
                    {props.left ?
                        <span>
                            {props.status ?
                                <img className="message-profile-icon-online" src={props.profileicon} />
                                : <img className="message-profile-icon-offline" src={props.profileicon} />
                            }
                        </span>
                        : null
                    }

                    <span className='chat-message' onClick={() => props.board ? null : props.toggleOptions(props.index)}>
                        {(props.reply == "false") ? null
                            :
                            (<span>
                                <span className='reply-name'> {props.replyName} </span>
                                <span className='text-details text-details-text'>  <span className='reply-stick'>   &nbsp; </span>  {props.replyMessage}</span>
                            </span>)
                        }
                        <span className='chat-message-text'>
                            {props.message}
                        </span>

                        {props.docs ?
                            <span className='docs-display-main'>
                                {(props.docs).map((doc) => (
                                    <span className='docs-display'>
                                        <span className='doc-display-img'> {doc.type == "word" ? <img src={word} /> : <img src={pdf} />}</span>
                                        <span className='doc-display-text'>{doc.name} <span className='doc-display-size'>{doc.size}</span> </span>

                                    </span>
                                ))}
                            </span>
                            : null
                        }
                        {props.image ?
                            <span>  <img className='img-display' src={props.image} /> </span>
                            : null
                        }
                        <span className='starred'> <img src={star} /></span>
                    </span>
                </div>
                {props.board ? null :
                    (props.index !== props.state_index || props.hidden) ? null : (
                        <span className='option-holder'>
                            <span className='option-button-move' onClick={() => props.moveToBoard(props.index)}>
                                <span className='option-button-text' style={{ marginLeft: '20px' }}> Move to Board </span>
                            </span>
                            <span className='option-button-interaction'>
                                <span className='option-button-text' style={{ marginLeft: '13px' }}> Create Interaction </span>
                            </span>
                            <img className='reply-icon' src={reply} srcSet={`${reply2x} 2x,${reply3x} 3x`} alt="Reply" />
                            <img className='reply-icon' src={forward} srcSet={`${forward2x} 2x,${forward3x} 3x`} alt="Forwrad" />
                            <img className='like-icon' src={like} srcSet={`${like} 2x,${like} 3x`} alt="Like" />
                            <img className='delete-icon' src={deleteIcon} srcSet={`${deleteIcon2x} 2x, ${deleteIcon3x} 3x`} alt="Delete" />
                        </span>
                    )
                }
            </div>
            {props.board ? null :
                (props.index !== props.state_index || props.hidden) ? null : (
                    <span>
                        <img className='edit-message' src={editMessage} />
                    </span>
                )
            }
        </div>
    )
}
export default MessageElement