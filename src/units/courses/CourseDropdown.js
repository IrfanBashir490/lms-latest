import React, { useEffect, useState, forwardRef } from 'react';
import { Dropdown } from "react-bootstrap";
import FilterIcon from "../../assests/images/filtericon.svg";
import SearchIcon from "../../assests/images/search.svg";
import { CourseService } from '../../services/course-service';
import { SubjectService } from '../../services/subject-service';
import { TopicService } from '../../services/topic-service';
import { ConceptService } from '../../services/concept-service';
import { ObjectiveService } from '../../services/objective-service';
import './CourseDropdown.css';

const CustomToggle = forwardRef(({ children, onClick }, ref) => (
  <div
    className="course_dropdown course-color"
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}>
    {children}
    &#x25bc;
  </div>
))

const CourseDropdown = (props) => {

  const [courses, setCourses] = useState([])
  const [subjects, setSubjects] = useState([])
  const [concepts, setConcepts] = useState([])
  const [topics, setTopics] = useState([])
  const [objectives, setObjectives] = useState([])
  const [sharings, setSharings] = useState(["Organization", "Private"])

  useEffect(() => {
    CourseService.getAllByUser(1, 10).then(res => setCourses(res))
    SubjectService.getAllByUser(1, 10).then(res => setSubjects(res))
    TopicService.getAllByUser(1, 10).then(res => setTopics(res))
    ConceptService.getAllByUser(1, 10).then(res => setConcepts(res))
    ObjectiveService.getAllByUser(1, 10).then(res => setObjectives(res))
  }, [])

  const [showMenu, setShowMenu] = useState(false);
  const [uistate, setUiState] = useState({
    selCourseName: "Course", selSubjectName: "Subject", selTopicName: "Topic", selConceptName: "Concept",
    selObjectiveName: "Objective", selSharingName: "Sharing"
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

  const handleSharingSelect = (e, item) => {
    setUiState({ ...uistate, selSharingName: item.dName })
  }

  return (
    <div>
      <div className="course_dropdown_section course-bg">
        <Dropdown>
          <Dropdown.Toggle as={CustomToggle}>
            {uistate.selCourseName}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {courses.map((item, index) => (
              <Dropdown.Item
                key={index}
                onClick={(e) => handleCourseSelect(e, item)}
                className="course_dropdown_item course-color">
                {item.dName}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown>
          <Dropdown.Toggle as={CustomToggle}>
            {uistate.selSubjectName}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {subjects.map((item, index) => (
              <Dropdown.Item
                key={index}
                onClick={(e) => handleSubjectSelect(e, item)}
                className="course_dropdown_item course-color">
                {item.dName}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown>
          <Dropdown.Toggle as={CustomToggle}>
            {uistate.selTopicName}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {topics.map((item, index) => (
              <Dropdown.Item
                key={index}
                onClick={(e) => handleTopicSelect(e, item)}
                className="course_dropdown_item course-color">
                {item.dName}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown>
          <Dropdown.Toggle as={CustomToggle}>
            {uistate.selConceptName}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {concepts.map((item, index) => (
              <Dropdown.Item
                key={index}
                onClick={(e) => handleConceptSelect(e, item)}
                className="course_dropdown_item course-color">
                {item.dName}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown>
          <Dropdown.Toggle as={CustomToggle}>
            {uistate.selObjectiveName}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {objectives.map((item, index) => (
              <Dropdown.Item
                key={index}
                onClick={(e) => handleObjectiveSelect(e, item)}
                className="course_dropdown_item course-color">
                {item.dName}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown>
          <Dropdown.Toggle as={CustomToggle}>
            {uistate.selSharingName}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {sharings.map((item, index) => (
              <Dropdown.Item
                key={index}
                onClick={(e) => handleSharingSelect(e, item)}
                className="course_dropdown_item course-color">
                {item}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>

        <img src={SearchIcon} className="alignstyle" alt="search" onClick={handleSearch} style={{ marginLeft: "20px" }} />
        <img src={FilterIcon} onClick={handleMenu} alt="filter" style={{ marginLeft: "10px" }} />
        {
          showMenu
            ? (
              <div className="card course_filter_card">
                <span className="liststyle course-color">
                  <input type="checkbox" id="filter1" name="filter1" value="Latest" />Latest</span>
                <span className="liststyle course-color">
                  <input type="checkbox" id="filter2" name="filter2" value="Comments" />Comments</span>
                <span className="liststyle course-color">
                  <input type="checkbox" id="filter3" name="filter3" value="Date" />Date</span>
                <span className="liststyle course-color">
                  <input type="checkbox" id="filter4" name="filter4" value="Only imported" />Only imported</span>
                <span className="liststyle course-color">
                  <input type="checkbox" id="filter5" name="filter5" value="Show hidden" />Show hidden</span>
                <span className="liststyle course-color">
                  <input type="checkbox" id="filter6" name="filter6" value="Show View" />Show View</span>
                <span className="liststyle course-color">
                  <input type="checkbox" id="filter7" name="filter7" value="Language" />Language</span>
                <span className="liststyle course-color">
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

export default CourseDropdown;
