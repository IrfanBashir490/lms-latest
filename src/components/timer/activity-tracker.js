import React, { Fragment, useRef } from "react";
import IdleTimer from 'react-idle-timer'
import { UserService } from "../../services/user-service";

const ActivityTracker = (props) => {   

    const idleTimer = useRef();

    const _onAction = (e) => {
        localStorage.setItem("idle", idleTimer.current.isIdle());
    }

    const _onActive = (e) => {
        UserService.online();
        localStorage.setItem("idle", idleTimer.current.isIdle());
    }

    const _onIdle = (e) => {
        UserService.idle();
        localStorage.setItem("idle", idleTimer.current.isIdle());
    }

    return (
        <Fragment>
            <IdleTimer
                ref={idleTimer}
                element={document}
                onActive={_onActive}
                onIdle={_onIdle}
                onAction={_onAction}
                debounce={250}
                timeout={1000 * 30} />
                {/* Timeout every 30s */}
        </Fragment>
    );
}

export default ActivityTracker;