import React, { useState } from 'react';
import igreen_modules from "../../../assests/images/green-modules.svg";
import igreen_multimedia from "../../../assests/images/green-multimedia.svg";
import igreen_questions from "../../../assests/images/green-questions.svg";
import igreen_raft from "../../../assests/images/green-raft.svg";
import igreen_readables from "../../../assests/images/green-readables.svg";
import igreen_trek from "../../../assests/images/green-trek.svg";
import iblue_modules from "../../../assests/images/blue-modules.svg";
import iblue_multimedia from "../../../assests/images/blue-multimedia.svg";
import iblue_questions from "../../../assests/images/blue-questions.svg";
import iblue_raft from "../../../assests/images/blue-raft.svg";
import iblue_readables from "../../../assests/images/blue-readables.svg";
import iblue_trek from "../../../assests/images/blue-trek.svg";
import '../ContentMain.css';

const FilterViewButton = (props) => {
    const [uiactive, setUiActive] = useState(false);
    const handleClick = () => {
        if (uiactive)
            setUiActive(false)
        else
            setUiActive(true)
    }
    return (
        props.type === "lib" ? (
            <button onClick={handleClick} className={`filter_view_btn_lib ${uiactive ? "filter_view_btn_lib_active" : ""}`}>
                <div className="filter_view_col">
                    <img src={props.img_src} alt={props.name} className="filter_view_img"
                        width={24} height={24} />
                </div>
                <div className="filter_view_col">
                    <span className="filter_view_name_lib">{props.name}</span>
                    <span className="filter_view_value_lib">{props.value}</span>
                </div>
            </button>
        ) : (
                <button onClick={handleClick} className={`filter_view_btn_repo ${uiactive ? "filter_view_btn_repo_active" : ""}`}>
                    <div className="filter_view_col">
                        <img src={props.img_src} alt={props.name} className="filter_view_img"
                            width={24} height={24} />
                    </div>
                    <div className="filter_view_col">
                        <span className="filter_view_name_repo">{props.name}</span>
                        <span className="filter_view_value_repo">{props.value}</span>
                    </div>
                </button>
            )

    )
}

const ContentFiltersView = (props) => {

    const [uistatepage, setuiStatePage] = useState()

    return (
        props.type === "lib" ? (
            <div className="filter_view">
                <FilterViewButton type="lib" name="Multimedia" value="20,211" img_src={igreen_multimedia} />
                <FilterViewButton type="lib" name="Readables" value="20,211" img_src={igreen_readables} />
                <FilterViewButton type="lib" name="Questions" value="20,211" img_src={igreen_questions} />
                <FilterViewButton type="lib" name="Modules" value="20,211" img_src={igreen_modules} />
                <FilterViewButton type="lib" name="Trek" value="20,211" img_src={igreen_trek} />
                <FilterViewButton type="lib" name="Raft" value="20,211" img_src={igreen_raft} />
            </div>
        ) : (
                <div className="filter_view">
                    <FilterViewButton type="repo" name="Multimedia" value="20,211" img_src={iblue_multimedia} />
                    <FilterViewButton type="repo" name="Readables" value="20,211" img_src={iblue_readables} />
                    <FilterViewButton type="repo" name="Questions" value="20,211" img_src={iblue_questions} />
                    <FilterViewButton type="repo" name="Modules" value="20,211" img_src={iblue_modules} />
                    <FilterViewButton type="repo" name="Trek" value="20,211" img_src={iblue_trek} />
                    <FilterViewButton type="repo" name="Raft" value="20,211" img_src={iblue_raft} />
                </div>
            )
    )
}

export default ContentFiltersView
