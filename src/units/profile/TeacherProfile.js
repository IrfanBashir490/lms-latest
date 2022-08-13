import { InputBase, TextareaAutosize } from "@material-ui/core";
import { Tabs } from "antd";
import "antd/dist/antd.css";
import { produce } from "immer";
import React, { useEffect, useState } from "react";
import { Card, Col, Media, Row, Table } from "react-bootstrap";
import { generate } from "shortid";
import Delete from "../../assests/images/delete.svg";
import Edit from "../../assests/images/group.png";
import Edit2x from "../../assests/images/group@2x.png";
import Edit3x from "../../assests/images/group@3x.png";
import Globe from "../../assests/images/icons-8-globe.png";
import Globe2x from "../../assests/images/icons-8-globe@2x.png";
import Globe3x from "../../assests/images/icons-8-globe@3x.png";
import Contribution from "../../assests/images/icons-8-hand-with-pen-filled.png";
import Contribution2x from "../../assests/images/icons-8-hand-with-pen-filled@2x.png";
import Contribution3x from "../../assests/images/icons-8-hand-with-pen-filled@3x.png";
import Study from "../../assests/images/icons-8-students-copy.png";
import Study2x from "../../assests/images/icons-8-students-copy@2x.png";
import Study3x from "../../assests/images/icons-8-students-copy@3x.png";
import Class from "../../assests/images/icons-8-training.png";
import Class2x from "../../assests/images/icons-8-training@2x.png";
import Class3x from "../../assests/images/icons-8-training@3x.png";
import Institution from "../../assests/images/institution.png";
import Institution2x from "../../assests/images/institution@2x.png";
import Institution3x from "../../assests/images/institution@3x.png";
import Private from "../../assests/images/private.png";
import Private2x from "../../assests/images/private@2x.png";
import Private3x from "../../assests/images/private@3x.png";
import BaseLayoutWrapper from "../../components/baselayout/BaseLayout";
import { useAppContextState } from "../../services/context";
import { TeacherService } from "../../services/teacher-service";
import "./TeacherProfile.css";
import TeacherPage from "../teacherMyPage/TeacherPage";

