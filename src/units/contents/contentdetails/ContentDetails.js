import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import ReactPlayer from 'react-player';
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
import studentlogo from '../../../assests/images/profile-icon.png';
import View from "../../../assests/images/view.png";
import BaseLayoutWrapper from '../../../components/baselayout/BaseLayout';
import ActivityTimeline from '../../../components/timeline/ActivityTimeline';
import ActivityTimelineElement from '../../../components/timeline/ActivityTimelineElement';
import { useAppContextState } from '../../../services/context';
import "../ContentMain.css";
import "./ContentDetails.css";

const CommentView = (props) => {
  return (
    <div className="details_col comment_view">
      <div className="comment_name">Santhosh Poojary</div>
      <div className="comment_text">In this chapter, you will study the physical and chemical properties of metals and non-metals,
      the process of corrosion, the occurrence of metals in</div>
      <div className="comment_date">16 July 2020</div>
    </div>
  )
}

const DetailCloudText = (props) => {
  return (
    <div className="detail_cloud_text">
      {props.name}
    </div>
  )
}

const Contentdetails = (props) => {

  const clouds = [{ name: "Critical Thinking" }, { name: "Creativity" }, { name: "Collaboration" },
  { name: "Flexibility" }, { name: "Leadership" }]

  const history = useHistory()
  const [appglobal, setAppGlobal] = useAppContextState()

  useEffect(() => {
    appglobal.pagetitle = "Content  Details"
  }, [])

  return (
    <BaseLayoutWrapper>
      <div className="details_main">
        <div className="deatils_header">
          <button onClick={history.goBack} className="btn_back">
            <img
              src={left}
              srcSet={`${left2x} 2x, ${left3x} 3x`}
              alt='left' />
          </button>
          <div className="textstyle">Content Details</div>
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
            <div className="details_row details_title_author">
              <img src={studentlogo} alt="logo" width={22} height={22} />
              <span style={{ marginLeft: "10px" }}>Deepesh Kamth , KLE Socity, Bangalore</span>
            </div>
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
              <p className="maincontstyle">Subject</p>
              <p className="thebodstyle">English</p>
            </div>
            <div className="subcardstyle">
              <p className="maincontstyle">Topic</p>
              <p className="thebodstyle">In this chapter, you will learn the structure of the </p>
            </div>
            <div className="subcardstyle">
              <p className="maincontstyle">Uploaded</p>
              <p className="thebodstyle">17 May 2019</p>
            </div>
            <div className="subcardstyle">
              <p className="maincontstyle">Last updated Date</p>
              <p className="thebodstyle">17 May 2019</p>
            </div>
            <div className="subcardstyle">
              <p className="maincontstyle">Duration</p>
              <p className="thebodstyle">8min.</p>
            </div>
            <div className="subcardstyle">
              <p className="maincontstyle">File Type</p>
              <p className="thebodstyle">PDF</p>
            </div>
          </div>
          {/* STUDY CIRCLE DETAILS SECTION */}
          <p className="stdystyl">Study Circle</p>
          <button className="stdybtn">+Add Study Circle</button>
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
        {/* CLOUD TAGS SECTION */}
        <div style={{ height: "100px" }}></div>
        <Row>
          <Col style={{ textAlign: "left", marginLeft: "40px" }}>
            <span className="details_cloud_title">Part of Modules</span>
            <div style={{ height: "40px" }}></div>
            <StackGrid
              columnWidth={150}>
              {clouds.map((item, index) => (
                <DetailCloudText key={index} name={item.name} />
              ))}
            </StackGrid>
          </Col>
          <Col style={{ textAlign: "left", marginLeft: "40px" }}>
            <span className="details_cloud_title">Course</span>
            <div style={{ height: "40px" }}></div>
            <StackGrid
              columnWidth={150}>
              {clouds.map((item, index) => (
                <DetailCloudText key={index} name={item.name} />
              ))}
            </StackGrid>
          </Col>
        </Row>
        <div style={{ height: "100px" }}></div>
        <Row>
          <Col style={{ textAlign: "left", marginLeft: "40px" }}>
            <span className="details_cloud_title">Concepts</span>
            <div style={{ height: "40px" }}></div>
            <StackGrid
              columnWidth={150}>
              {clouds.map((item, index) => (
                <DetailCloudText key={index} name={item.name} />
              ))}
            </StackGrid>
          </Col>
          <Col style={{ textAlign: "left", marginLeft: "40px" }}>
            <span className="details_cloud_title">Objectives</span>
            <div style={{ height: "40px" }}></div>
            <StackGrid
              columnWidth={150}>
              {clouds.map((item, index) => (
                <DetailCloudText key={index} name={item.name} />
              ))}
            </StackGrid>
          </Col>
        </Row>
        <div style={{ height: "100px" }}></div>

        {/* COMMENTS SECTION */}
        <div style={{ marginLeft: "40px", marginRight: "40px" }}>
          <div className="details_cloud_title">Comments</div>
          <div className="details_row details_underline_lg">
            <CommentView />
            <CommentView />
            <CommentView />
          </div>
          <div style={{ height: "50px" }}></div>
          <div className="details_row">
            <textarea className="comment_textarea" placeholder="+ Add your comment" />
          </div>
          <div style={{ height: "20px" }}></div>
          <div className="details_row" style={{ justifyContent: "flex-end" }}>
            <button className="comment_btn comment_btn_cancel">Clear</button>
            <div style={{ width: "20px" }}></div>
            <button className="comment_btn  comment_btn_add">Add</button>
          </div>
        </div>

        {/* ACTIVITY SECTION */}
        <div style={{ height: "30px" }}></div>
        <div style={{ marginLeft: "40px", marginRight: "40px" }}>
          <div className="details_cloud_title">Activity</div>
          <div className="details_underline_lg"></div>
          <div className="details_activity">
            <ActivityTimeline>
              <ActivityTimelineElement day="1 MON" date="June 2020" title="Content Updated" author="Sandeep Shenoy" bgcolor="sky" />
              <ActivityTimelineElement day="2 MON" date="June 2020" title="Content Updated" author="Sandeep Shenoy" bgcolor="gray" />
              <ActivityTimelineElement day="3 MON" date="June 2020" title="Content Updated" author="Sandeep Shenoy" bgcolor="amber"
                comment="It depends on the language and the country. In the Netherlands and Scandanavia " />
              <ActivityTimelineElement day="4 MON" date="June 2020" title="Content Updated" author="Sandeep Shenoy" bgcolor="sky"
                comment="In the Netherlands and Scandanavia. It depends on the language and the country. 
                In the Netherlands and Scandanavia. It depends on the language and the country. In the Netherlands and Scandanavia." />
              <ActivityTimelineElement day="5 MON" date="June 2020" title="Content Updated" author="Sandeep Shenoy" bgcolor="gray" />
              <ActivityTimelineElement day="6 MON" date="June 2020" title="Content Updated" author="Sandeep Shenoy" bgcolor="amber"
                comment="It depends on the language and the country. In the Netherlands and Scandanavia. It depends on the language and the country. 
                In the Netherlands and Scandanavia. It depends on the language and the country. In the Netherlands and Scandanavia." />
            </ActivityTimeline>
          </div>
        </div>
      </div>
    </BaseLayoutWrapper>
  )
}

export default Contentdetails
