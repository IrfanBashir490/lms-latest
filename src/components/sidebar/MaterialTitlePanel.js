import React from "react";

const styles = {
  root: {
    fontWeight: 300,
  },
};

const MaterialTitlePanel = (props) => {
  const rootStyle = props.style
    ? { ...styles.root, ...props.style }
    : styles.root;

  return (
    <div style={rootStyle}>
      <div style={styles.header}>{props.title}</div>
      {props.children}
    </div>
  );
};

export default MaterialTitlePanel;
