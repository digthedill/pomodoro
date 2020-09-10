import React, { useState, useEffect, useRef } from "react";
import "../App.css";

function Pomodoro() {
  const [breakCount, setBreakCount] = useState(5);
  const [sessionCount, setSessionCount] = useState(25);
  const [timer, setTimer] = useState(1500);
  const [timerOn, setTimerOn] = useState(false);
  const [mode, setMode] = useState("session");
  const [breakTimer, setBreakTimer] = useState(breakCount * 60);
  const audioRef = useRef(null);

  const BREAK_AUDIO =
    "https://sampleswap.org/samples-ghost/VOCALS%20and%20SPOKEN%20WORD/MALE%20MISC%20and%20SPOKEN%20WORD/80[kb]ah_yeah!.aif.mp3";
  const SESSION_AUDIO =
    "https://sampleswap.org/samples-ghost/VOCALS%20and%20SPOKEN%20WORD/African%20Vocals%20Sung/225[kb]chorus-hi-ya-heh.wav.mp3";

  const breakIncrement = () => {
    setBreakCount((p) => (p < 60 ? p + 1 : p));
    setBreakTimer((p) => (p < 3600 ? p - 60 : p));
  };

  const breakDecrement = () => {
    setBreakCount((p) => (p > 1 ? p - 1 : p));
    setBreakTimer((p) => (p > 60 ? p - 60 : p));
  };

  const sessionIncrement = () => {
    setSessionCount((p) => (p < 60 ? p + 1 : p));
    setTimer((p) => (p < 3600 ? p + 60 : p));
  };
  const sessionDecrement = () => {
    setSessionCount((p) => (p > 1 ? p - 1 : p));
    setTimer((p) => (p > 60 ? p - 60 : p));
  };

  //setup function to take either break or session
  const clockify = (type) => {
    let minutes = Math.floor(type / 60);
    let seconds = type - minutes * 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return minutes + ":" + seconds;
  };

  console.log("session:", timer, "break:", breakTimer, mode);

  const reset = (e) => {
    e.preventDefault();
    setMode("session");
    setTimerOn(false);
    setBreakCount(5);
    setSessionCount(25);
    setTimer(1500);
    setBreakTimer(300);
  };

  //at zero switch between session timer and break timer
  //at zero ring bell

  useEffect(() => {
    if (timerOn && timer > 0 && mode === "session") {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else if (timerOn && timer === 0 && breakTimer > 0) {
      startBreak();
    }
  }, [timerOn, timer]);

  const startBreak = () => {
    setMode("break");
    console.log("break time!");
  };

  const startSession = () => {
    setMode("session");
    setTimer(sessionCount * 60);
    setBreakTimer(breakCount * 60);
    console.log("session time!");
  };

  useEffect(() => {
    if (timerOn && mode === "break" && breakTimer > 0) {
      const interval = setInterval(() => {
        setBreakTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else if (breakTimer === 0 && timerOn) {
      startSession();
    }
  }, [mode, timerOn, breakTimer]);

  useEffect(() => {
    if (breakTimer === 0 || timer === 0) {
      audioRef.current.play();
    }
  }, [setMode, mode]);

  return (
    <div className="main">
      <h1
        id="main-head"
        className={mode === "session" ? "main-head-session" : "main-head-break"}
      >
        P O M O D O R O _ C L K
      </h1>
      <div className="counter-zone row">
        <div className="break col">
          <div className="row">
            <div className="col-3">
              <h1 id="break-length">{breakCount}</h1>
            </div>
            <div className="col-3">
              {/* grab some charming icons for the up and down */}
              <button
                className="btn btn-default"
                id="break-increment"
                onClick={breakIncrement}
              >
                Up
              </button>
            </div>
            <div className="col-3">
              <button
                className="btn btn-default"
                id="break-decrement"
                onClick={breakDecrement}
              >
                Down
              </button>
            </div>
          </div>
          <h3 id="break-label">Break Length</h3>
        </div>
        <div className="session col">
          <div className="row">
            <div className="col-3">
              <h1 id="session-length">{sessionCount}</h1>
            </div>
            <div className="col-3">
              {/* grab some charming icons for the up and down */}
              <button
                className="btn btn-default"
                id="session-increment"
                onClick={sessionIncrement}
              >
                Up
              </button>
            </div>
            <div className="col-3">
              <button
                className="btn btn-default"
                id="session-decrement"
                onClick={sessionDecrement}
              >
                Down
              </button>
            </div>
          </div>
          <h3 id="session-label">Session Length</h3>
        </div>
      </div>

      <div className="timer-zone">
        <h3
          id="timer-label"
          className={
            mode === "session" ? "timer-label-session" : "timer-label-break"
          }
        >
          {mode === "session" ? "S e s s i o n" : "B R E A K  T I M E !!!!!"}
        </h3>
        <h1 id="time-left">
          {clockify(mode === "session" ? timer : breakTimer)}
        </h1>
        <button
          className="btn btn-default"
          id="start_stop"
          onClick={() => setTimerOn((p) => !p)}
        >
          {timerOn ? "stop" : "start"}
        </button>
        <button className="btn btn-default" id="reset" onClick={reset}>
          reset
        </button>
        <audio
          id="beep"
          src={mode === "session" ? SESSION_AUDIO : BREAK_AUDIO}
          ref={audioRef}
        >
          audio for you
        </audio>
      </div>
    </div>
  );
}

export default Pomodoro;
