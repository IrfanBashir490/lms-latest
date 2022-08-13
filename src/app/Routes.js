import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { PrivateRoute } from "../utils/PrivateRoute";

/**********PAGES*********** */
const Login = lazy(() => import("../components/auth/SignIn"));
const Register = lazy(() => import("../components/auth/Register"));

const Home = lazy(() => import("../units/studycircle/StudyCircle"));
const StudyCircleAdd = lazy(() => import("../units/studycircle/StudyCircleAdd"));
const TeacherProfile = lazy(() => import("../units/profile/TeacherProfile"));

const ContentLibrary = lazy(() => import("../units/contents/ContentLibrary"));
const ContentRepository = lazy(() => import("../units/contents/ContentRepository"));
const ContentUpload = lazy(() => import("../units/contents/uploadcontent/ContentUpload"));
const ContentDetails = lazy(() => import("../units/contents/contentdetails/ContentDetails"));
const ContentEditDetails = lazy(() => import("../units/contents/contentdetails/ContentEditDetails"));

const Courses = lazy(() => import("../units/courses/Courses"));
const CreateCourse = lazy(() => import("../units/disciplines/CreateCourse"));
const CreateSubject = lazy(() => import("../units/disciplines/CreateSubject"));
const CreateTopic = lazy(() => import("../units/disciplines/TopicDetails"));
const ConceptName = lazy(() => import("../units/disciplines/ConceptName"));
const PreliminaryDetails = lazy(() => import("../units/disciplines/PreliminaryDetails"));

const CreateDiscussion = lazy(() => import("../units/discussion/create/CreateDiscussion"));
const DiscussionDetails = lazy(() => import("../units/discussion/details/DiscussionDetails"));
const DiscussionMain = lazy(() => import("../units/discussion/DiscussionMain"));

const AssignmentBase = lazy(() => import("../units/assignment/AssignmentMain"));
const CreateAssignment = lazy(() => import("../units/assignment/create/CreateAssignment"));
const AssignmentDetails = lazy(() => import("../units/assignment/details/DetailAssignment"));

const CreateTrek = lazy(() => import("../units/createTrek/CreateTrek"));
const CreateSet = lazy(() => import("../units/contents/createSet/ContentCreateSet"));
const DayLearning = lazy(() => import("../units/dayLearning/DayLearning"));

const Analytics = lazy(() => import("../pages/Analytics"));
const Bookmark = lazy(() => import("../pages/Bookmark"));

const Routes = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <PrivateRoute exact path="/" component={Home} />
          {/* MAIN PAGES ROUTES */}
          <PrivateRoute exact path="/content" component={ContentLibrary} />
          <PrivateRoute exact path="/interaction" component={DiscussionMain} />
          <PrivateRoute exact path="/assignment" component={AssignmentBase} />
          <PrivateRoute exact path="/analytics" component={Analytics} />
          <PrivateRoute exact path="/course" component={Courses} />
          <PrivateRoute exact path="/bookmark" component={Bookmark} />
          <PrivateRoute exact path="/day-learning" component={DayLearning} />
          <PrivateRoute exact path="/create" component={CreateCourse} />
          <PrivateRoute exact path="/subject" component={CreateSubject} />
          <PrivateRoute exact path="/topic" component={CreateTopic} />
          <PrivateRoute exact path="/concept" component={ConceptName} />
          <PrivateRoute
            exact
            path="/preliminary"
            component={PreliminaryDetails}
          />
          <PrivateRoute exact path="/trek" component={CreateTrek} />
          <PrivateRoute exact path="/createset" component={CreateSet} />

          {/* SUB PAGES ROUTES */}
          <PrivateRoute exact path="/content/repository" component={ContentRepository} />
          <PrivateRoute exact path="/content/upload" component={ContentUpload} />
          <PrivateRoute exact path="/content/details" component={ContentDetails} />
          <PrivateRoute exact path="/content/editdetails" component={ContentEditDetails} />
          <PrivateRoute exact path="/profile/teacher" component={TeacherProfile} />
          <PrivateRoute exact path="/interaction/create" component={CreateDiscussion} />
          <PrivateRoute exact path="/interaction/discussion/:idval" component={DiscussionDetails} />
          <PrivateRoute exact path="/study-circle/create" component={StudyCircleAdd} />
          <PrivateRoute exact path="/assignment/create" component={CreateAssignment} />
          <PrivateRoute exact path="/assignment/discussion/:idval" component={AssignmentDetails} />
          <Redirect from="*" to="/" />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default Routes;
