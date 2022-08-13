import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import left from '../../assests/images/icons-8-left.png';
import left2x from '../../assests/images/icons-8-left@2x.png';
import left3x from '../../assests/images/icons-8-left@3x.png';
import library from '../../assests/images/library-un-selected.png';
import library2x from '../../assests/images/library-un-selected@2x.png';
import library3x from '../../assests/images/library-un-selected@3x.png';
import repo from '../../assests/images/repository-un-selected.png';
import repo2x from '../../assests/images/repository-un-selected@2x.png';
import repo3x from '../../assests/images/repository-un-selected@3x.png';
import BaseLayoutWrapper from "../../components/baselayout/BaseLayout";
import { useAppContextState } from "../../services/context";
import ContentDropdown from './components/ContentDropdown';
import ContentFiltersView from "./components/ContentFiltersView";
import ContentPieCharts from './components/ContentPieChart';
import ContentTable from "./components/ContentTable";
import './ContentMain.css';

const ContentLibrary = () => {

    const history = useHistory()
    const [appglobal, setAppGlobal] = useAppContextState()

    useEffect(() => {
        appglobal.pagetitle = "Content Library"
    }, [])

    return (
        <BaseLayoutWrapper>
            <div className="contentcard">
                <div className="content_header">
                    <button onClick={history.goBack} className="btn_back">
                        <img
                            src={left}
                            srcSet={`${left2x} 2x, ${left3x} 3x`}
                            alt='left' />
                    </button>
                    <div className="textstyle">Content Library</div>
                    <Link to={"/content"} className="navistyle libstyle">
                        <img
                            width={20}
                            height={20}
                            src={library}
                            srcSet={`${library2x} 2x, ${library3x} 3x`}
                            alt='left' />
                        <span style={{ paddingLeft: "12px" }}>My Library</span>
                    </Link>
                    <Link className="navistyle repobtn" to={"/content/repository"}>
                        <img
                            width={16}
                            height={20}
                            src={repo}
                            srcSet={`${repo2x} 2x, ${repo3x} 3x`}
                            alt='left' />
                        <span style={{ paddingLeft: "12px" }}>Repository</span>
                    </Link>
                </div>
                <ContentDropdown type="lib" />
                <ContentFiltersView type="lib" />
                <ContentPieCharts />
                <ContentTable type="lib" />
            </div>
        </BaseLayoutWrapper>
    )
}

export default ContentLibrary