const { TabPane } = Tabs;
const TeacherProfile = () => {
  const [avatarurl, setAvatarUrl] = useState();
  const [displayName, setDisplayName] = useState();
  const [registeredEmailAddress, setRegisteredEmailAddress] = useState();
  const [registeredContactNumber, setRegisteredContactNumber] = useState();
  const [designation, setDesignation] = useState();
  const [languageKnown, setLanguageKnown] = useState();
  const [languageTaught, setLanguageTaught] = useState();
  const [address, setAddress] = useState();
  const [experience, setExperience] = useState();
  const [education, setEducation] = useState();
  const [place, setPlace] = useState();
  const [subject, setSubject] = useState();
  const [grade, setGrade] = useState();
  const [writeup, setWriteUp] = useState();
  const [addInstituion, setAddInstituion] = useState([
    {
      id: String,
      institution: String,
      year: String,
    },
  ]);
  const [loadedTeacher, setLoadedTeacher] = useState();
  const [appglobal, setAppGlobal] = useAppContextState();

  const callback = (key) => {
    console.log(key);
  };

  useEffect(() => {
    appglobal.pagetitle = "Profile";
    TeacherService.getCurrentTeacher().then((res) => {
      setLoadedTeacher(res);
      setDisplayName(res.dName);
      setAvatarUrl(res.uid.avatar.url);
      setRegisteredEmailAddress(res.uid.email);
      setRegisteredContactNumber(res.uid.phone);
      setDesignation(res.designation);
      setLanguageKnown(res.spokenLangs);
      setLanguageTaught(res.spokenLangs);
      setAddress(res.uid.address);
      setExperience(res.experience);
      setEducation(res.qualifications.map((item) => item.degree));
      setPlace(res.uid.address);
      setWriteUp(res.writeup);
      setAddInstituion(res.institutions);
    });
  }, []);

  const renderTeacher = (loadedTeacher, index) => {
    return (
      <tr key={index}>
        <td>{loadedTeacher.institutions.name}</td>
        <td>{loadedTeacher.institutions.year}</td>
      </tr>
    );
  };

  return (
    <BaseLayoutWrapper>
      <div
        className="teacher-profile__wrapper"
        style={{ marginBottom: "66px" }}
      >
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="Profile" key="profile  " className="mr-5 pl-4 pr-4">
            <Row>
              <Col style={{ maxWidth: "220px" }}>
                <img
                  alt="Edit"
                  src={Edit}
                  srcSet={`${Edit2x} 2x, ${Edit3x} 3x`}
                  className="edit-image"
                />
                <Card className="border-0">
                  <Card.Img
                    src={avatarurl}
                    alt="profile"
                    height="140px"
                    variant="top"
                    width="220px"
                    borderRadius="4px"
                  />
                  <Card.Body className="p-0">
                    <Card.Title
                      className="teacher-name mb-0"
                      style={{ marginTop: "11px" }}
                    >
                      {displayName}
                    </Card.Title>
                    <Card.Text
                      className="teacher-name"
                      style={{ fontSize: "12px", fontWeight: "normal" }}
                    >
                      {designation}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="teacher-background__profile ml-4">
                <Col className="pl-0">
                  <Media className="teacher-background__profile__value">
                    <img
                      width={24}
                      height={24}
                      className="ml-2 mt-3"
                      src={Contribution}
                      srcSet={`${Contribution2x} 2x, ${Contribution3x} 3x`}
                      alt="Contribution"
                    />
                    <Media.Body>
                      <h5
                        className="teacher-background__profile__value position-absolute"
                        style={{ marginTop: "13px", marginLeft: "18px" }}
                      >
                        Contribution
                      </h5>
                    </Media.Body>
                    <p
                      className="position-absolute"
                      style={{ marginTop: "13px", right: "66px" }}
                    >
                      58
                    </p>
                  </Media>
                </Col>
                <Col className="pl-0 mt-3">
                  <Media className="teacher-background__profile__value">
                    <img
                      width={24}
                      height={24}
                      className="ml-2"
                      src={Private}
                      srcSet={`${Private2x} 2x, ${Private3x} 3x`}
                      alt="Private"
                    />
                    <Media.Body>
                      <h5
                        className="teacher-background__profile__value position-absolute"
                        style={{ marginLeft: "18px" }}
                      >
                        Private
                      </h5>
                    </Media.Body>
                    <p className="position-absolute" style={{ right: "66px" }}>
                      58
                    </p>
                  </Media>
                </Col>
                <Col className="pl-0 mt-3">
                  <Media className="teacher-background__profile__value">
                    <img
                      width={24}
                      height={24}
                      className="ml-2"
                      src={Institution}
                      srcSet={`${Institution2x} 2x, ${Institution3x} 3x`}
                      alt="Institution"
                    />
                    <Media.Body>
                      <h5
                        className="teacher-background__profile__value position-absolute"
                        style={{ marginLeft: "18px" }}
                      >
                        Institutions
                      </h5>
                    </Media.Body>
                    <p className="position-absolute" style={{ right: "66px" }}>
                      58
                    </p>
                  </Media>
                </Col>
                <Col className="pl-0 mt-3">
                  <Media className="teacher-background__profile__value">
                    <img
                      width={24}
                      height={24}
                      className="ml-2"
                      src={Globe}
                      srcSet={`${Globe2x} 2x, ${Globe3x} 3x`}
                      alt="Global"
                    />
                    <Media.Body>
                      <h5
                        className="teacher-background__profile__value position-absolute"
                        style={{ marginLeft: "18px" }}
                      >
                        Global
                      </h5>
                    </Media.Body>
                    <p className="position-absolute" style={{ right: "66px" }}>
                      58
                    </p>
                  </Media>
                </Col>
              </Col>
              <Col className="ml-3">
                <Row className="mb-4">
                  <div className="p-0">
                    <Media className="teacher-background__info-item">
                      <img
                        width={30}
                        height={30}
                        className="ml-3  my-auto"
                        src={Study}
                        srcSet={`${Study2x} 2x, ${Study3x} 3x`}
                        alt="Study"
                      />
                      <Media.Body className="mt-3 ml-3">
                        <h5 className="teacher-background__info-item-text">
                          Impact(Students)
                        </h5>
                        <p className="teacher-background__info-item-number">
                          20,258
                        </p>
                      </Media.Body>
                    </Media>
                  </div>
                  <div className="p-0 ml-3">
                    <Media className="teacher-background__info-item">
                      <img
                        width={30}
                        height={30}
                        className="ml-3  my-auto"
                        src={Class}
                        srcSet={`${Class2x} 2x, ${Class3x} 3x`}
                        alt="Global"
                      />
                      <Media.Body className=" mt-3 ml-3">
                        <h5 className="teacher-background__info-item-text">
                          Total Class
                        </h5>
                        <p className="teacher-background__info-item-number">
                          158
                        </p>
                      </Media.Body>
                    </Media>
                  </div>
                </Row>
                <Row>
                  <div className="p-0 m-0">
                    <Media className="teacher-background__info-item">
                      <img
                        width={30}
                        height={30}
                        className="ml-3  my-auto"
                        src={Study}
                        srcSet={`${Study2x} 2x, ${Study3x} 3x`}
                        alt="Study"
                      />
                      <Media.Body className=" mt-3 ml-3">
                        <h5 className="teacher-background__info-item-text">
                          Study Circle
                        </h5>
                        <p className="teacher-background__info-item-number">
                          13
                        </p>
                      </Media.Body>
                    </Media>
                  </div>
                  <div className="p-0 ml-3">
                    <Media className="teacher-background__info-item">
                      <img
                        width={30}
                        height={30}
                        className="ml-3  my-auto"
                        src={Class}
                        srcSet={`${Class2x} 2x, ${Class3x} 3x`}
                        alt="Global"
                      />
                      <Media.Body className=" mt-3 ml-3">
                        <h5 className="teacher-background__info-item-text">
                          Total Class
                        </h5>
                        <p className="teacher-background__info-item-number">
                          158
                        </p>
                      </Media.Body>
                    </Media>
                  </div>
                </Row>
              </Col>
            </Row>
            <hr className="hr mt-4" />
            <Row>
              <Col className="text-left mt-3 mb-3 mr-3 position-relative">
                <label>Display Name</label>
                <div
                  class="input-group mb-3"
                  style={{
                    backgroundColor: "#f1efff",
                    borderRadius: "4px",
                  }}
                >
                  <div class="input-group-prepend">
                    <select
                      id="salutations"
                      name="salutations"
                      className="inputField"
                      style={{ marginTop: "-2.5px" }}
                    >
                      <option value="mr">Mr</option>
                      <option value="mrs">Mrs</option>
                      <option value="ms">Ms</option>
                      <option value="miss">Miss</option>
                    </select>
                  </div>
                  <div class="custom-file">
                    <InputBase
                      type="text"
                      id="displayName"
                      onChange={(e) => setDisplayName(e.target.value)}
                      className="inputField"
                      value={displayName}
                    />
                  </div>
                </div>
              </Col>
              <Col className="text-left mt-3 mb-3 mr-3">
                <label>Registered Email Address</label>
                <InputBase
                  type="text"
                  id="registeredEmailAddress"
                  onChange={(e) => setRegisteredEmailAddress(e.target.value)}
                  className="inputField"
                  value={registeredEmailAddress}
                />
              </Col>
              <Col className="text-left mt-3 mb-3">
                <label>Registered Contact No.</label>
                <InputBase
                  type="text"
                  id="registeredContactNumber"
                  onChange={(e) => setRegisteredContactNumber(e.target.value)}
                  className="inputField"
                  value={registeredContactNumber}
                />
              </Col>
            </Row>
            <Row>
              <Col className="text-left mt-3 mb-3 mr-3">
                <label>Designation</label>
                <div
                  class="input-group mb-3"
                  style={{
                    backgroundColor: "#f1efff",
                    borderRadius: "4px",
                  }}
                >
                  <div class="input-group-prepend">
                    <select
                      id="salutations"
                      name="salutations"
                      className="inputField"
                      style={{ marginTop: "-2.5px" }}
                    >
                      <option value="mr">Mr</option>
                      <option value="mrs">Mrs</option>
                      <option value="ms">Ms</option>
                      <option value="miss">Miss</option>
                    </select>
                  </div>
                  <div class="custom-file">
                    <InputBase
                      type="text"
                      id="designation"
                      onChange={(e) => setDesignation(e.target.value)}
                      className="inputField"
                      value={designation}
                    />
                  </div>
                </div>
              </Col>
              <Col className="text-left mt-3 mb-3 mr-3">
                <label>Language Known</label>
                <InputBase
                  type="text"
                  id="languageKnown"
                  onChange={(e) => setLanguageKnown(e.target.value)}
                  className="inputField"
                  value={languageKnown}
                />
              </Col>
              <Col className="text-left mt-3 mb-3">
                <label>Language Taught</label>
                <InputBase
                  type="text"
                  id="languageTaught"
                  onChange={(e) => setLanguageTaught(e.target.value)}
                  className="inputField"
                  value={languageTaught}
                />
              </Col>
            </Row>
            <Row>
              <Col className="text-left mt-3 mb-3 mr-3" lg={8}>
                <label>Address</label>
                <InputBase
                  type="text"
                  id="address"
                  onChange={(e) => setAddress(e.target.value)}
                  className="inputField"
                  value={address}
                />
              </Col>
              <Col className="text-left mt-3 mb-3">
                <label>Experience (in Years) </label>
                <div class="input-group mb-3">
                  <InputBase
                    type="text"
                    id="experience"
                    onChange={(e) => setExperience(e.target.value)}
                    className="inputField"
                    inputProps={{ "aria-label": "naked" }}
                    value={experience}
                    style={{ width: "80%" }}
                  />
                  <div class="input-group-append">
                    <span class="" id="basic-addon2">
                      <select
                        id="salutations"
                        name="salutations"
                        className="inputField"
                        style={{
                          maxWidth: "60px",
                          backgroundColor: "#d8d4ee",
                        }}
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                      </select>
                    </span>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="text-left mt-3 mb-3 mr-3">
                <label>Education</label>
                <InputBase
                  label="Education"
                  type="text"
                  id="education"
                  onChange={(e) => setEducation(e.target.value)}
                  className="inputField"
                  value={education}
                />
              </Col>
              <Col className="text-left mt-3 mb-3 mr-3  ">
                <label>Place</label>
                <InputBase
                  type="text"
                  id="place"
                  onChange={(e) => setPlace(e.target.value)}
                  className="inputField"
                  inputProps={{ "aria-label": "naked" }}
                  value={place}
                />
              </Col>
              <Col>
                <Row className="mt-3 ml-1">
                  <Col className="text-left">
                    <label>Subject</label>
                  </Col>
                  <Col className="text-left ">
                    <label>Class</label>
                  </Col>
                </Row>
                <Row
                  style={{
                    backgroundColor: "#f1efff",
                    borderRadius: "4px",
                    height: "136px",
                  }}
                  className="ml-2"
                >
                  <Col className="text-left mt-3 mb-3">
                    <InputBase
                      type="text"
                      id="subject"
                      onChange={(e) => setSubject(e.target.value)}
                      className="inputField"
                      style={{ backgroundColor: "f1efff" }}
                    />
                  </Col>
                  <Col className="text-left mt-3 mb-3">
                    <InputBase
                      type="text"
                      id="grade"
                      onChange={(e) => setGrade(e.target.value)}
                      className="inputField"
                      inputProps={{ "aria-label": "Class" }}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col>
                <Table className="mt-5">
                  <thead>
                    <tr>
                      <th>Institution</th>
                      <th>Year</th>
                    </tr>
                  </thead>
                  {/* <tbody>{loadedTeacher.map(renderTeacher)}</tbody> */}
                  <tbody>
                    <tr>
                      <td>Shree Swaminarayan Gurukul Residential PU College</td>
                      <td>June 2012 -June 2016</td>
                    </tr>
                    <tr>
                      <td>Shree Swaminarayan Gurukul Residential PU College</td>
                      <td>June 2012 -June 2016</td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>
            {addInstituion.map((institution, index) => {
              return (
                <Row key={institution.id}>
                  <Col className="text-left mt-3 mb-3">
                    <label>Institution</label>
                    <InputBase
                      onChange={(e) => {
                        const institution = e.target.value;
                        setAddInstituion((currentValue) =>
                          produce(currentValue, (value) => {
                            value[index].institution = institution;
                          })
                        );
                      }}
                      className="inputField"
                    />
                  </Col>
                  <Col className="text-left mt-3 mb-3">
                    <label>Year</label>
                    <InputBase
                      onChange={(e) => {
                        const year = e.target.value;
                        setAddInstituion((currentValue) =>
                          produce(currentValue, (value) => {
                            value[index].year = year;
                          })
                        );
                      }}
                      className="inputField"
                    />
                  </Col>
                  <Col xs={1} className="my-auto">
                    <img
                      onClick={() => {
                        setAddInstituion((currentInstitution) =>
                          currentInstitution.filter(
                            (currentInstitution) =>
                              currentInstitution.id !== institution.id
                          )
                        );
                      }}
                      src={Delete}
                      alt={Delete}
                      className="mt-4"
                    />
                  </Col>
                </Row>
              );
            })}
            <Row>
              <Col className="text-left mt-3 mb-3">
                <button
                  onClick={() => {
                    setAddInstituion((currentInstitution) => [
                      ...currentInstitution,
                      {
                        id: generate(),
                        institution: "",
                        year: "",
                      },
                    ]);
                  }}
                  className="addInstitution__button border-0"
                >
                  + Add Instituion
                </button>
              </Col>
            </Row>
            <Row>
              <Col className="text-left mt-5 mb-3">
                <label>Write Up</label>
                <TextareaAutosize
                  type="text"
                  id="writeUp"
                  onChange={(e) => setWriteUp(e.target.value)}
                  className="inputField border-0"
                  inputProps={["dense", "none"]}
                  rows="4"
                  value={writeup}
                />
              </Col>
            </Row>
            <hr className="hr mt-4" style={{ height: "1px" }} />
            <Row style={{ marginBottom: "76px" }}>
              <Col className="text-left ">
                <button className="cancel__button border-0 mt-1">Cancel</button>
              </Col>
              <Col className="text-right">
                <button className="save__button border-0 mt-1">Save</button>
              </Col>
            </Row>
          </TabPane>
          <TabPane tab="My Page" key="myPage">
            <TeacherPage />
          </TabPane>
          <TabPane tab="Other" key="other">
            Content of other
          </TabPane>
        </Tabs>
      </div>
    </BaseLayoutWrapper>
  );
};

export default TeacherProfile;
