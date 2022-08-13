import React from 'react';
import StackGrid from "react-stack-grid";
import socialicon from '../../../assests/images/icons-8-financial-growth-analysis.png';
import subicon from '../../../assests/images/icons-8-math-copy.png';
import scicon from '../../../assests/images/icons-8-test-tube.png';
import interaction from '../../../assests/images/group-interaction.svg';
import modules from '../../../assests/images/modules.svg';
import questions from '../../../assests/images/questions.svg';
import readables from '../../../assests/images/readables.svg';
import trek from '../../../assests/images/trek.svg';
import multimedia from '../../../assests/images/video.svg';
import "./MyStudyCircleDashInfo.css"

const CoursesDashInfo = (props) => {
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <button type="button" className="dash-item">
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <span className="dash-title">
                        {props.title}
                    </span>
                    <span className="dash-type">
                        {props.type}
                    </span>
                </div>
            </button>
            <span style={{ height: "10px" }}></span>
        </div>
    )
}

const SubjectsDashInfo = (props) => {
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <button type="button" className="dash-item">
                <span className="dash-title">
                    <img style={{ marginRight: "20px" }} src={props.img} alt="subject" />
                    {props.title}
                </span>
            </button>
        </div>
    )
}

const AssetsDashInfo = (props) => {
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <button type="button" className="dash-item">
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <img style={{ marginRight: "15px" }} src={props.img} alt="subject" />
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <span className="dash-title">
                            {props.title}
                        </span>
                        <span className="dash-type">
                            {props.type}
                        </span>
                    </div>
                </div>
            </button>
            <span style={{ height: "10px" }}></span>
        </div>
    )
}

const MyStudyCircleDashInfo = () => {

    const coursesdashlist = [
        { name: "Focus Course", type: "Assigned" },
        { name: "Mission Course", type: "Recommended" },
        { name: "Pre-Foundation", type: "Assigned" },
        { name: "Advanced Course", type: "Assigned" },
        { name: "Basic Course", type: "Recommended" },
    ];

    const subjectsdashlist = [
        { name: "Mathematics", image: subicon },
        { name: "Social Science", image: socialicon },
        { name: "Science", image: scicon },
        { name: "Science", image: scicon },
    ];

    const assetsdashlist = [
        { name: "Multimedia", image: multimedia, type: "20,499" },
        { name: "Readables", image: readables, type: "20,458" },
        { name: "Modules", image: modules, type: "1,20,578" },
        { name: "Questions", image: questions, type: "1,20,578" },
        { name: "Interactions", image: interaction, type: "1,20,578" },
        { name: "Trek", image: trek, type: "20,458" },
        { name: "RAFT", image: trek, type: "20,458" },
    ];

    return (
        <div className="dash-info">
            {/* COURSES */}
            <div className="dash-info-head">
                <span>COURSES - {coursesdashlist.length}</span>
                <span> 0 Course Selected</span>
            </div>
            <div style={{ marginTop: "30px", marginLeft: "-99px" }}>
                <StackGrid
                    columnWidth={200}>
                    {coursesdashlist.map((item, index) => (
                        <CoursesDashInfo
                            key={index}
                            title={item.name}
                            type={item.type}
                        />
                    ))}
                </StackGrid>
            </div>
            {/* SUBJECTS */}
            <div style={{ height: "30px" }}></div>
            <div className="dash-info-head">
                <span>SUBJECTS - {subjectsdashlist.length}</span>
                <span> 0 Subject Selected</span>
            </div>
            <div style={{ marginTop: "30px", marginLeft: "-99px" }}>
                <StackGrid
                    columnWidth={200}>
                    {subjectsdashlist.map((item, index) => (
                        <SubjectsDashInfo
                            key={index}
                            title={item.name}
                            img={item.image}
                        />
                    ))}
                </StackGrid>
            </div>
            {/* ASSETS */}
            <div style={{ height: "30px" }}></div>
            <div className="dash-info-head">
                <span>ASSETS - {assetsdashlist.length}</span>
                <span> View Details ></span>
            </div>
            <div style={{ marginTop: "30px", marginLeft: "-99px" }}>
                <StackGrid
                    columnWidth={200}>
                    {assetsdashlist.map((item, index) => (
                        <AssetsDashInfo
                            key={index}
                            title={item.name}
                            img={item.image}
                            type={item.type}
                        />
                    ))}
                </StackGrid>
            </div>

        </div>
    )
}

export default MyStudyCircleDashInfo