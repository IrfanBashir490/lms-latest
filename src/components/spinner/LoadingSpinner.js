import React from "react";
import "./LoadingSpinner.css";

const Spinner = (props) => {
  return (
    <div>
      <div class="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Spinner;
