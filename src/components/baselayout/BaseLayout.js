import { createMuiTheme, InputBase, ThemeProvider } from "@material-ui/core";
import React, { Fragment, useEffect, useState } from "react";
import searchIcon from "../../assests/images/icons-8-search-copy@2x.png";
import { useAppContextState } from "../../services/context";
import MainHeader from "../header/MainHeader";
import SidebarContent from "../sidebar/SidebarContent";
import "./BaseLayout.css";

const BaseLayoutWrapper = (props) => {

  const [appglobal, setAppGlobal] = useAppContextState();
  const [pagetitle, setPageTitle] = useState();

  useEffect(() => {
    setPageTitle(appglobal.pagetitle)
  })

  const theme = createMuiTheme({
    overrides: {
      MuiInputBase: {
        input: {
          width: "400px",
          fontSize: "14px",
          fontStyle: "italic",
          fontStretch: "normal",
          lineHeight: "normal",
          letterSpacing: "normal",
          color: "#fff",
          "&::placeholder": {
            fontSize: "14px",
            fontStretch: "normal",
            lineHeight: "normal",
            letterSpacing: "normal",
            fontWeight: "600",
            fontStyle: "italic",
            color: "#695cb1"
          }
        },
      },
    },
  });

  const searchAny = (value) => {
    console.log(value);
  }

  return (
    <Fragment>
      <div className="grid-container">
        <div className="Header">
          <MainHeader />
        </div>
        <div className="SideMenu">
          <SidebarContent />
        </div>
        <div className="Bg">
          <div className="BaseContent">
            <div className="mainbar">
              <div className="searchbar">
                <img src={searchIcon} alt="search icon" className="search-icon" />
                <ThemeProvider theme={theme}>
                  <InputBase
                    type="text"
                    onChange={(e) => searchAny(e.target.value)}
                    placeholder="Student, Course, Study Circle..."
                  />
                </ThemeProvider>
              </div>
              <div className="pagetitle">{pagetitle}</div>
            </div>
            {props.children}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default BaseLayoutWrapper;
