import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import DragIcon from "../../../assests/images/dragicon.svg";
import delete1x from "../../../assests/images/delete.png";
import delete2x from "../../../assests/images/delete@2x.png";
import delete3x from "../../../assests/images/delete@3x.png";
import "./TableContent.css";
// import "./ContentTable.css";

let data = [];
data.push(
  {
    name: "Pair of Linear Equations in Two Variables",
    content: "38",
    question: "38",
  },
  {
    name: "Polynomials  ",
    content: "38",
    question: "38",
  },
  {
    name: "Quadratic Equations",
    content: "38",
    question: "38",
  },
  {
    name: "Arithmetic Progressions",
    content: "38",
    question: "38",
  },
  {
    name: "Quadratic Equations",
    content: "38",
    question: "38",
  }
);

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const ContentTable = (props) => {
  const [items, setItems] = useState(data);

  const onDragEnd = (result) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const item = reorder(items, result.source.index, result.destination.index);

    setItems(item);
  };

  // Normally you would want to split things out into separate components.
  // But in this example everything is just done in one place for simplicity
  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <table
              ref={provided.innerRef}
              className="w-100"
              style={{ marginTop: "40px" }}
            >
              <thead>
                <tr>
                  <th></th>
                  <th className="create_table__headings text-initial text-left">
                    Preliminary Concepts
                  </th>
                  <th className="create_table__headings">Contents</th>
                  <th className="create_table__headings">Questions</th>
                  <th className="create_table__headings">Select</th>
                  <th className="create_table__headings">Delete</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, index) => {
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
                              paddingRight: "10px",
                            }}
                          >
                            <span>
                              <img src={DragIcon} alt="drag" />
                            </span>
                          </td>
                          <td className="text-left">
                            <input type="checkbox" className="ml-2 mr-4" />
                            {item.name}
                          </td>
                          <td className="namestyle">{item.content}</td>
                          <td className="authorstyle">{item.question}</td>
                          <td className="authorstyle">
                            <input type="checkbox" />
                          </td>
                          <td className="authorstyle">
                            <img
                              alt="Delete"
                              src={delete1x}
                              srcSet={`${delete2x} 2x, ${delete3x} 3x`}
                            />
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
    </>
  );
};

// Put the thing into the DOM!
export default ContentTable;
