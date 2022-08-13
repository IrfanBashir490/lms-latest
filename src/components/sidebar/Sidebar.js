import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment, useEffect, useState } from "react";
import Sidebar from "react-sidebar";
import MaterialTitlePanel from "./MaterialTitlePanel";
import SidebarContent from "./SidebarContent";

const styles = {
  contentHeaderMenuLink: {
    textDecoration: "none",
    color: "black",
    padding: 8,
  },
};

const mql = window.matchMedia(`(min-width: 800px)`);
const SideBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [sidebarDocked, setSidebarDocked] = useState(mql.matches);

  useEffect(() => {
    mql.addListener(mediaQueryChanged);
  }, []);

  const onSetSidebarOpen = () => {
    console.log("clicked");
    setIsOpen(!isOpen);
  };

  console.log(isOpen);

  const toggleOpen = (ev) => {
    setIsOpen((preIsOpen) => !preIsOpen);
  };

  const mediaQueryChanged = () => {
    setSidebarDocked(mql.matches);
    setIsOpen(false);
  };

  const contentHeader = (
    <span>
      {!sidebarDocked && (
        <a onClick={toggleOpen} href="#" style={styles.contentHeaderMenuLink}>
          <FontAwesomeIcon icon={faBars} />
        </a>
      )}
    </span>
  );
  return (
    <Fragment>
      <Sidebar
        sidebar={<SidebarContent />}
        open={isOpen}
        docked={sidebarDocked}
        onSetOpen={onSetSidebarOpen}
      >
        <MaterialTitlePanel title={contentHeader}></MaterialTitlePanel>
      </Sidebar>
    </Fragment>
  );
};

export default SideBar;
