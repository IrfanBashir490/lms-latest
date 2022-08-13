import { format } from "date-fns";
import React from 'react';
import { Row } from "react-bootstrap";
import imgglobal from '../../../assests/images/global.png';
import imgglobal2x from '../../../assests/images/global@2x.png';
import imgglobal3x from '../../../assests/images/global@3x.png';
import hideImg from '../../../assests/images/hide.png';
import hideImg2x from '../../../assests/images/hide@2x.png';
import hideImg3x from '../../../assests/images/hide@3x.png';
import pray from '../../../assests/images/icons-8-pray.png';
import pray2x from '../../../assests/images/icons-8-pray@2x.png';
import pray3x from '../../../assests/images/icons-8-pray@3x.png';
import pie from '../../../assests/images/pie-chart.png';
import pie2x from '../../../assests/images/pie-chart@2x.png';
import pie3x from '../../../assests/images/pie-chart@3x.png';
import unhideImg from '../../../assests/images/view.png';
import unhideImg2x from '../../../assests/images/view@2x.png';
import unhideImg3x from '../../../assests/images/view@3x.png';
import './MyDiscussion.css';

const MyDiscussionElement = (props) => {

    return (
        <Row>
            <div style={{ marginLeft: '30px', display: 'flex' }}>
                <div className={props.repo ? "listStyling_repo" : "listStyling"}>
                    {props.repo ?
                        <span style={{ marginRight: '30px' }}>
                            <input className='input-checkbox' type="checkbox" name="chk[]" />
                        </span>
                        : null
                    }
                    <div style={props.repo ? { display: 'flex', flexDirection: 'column', width: '530px' } :
                        { display: 'flex', flexDirection: 'column', width: '335px' }}>
                        <div className='title-count' style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '330px' }}>
                            <button className="title_btn"
                                onClick={() => props.handleClick(props.refItem)}>
                                {props.index} . {props.title}
                            </button>
                            {props.listNumberCss == "oval" ?
                                <span className='list-number-oval-i'>{props.listNumber}</span>
                                :
                                <span className='list-number-rectangle-i'>{props.listNumber}</span>
                            }
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', marginTop: '10px' }}>
                            <span>
                                <img src={props.creatorProfile} style={{ width: '16px', height: '16px' }} />
                                <span className="creatorText">
                                    {props.creator} (Creator)
                                </span>
                            </span>
                            <span style={{ marginLeft: "20px" }}>
                                <img src={props.authorProfile} style={{ width: '16px', height: '16px' }} />
                                <span className="creatorText">
                                    {props.author} (Author)
                                </span>
                            </span>
                        </div>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <span className="discussed-details" >
                            <span className="Discussed">Discussed</span>
                            <span className="dateStylings">
                                {props.discussedDate ? format(new Date(props.discussedDate), "dd MMM yyyy") : null}
                            </span>
                        </span>

                        <span className="created-details">
                            <span className="Created">Created</span>
                            <span className="dateStylings">
                                {props.createdDate ? format(new Date(props.createdDate), "dd MMM yyyy") : null}
                            </span>
                        </span>
                        <span className="Rectangle-pray">
                            <img src={pray} srcSet={`${pray2x} 2x,${pray3x} 3x`}></img>
                            <span className="pray-number">{props.likes}</span>
                        </span>
                        <span className="Rectangle-pie">
                            <span className="globalpngStyling">
                                <img src={imgglobal} srcSet={`${imgglobal2x} 2x,${imgglobal3x} 3x`} alt="global-icon"></img>
                            </span>
                            <span className="piechartPngStyling">
                                <img src={pie} srcSet={`${pie2x} 2x, ${pie3x} 3x`}></img>
                            </span>
                            <span className="hidePngStyling">
                                {props.hide ?
                                    <img src={hideImg} srcSet={`${hideImg2x} 2x, ${hideImg3x} 3x`}></img> :
                                    <img src={unhideImg} srcSet={`${unhideImg2x} 2x, ${unhideImg3x} 3x`}></img>
                                }
                            </span>
                        </span>
                        {(props.import == "true") ?
                            <div className="imported" style={props.repo ? { marginLeft: '0' } : { marginLeft: '-65px' }}>
                                <span className="imported-text">Imported</span>
                            </div>
                            : null
                        }
                    </div>
                </div>
            </div>
        </Row>
    )
}
export default MyDiscussionElement