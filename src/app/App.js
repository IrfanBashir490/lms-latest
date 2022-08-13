import React, { useEffect } from "react";
import socketIOClient from "socket.io-client";
import ActivityTracker from "../components/timer/activity-tracker";
import Timer from "../components/timer/timekeeper";
import { useAppContextState } from "../services/context";
import { UserService } from "../services/user-service";
import "./App.css";
import Routes from "./Routes";

const LIVE_CHATENDPOINT = "http://lms-api.ap-south-1.elasticbeanstalk.com:5001";

const App = () => {

  const [appglobal, setAppGlobal] = useAppContextState();
  appglobal.refsocket = socketIOClient(LIVE_CHATENDPOINT);

  useEffect(() => {
    const socket = appglobal.refsocket
    UserService.currentUser().then((cuser) => {
      if (cuser) {
        appglobal.user = cuser
        console.log("User reactive : " + appglobal.user.id);

        socket.emit('create-room', appglobal.user.id);

        socket.on('user-connected', data => {
          console.log('Connected : ' + data);
        });
        
      }
    });
    UserService.refreshToken();
  }, []);

  return (
    <div className="App">
      <Timer
        timeout="30"
        autostart="true"
        onTimeout={() => UserService.refreshToken()}
      />
      <Routes></Routes>
      <ActivityTracker />
    </div>
  );
};

export default App;
