import React from "react";
import { Link } from "react-router-dom";
import Radium from "radium";

const styles = {
  sidebarNavLink: {
    display: "block",
    padding: "16px 0px",
    textDecoration: "none",
  },
  sidebarLink: {
    height: "20px",
    fontSize: "16px",
    fontWeight: "600",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    color: "#4332a6",
    textDecoration: "none",
    display: "flex",
    marginTop: "20px",
    marginRight: "20px",
  },
  sidebarIcons: {
    width: "25px",
    height: "25px"
  },
  sidebarLinkName: {
    ":hover": {
      color: "#f25244"
    },
  },
  gap: {
    width: "13px"
  }
};

const Links = (props) => {
  return (
    <Link to={props.to} style={styles.sidebarNavLink}>
      <div style={styles.sidebarLink}>
        <img src={props.img} alt={props.name} style={styles.sidebarIcons} />
        <div style={styles.gap}></div>
        <div style={styles.sidebarLinkName}>{props.name}</div>
      </div>
    </Link>
  );
};

export default Radium(Links);
