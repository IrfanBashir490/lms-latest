import React from "react";
import BaseLayoutWrapper from '../../components/baselayout/BaseLayout';
import DashChat from './dash-chat/DashChat';
import MyStudyCircleDash from "./dash/MyStudyCircleDash";
import MyStudyCircleDashInfo from "./dash/MyStudyCircleDashInfo";

const StudyCircle = () => {
  return (
    <BaseLayoutWrapper>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ display: "flex", flexDirection: "column", marginLeft: "-15px" }}>
          <MyStudyCircleDash />
          <MyStudyCircleDashInfo />
        </div>
        <div style={{ display: "flex", flexDirection: "column", marginLeft: "15px" }}>
          <DashChat />
        </div>
      </div>
    </BaseLayoutWrapper>
  );
};

export default StudyCircle;
