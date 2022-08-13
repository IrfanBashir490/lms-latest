import React, { useEffect, useState } from 'react';
import chat from '../../../assests/images/icons-8-chat.png';
import chat2x from '../../../assests/images/icons-8-chat@2x.png';
import chat3x from '../../../assests/images/icons-8-chat@3x.png';
import editicon from '../../../assests/images/icons-8-edit.svg';
import infoicon from '../../../assests/images/icons-8-info.svg';
import left from '../../../assests/images/icons-8-left.png';
import left2x from '../../../assests/images/icons-8-left@2x.png';
import left3x from '../../../assests/images/icons-8-left@3x.png';
import student from '../../../assests/images/student.png';
import student2x from '../../../assests/images/student@2x.png';
import student3x from '../../../assests/images/student@3x.png';
import { useAppContextState } from '../../../services/context';
import { StudyCircleService } from '../../../services/studycircle-service';
import './CircleElement.css';
import './MyStudyCircleDash.css';

const MyStudyCircleDash = () => {

    const [appglobal, setAppGlobal] = useAppContextState()
    const [mycircles, setCircles] = useState([])
    useEffect(() => {
        appglobal.pagetitle = ""
        StudyCircleService.getUserStudyCircle().then((res) => {
            setCircles(res);
        });
    }, []);

    const getMaxItem = (arr, prop) => {
        var max;
        for (var i = 0; i < arr.length; i++) {
            if (max == null || parseInt(arr[i][prop]) > parseInt(max[prop]))
                max = arr[i];
        }
        return max;
    }

    const evalCircleStyle = (val) => {
        const max = getMaxItem(mycircles, "students").students.length;
        const currentVal = parseInt(val)
        if (currentVal <= (0.3 * max))
            return "sm"
        else if ((0.3 * max) < currentVal <= (0.6 * max))
            return "md"
        else if ((0.6 * max) < currentVal)
            return "lg"
    }

    return (
        <div className="study-circle-dash-main">
            <div className="titlehead">
                <img
                    style={{ marginLeft: "20px", marginRight: "20px" }}
                    src={left}
                    srcSet={`${left2x} 2x, ${left3x} 3x`}
                    alt='back' />
                <div className="currentcircle">
                    My Study Circle &gt; 6th Class
                </div>
                <div className="currentoptions">
                    <span style={{ marginLeft: "10px", width: "140px", textAlign: "left" }}>6th Class</span>
                    <img width={18} height={18} src={infoicon} alt="infoicon" />
                    <span style={{ width: "16px" }}></span>
                    <img width={16} height={16} src={editicon} alt="editclass" />
                    <span style={{ width: "10px" }}></span>
                </div>
                <div className="chaticon">
                    <img width={20} height={20}
                        src={chat}
                        srcSet={`${chat2x} 2x, ${chat3x} 3x`}
                        alt='chaticon' />
                </div>
            </div>

            {/* Oval Dashboard */}
            <div className="oval">
                {/* <StackGrid
                    columnWidth={120}>
                    {mycircles.map((item, index) => (
                        <CircleElement
                            key={index}
                            circlename={item.name}
                            value={item.students.length}
                            type={item.scType}
                            avatar="https://source.unsplash.com/random"
                            styletype={evalCircleStyle(item.students.length)}
                        />
                    ))}
                </StackGrid> */}
            </div>
            {/* GIMMICK OVALS */}
            <div>
                <span className="ovalbg-1">Hello...</span>
                <span className="ovalbg-2">Hindi</span>
                <span className="ovalbg-3">Reading</span>
                <span className="ovalbg-4">Cultural</span>
                <span className="ovalbg-5">Adv</span>
                <span className="ovalbg-6">Class</span>
                <span className="ovalbg-7">Art</span>
                <span className="ovalbg-8">Music</span>

                {/* **************************************************************** */}
                {/* FOR DEMO PURPOSE - REMOVE */}
                <span className='ovaldummy-1'></span>
                <span className='ovaldummy-2'></span>
                <span className='ovaldummy-3'></span>
                <span className='ovaldummy-4'></span>
                <span className='ovaldummy-5'></span>
                <span className='ovaldummy-6'></span>

                {/* OVAL TEXTS */}
                <span className='ovalvaldummy-1'></span>
                <span className='ovalvaldummy-2'>
                    <svg viewBox="0 0 90 90" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="45" cy="45" r="45" stroke-dasharray="30,10"
                            stroke-width="2" stroke="#000" fill="#fff" fill-opacity="0" />
                    </svg>
                </span>
                <span className='ovalvaldummy-3'>
                    <svg viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="75" cy="75" r="75" stroke-dasharray="30,10"
                            stroke-width="2" stroke="#000" fill="#fff" fill-opacity="0" />
                    </svg>
                </span>
                <span className='ovalvaldummy-4'></span>
                <span className='ovalvaldummy-5'></span>

                {/* VALUE DETAILS */}
                <div className='valdummy-1 item'>
                    <img
                        style={{ borderRadius: "20px" }}
                        width={20} height={20}
                        className="valdummy-1-ovalavatar"
                        src="https://source.unsplash.com/random"
                        alt="avatar" />
                    <span className="title">
                        6th B Class
                    </span>
                    <div className="ovalinfo">
                        <img
                            style={{ marginRight: "5px" }}
                            width={12} height={16}
                            src={student}
                            srcSet={`${student2x} 2x, ${student3x} 3x`}
                            alt="student-icon" />
                        <span className="value">46</span>
                    </div>
                </div>
                <div className='valdummy-2 item'>
                    <img
                        style={{ borderRadius: "20px" }}
                        width={20} height={20}
                        className="valdummy-2-ovalavatar"
                        src="https://source.unsplash.com/random"
                        alt="avatar" />
                    <span className="title">
                        Yoga
                    </span>
                    <div className="ovalinfo">
                        <img
                            style={{ marginRight: "5px" }}
                            width={12} height={16}
                            src={student}
                            srcSet={`${student2x} 2x, ${student3x} 3x`}
                            alt="student-icon" />
                        <span className="value">12</span>
                    </div>
                </div>
                <div className='valdummy-3 item'>
                    <img
                        style={{ borderRadius: "20px" }}
                        width={20} height={20}
                        className="valdummy-3-ovalavatar"
                        src="https://source.unsplash.com/random"
                        alt="avatar" />
                    <span className="title">
                        Annual Sports
                    </span>
                    <div className="ovalinfo">
                        <img
                            style={{ marginRight: "5px" }}
                            width={12} height={16}
                            src={student}
                            srcSet={`${student2x} 2x, ${student3x} 3x`}
                            alt="student-icon" />
                        <span className="value">22</span>
                    </div>
                </div>
                <div className='valdummy-4 item'>
                    <img
                        style={{ borderRadius: "20px" }}
                        width={20} height={20}
                        className="valdummy-4-ovalavatar"
                        src="https://source.unsplash.com/random"
                        alt="avatar" />
                    <span className="title">State Level</span>
                    <span className="title">Quiz Group</span>
                    <div className="ovalinfo">
                        <img
                            style={{ marginRight: "5px" }}
                            width={12} height={16}
                            src={student}
                            srcSet={`${student2x} 2x, ${student3x} 3x`}
                            alt="student-icon" />
                        <span className="value">12</span>
                    </div>
                </div>
                <div className='valdummy-5 item'>
                    <img
                        style={{ borderRadius: "20px" }}
                        width={20} height={20}
                        className="valdummy-5-ovalavatar"
                        src="https://source.unsplash.com/random"
                        alt="avatar" />
                    <span className="title">
                        6th A Class
                    </span>
                    <div className="ovalinfo">
                        <img
                            style={{ marginRight: "5px" }}
                            width={12} height={16}
                            src={student}
                            srcSet={`${student2x} 2x, ${student3x} 3x`}
                            alt="student-icon" />
                        <span className="value">27</span>
                    </div>
                </div>

                {/* **************************************************************** */}
            </div>
        </div>
    );
};
export default MyStudyCircleDash;