import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import React, { useEffect, useState } from 'react';
import { Dropdown } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import FilterIcon from "../../../assests/images/filtericon.svg";
import search from "../../../assests/images/icons-8-search-copy.png";
import search2x from "../../../assests/images/icons-8-search-copy@2x.png";
import search3x from "../../../assests/images/icons-8-search-copy@3x.png";
import { CourseService } from "../../../services/course-service";
import { StudyCircleService } from "../../../services/studycircle-service";
import { SubjectService } from "../../../services/subject-service";
import { TopicService } from "../../../services/topic-service";
import './MyAssignment.css';

const CustomAssignmentToggle = React.forwardRef(({ children, onClick }, ref) => (
  <div
    className="assignment_dropdown"
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}>
    {children}
    &#x25bc;
  </div>
))

const AssignmentDropdown = (props) => {
  /*********************** */
  // STATES
  /*********************** */
  const [studycircles, setStudyCircles] = useState([])
  const [courses, setCourses] = useState([])
  const [subjects, setSubjects] = useState([])
  const [topics, setTopics] = useState([])
  const [selectedDate, setSelectedDate] = useState(new Date('2020-07-15T21:11:54'))

  const [showMenu, setShowMenu] = useState(false)
  const [uistate, setUiState] = useState({
    selStudyCircleName: "Study Circle",
    selCourseName: "Course",
    selSubjectName: "Subject",
    selTopicName: "Topic"
  })

  useEffect(() => {
    StudyCircleService.getUserStudyCircle(1, 10).then(res => setStudyCircles(res))
    CourseService.getAllByUser(1, 10).then(res => setCourses(res))
    SubjectService.getAllByUser(1, 10).then(res => setSubjects(res))
    TopicService.getAllByUser(1, 10).then(res => setTopics(res))
  }, [])

  /************************** */
  // EVENTS
  /************************* */
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

  const handleStudyCircleSelect = (e, item) => {
    setUiState({ ...uistate, selStudyCircleName: item.dName })
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

  const handleDateChange = (date) => {
    setSelectedDate(date)
  }

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <div className="assignment_row">
        <div className="assignment_col">
          <div className="assignment_dropheader">
            <div className="assignment_dropdown_section">
              <Dropdown>
                <Dropdown.Toggle as={CustomAssignmentToggle}>
                  {uistate.selStudyCircleName}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {studycircles.map((item, index) => (
                    <Dropdown.Item
                      key={index}
                      onClick={(e) => handleStudyCircleSelect(e, item)}
                      className="assignment_dropdown_item">
                      {item.name}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown>
                <Dropdown.Toggle as={CustomAssignmentToggle}>
                  {uistate.selCourseName}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {courses.map((item, index) => (
                    <Dropdown.Item
                      key={index}
                      onClick={(e) => handleCourseSelect(e, item)}
                      className="assignment_dropdown_item">
                      {item.dName}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown>
                <Dropdown.Toggle as={CustomAssignmentToggle}>
                  {uistate.selSubjectName}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {subjects.map((item, index) => (
                    <Dropdown.Item
                      key={index}
                      onClick={(e) => handleSubjectSelect(e, item)}
                      className="assignment_dropdown_item">
                      {item.dName}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown>
                <Dropdown.Toggle as={CustomAssignmentToggle}>
                  {uistate.selTopicName}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {topics.map((item, index) => (
                    <Dropdown.Item
                      key={index}
                      onClick={(e) => handleTopicSelect(e, item)}
                      className="assignment_dropdown_item">
                      {item.dName}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
              <span className="assign_drop_outerbox">
                <KeyboardDatePicker
                  margin="normal"
                  style={{ width: "110px", top: '-15px' }}
                  id="assignment-date-picker-dialog"
                  format="dd/MM/yy"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
              </span>
              <span className="assign_drop_outerbox_2">
                <span>
                  <input className='input_checkbox_due' type="checkbox" name="checkboxdue" />
                </span>
                <span className="assign_due">Due</span>
              </span>
              <NavLink to="assignment/create">
                <button className="createAssignmentButton">+ Create
                  </button>
              </NavLink>
            </div>
          </div>
          {
            showMenu
              ? (
                <div className="assign_filter_card">
                  <span className="assignment_liststyle">
                    <input type="checkbox" style={{ marginRight: "5px" }} id="filter1" name="filter1" value="Latest" />Latest</span>
                  <span className="assignment_liststyle">
                    <input type="checkbox" style={{ marginRight: "5px" }} id="filter2" name="filter2" value="Comments" />Comments</span>
                  <span className="assignment_liststyle">
                    <input type="checkbox" style={{ marginRight: "5px" }} id="filter3" name="filter3" value="Date" />Date</span>
                  <span className="assignment_liststyle">
                    <input type="checkbox" style={{ marginRight: "5px" }} id="filter4" name="filter4" value="Only imported" />Only imported</span>
                  <span className="assignment_liststyle">
                    <input type="checkbox" style={{ marginRight: "5px" }} id="filter5" name="filter5" value="Show hidden" />Show hidden</span>
                  <span className="assignment_liststyle">
                    <input type="checkbox" style={{ marginRight: "5px" }} id="filter6" name="filter6" value="Show View" />Show View</span>
                  <span className="assignment_liststyle">
                    <input type="checkbox" style={{ marginRight: "5px" }} id="filter7" name="filter7" value="Language" />Language</span>
                  <span className="assignment_liststyle">
                    <input type="checkbox" style={{ marginRight: "5px" }} id="filter8" name="filter8" value="Revision" />Revision</span>
                </div>
              )
              : (
                null
              )
          }
          <div className="assign_topline"></div>
          <div className="assignment_row" style={{ marginTop: '15px', marginBottom: '15px' }}>
            <div className="assignment_details">
              <span className="assignmentTextStyling">Assignment</span>
              <span className="assignmentNumberStylingOval">{props.items.length}</span>
            </div>
            <div style={{ width: "550px" }}></div>
            <button className="assign_search_imgwrap"
              onClick={handleSearch}>
              <img alt="search"
                width={16}
                height={16}
                src={search}
                srcSet={`${search2x} 2x, ${search3x} 3x`} />
            </button>
            <div style={{ width: "20px" }}></div>
            <div>
              <img src={FilterIcon} onClick={handleMenu} alt="filter" />
            </div>
          </div>
        </div>
      </div>
    </MuiPickersUtilsProvider>
  )
}

export default AssignmentDropdown
