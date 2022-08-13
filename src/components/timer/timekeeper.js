import React, { useEffect, useState } from 'react';

const Timer = (props) => {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);

    const start = () => {
        if (!isActive && props.autostart)
            setIsActive(true);
    }

    const restart = () => {
        if (seconds === (Number.parseInt(props.timeout) * 60)) {
            setSeconds(0);
            props.onTimeout();
        }
    }

    useEffect(() => {
        let interval = null;
        start();
        if (isActive) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds + 1);
            }, 1000);
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }
        restart();
        localStorage.setItem("jwt-timer", seconds);
        return () => clearInterval(interval);
    }, [isActive, seconds]);

    return (
        <>
        </>
    );
};

export default Timer;