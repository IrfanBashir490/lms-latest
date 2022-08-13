import React from 'react';
import student from '../../../assests/images/student.png';
import student2x from '../../../assests/images/student@2x.png';
import student3x from '../../../assests/images/student@3x.png';
import './CircleElement.css'

const CircleElement = (props) => {

    const evalCssSize = () => {
        var maincss
        if (props.styletype === "sm") {
            maincss = "item item-sm ovalitem"
        } else if (props.styletype === "md") {
            maincss = "item item-md ovalitem"
        } else if (props.styletype === "lg") {
            maincss = "item item-lg ovalitem"
        }

        if(props.type == "closed") {
            maincss = maincss.concat(" oval-dashed")
        } else {
            maincss = maincss.concat(" oval-solid")
        }

        return maincss
    }

    const evalAvatarSize = () => {
        if (props.styletype === "sm") {
            return "ovalavatar-sm"
        } else if (props.styletype === "md") {
            return "ovalavatar-md"
        } else if (props.styletype === "lg") {
            return "ovalavatar-lg"
        }
    }

    return (
        <div className={evalCssSize()}>
            <img
                style={{ borderRadius: "20px" }}
                width={20} height={20}
                className={evalAvatarSize()}
                src={props.avatar}
                alt="avatar" />
            <span className="title">
                {props.circlename}
            </span>
            <div className="ovalinfo">
                <img
                    style={{ marginRight: "5px" }}
                    width={12} height={16}
                    src={student}
                    srcSet={`${student2x} 2x, ${student3x} 3x`}
                    alt="student-icon" />
                <span className="value">{props.value}</span>
            </div>
        </div>
    );
};
export default CircleElement;