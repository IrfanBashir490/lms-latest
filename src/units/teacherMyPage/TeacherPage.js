import React from "react";
import { InputBase } from "@material-ui/core";
import { Card, CardDeck } from "react-bootstrap";

import send from "../../assests/images/send.png";
import send2x from "../../assests/images/send@2x.png";
import send3x from "../../assests/images/send@3x.png";
import prayRed from "../../assests/images/icons-8-prayRed.png";
import prayRed2x from "../../assests/images/icons-8-prayRed@2x.png";
import prayRed3x from "../../assests/images/icons-8-prayRed@3x.png";
import commentIcon from "../../assests/images/icons-8-commentsTeacher.png";
import commentIcon2x from "../../assests/images/icons-8-commentsTeacher@2x.png";
import commentIcon3x from "../../assests/images/icons-8-commentsTeacher@3x.png";
import view from "../../assests/images/icons-8-visible.png";
import view2x from "../../assests/images/icons-8-visible@2x.png";
import view3x from "../../assests/images/icons-8-visible@3x.png";
import menu from "../../assests/images/icons-8-menu-2.png";
import menu2x from "../../assests/images/icons-8-menu-2@2x.png";
import menu3x from "../../assests/images/icons-8-menu-2@3x.png";
import oval from "../../assests/images/oval.svg";
import "./TeacherPage.css";

const TeacherPage = (props) => {
  return (
    <div className="teacher_page_wrapper">
      <div className="d-flex">
        <div lg={1}>
          <div className="position-relative">
            <img alt="Send" src={oval} />
            <p className="oval">+</p>
          </div>
        </div>
        <div lg={10}>
          <InputBase type="text" className="inputField" />
        </div>
        <div lg={1}>
          <img alt="Add" src={send} srcSet={`${send2x} 2x, ${send3x} 3x`} />
        </div>
      </div>
      <Card style={{ width: "460px" }}>
        <Card.Img
          variant="top"
          src="https://images.app.goo.gl/eQkzjM6i8eRXiMxt8"
        />
        <Card.Body>
          <Card.Title>
            <div className="d-flex">
              <p>18 Aug 2019 - 12:34 AM</p>
              <div>
                <img
                  width={24}
                  height={24}
                  className="ml-2 mt-3"
                  src={menu}
                  srcSet={`${menu2x} 2x, ${menu3x} 3x`}
                  alt="Contribution"
                />
              </div>
            </div>
          </Card.Title>
          <Card.Text>
            Perungalathur station, near Chennai, came at the bottom of the list
            with a total score of 258.50. Other stations at the bottom of the
            list were Delhi Sadar Bazar, Guduvancheri, Singaperumalkoil (both
            near Chennai) and Ottappalam (Kerala). Expect for Delhi Sadar Bazar,
            the other four come under Southern Railway.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <div className="d-flex">
            <div className="d-flex">
              <img
                width={24}
                height={24}
                className="ml-2 mt-3"
                src={prayRed}
                srcSet={`${prayRed2x} 2x, ${prayRed3x} 3x`}
                alt="Contribution"
              />
              <p>Thanks</p>
              <div className="number">
                <p>5</p>
              </div>
            </div>
            <div className="d-flex">
              <img
                width={24}
                height={24}
                className="ml-2 mt-3"
                src={commentIcon}
                srcSet={`${commentIcon2x} 2x, ${commentIcon3x} 3x`}
                alt="Contribution"
              />
              <p>Comments</p>
              <div className="number">
                <p>5</p>
              </div>
            </div>
            |
            <div className="d-flex">
              <img
                width={24}
                height={24}
                className="ml-2 mt-3"
                src={view}
                srcSet={`${view2x} 2x, ${view3x} 3x`}
                alt="Contribution"
              />
              <p>View</p>
              <div className="number">
                <p>5</p>
              </div>
            </div>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default TeacherPage;
