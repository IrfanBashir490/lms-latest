import React, { useEffect, useState, Fragment } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import scircle from "../../../assests/images/circle.png";
import scircle2x from "../../../assests/images/circle@2x.png";
import scircle3x from "../../../assests/images/circle@3x.png";
import DragIcon from "../../../assests/images/dragicon.svg";
import pray from "../../../assests/images/icons-8-pray.png";
import pray2x from "../../../assests/images/icons-8-pray@2x.png";
import pray3x from "../../../assests/images/icons-8-pray@3x.png";
import visible from "../../../assests/images/icons-8-visible.png";
import visible2x from "../../../assests/images/icons-8-visible@2x.png";
import visible3x from "../../../assests/images/icons-8-visible@3x.png";
import institution from "../../../assests/images/institution.png";
import institution2x from "../../../assests/images/institution@2x.png";
import institution3x from "../../../assests/images/institution@3x.png";
import iprivate from "../../../assests/images/private.png";
import private2x from "../../../assests/images/private@2x.png";
import private3x from "../../../assests/images/private@3x.png";
import RightIcon from "../../../assests/images/right.svg";
import WrongIcon from "../../../assests/images/wrong.svg";
import { ContentService } from "../../../services/content-service";
import "../ContentMain.css";
import { Link } from "react-router-dom";

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

const ContentTable = (props) => {

  const [contents, setContents] = useState([]);

  useEffect(() => {
    if (props.type === 'lib')
      ContentService.getUserContent(1, 10).then((res) => setContents(res))
    else
      ContentService.getAll(1, 10).then((res) => setContents(res))
  }, [])

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const draggedcontents = reorder(
      contents,
      result.source.index,
      result.destination.index
    );
    setContents(draggedcontents)
  }

  return (
    <div>
      <p className="fontadjust">
        {props.type === "lib" ? (
          <span className="name_style_lib">
            Remembering: 40 more in Repository
          </span>
        ) : (
            <span className="name_style_repo">
              Remembering: In use (23) Not in use (10)
            </span>
          )}
      </p>
      <br />

      <div style={{ display: "flex" }}>
        <p className="recordstyle">{contents.length} Records</p>
        {props.type === "lib" ? (
          <Fragment>
            <Link to={"/content/upload"} style={{ marginLeft: "370px" }}><p type="button" className="btn_lib_style">+Add Content</p></Link>
            <Link to={"/content/details"}><p type="button" className="btn_lib_style">+Create Module</p></Link>
            <p className="link_style_lib">Remove from my library</p>
          </Fragment>
        ) : (
            <p className="link_style_repo">Use in My Library (?)</p>
          )}
      </div>
      <br />
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <table ref={provided.innerRef} style={{ width: "1070px" }}>
              <thead>
                <tr style={{ backgroundColor: "#fff" }}>
                  <th></th>
                  <th className="checkboxstyle">
                    <input type="checkbox" />
                  </th>
                  <th className="indexhead namestyle">Display Name</th>
                  <th className="indexhead authorstyle">Author</th>
                  <th className="indexhead durationstyle">Duration (min.)</th>
                  <th className="indexhead iconstyle">Curated</th>
                  <th className="indexhead iconstyle">Shared</th>
                  <th className="indexhead iconstyle">
                    <img
                      src={visible}
                      srcSet={`${visible2x} 2x, ${visible3x} 3x`}
                      alt="visible" />
                  </th>
                  <th className="indexhead iconstyle">
                    <img
                      src={pray}
                      srcSet={`${pray2x} 2x, ${pray3x} 3x`}
                      alt="pray" />
                  </th>
                  <th className="indexhead iconstyle circlestyle">
                    <img
                      src={scircle}
                      srcSet={`${scircle2x} 2x, ${scircle3x} 3x`}
                      alt="circle" />
                  </th>
                </tr>
              </thead>
              <tbody>
                {contents.map((item, index) => {
                  let icon;
                  let shared;
                  if (item.curated === false) {
                    icon = <img src={WrongIcon} alt="false" />;
                  } else {
                    icon = <img src={RightIcon} alt="right" />;
                  }
                  if (item.access === "private") {
                    shared = <img
                      src={iprivate}
                      srcSet={`${private2x} 2x, ${private3x} 3x`}
                      alt="private" />;
                  } else {
                    shared = <img
                      src={institution}
                      srcSet={`${institution2x} 2x, ${institution3x} 3x`}
                      alt="institution" />;
                  }

                  return (
                    <Draggable
                      key={item.id}
                      draggableId={item.id}
                      index={index}
                    >
                      {(provided) => (
                        <tr
                          className="tablebg"
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <td
                            style={{
                              cursor: "move",
                              backgroundColor: "white",
                            }}
                            className=""
                          >
                            <span>
                              <img src={DragIcon} alt="drag" />
                            </span>
                          </td>
                          <td className="checkboxstyle">
                            <input type="checkbox" />
                          </td>
                          <td className="namestyle">{item.dName}</td>
                          <td className="authorstyle">{item.uid.fName + " " + item.uid.lName}</td>
                          <td className="durationstyle">{item.duration}</td>
                          <td className="iconstyle">{icon}</td>
                          <td className="iconstyle">{shared}</td>
                          <td className="iconstyle">{item.views}</td>
                          <td className="iconstyle">{item.likes}</td>
                          <td className="iconstyle circlestyle">
                            {parseInt(item.views) % 10}
                          </td>
                        </tr>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </tbody>
            </table>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default ContentTable;
