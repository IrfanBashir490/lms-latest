import DateFnsUtils from "@date-io/date-fns";
import { Checkbox, FormControlLabel } from "@material-ui/core";
import {
  KeyboardDatePicker,
  KeyboardTimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import React, { useEffect, useState } from "react";
import { Dropdown, Modal } from "react-bootstrap";
import settings from "../../../assests/images/icons-8-settings.png";
import isettings from "../../../assests/images/icons-8-settings.svg";
import settings2x from "../../../assests/images/icons-8-settings@2x.png";
import settings3x from "../../../assests/images/icons-8-settings@3x.png";
import ImageUpload from "../../../components/imageUpload/imageUpload";
import "./AdvancedModal.css";

const AdvancedModal = (props) => {
  const langs = [{ name: "English" }, { name: "Kannada" }, { name: "Hindi" }];

  /************************************** */
  // STATES
  /************************************* */
  const [show, setShow] = useState(false);
  useEffect(() => {}, []);

  const [selectedDate, setSelectedDate] = useState(
    new Date("2020-07-15T21:11:54")
  );

  /************************************** */
  // EVENTS HANDLER
  /************************************* */
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSave = () => {};

  const handleAttachFile = () => {};

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <div>
        <button className="submitbtnstyle border-0" onClick={handleShow}>
          <img
            src={settings}
            srcSet={`${settings2x} 2x, ${settings3x} 3x`}
            style={{ marginRight: "10px" }}
            alt="settings"
          />
          Advance
        </button>
        <Modal
          show={show}
          size="lg"
          dialogClassName="adv_modal_view"
          onHide={handleClose}
        >
          <Modal.Header closeButton>
            <Modal.Title className="title">
              <img
                width={20}
                height={20}
                src={isettings}
                style={{ marginRight: "10px" }}
                alt="settings"
              />
              Advance
            </Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ padding: "0" }}>
            <div className="adv_modal_row adv_modal_offset">
              <div className="adv_modal_col adv_section">
                <span className="title_head">Visible from</span>
                <div className="adv_modal_row">
                  <div className="adv_modal_col">
                    <span className="adv_label">Date</span>
                    <KeyboardDatePicker
                      margin="normal"
                      style={{ width: "150px" }}
                      id="date-picker-dialog"
                      format="dd/MM/yyyy"
                      value={selectedDate}
                      onChange={handleDateChange}
                      KeyboardButtonProps={{
                        "aria-label": "change date",
                      }}
                    />
                  </div>
                  <div
                    className="adv_modal_col"
                    style={{ width: "10px" }}
                  ></div>
                  <div className="adv_modal_col">
                    <span className="adv_label">Time</span>
                    <KeyboardTimePicker
                      margin="normal"
                      style={{ width: "150px" }}
                      id="time-picker"
                      format="HH:mm"
                      value={selectedDate}
                      onChange={handleDateChange}
                      KeyboardButtonProps={{
                        "aria-label": "change time",
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="adv_modal_col adv_section">
                <span className="title_head">Hide on</span>
                <div className="adv_modal_row">
                  <div className="adv_modal_col">
                    <span className="adv_label">Date</span>
                    <KeyboardDatePicker
                      margin="normal"
                      style={{ width: "150px" }}
                      id="date-picker-dialog"
                      format="dd/MM/yyyy"
                      value={selectedDate}
                      onChange={handleDateChange}
                      KeyboardButtonProps={{
                        "aria-label": "change date",
                      }}
                    />
                  </div>
                  <div
                    className="adv_modal_col"
                    style={{ width: "10px" }}
                  ></div>
                  <div className="adv_modal_col">
                    <span className="adv_label">Time</span>
                    <KeyboardTimePicker
                      margin="normal"
                      style={{ width: "150px" }}
                      id="time-picker"
                      format="HH:mm"
                      value={selectedDate}
                      onChange={handleDateChange}
                      KeyboardButtonProps={{
                        "aria-label": "change time",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="adv_modal_row adv_modal_offset">
              <div className="adv_modal_col adv_section">
                <span className="title_head">Files</span>
                <span className="adv_label">Timeline Tags</span>
                <input
                  type="file"
                  multiple
                  className="adv_file_input"
                  onChange={handleAttachFile}
                />
              </div>
              <div className="adv_modal_col adv_section">
                <span className="title_head"></span>
                <span className="adv_label">Jump To</span>
                <input
                  type="file"
                  multiple
                  className="adv_file_input"
                  onChange={handleAttachFile}
                />
              </div>
            </div>
            <div className="adv_modal_row adv_modal_offset">
              <div className="adv_modal_col adv_section">
                <span className="adv_label">
                  Sub title language (SRT files)
                </span>
                <div className="adv_modal_row adv_langs_sel">
                  <Dropdown>
                    <Dropdown.Toggle className="adv_langs_dropdown">
                      Select Language
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="adv_dropdown_item">
                      {langs.map((item, index) => (
                        <Dropdown.Item
                          key={index}
                          className="adv_dropdown_item"
                        >
                          {item.name}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                  <input
                    type="file"
                    multiple
                    className="adv_file_input"
                    onChange={handleAttachFile}
                  />
                </div>
              </div>
            </div>
            <div className="adv_modal_row adv_modal_offset">
              <div className="adv_modal_col adv_section">
                <div className="adv_modal_row adv_check_disable">
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="disable"
                        style={{
                          color: "#4332a6",
                        }}
                      />
                    }
                  />
                  <span>Disable Fast Forward</span>
                </div>
              </div>
              <div className="adv_modal_col adv_section">
                <span className="adv_label">Custom Thumbnail</span>
                <ImageUpload style={{ padding: "33px", margin: "10px" }} />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer style={{ padding: "0" }}>
            <button className="adv_modal_cancel__button" onClick={handleClose}>
              Cancel
            </button>
            <button
              className="adv_modal_save__button"
              style={{ marginRight: "50px" }}
              onClick={handleSave}
            >
              Save
            </button>
          </Modal.Footer>
        </Modal>
      </div>
    </MuiPickersUtilsProvider>
  );
};
export default AdvancedModal;
