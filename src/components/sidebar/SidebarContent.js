import React from "react";
import analytics from "../../assests/images/analytics.svg";
import assignment from "../../assests/images/assignment.svg";
import content from "../../assests/images/content-library.svg";
import courses from "../../assests/images/courses.svg";
import daylearning from "../../assests/images/daylearning.svg";
import interaction from "../../assests/images/interaction.svg";
import starred from "../../assests/images/bookmark.svg";
import myStudyCircle from "../../assests/images/study-circle.svg";
import Links from "./Links";
import MaterialTitlePanel from "./MaterialTitlePanel";

const styles = {
  sidebar: {
    width: 220,
    margin: "0 auto"
  },
  sidebarLink: {
    marginLeft: "50px",
    display: "block",
    textDecoration: "none",
  },
};

const SidebarContent = (props) => {
  const style = props.style
    ? { ...styles.sidebar, ...props.style }
    : styles.sidebar;
  const links = [
    { icon: myStudyCircle, mName: "Study Circle", url: "" },
    { icon: content, mName: "Content Library", url: "content" },
    { icon: interaction, mName: "Interaction", url: "interaction" },
    { icon: assignment, mName: "Assignment", url: "assignment" },
    { icon: analytics, mName: "Analytics", url: "analytics" },
    { icon: courses, mName: "Courses", url: "course" },
    { icon: starred, mName: "Bookmark", url: "bookmark" },
    { icon: daylearning, mName: "Day Learning", url: "day-learning" },
  ];
  return (
    <MaterialTitlePanel style={style}>
      <div style={styles.sidebarLink}>
        {links.map((link) => (
          <Links key={link.mName} name={link.mName} to={`/${link.url}`} img={link.icon} />
        ))}
      </div>
    </MaterialTitlePanel>
  );
};

export default SidebarContent;
