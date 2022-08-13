import { format } from "date-fns";
import React from 'react';
import hideImg from '../../../assests/images/hide.png';
import hideImg2x from '../../../assests/images/hide@2x.png';
import hideImg3x from '../../../assests/images/hide@3x.png';
import cinema from '../../../assests/images/icons-8-cinema-film-play.png';
import cinema2x from '../../../assests/images/icons-8-cinema-film-play@2x.png';
import cinema3x from '../../../assests/images/icons-8-cinema-film-play@3x.png';
import comments from '../../../assests/images/icons-8-comments.png';
import comments2x from '../../../assests/images/icons-8-comments@2x.png';
import comments3x from '../../../assests/images/icons-8-comments@3x.png';
import facebooklike from '../../../assests/images/icons-8-facebook-like.png';
import facebooklike2x from '../../../assests/images/icons-8-facebook-like@2x.png';
import facebooklike3x from '../../../assests/images/icons-8-facebook-like@3x.png';
import pray from '../../../assests/images/icons-8-pray-dull.png';
import pray2x from '../../../assests/images/icons-8-pray-dull@2x.png';
import pray3x from '../../../assests/images/icons-8-pray-dull@3x.png';
import pie from '../../../assests/images/pie-chart.png';
import pie2x from '../../../assests/images/pie-chart@2x.png';
import pie3x from '../../../assests/images/pie-chart@3x.png';
import unhideImg from '../../../assests/images/view.png';
import unhideImg2x from '../../../assests/images/view@2x.png';
import unhideImg3x from '../../../assests/images/view@3x.png';
import './MyAssignment.css';

const AssignmentElement = (props) => {
    return (
        <div className="assignment_row assignment_element" style={{ marginLeft: '10px' }}>
            <div className="assignment_col" style={{ margin: "10px" }}>
                <img src={props.avatar} width={30} height={30} alt="icon" />
            </div>
            <div className="assignment_col" style={{ marginLeft: '10px' }}>
                <button className="assignment_item_btn"
                    onClick={() => props.handleClick(props.refItem)}>
                    <span> {props.index} . {props.title}</span>
                    <span className="assign-list-number-rectangle">{props.worksNo}</span>
                </button>
                <span style={{ height: "5px" }}></span>
                <div className="contentTextStyling">
                    {props.description}
                </div>
                <span style={{ height: "5px" }}></span>
                <div className="assignment_row">
                    <span className="assignmentdetailsstyling">
                        Assigned : {format(new Date(props.assignDate), "dd/MM/yyyy")} - Due : {format(new Date(props.dueDate), "dd/MM/yyyy")}
                    </span>
                    <span style={{ width: "20px" }}></span>
                    <span className="assisgnmenttimeStyling">
                        Assigned Time : {props.time}
                    </span>
                </div>
            </div>
            <div className="assignment_col">
                <div className="assignment_row" style={{ marginLeft: "80px" }}>
                    <span className="icon_outline">
                        <img src={cinema} srcSet={`${cinema2x} 2x,${cinema3x} 3x`} width={14} height={14}></img>
                        <span className="icon_outline_val">{props.refItem.contents.length}</span>
                    </span>
                    <span className="icon_outline">
                        <img src={comments} srcSet={`${comments2x} 2x,${comments3x} 3x`} width={14} height={14}></img>
                        <span className="icon_outline_val">?</span>
                    </span>
                    <span className="icon_outline">
                        <img src={facebooklike} srcSet={`${facebooklike2x} 2x,${facebooklike3x} 3x`} width={14} height={14}></img>
                        <span className="icon_outline_val">{props.likes}</span>
                    </span>
                    <span className="icon_outline">
                        <img src={pray} srcSet={`${pray2x} 2x,${pray3x} 3x`} width={14} height={14}></img>
                        <span className="icon_outline_val">{props.likes}</span>
                    </span>
                    <span className="assign_pie">
                        <img src={pie} srcSet={`${pie2x} 2x, ${pie3x} 3x`}></img>
                    </span>
                    <span className="assign_hide">
                        {props.hide ?
                            <img src={hideImg} srcSet={`${hideImg2x} 2x, ${hideImg3x} 3x`}></img> :
                            <img src={unhideImg} srcSet={`${unhideImg2x} 2x, ${unhideImg3x} 3x`}></img>
                        }
                    </span>
                </div>
            </div>
        </div>
    )
}

export default AssignmentElement