import React, { useEffect, useState, forwardRef } from 'react';
import { Dropdown } from "react-bootstrap";
import FilterIcon from "../../../assests/images/filtericon.svg";
import SearchIcon from "../../../assests/images/search.svg";
import { CourseService } from '../../../services/course-service';
import { SubjectService } from '../../../services/subject-service';
import { TopicService } from '../../../services/topic-service';
import { ConceptService } from '../../../services/concept-service';
import { PreConceptService } from '../../../services/preconcept-service';
import { ObjectiveService } from '../../../services/objective-service';
import './ContentDropdown.css';

const CustomLibToggle = forwardRef(({ children, onClick }, ref) => (
  <div
    className="content_dropdown lib-color"
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}>
    {children}
    &#x25bc;
  </div>
));

const CustomRepoToggle = forwardRef(({ children, onClick }, ref) => (
  <div
    className="content_dropdown repo-color"
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}>
    {children}
    &#x25bc;
  </div>
));

const ContentDropdownLib = (props) => {

  const [courses, setCourses] = useState([])
  const [subjects, setSubjects] = useState([])
  const [topics, setTopics] = useState([])
  const [concepts, setConcepts] = useState([])
  const [preconcepts, setPreconcepts] = useState([])
  const [objectives, setObjectives] = useState([])

  useEffect(() => {
    CourseService.getAllByUser(1, 10).then(res => setCourses(res))
    SubjectService.getAllByUser(1, 10).then(res => setSubjects(res))
    TopicService.getAllByUser(1, 10).then(res => setTopics(res))
    ConceptService.getAllByUser(1, 10).then(res => setConcepts(res))
    PreConceptService.getAllByUser(1, 10).then(res => setPreconcepts(res))
    ObjectiveService.getAllByUser(1, 10).then(res => setObjectives(res))
  }, [])

  const [showMenu, setShowMenu] = useState(false);
  const [uistate, setUiState] = useState({
    selCourseName: "Course", selSubjectName: "Subject", selTopicName: "Topic", selConceptName: "Concept",
    selObjectiveName: "Objective", selPreconceptName: "Preliminary"
  });

  const handleMenu = (event) => {
    event.preventDefault();
    if (showMenu === true) {
      setShowMenu(false)
    } else {
      setShowMenu(true)
    }
  }

  const handleSearch = () => {

  }

  const handleCourseSelect = (e, item) => {
    setUiState({ ...uistate, selCourseName: item.dName })
  }

  const handleSubjectSelect = (e, item) => {
    setUiState({ ...uistate, selSubjectName: item.dName })
  }

  const handleTopicSelect = (e, item) => {
    setUiState({ ...uistate, selTopicName: item.dName })
  }

  const handleConceptSelect = (e, item) => {
    setUiState({ ...uistate, selConceptName: item.dName })
  }

  const handleObjectiveSelect = (e, item) => {
    setUiState({ ...uistate, selObjectiveName: item.dName })
  }

  const handlePreconceptSelect = (e, item) => {
    setUiState({ ...uistate, selPreconceptName: item.dName })
  }

  return (
    <div>
      <div className={`content_dropdown_section ${props.type === 'lib' ? 'lib-bg' : 'repo-bg'}`}>
        <Dropdown>
          <Dropdown.Toggle as={props.type === 'lib' ? CustomLibToggle : CustomRepoToggle}>
            {uistate.selCourseName}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {courses.map((item, index) => (
              <Dropdown.Item
                key={index}
                onClick={(e) => handleCourseSelect(e, item)}
                className={`content_dropdown_item ${props.type === 'lib' ? 'lib-color' : 'repo-color'}`}>
                {item.dName}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown>
          <Dropdown.Toggle as={props.type === 'lib' ? CustomLibToggle : CustomRepoToggle}>
            {uistate.selSubjectName}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {subjects.map((item, index) => (
              <Dropdown.Item
                key={index}
                onClick={(e) => handleSubjectSelect(e, item)}
                className={`content_dropdown_item ${props.type === 'lib' ? 'lib-color' : 'repo-color'}`}>
                {item.dName}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown>
          <Dropdown.Toggle as={props.type === 'lib' ? CustomLibToggle : CustomRepoToggle}>
            {uistate.selTopicName}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {topics.map((item, index) => (
              <Dropdown.Item
                key={index}
                onClick={(e) => handleTopicSelect(e, item)}
                className={`content_dropdown_item ${props.type === 'lib' ? 'lib-color' : 'repo-color'}`}>
                {item.dName}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown>
          <Dropdown.Toggle as={props.type === 'lib' ? CustomLibToggle : CustomRepoToggle}>
            {uistate.selConceptName}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {concepts.map((item, index) => (
              <Dropdown.Item
                key={index}
                onClick={(e) => handleConceptSelect(e, item)}
                className={`content_dropdown_item ${props.type === 'lib' ? 'lib-color' : 'repo-color'}`}>
                {item.dName}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown>
          <Dropdown.Toggle as={props.type === 'lib' ? CustomLibToggle : CustomRepoToggle}>
            {uistate.selPreconceptName}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {preconcepts.map((item, index) => (
              <Dropdown.Item
                key={index}
                onClick={(e) => handlePreconceptSelect(e, item)}
                className={`content_dropdown_item ${props.type === 'lib' ? 'lib-color' : 'repo-color'}`}>
                {item.dName}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown>
          <Dropdown.Toggle as={props.type === 'lib' ? CustomLibToggle : CustomRepoToggle}>
            {uistate.selObjectiveName}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {objectives.map((item, index) => (
              <Dropdown.Item
                key={index}
                onClick={(e) => handleObjectiveSelect(e, item)}
                className={`content_dropdown_item ${props.type === 'lib' ? 'lib-color' : 'repo-color'}`}>
                {item.dName}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>

        <img src={SearchIcon} className="alignstyle" alt="search" onClick={handleSearch} style={{ marginLeft: "50px" }} />
        <img src={FilterIcon} onClick={handleMenu} alt="filter" style={{ marginLeft: "10px" }} />
        {
          showMenu
            ? (
              <div className="card content_filter_card">
                <span className={`liststyle ${props.type === 'lib' ? 'lib-color' : 'repo-color'} `}>
                  <input type="checkbox" id="filter1" name="filter1" value="Latest" />Latest</span>
                <span className={`liststyle ${props.type === 'lib' ? 'lib-color' : 'repo-color'} `}>
                  <input type="checkbox" id="filter2" name="filter2" value="Comments" />Comments</span>
                <span className={`liststyle ${props.type === 'lib' ? 'lib-color' : 'repo-color'} `}>
                  <input type="checkbox" id="filter3" name="filter3" value="Date" />Date</span>
                <span className={`liststyle ${props.type === 'lib' ? 'lib-color' : 'repo-color'} `}>
                  <input type="checkbox" id="filter4" name="filter4" value="Only imported" />Only imported</span>
                <span className={`liststyle ${props.type === 'lib' ? 'lib-color' : 'repo-color'} `}>
                  <input type="checkbox" id="filter5" name="filter5" value="Show hidden" />Show hidden</span>
                <span className={`liststyle ${props.type === 'lib' ? 'lib-color' : 'repo-color'} `}>
                  <input type="checkbox" id="filter6" name="filter6" value="Show View" />Show View</span>
                <span className={`liststyle ${props.type === 'lib' ? 'lib-color' : 'repo-color'} `}>
                  <input type="checkbox" id="filter7" name="filter7" value="Language" />Language</span>
                <span className={`liststyle ${props.type === 'lib' ? 'lib-color' : 'repo-color'} `}>
                  <input type="checkbox" id="filter8" name="filter8" value="Revision" />Revision</span>
              </div>
            )
            : (
              null
            )
        }
      </div>
    </div>
  )
}

export default ContentDropdownLib;
