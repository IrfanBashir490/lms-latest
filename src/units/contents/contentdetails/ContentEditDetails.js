import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import IconButton from '@material-ui/core/IconButton';
import { useHistory } from 'react-router-dom';
import StackGrid from "react-stack-grid";
import Hide from "../../../assests/images/hide.png";
import icon9 from "../../../assests/images/icons-8-9.svg";
import left from '../../../assests/images/icons-8-left.png';
import left2x from '../../../assests/images/icons-8-left@2x.png';
import left3x from '../../../assests/images/icons-8-left@3x.png';
import iconPray from "../../../assests/images/icons-8-pray.svg";
import iconVisible from "../../../assests/images/icons-8-visible.svg";
import WomenIcon from "../../../assests/images/icons-8-women-age-group-3-filled1.png";
import View from "../../../assests/images/view.png";
import BaseLayoutWrapper from '../../../components/baselayout/BaseLayout';
import ActivityTimeline from '../../../components/timeline/ActivityTimeline';
import ActivityTimelineElement from '../../../components/timeline/ActivityTimelineElement';
import { useAppContextState } from '../../../services/context';
import "../ContentMain.css";
import "./ContentEditDetails.css";


const Contentdetails = (props) => {


  const history = useHistory()
  const [appglobal, setAppGlobal] = useAppContextState()

  useEffect(() => {
    appglobal.pagetitle = "Content Edit"
  }, [])

  return (
    <BaseLayoutWrapper>
      <div className="details_main">
        <div className="deatils_header">
        <IconButton onClick={history.goBack} className="btn_back">
            <img
                src={left}
                srcSet={`${left2x} 2x, ${left3x} 3x`}
                alt='left' />
        </IconButton>
          <div className="textstyle">Course Name  > Content Details > Update</div>
        </div>
        {/* MEDIA DETAILS SECTION */}
        <div className="details_row">
          <div className="details_col">
            <ReactPlayer width="560px" height="373px" controls={true} light={true} className="playercard"
              url='http://commondatastorage.googleapis.com/gtv-videos-bucket/big_buck_bunny_1080p.mp4' />
          </div>
          <div className="details_col details_top_section_right">
            <button className="btn_details_update">Update Content</button>
            <span style={{ height: "20px" }}></span>
            <div className="details_row">
              <span className="idstyle">
                <img src={icon9} alt="icon9" />
                <span>ID: 3534546</span>
              </span>
              <span style={{ width: "20px" }}></span>
              <span className="idstyle">
                <img src={iconVisible} alt="icon9" />
                <span>251</span>
              </span>
              <span style={{ width: "20px" }}></span>
              <span className="idstyle">
                <img src={iconPray} alt="icon9" />
                <span>24</span>
              </span>
            </div>
            <span className="idstyle_endline"></span>
            <div className="details_row details_title">Minerals and Energy Resources - Ncert Solutions for Class 10 Geography CBSE</div>
            <span className="idstyle_endline"></span>
            <div className="details_row details_description">Who will come forward for the next exercise?”
            asks S Somasundaram. A few hands are raised tentatively and giggles rise as one person is selected.
            This is a classroom</div>
            <span className="idstyle_endline"></span>
            <div className="details_row">
              <span className="curastyle">Curated</span>
              <span className="recomstyle">Recommended</span>
              <span className="prvstyle">Private</span>
            </div>
          </div>
        </div>
        {/* DETAILS SECTIONS */}
        <div className="sectionstyle">
          <div className="thecard">
            <div className="subcardstyle" style={{ marginLeft: "39px" }}>
              <p className="maincontstyle">Uploaded</p>
              <p className="thebodstyle">17/Nov/2019</p>
            </div>
            <div className="subcardstyle">
              <p className="maincontstyle">Edited Date</p>
              <p className="thebodstyle">30 Dec 2019</p>
            </div>
            <div className="subcardstyle">
              <p className="maincontstyle">File Type</p>
              <p className="thebodstyle">Video</p>
            </div>
            <div className="subcardstyle">
              <p className="maincontstyle">Duration</p>
              <p className="thebodstyle">5min.</p>
            </div>
            <div className="subcardstyle">
              <p className="maincontstyle">History</p>
              <p className="thebodstyle">6.</p>
            </div>
            <div className="subcardstyle">
              <p className="maincontstyle">Language</p>
              <p className="thebodstyle">English</p>
            </div>
          </div>
          {/* STUDY CIRCLE DETAILS SECTION */}
          <p className="stdyhead">Course</p>
          <p className="stdystyledit">CBSE 10TH Science</p>
          <div style={{ display: "flex" }}>
            <div className="indxstyl">
              <p className="topsty">Social Science</p>
              <p className="theheadsty">Topic</p>
              <p className="theheadsty1">Democracy and Diversity</p>
              <p className="theheadsty">Concepts</p>
              <p className="theheadsty1">Civil Rights Movement in the USA(1954-1968)</p>
              <p className="theheadsty1">African-Americans</p>
              <p className="theheadsty1">The Black power</p>
              <p className="theheadsty" style={{ marginTop: "0px" }}>Objectives</p>
              <p className="theheadsty1">Collaboration</p>
            </div>
            <div className="thecrd">
              <div>
                <img src={Hide} alt="hideicon" className="hideicnstyl" />
                <p className="thetxt">Now hidden</p>
              </div>
              <div className="dot1">
                <div>
                  <p className="thetxtstyl1">6th B Class</p>
                  <img className="icstyle" src={WomenIcon} alt="women-icon" /><p className="nsty">46</p>
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <div className="thecrd12" style={{ marginLeft: "15px" }}>
                  <p className="txt12">1 Sep 19</p>
                </div>
                <div className="thecrd12" style={{ marginLeft: "10px" }}>
                  <p className="txt12">-</p>
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <span className="fromstyle12">From</span>
                <span className="fromstyle12" style={{ marginLeft: "71px" }}>To</span>
              </div>
              <div style={{ display: "flex" }}>
                <div className="thecrd13" style={{ marginLeft: "15px" }}>
                  <button className="txt13">Assigned</button>
                </div>
                <div className="thecrd13" style={{ marginLeft: "10px", backgroundColor: "#f2f5f9" }}>
                  <button className="txt13" style={{ color: "#cacaca" }}>Recommended</button>
                </div>
              </div>
            </div>
            <div className="thecrd">
              <div>
                <img src={Hide} alt="hideicon" className="hideicnstyl" />
                <p className="thetxt">Now hidden</p>
              </div>
              <div className="dot1">
                <div>
                  <p className="thetxtstyl1">6th B Class</p>
                  <img className="icstyle" src={WomenIcon} alt="women-icon" /><p className="nsty">46</p>
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <div className="thecrd12" style={{ marginLeft: "15px" }}>
                  <p className="txt12">1 Sep 19</p>
                </div>
                <div className="thecrd12" style={{ marginLeft: "10px" }}>
                  <p className="txt12">-</p>
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <span className="fromstyle12">From</span>
                <span className="fromstyle12" style={{ marginLeft: "71px" }}>To</span>
              </div>
              <div style={{ display: "flex" }}>
                <div className="thecrd13" style={{ marginLeft: "15px" }}>
                  <button className="txt13">Assigned</button>
                </div>
                <div className="thecrd13" style={{ marginLeft: "10px", backgroundColor: "#f2f5f9" }}>
                  <button className="txt13" style={{ color: "#cacaca" }}>Recommended</button>
                </div>
              </div>
            </div>
            <div className="thecrd">
              <div>
                <img src={View} alt="hideicon" className="hideicnstyl" style={{ marginLeft: "53px" }} />
                <p className="thetxt">Viewing</p>
              </div>
              <div className="dot1">
                <div>
                  <p className="thetxtstyl1">6th B Class</p>
                  <img className="icstyle" src={WomenIcon} alt="women-icon" /><p className="nsty">46</p>
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <div className="thecrd12" style={{ marginLeft: "15px" }}>
                  <p className="txt12">1 Sep 19</p>
                </div>
                <div className="thecrd12" style={{ marginLeft: "10px" }}>
                  <p className="txt12">-</p>
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <span className="fromstyle12">From</span>
                <span className="fromstyle12" style={{ marginLeft: "71px" }}>To</span>
              </div>
              <div style={{ display: "flex" }}>
                <div className="thecrd13" style={{ marginLeft: "15px" }}>
                  <button className="txt13">Assigned</button>
                </div>
                <div className="thecrd13" style={{ marginLeft: "10px", backgroundColor: "#f2f5f9" }}>
                  <button className="txt13" style={{ color: "#cacaca" }}>Recommended</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        

        
      </div>
    </BaseLayoutWrapper>
  )
}

export default Contentdetails
