import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import left from "../../assests/images/icons-8-left.png";
import left2x from "../../assests/images/icons-8-left@2x.png";
import left3x from "../../assests/images/icons-8-left@3x.png";
import library from "../../assests/images/library.png";
import library2x from "../../assests/images/library@2x.png";
import library3x from "../../assests/images/library@3x.png";
import repo from "../../assests/images/repository-selected.png";
import repo2x from "../../assests/images/repository-selected@2x.png";
import repo3x from "../../assests/images/repository-selected@3x.png";
import BaseLayoutWrapper from "../../components/baselayout/BaseLayout";
import { ContentService } from "../../services/content-service";
import { useAppContextState } from "../../services/context";
import ContentDropdown from "./components/ContentDropdown";
import ContentFiltersView from "./components/ContentFiltersView";
import ContentPieChart from "./components/ContentPieChart";
import ContentTable from "./components/ContentTable";
import "./ContentMain.css";

const ContentRepository = () => {
  const history = useHistory()
  const [contents, setContents] = useState([]);
  const [appglobal, setAppGlobal] = useAppContextState()

  useEffect(() => {
    appglobal.pagetitle = "Content Repository"
    ContentService.getUserContent(1, 10).then((res) => setContents(res));
  }, []);

  return (
    <BaseLayoutWrapper>
      <div className="contentcard">
        <div className="content_header">
          <button onClick={history.goBack} className="btn_back">
            <img src={left} srcSet={`${left2x} 2x, ${left3x} 3x`} alt="left" />
          </button>
          <div className="textstyle">Content Repository</div>
          <Link
            activeStyle={{ width: "140px" }}
            to={"/content"}
            className="navistyle libbtn"
          >
            <img
              width={20}
              height={20}
              src={library}
              srcSet={`${library2x} 2x, ${library3x} 3x`}
              alt="left"
            />
            <span style={{ paddingLeft: "12px" }}>My Library</span>
          </Link>
          <Link className="navistyle repostyle" to={"/content/repository"}>
            <img
              width={16}
              height={20}
              src={repo}
              srcSet={`${repo2x} 2x, ${repo3x} 3x`}
              alt="left"
            />
            <span style={{ paddingLeft: "12px" }}>Repository</span>
          </Link>
        </div>
        <ContentDropdown type="repo" />
        <ContentFiltersView type="repo" />
        <ContentPieChart />
        <ContentTable type="repo" />
      </div>
    </BaseLayoutWrapper>
  );
};

export default ContentRepository;
