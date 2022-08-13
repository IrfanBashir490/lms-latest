import React, { Fragment, useState } from 'react';
import './ActivityTimeline.css';

const ActivityTimelineElement = (props) => {

    const [bkcolor, setBkcolor] = useState({ amber: "#ffefe6", sky: "#e1ebf5", gray: "#ece7ff" })

    const getBgColor = () => {
        if (props.bgcolor === "amber") {
            return bkcolor.amber
        } else if (props.bgcolor === "sky") {
            return bkcolor.sky
        } else if (props.bgcolor === "gray") {
            return bkcolor.gray
        }
    }

    const getArrowBorderColor = () => {
        if (props.pos === "left") {
            if (props.bgcolor === "amber") {
                return "left_amber"
            } else if (props.bgcolor === "sky") {
                return "left_sky"
            } else if (props.bgcolor === "gray") {
                return "left_gray"
            }
        } else {
            if (props.bgcolor === "amber") {
                return "right_amber"
            } else if (props.bgcolor === "sky") {
                return "right_sky"
            } else if (props.bgcolor === "gray") {
                return "right_gray"
            }
        }
    }

    return (
        <div className={`${props.pos === 'left' ? 'timeline_horln_left' : 'timeline_horln_right'}`}>
            <div className="timeline_row">
                {props.pos === 'left' ?
                    <span className={`timeline_arrow_left ${getArrowBorderColor()}`}></span> : null}
                <div className="timeline_col timeline_element" style={{ backgroundColor: getBgColor() }}>
                    <span className="timeline_title">{props.title}</span>
                    {props.author ? (
                        <span className="timeline_subtitle">By: {props.author}</span>
                    ) : null}
                    <span style={{ height: "10px" }}></span>
                    {props.comment ? (
                        <Fragment>
                            <span className="timeline_comment_head">Comment</span>
                            <span className="timeline_comment_text">{props.comment}</span>
                        </Fragment>
                    ) : null}
                </div>
                {props.pos === 'right' ?
                    <span className={`timeline_arrow_right ${getArrowBorderColor()}`}></span> : null}
            </div>
        </div>
    )
}

export default ActivityTimelineElement